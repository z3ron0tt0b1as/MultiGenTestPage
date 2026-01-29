"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, Clock, Star, Sparkles, Gamepad2, LogOut, User,
  Download, Zap, ChevronRight, Bell, ChevronDown,
  Shield, Activity, TrendingUp, Copy, Folder, MoreHorizontal,
  Crown, Plus, Settings, Grid3X3, List, Filter, Eye, EyeOff,
  RefreshCw, Trash2, ExternalLink, Check, AlertCircle, Globe,
  Terminal, Code, Cpu, Server, Database, Lock, Unlock, Key
} from "lucide-react";

// Mock data for demonstration
const mockAccounts = [
  { id: 1, username: "RobloxPro_2847", created: "2 hours ago", status: "active", favorited: true },
  { id: 2, username: "GamerElite_9182", created: "5 hours ago", status: "active", favorited: false },
  { id: 3, username: "CoolPlayer_1234", created: "1 day ago", status: "active", favorited: true },
];

const activityFeed = [
  { type: "generated", message: "Account RobloxPro_2847 created", time: "2h ago", icon: Sparkles },
  { type: "login", message: "Logged in from Chrome", time: "3h ago", icon: Globe },
  { type: "generated", message: "Account GamerElite_9182 created", time: "5h ago", icon: Sparkles },
  { type: "upgrade", message: "Plan upgraded to Pro", time: "1d ago", icon: Crown },
];

const chartData = [40, 65, 45, 80, 55, 90, 75, 85, 60, 95, 70, 88];

