import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";

export const dynamic = "force-dynamic";

// Mock notifications - in a real app, these would come from a database
const generateNotifications = (userId: string) => [
  {
    id: "1",
    type: "success",
    title: "Generation Complete",
    message: "Successfully generated 5 new accounts",
    time: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 mins ago
    read: false,
  },
  {
    id: "2", 
    type: "info",
    title: "New Feature Available",
    message: "API v3 is now available with improved rate limits",
    time: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
    read: false,
  },
  {
    id: "3",
    type: "warning",
    title: "Token Balance Low",
    message: "You have less than 100 tokens remaining",
    time: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
    read: true,
  },
  {
    id: "4",
    type: "success",
    title: "Welcome to MultiGen!",
    message: "Your account has been created successfully",
    time: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(), // 1 week ago
    read: true,
  },
];

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const payload = await verifyToken(token);
    if (!payload || !payload.userId) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    const notifications = generateNotifications(payload.userId as string);
    const unreadCount = notifications.filter(n => !n.read).length;

    return NextResponse.json({
      notifications,
      unreadCount,
    });
  } catch (error) {
    console.error("Notifications API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
