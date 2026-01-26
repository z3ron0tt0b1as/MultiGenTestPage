export async function handler(request: Request) {
  if (request.method !== "POST") {
    return new Response(
      `<!DOCTYPE html><html lang="en"><head><title>405 Method Not Allowed</title><meta name="viewport" content="width=device-width,initial-scale=1"><style>
        body { min-height:100vh; margin:0; display:flex; align-items:center; justify-content:center; background:linear-gradient(120deg,#1a0022 0%,#ff0055 100%); font-family:'Montserrat',Arial,sans-serif; }
        .container { max-width:480px; width:100%; background:rgba(20,10,30,0.85); border-radius:2.5rem; box-shadow:0 0 60px #ff0055cc,0 0 0 10px #ff005522; padding:3.5rem 2.2rem; display:flex; flex-direction:column; align-items:center; border:2px solid #ff0055aa; }
        .headline { font-size:2.5rem; font-weight:900; text-align:center; margin-bottom:1.2rem; background:linear-gradient(90deg,#ff0055,#b86fff,#00eaff); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; color:transparent; }
        .code { font-size:3.5rem; font-weight:900; margin-bottom:0.5rem; background:linear-gradient(90deg,#ff0055,#00eaff); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; color:transparent; }
        .desc { color:#fff; font-size:1.15rem; text-align:center; margin-bottom:1.5rem; opacity:0.85; }
        .btn { margin-top:1.2rem; padding:0.8rem 2.2rem; border-radius:2rem; background:linear-gradient(90deg,#ff0055,#b86fff,#00eaff); color:#fff; font-weight:700; font-size:1.1rem; border:none; box-shadow:0 0 16px #ff0055; cursor:pointer; transition:background 0.2s,transform 0.2s; text-decoration:none; display:inline-block; }
        .btn:hover { background:linear-gradient(90deg,#00eaff,#b86fff,#ff0055); transform:scale(1.05); }
      </style></head><body><div class="container"><div class="code">405</div><div class="headline">Method Not Allowed</div><div class="desc">This endpoint only accepts <b>POST</b> requests.<br>Direct access is not allowed.</div><a href="/" class="btn">Go Home</a></div></body></html>`,
      { status: 405, headers: { "Content-Type": "text/html" } }
    );
  }
}
// No GET handler needed; error.tsx will handle errors
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashPassword, createToken } from "@/lib/auth";

export const dynamic = "force-dynamic";

// --- Simple in-memory rate limiter (per IP) ---
const rateLimitMap = new Map();
const RATE_LIMIT = 10; // max requests
const RATE_WINDOW = 60 * 1000; // 1 minute

function isRateLimited(ip: string) {
  const now = Date.now();
  let entry = rateLimitMap.get(ip);
  if (!entry) entry = { count: 0, last: now };
  if (now - entry.last > RATE_WINDOW) entry = { count: 0, last: now };
  entry.count++;
  entry.last = now;
  rateLimitMap.set(ip, entry);
  return entry.count > RATE_LIMIT;
}

export async function POST(request: Request) {
  // --- Anti-abuse: Rate limit ---
  const ip = request.headers.get("x-forwarded-for") || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  // (Removed X-APP-KEY header requirement)

  // --- Honeypot field ---
  const body = await request.json().catch(() => null);
  if (body && typeof body.website === "string" && body.website.length > 0) {
    return NextResponse.json({ error: "Bot detected" }, { status: 400 });
  }

  // Check if registration is enabled
  if (process.env.REGRISTRATION_ENABLED === "false") {
    return NextResponse.json(
      { error: "Registration is currently disabled. Please contact our Support Team." },
      { status: 403 }
    );
  }
  try {
    const { email, password, name } = body || {};

    console.log("[Register] Received registration request for:", email);

    // Validate input
    if (!email || !password) {
      console.log("[Register] Missing email or password");
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Check if user already exists
    console.log("[Register] Checking if user exists...");
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      console.log("[Register] User already exists:", email);
      return NextResponse.json(
        { error: "An account with that email already exists." },
        { status: 409 }
      );
    }

    // Hash password
    console.log("[Register] Hashing password...");
    const passwordHash = await hashPassword(password);

    // Create user
    console.log("[Register] Creating user in database...");
    const user = await prisma.user.create({
      data: {
        email,
        passwordHash,
        name: name || null,
      },
    });

    console.log("[Register] User created successfully:", user.id);

    // Create token
    const token = await createToken({ userId: user.id, email: user.email });

    return NextResponse.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        tokensRemaining: user.tokensRemaining,
      },
      token,
    });
  } catch (error) {
    console.error("[Register] Registration error:", error);
    console.error("[Register] Error details:", {
      name: error instanceof Error ? error.name : "Unknown",
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });
    return NextResponse.json(
      { error: "Internal server error", details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