export default function AltGenDashboard() {
  const [showPassword, setShowPassword] = useState<Record<number, boolean>>({});
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [generating, setGenerating] = useState(false);
  
  // Mock user data
  const user = { username: "xProGamer", email: "user@example.com" };
  const stats = {
    totalAccounts: 47,
    accountsToday: 12,
    favorited: 8,
    successRate: 99.2,
    plan: "Pro",
    apiCalls: 847,
    apiLimit: 1000,
    storageUsed: 2.4,
    storageLimit: 5
  };

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => setGenerating(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Subtle Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-violet-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-fuchsia-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0a0a0a]/80 backdrop-blur-xl">
        <div className="max-w-[1600px] mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 flex items-center justify-center">
                <Gamepad2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white">MultiGen</span>
              <span className="hidden sm:inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-violet-500 text-white">PRO</span>
            </Link>
            
            <div className="hidden lg:flex items-center">
              <div className="h-4 w-px bg-white/10 mr-6" />
              <nav className="flex items-center gap-1">
                <Link href="/dashboard" className="px-3 py-1.5 text-sm font-medium text-white bg-white/10 rounded-md">Overview</Link>
                <Link href="#" className="px-3 py-1.5 text-sm text-white/50 hover:text-white hover:bg-white/5 rounded-md transition-colors">Accounts</Link>
                <Link href="#" className="px-3 py-1.5 text-sm text-white/50 hover:text-white hover:bg-white/5 rounded-md transition-colors">Analytics</Link>
                <Link href="#" className="px-3 py-1.5 text-sm text-white/50 hover:text-white hover:bg-white/5 rounded-md transition-colors">API</Link>
                <Link href="#" className="px-3 py-1.5 text-sm text-white/50 hover:text-white hover:bg-white/5 rounded-md transition-colors">Settings</Link>
              </nav>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button size="sm" variant="ghost" className="hidden sm:flex text-white/50 hover:text-white hover:bg-white/5 gap-2">
              <Terminal className="w-4 h-4" />
              <span className="text-xs">API</span>
            </Button>
            <Button size="icon" variant="ghost" className="relative text-white/50 hover:text-white hover:bg-white/5">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-violet-500 rounded-full" />
            </Button>
            <div className="h-6 w-px bg-white/10 mx-1" />
            <button className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-white/5 transition-colors">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-xs font-bold">
                {user.username.charAt(0).toUpperCase()}
              </div>
              <ChevronDown className="w-3 h-3 text-white/40" />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 max-w-[1600px] mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-2xl font-bold text-white">Dashboard</h1>
              <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                All systems operational
              </span>
            </div>
            <p className="text-sm text-white/40">Welcome back, {user.username}. Here{"'"}s what{"'"}s happening.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="h-9 border-white/10 bg-white/5 text-white hover:bg-white/10">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button 
              size="sm" 
              className="h-9 bg-white text-black hover:bg-white/90 font-medium"
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
                  Generate Account
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-4">
          
          {/* Stats Row */}
          <div className="col-span-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard 
              label="Total Accounts" 
              value={stats.totalAccounts.toString()} 
              change="+12 this week"
              icon={<Folder className="w-4 h-4" />}
            />
            <StatCard 
              label="Generated Today" 
              value={stats.accountsToday.toString()} 
              change="3 remaining"
              icon={<Zap className="w-4 h-4" />}
            />
            <StatCard 
              label="Success Rate" 
              value={`${stats.successRate}%`} 
              change="+0.3% vs last week"
              trend="up"
              icon={<TrendingUp className="w-4 h-4" />}
            />
            <StatCard 
              label="API Requests" 
              value={stats.apiCalls.toString()} 
              change={`${stats.apiLimit - stats.apiCalls} remaining`}
              icon={<Activity className="w-4 h-4" />}
            />
          </div>

          {/* Chart Card - Large */}
          <div className="col-span-12 lg:col-span-8 rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-semibold text-white mb-1">Generation Activity</h3>
                <p className="text-xs text-white/40">Accounts generated over the last 12 hours</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 text-xs text-white/50 hover:text-white hover:bg-white/5 rounded transition-colors">24h</button>
                <button className="px-3 py-1 text-xs text-white bg-white/10 rounded">12h</button>
                <button className="px-3 py-1 text-xs text-white/50 hover:text-white hover:bg-white/5 rounded transition-colors">6h</button>
              </div>
            </div>
            <div className="h-48 flex items-end gap-2">
              {chartData.map((value, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div 
                    className="w-full bg-gradient-to-t from-violet-500/80 to-violet-500/20 rounded-t transition-all hover:from-violet-400/90 hover:to-violet-400/30"
                    style={{ height: `${value}%` }}
                  />
                  <span className="text-[10px] text-white/30">{i + 1}h</span>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Feed */}
          <div className="col-span-12 lg:col-span-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-white">Recent Activity</h3>
              <button className="text-xs text-white/40 hover:text-white transition-colors">View all</button>
            </div>
            <div className="space-y-3">
              {activityFeed.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/[0.02] transition-colors">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    item.type === "generated" ? "bg-violet-500/10 text-violet-400" :
                    item.type === "upgrade" ? "bg-yellow-500/10 text-yellow-400" :
                    "bg-white/5 text-white/40"
                  }`}>
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white/80 truncate">{item.message}</p>
                    <p className="text-xs text-white/30">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Generate Card */}
          <div className="col-span-12 lg:col-span-4 rounded-xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 via-fuchsia-500/5 to-transparent p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/20 rounded-full blur-[60px]" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-violet-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Quick Generate</h3>
              <p className="text-sm text-white/50 mb-4">Create a new account instantly with our AI-powered generator.</p>
              <Button 
                className="w-full bg-violet-500 hover:bg-violet-600 text-white"
                onClick={handleGenerate}
                disabled={generating}
              >
                {generating ? "Generating..." : "Generate Now"}
              </Button>
            </div>
          </div>

          {/* Usage Card */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
            <h3 className="font-semibold text-white mb-4">Plan Usage</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-white/50">Accounts</span>
                  <span className="text-white">{stats.totalAccounts}/100</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-violet-500 rounded-full" style={{ width: `${stats.totalAccounts}%` }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-white/50">API Requests</span>
                  <span className="text-white">{stats.apiCalls}/{stats.apiLimit}</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-500 rounded-full" style={{ width: `${(stats.apiCalls/stats.apiLimit)*100}%` }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-white/50">Storage</span>
                  <span className="text-white">{stats.storageUsed}GB/{stats.storageLimit}GB</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${(stats.storageUsed/stats.storageLimit)*100}%` }} />
                </div>
              </div>
            </div>
          </div>

          {/* Security Status */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
            <h3 className="font-semibold text-white mb-4">Security</h3>
            <div className="space-y-3">
              <SecurityItem icon={<Shield />} label="Anti-Detection" status="active" />
              <SecurityItem icon={<Lock />} label="2FA Enabled" status="active" />
              <SecurityItem icon={<Server />} label="Proxy Rotation" status="active" />
              <SecurityItem icon={<Key />} label="API Key" status="hidden" />
            </div>
          </div>

          {/* Recent Accounts Table */}
          <div className="col-span-12 rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
            <div className="p-5 border-b border-white/[0.06]">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h3 className="font-semibold text-white">Recent Accounts</h3>
                <div className="flex items-center gap-2">
                  <div className="relative flex-1 sm:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <Input 
                      placeholder="Search accounts..." 
                      className="h-9 pl-9 bg-white/5 border-white/10 text-white placeholder:text-white/30 text-sm"
                    />
                  </div>
                  <div className="flex items-center p-0.5 bg-white/5 border border-white/10 rounded-lg">
                    <button 
                      className={`p-1.5 rounded ${viewMode === "grid" ? "bg-white/10 text-white" : "text-white/40"}`}
                      onClick={() => setViewMode("grid")}
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </button>
                    <button 
                      className={`p-1.5 rounded ${viewMode === "list" ? "bg-white/10 text-white" : "text-white/40"}`}
                      onClick={() => setViewMode("list")}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="text-left text-xs font-medium text-white/40 px-5 py-3">Username</th>
                    <th className="text-left text-xs font-medium text-white/40 px-5 py-3 hidden sm:table-cell">Password</th>
                    <th className="text-left text-xs font-medium text-white/40 px-5 py-3 hidden md:table-cell">Created</th>
                    <th className="text-left text-xs font-medium text-white/40 px-5 py-3">Status</th>
                    <th className="text-right text-xs font-medium text-white/40 px-5 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockAccounts.map((account) => (
                    <tr key={account.id} className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center">
                            <User className="w-4 h-4 text-violet-400" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-white">{account.username}</p>
                            <p className="text-xs text-white/30">ID: {account.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4 hidden sm:table-cell">
                        <div className="flex items-center gap-2">
                          <code className="text-sm text-white/60 font-mono">
                            {showPassword[account.id] ? "SecureP@ss123" : "••••••••••"}
                          </code>
                          <button 
                            onClick={() => setShowPassword(p => ({ ...p, [account.id]: !p[account.id] }))}
                            className="text-white/30 hover:text-white transition-colors"
                          >
                            {showPassword[account.id] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </td>
                      <td className="px-5 py-4 hidden md:table-cell">
                        <span className="text-sm text-white/50">{account.created}</span>
                      </td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/10 text-xs text-emerald-400">
                          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                          Active
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center justify-end gap-1">
                          <button className="p-2 text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                            <Copy className="w-4 h-4" />
                          </button>
                          <button className={`p-2 hover:bg-white/5 rounded-lg transition-colors ${account.favorited ? "text-yellow-400" : "text-white/40 hover:text-white"}`}>
                            <Star className="w-4 h-4" fill={account.favorited ? "currentColor" : "none"} />
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
            
            {/* Pagination */}
            <div className="flex items-center justify-between px-5 py-4 border-t border-white/[0.06]">
              <p className="text-xs text-white/40">Showing 3 of 47 accounts</p>
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="sm" className="h-8 text-white/40 hover:text-white">Previous</Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 bg-white/10 text-white">1</Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 text-white/40 hover:text-white">2</Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 text-white/40 hover:text-white">3</Button>
                <Button variant="ghost" size="sm" className="h-8 text-white/40 hover:text-white">Next</Button>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

function StatCard({ label, value, change, trend, icon }: { 
  label: string; 
  value: string; 
  change: string;
  trend?: "up" | "down";
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 hover:bg-white/[0.03] transition-colors">
      <div className="flex items-center justify-between mb-3">
        <span className="text-white/40">{icon}</span>
        {trend && (
          <span className={`text-xs ${trend === "up" ? "text-emerald-400" : "text-red-400"}`}>
            {trend === "up" ? "+" : "-"}
          </span>
        )}
      </div>
      <p className="text-2xl font-bold text-white mb-1">{value}</p>
      <p className="text-xs text-white/40">{label}</p>
      <p className="text-xs text-white/30 mt-1">{change}</p>
    </div>
  );
}

function SecurityItem({ icon, label, status }: { icon: React.ReactNode; label: string; status: "active" | "hidden" | "warning" }) {
  return (
    <div className="flex items-center justify-between p-2 rounded-lg hover:bg-white/[0.02] transition-colors">
      <div className="flex items-center gap-3">
        <span className="text-white/40">{icon}</span>
        <span className="text-sm text-white/70">{label}</span>
      </div>
      {status === "active" && (
        <span className="flex items-center gap-1 text-xs text-emerald-400">
          <Check className="w-3 h-3" />
          Active
        </span>
      )}
      {status === "hidden" && (
        <span className="flex items-center gap-1 text-xs text-white/40">
          <EyeOff className="w-3 h-3" />
          Hidden
        </span>
      )}
      {status === "warning" && (
        <span className="flex items-center gap-1 text-xs text-yellow-400">
          <AlertCircle className="w-3 h-3" />
          Warning
        </span>
      )}
    </div>
  );
}
