import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

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

    const userId = payload.userId as string;

    // Fetch user data
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
        tokensRemaining: true,
        subscriptionTier: true,
        totalGenerated: true,
        createdAt: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Fetch recent accounts
    const accounts = await prisma.generatedAccount.findMany({
      where: { userId },
      include: { platform: true },
      orderBy: { createdAt: "desc" },
      take: 10,
    });

    // Fetch today's generation count
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const todayCount = await prisma.generatedAccount.count({
      where: {
        userId,
        createdAt: { gte: today },
      },
    });

    // Fetch generation logs for chart (last 12 hours)
    const twelveHoursAgo = new Date(Date.now() - 12 * 60 * 60 * 1000);
    const logs = await prisma.generationLog.findMany({
      where: {
        userId,
        createdAt: { gte: twelveHoursAgo },
      },
      orderBy: { createdAt: "asc" },
    });

    // Aggregate logs into hourly buckets
    const chartData = Array(12).fill(0);
    logs.forEach(log => {
      const hourIndex = Math.floor((Date.now() - log.createdAt.getTime()) / (60 * 60 * 1000));
      if (hourIndex >= 0 && hourIndex < 12) {
        chartData[11 - hourIndex] += log.success;
      }
    });

    // Fetch API keys count
    const apiKeysCount = await prisma.apiKey.count({
      where: { userId },
    });

    // Calculate success rate from logs
    const allLogs = await prisma.generationLog.aggregate({
      where: { userId },
      _sum: { success: true, failed: true },
    });
    
    const totalSuccess = allLogs._sum.success || 0;
    const totalFailed = allLogs._sum.failed || 0;
    const successRate = totalSuccess + totalFailed > 0 
      ? ((totalSuccess / (totalSuccess + totalFailed)) * 100).toFixed(1)
      : "100.0";

    return NextResponse.json({
      user,
      stats: {
        totalAccounts: user.totalGenerated,
        accountsToday: todayCount,
        tokensRemaining: user.tokensRemaining,
        successRate: parseFloat(successRate),
        apiKeysCount,
      },
      accounts: accounts.map(acc => ({
        id: acc.id,
        username: acc.username || acc.email.split("@")[0],
        email: acc.email,
        password: acc.password,
        platform: acc.platform.displayName,
        platformIcon: acc.platform.icon,
        status: acc.status,
        createdAt: acc.createdAt,
      })),
      chartData,
    });
  } catch (error) {
    console.error("Dashboard API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
