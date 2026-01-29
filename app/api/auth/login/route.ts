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
import { verifyPassword, createToken } from "@/lib/auth";

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
  // --- Only require anti-abuse in production ---
  const isProd = process.env.NODE_ENV === "production";

  // --- Anti-abuse: Rate limit (still applies) ---
  const ip = request.headers.get("x-forwarded-for") || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  // --- Only require custom header in production ---
  if (isProd) {
    const appKey = request.headers.get("x-app-key");
    if (appKey !== process.env.APP_SECRET_KEY) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  // --- Parse body once ---
  const body = await request.json().catch(() => null);
  // --- Anti-abuse: Honeypot field ---
  if (body && typeof body.website === "string" && body.website.length > 0) {
    return NextResponse.json({ error: "Bot detected" }, { status: 400 });
  }

  // Check if login is enabled
  if (process.env.LOGIN_ENABLED === "false") {
    return NextResponse.json(
      { error: "Login is currently disabled. Please contact our Support Team." },
      { status: 403 }
    );
  }
  try {
    const { email, password } = body || {};

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Verify password
    const isValidPassword = await verifyPassword(password, user.passwordHash);

    if (!isValidPassword) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Create token
    const token = await createToken({ userId: user.id, email: user.email });

    // Set httpOnly cookie
    const response = NextResponse.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        tokensRemaining: user.tokensRemaining,
      },
      token,
    });
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
