"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, Clock, Star, Sparkles, Gamepad2, LogOut, User,
  Download, Zap, ChevronRight, Bell, ChevronDown,
  Shield, Activity, TrendingUp, Copy, Folder, MoreHorizontal,
  Crown, Plus, Settings, Grid3X3, List, Eye, EyeOff,
  RefreshCw, ExternalLink, Check, AlertCircle, Globe,
  Terminal, Key, CreditCard, HelpCircle, Moon, Command,
  Wallet, ArrowUpRight, ArrowDownRight, X, Info, AlertTriangle,
  CheckCircle, Coins, BarChart3, PieChart, Calendar, Filter,
  Bookmark, Trash2, RotateCcw, Share2, Lock, Database
} from "lucide-react";
import useSWR from "swr";

// Fetcher for SWR
const fetcher = (url: string) => fetch(url).then(res => {
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
});

// Time ago formatter
function timeAgo(date: string | Date) {
  const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

// Stat Card Component
function StatCard({ 
  label, 
  value, 
  subtext, 
  icon, 
  trend,
  color = "violet"
}: { 
  label: string; 
  value: string; 
  subtext?: string; 
  icon: React.ReactNode;
  trend?: "up" | "down";
  color?: "violet" | "cyan" | "emerald" | "amber";
}) {
  const colorMap = {
    violet: "from-violet-500/20 to-violet-500/5 text-violet-400",
    cyan: "from-cyan-500/20 to-cyan-500/5 text-cyan-400",
    emerald: "from-emerald-500/20 to-emerald-500/5 text-emerald-400",
    amber: "from-amber-500/20 to-amber-500/5 text-amber-400",
  };
  
  return (
    <div className="group relative rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 hover:bg-white/[0.04] hover:border-white/10 transition-all">
      <div className="flex items-start justify-between mb-3">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colorMap[color]} flex items-center justify-center`}>
          {icon}
        </div>
        {trend && (
          <div className={`flex items-center gap-1 text-xs ${trend === "up" ? "text-emerald-400" : "text-red-400"}`}>
            {trend === "up" ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
            {trend === "up" ? "+12%" : "-3%"}
          </div>
        )}
      </div>
      <p className="text-2xl font-bold text-white mb-1">{value}</p>
      <p className="text-xs text-white/40">{label}</p>
      {subtext && <p className="text-[10px] text-white/30 mt-1">{subtext}</p>}
    </div>
  );
}

// Notification Item Component
function NotificationItem({ 
  notification, 
  onClose 
}: { 
  notification: { id: string; type: string; title: string; message: string; time: string; read: boolean };
  onClose: () => void;
}) {
  const iconMap: Record<string, { icon: React.ReactNode; color: string }> = {
    success: { icon: <CheckCircle className="w-4 h-4" />, color: "text-emerald-400 bg-emerald-500/10" },
    warning: { icon: <AlertTriangle className="w-4 h-4" />, color: "text-amber-400 bg-amber-500/10" },
    info: { icon: <Info className="w-4 h-4" />, color: "text-cyan-400 bg-cyan-500/10" },
    error: { icon: <AlertCircle className="w-4 h-4" />, color: "text-red-400 bg-red-500/10" },
  };
  
  const { icon, color } = iconMap[notification.type] || iconMap.info;
  
  return (
    <div className={`p-3 rounded-lg hover:bg-white/[0.04] transition-colors ${!notification.read ? "bg-white/[0.02]" : ""}`}>
      <div className="flex gap-3">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${color}`}>
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <p className="text-sm font-medium text-white">{notification.title}</p>
            {!notification.read && <span className="w-2 h-2 bg-violet-500 rounded-full flex-shrink-0 mt-1.5" />}
          </div>
          <p className="text-xs text-white/50 mt-0.5 line-clamp-2">{notification.message}</p>
          <p className="text-[10px] text-white/30 mt-1">{timeAgo(notification.time)}</p>
        </div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<Record<string, boolean>>({});
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const [generating, setGenerating] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState("overview");
  const [chartRange, setChartRange] = useState<"6h" | "12h" | "24h">("12h");
  
  const userMenuRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null);

  // Fetch dashboard data
  const { data: dashboardData, error: dashboardError, isLoading, mutate } = useSWR("/api/dashboard", fetcher, {
    refreshInterval: 30000, // Refresh every 30 seconds
  });

  // Fetch notifications
  const { data: notificationsData } = useSWR("/api/notifications", fetcher, {
    refreshInterval: 60000, // Refresh every minute
  });

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Redirect if not authenticated
  useEffect(() => {
    if (dashboardError) {
      router.push("/auth/login");
    }
  }, [dashboardError, router]);

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/auth/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const handleGenerate = async () => {
    setGenerating(true);
    // Simulate generation - in real app, this would call an API
    await new Promise(resolve => setTimeout(resolve, 2000));
    setGenerating(false);
    mutate(); // Refresh data
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 flex items-center justify-center animate-pulse">
            <Gamepad2 className="w-6 h-6 text-white" />
          </div>
          <p className="text-white/50 text-sm">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const user = dashboardData?.user || { name: "User", email: "user@example.com", subscriptionTier: "free" };
  const stats = dashboardData?.stats || { totalAccounts: 0, accountsToday: 0, tokensRemaining: 0, successRate: 100, apiKeysCount: 0 };
  const accounts = dashboardData?.accounts || [];
  const chartData = dashboardData?.chartData || Array(12).fill(0);
  const notifications = notificationsData?.notifications || [];
  const unreadCount = notificationsData?.unreadCount || 0;

  const filteredAccounts = accounts.filter((acc: { username: string; email: string }) => 
    acc.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    acc.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const tierColors: Record<string, string> = {
    free: "bg-white/10 text-white/60",
    pro: "bg-violet-500 text-white",
    enterprise: "bg-gradient-to-r from-amber-500 to-orange-500 text-white",
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Subtle Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[800px] h-[500px] bg-violet-600/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-fuchsia-500/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0a0a0a]/80 backdrop-blur-xl">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4 lg:gap-6">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-violet-500/20">
                <Gamepad2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white hidden sm:inline">MultiGen</span>
            </Link>
            
            <div className="hidden lg:flex items-center">
              <div className="h-4 w-px bg-white/10 mr-6" />
              <nav className="flex items-center gap-1">
                {[
                  { id: "overview", label: "Overview" },
                  { id: "accounts", label: "Accounts" },
                  { id: "analytics", label: "Analytics" },
                  { id: "api", label: "API" },
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedTab(tab.id)}
                    className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                      selectedTab === tab.id
                        ? "text-white bg-white/10"
                        : "text-white/50 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
          
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Command Palette Hint */}
            <div className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/30 text-xs">
              <Command className="w-3 h-3" />
              <span>K</span>
            </div>

            {/* Notifications */}
            <div className="relative" ref={notificationsRef}>
              <Button 
                size="icon" 
                variant="ghost" 
                className="relative text-white/50 hover:text-white hover:bg-white/5"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <Bell className="w-4 h-4" />
                {unreadCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-violet-500 rounded-full text-[10px] font-bold flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </Button>
              
              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 top-full mt-2 w-80 sm:w-96 rounded-xl border border-white/[0.08] bg-[#0f0f0f]/95 backdrop-blur-xl shadow-2xl overflow-hidden">
                  <div className="p-4 border-b border-white/[0.06] flex items-center justify-between">
                    <h3 className="font-semibold text-white">Notifications</h3>
                    <button className="text-xs text-white/40 hover:text-white transition-colors">
                      Mark all read
                    </button>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {notifications.length > 0 ? (
                      <div className="p-2 space-y-1">
                        {notifications.map((notification: { id: string; type: string; title: string; message: string; time: string; read: boolean }) => (
                          <NotificationItem 
                            key={notification.id} 
                            notification={notification}
                            onClose={() => setShowNotifications(false)}
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="p-8 text-center">
                        <Bell className="w-8 h-8 text-white/20 mx-auto mb-2" />
                        <p className="text-sm text-white/40">No notifications</p>
                      </div>
                    )}
                  </div>
                  <div className="p-3 border-t border-white/[0.06]">
                    <Button variant="ghost" className="w-full text-sm text-white/50 hover:text-white hover:bg-white/5">
                      View all notifications
                    </Button>
                  </div>
                </div>
              )}
            </div>

            <div className="h-6 w-px bg-white/10 mx-1 hidden sm:block" />
            
            {/* User Menu */}
            <div className="relative" ref={userMenuRef}>
              <button 
                className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-white/5 transition-colors"
                onClick={() => setShowUserMenu(!showUserMenu)}
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-xs font-bold shadow-lg shadow-violet-500/20">
                  {(user.name || user.email || "U").charAt(0).toUpperCase()}
                </div>
                <div className="hidden sm:block text-left">
                  <p className="text-sm font-medium text-white leading-tight">{user.name || "User"}</p>
                  <p className="text-[10px] text-white/40">{user.subscriptionTier}</p>
                </div>
                <ChevronDown className={`w-3 h-3 text-white/40 transition-transform ${showUserMenu ? "rotate-180" : ""}`} />
              </button>
              
              {/* User Dropdown */}
              {showUserMenu && (
                <div className="absolute right-0 top-full mt-2 w-64 rounded-xl border border-white/[0.08] bg-[#0f0f0f]/95 backdrop-blur-xl shadow-2xl overflow-hidden">
                  <div className="p-4 border-b border-white/[0.06]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center font-bold">
                        {(user.name || user.email || "U").charAt(0).toUpperCase()}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-white truncate">{user.name || "User"}</p>
                        <p className="text-xs text-white/40 truncate">{user.email}</p>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${tierColors[user.subscriptionTier] || tierColors.free}`}>
                        {user.subscriptionTier}
                      </span>
                      <span className="text-xs text-white/30">{stats.tokensRemaining.toLocaleString()} tokens</span>
                    </div>
                  </div>
                  
                  <div className="p-2">
                    <Link href="/dashboard/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                      <Settings className="w-4 h-4" />
                      Settings
                    </Link>
                    <Link href="/dashboard/billing" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                      <CreditCard className="w-4 h-4" />
                      Billing
                    </Link>
                    <Link href="/dashboard/api-keys" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                      <Key className="w-4 h-4" />
                      API Keys
                    </Link>
                    <Link href="/help" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                      <HelpCircle className="w-4 h-4" />
                      Help & Support
                    </Link>
                  </div>
                  
                  <div className="p-2 border-t border-white/[0.06]">
                    <button 
                      onClick={handleLogout}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-red-400 hover:bg-red-500/10 transition-colors w-full"
                    >
                      <LogOut className="w-4 h-4" />
                      Log out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-xl sm:text-2xl font-bold text-white">Dashboard</h1>
              <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                <span className="hidden sm:inline">All systems operational</span>
                <span className="sm:hidden">Live</span>
              </span>
            </div>
            <p className="text-sm text-white/40">Welcome back, {user.name || "there"}. Here{"'"}s your account overview.</p>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <Button variant="outline" size="sm" className="h-9 border-white/10 bg-white/5 text-white hover:bg-white/10 text-xs sm:text-sm">
              <Download className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Export</span>
            </Button>
            <Button 
              size="sm" 
              className="h-9 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:opacity-90 font-medium shadow-lg shadow-violet-500/20 text-xs sm:text-sm"
              onClick={handleGenerate}
              disabled={generating}
            >
              {generating ? (
                <>
                  <RefreshCw className="w-4 h-4 sm:mr-2 animate-spin" />
                  <span className="hidden sm:inline">Generating...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 sm:mr-2" />
                  <span className="hidden sm:inline">Generate Account</span>
                  <span className="sm:hidden">Generate</span>
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <StatCard 
            label="Total Accounts" 
            value={stats.totalAccounts.toLocaleString()}
            subtext="Lifetime generated"
            icon={<Folder className="w-4 h-4" />}
            trend="up"
            color="violet"
          />
          <StatCard 
            label="Generated Today" 
            value={stats.accountsToday.toString()}
            subtext={`${Math.max(0, 15 - stats.accountsToday)} remaining today`}
            icon={<Zap className="w-4 h-4" />}
            color="cyan"
          />
          <StatCard 
            label="Success Rate" 
            value={`${stats.successRate}%`}
            subtext="Last 30 days"
            icon={<TrendingUp className="w-4 h-4" />}
            trend="up"
            color="emerald"
          />
          <StatCard 
            label="Token Balance" 
            value={stats.tokensRemaining.toLocaleString()}
            subtext="Available tokens"
            icon={<Coins className="w-4 h-4" />}
            color="amber"
          />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-12 gap-4 sm:gap-6">
          {/* Activity Chart */}
          <div className="col-span-12 xl:col-span-8 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="font-semibold text-white mb-1">Generation Activity</h3>
                <p className="text-xs text-white/40">Accounts generated over time</p>
              </div>
              <div className="flex items-center gap-1 p-1 bg-white/5 rounded-lg">
                {(["6h", "12h", "24h"] as const).map(range => (
                  <button
                    key={range}
                    onClick={() => setChartRange(range)}
                    className={`px-3 py-1 text-xs rounded transition-colors ${
                      chartRange === range
                        ? "bg-white/10 text-white"
                        : "text-white/40 hover:text-white"
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>
            <div className="h-48 flex items-end gap-1 sm:gap-2">
              {chartData.map((value: number, i: number) => {
                const maxValue = Math.max(...chartData, 1);
                const height = (value / maxValue) * 100;
                return (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                    <div className="relative w-full">
                      <div 
                        className="w-full bg-gradient-to-t from-violet-500 to-violet-500/40 rounded-t transition-all group-hover:from-violet-400 group-hover:to-violet-400/50"
                        style={{ height: `${Math.max(height, 4)}%`, minHeight: "4px" }}
                      />
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-white/10 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {value} accounts
                      </div>
                    </div>
                    <span className="text-[10px] text-white/30">{i + 1}h</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="col-span-12 xl:col-span-4 space-y-4">
            {/* Quick Generate */}
            <div className="rounded-xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 via-fuchsia-500/5 to-transparent p-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-violet-500/20 rounded-full blur-[50px]" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Quick Generate</h3>
                    <p className="text-xs text-white/40">Create accounts instantly</p>
                  </div>
                </div>
                <Button 
                  className="w-full bg-violet-500 hover:bg-violet-600 text-white font-medium"
                  onClick={handleGenerate}
                  disabled={generating}
                >
                  {generating ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4 mr-2" />
                      Generate Now
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Plan Status */}
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-white">Plan Usage</h3>
                <Link href="/dashboard/billing" className="text-xs text-violet-400 hover:text-violet-300 transition-colors">
                  Upgrade
                </Link>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="text-white/50">Daily Limit</span>
                    <span className="text-white">{stats.accountsToday}/15</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full transition-all" 
                      style={{ width: `${Math.min((stats.accountsToday / 15) * 100, 100)}%` }} 
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="text-white/50">Tokens</span>
                    <span className="text-white">{stats.tokensRemaining.toLocaleString()}</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all" 
                      style={{ width: `${Math.min((stats.tokensRemaining / 1000000) * 100, 100)}%` }} 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Accounts Table */}
          <div className="col-span-12 rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
            <div className="p-4 sm:p-5 border-b border-white/[0.06]">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-white">Recent Accounts</h3>
                  <p className="text-xs text-white/40 mt-0.5">{accounts.length} accounts generated</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative flex-1 sm:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <Input 
                      placeholder="Search accounts..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="h-9 pl-9 bg-white/5 border-white/10 text-white placeholder:text-white/30 text-sm focus:border-violet-500/50 focus:ring-violet-500/20"
                    />
                  </div>
                  <div className="hidden sm:flex items-center p-0.5 bg-white/5 border border-white/10 rounded-lg">
                    <button 
                      className={`p-1.5 rounded transition-colors ${viewMode === "grid" ? "bg-white/10 text-white" : "text-white/40 hover:text-white"}`}
                      onClick={() => setViewMode("grid")}
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </button>
                    <button 
                      className={`p-1.5 rounded transition-colors ${viewMode === "list" ? "bg-white/10 text-white" : "text-white/40 hover:text-white"}`}
                      onClick={() => setViewMode("list")}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {filteredAccounts.length === 0 ? (
              <div className="p-12 text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-white/20" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">No accounts yet</h3>
                <p className="text-sm text-white/40 mb-6 max-w-sm mx-auto">
                  Generate your first account to get started with MultiGen.
                </p>
                <Button 
                  className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white"
                  onClick={handleGenerate}
                  disabled={generating}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate First Account
                </Button>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left text-xs font-medium text-white/40 px-4 sm:px-5 py-3">Account</th>
                      <th className="text-left text-xs font-medium text-white/40 px-4 sm:px-5 py-3 hidden sm:table-cell">Password</th>
                      <th className="text-left text-xs font-medium text-white/40 px-4 sm:px-5 py-3 hidden lg:table-cell">Platform</th>
                      <th className="text-left text-xs font-medium text-white/40 px-4 sm:px-5 py-3 hidden md:table-cell">Created</th>
                      <th className="text-left text-xs font-medium text-white/40 px-4 sm:px-5 py-3">Status</th>
                      <th className="text-right text-xs font-medium text-white/40 px-4 sm:px-5 py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredAccounts.map((account: { id: string; username: string; email: string; password: string; platform: string; status: string; createdAt: string }) => (
                      <tr key={account.id} className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors">
                        <td className="px-4 sm:px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center flex-shrink-0">
                              <User className="w-4 h-4 text-violet-400" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-sm font-medium text-white truncate">{account.username}</p>
                              <p className="text-xs text-white/30 truncate">{account.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 sm:px-5 py-4 hidden sm:table-cell">
                          <div className="flex items-center gap-2">
                            <code className="text-sm text-white/60 font-mono">
                              {showPassword[account.id] ? account.password : "••••••••••"}
                            </code>
                            <button 
                              onClick={() => setShowPassword(p => ({ ...p, [account.id]: !p[account.id] }))}
                              className="text-white/30 hover:text-white transition-colors"
                            >
                              {showPassword[account.id] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                          </div>
                        </td>
                        <td className="px-4 sm:px-5 py-4 hidden lg:table-cell">
                          <span className="text-sm text-white/50">{account.platform}</span>
                        </td>
                        <td className="px-4 sm:px-5 py-4 hidden md:table-cell">
                          <span className="text-sm text-white/50">{timeAgo(account.createdAt)}</span>
                        </td>
                        <td className="px-4 sm:px-5 py-4">
                          <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs ${
                            account.status === "active" 
                              ? "bg-emerald-500/10 text-emerald-400" 
                              : account.status === "expired"
                              ? "bg-amber-500/10 text-amber-400"
                              : "bg-red-500/10 text-red-400"
                          }`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${
                              account.status === "active" 
                                ? "bg-emerald-400" 
                                : account.status === "expired"
                                ? "bg-amber-400"
                                : "bg-red-400"
                            }`} />
                            {account.status}
                          </span>
                        </td>
                        <td className="px-4 sm:px-5 py-4">
                          <div className="flex items-center justify-end gap-1">
                            <button 
                              onClick={() => copyToClipboard(`${account.email}:${account.password}`)}
                              className="p-2 text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                              title="Copy credentials"
                            >
                              <Copy className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                              <MoreHorizontal className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
