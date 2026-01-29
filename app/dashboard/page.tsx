import { redirect } from "next/navigation";
import { getUserFromCookie } from "@/lib/user-session";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, Clock, Star, Sparkles, Gamepad2, LogOut, User,
  Download, Zap, ChevronRight, Bell, 
  Shield, Activity, TrendingUp, Copy, Folder, 
  Crown, Plus, Settings, Grid3X3, List, Filter
} from "lucide-react";

export default async function AltGenDashboard() {
  const user = await getUserFromCookie();
  if (!user) {
    redirect("/auth/login");
  }
  
  // Mock stats - replace with real data
  const stats = {
    totalAccounts: 0,
    accountsToday: 0,
    favorited: 0,
    plan: "Free"
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Aurora Background - matching homepage */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-40%] left-[-10%] w-[800px] h-[600px] bg-violet-600/20 rounded-full blur-[200px]" />
        <div className="absolute top-[-20%] right-[-5%] w-[500px] h-[400px] bg-cyan-500/15 rounded-full blur-[180px]" />
        <div className="absolute bottom-[-20%] left-[30%] w-[400px] h-[400px] bg-fuchsia-500/15 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,#0a0a0a_70%)]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 border-b border-white/[0.06] backdrop-blur-xl bg-black/20">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 rounded-xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 flex items-center justify-center">
                  <Gamepad2 className="w-4 h-4 text-white" />
                </div>
              </div>
              <span className="font-black text-lg text-white">MultiGen</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-1 p-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
              <span className="px-4 py-1.5 text-sm font-medium text-white bg-white/10 rounded-full">Dashboard</span>
              <Link href="#" className="px-4 py-1.5 text-sm text-white/50 hover:text-white hover:bg-white/5 rounded-full transition-all">Accounts</Link>
              <Link href="#" className="px-4 py-1.5 text-sm text-white/50 hover:text-white hover:bg-white/5 rounded-full transition-all">Settings</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button size="icon" variant="ghost" className="rounded-full text-white/50 hover:text-white hover:bg-white/10">
              <Bell className="w-5 h-5" />
            </Button>
            <div className="h-8 w-px bg-white/10" />
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white text-sm font-bold">
                {user.username?.charAt(0).toUpperCase() || "U"}
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-white">{user.username}</p>
                <p className="text-xs text-white/40">{stats.plan} Plan</p>
              </div>
            </div>
            <form action="/api/auth/logout" method="POST">
              <Button type="submit" size="icon" variant="ghost" className="rounded-full text-white/50 hover:text-red-400 hover:bg-red-500/10">
                <LogOut className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-10">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-white/40">Welcome back,</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs text-violet-400 font-medium">
                <Crown className="w-3 h-3" />
                {stats.plan}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">{user.username}</h1>
            <p className="text-white/50">Generate and manage your Roblox accounts</p>
          </div>
          <Button className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 text-white hover:opacity-90 font-semibold rounded-full px-6 h-12 transition-all hover:scale-105 shadow-lg shadow-violet-500/25">
            <Plus className="w-5 h-5 mr-2" />
            Generate Account
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <StatCard 
            label="Total Accounts" 
            value={stats.totalAccounts.toString()} 
            icon={<Folder className="w-5 h-5" />}
            color="violet"
          />
          <StatCard 
            label="Generated Today" 
            value={stats.accountsToday.toString()} 
            icon={<Zap className="w-5 h-5" />}
            color="cyan"
          />
          <StatCard 
            label="Favorited" 
            value={stats.favorited.toString()} 
            icon={<Star className="w-5 h-5" />}
            color="yellow"
          />
          <StatCard 
            label="Success Rate" 
            value="100%" 
            icon={<TrendingUp className="w-5 h-5" />}
            color="emerald"
          />
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
            <Input 
              placeholder="Search accounts..." 
              className="w-full h-12 pl-12 bg-white/[0.03] border-white/[0.06] text-white placeholder:text-white/30 rounded-xl focus:border-violet-500/50 focus:ring-violet-500/20"
            />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="h-12 px-4 border-white/[0.06] bg-white/[0.03] text-white/70 hover:bg-white/[0.06] hover:text-white rounded-xl">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <div className="flex items-center p-1 bg-white/[0.03] border border-white/[0.06] rounded-xl">
              <Button size="icon" variant="ghost" className="w-10 h-10 text-white rounded-lg bg-white/10">
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost" className="w-10 h-10 text-white/50 hover:text-white rounded-lg">
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Empty State */}
        <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-16 flex flex-col items-center justify-center text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-fuchsia-500/5 rounded-2xl" />
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-white/[0.06] flex items-center justify-center mb-6 mx-auto">
              <Folder className="w-10 h-10 text-white/20" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">No accounts yet</h2>
            <p className="text-white/50 mb-8 max-w-sm">
              Start generating your first Roblox account with our AI-powered tools. Fast, secure, and undetectable.
            </p>
            <Button className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 text-white hover:opacity-90 font-semibold rounded-full px-8 h-12 transition-all hover:scale-105 shadow-lg shadow-violet-500/25">
              <Sparkles className="w-5 h-5 mr-2" />
              Generate Your First Account
            </Button>
            <p className="text-xs text-white/30 mt-4">Average generation time: ~3 seconds</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
          <QuickAction 
            icon={<Shield className="w-5 h-5" />}
            title="Security Status"
            description="All systems operational"
            status="operational"
          />
          <QuickAction 
            icon={<Activity className="w-5 h-5" />}
            title="API Usage"
            description="0 / 5 requests today"
            status="info"
          />
          <QuickAction 
            icon={<Crown className="w-5 h-5" />}
            title="Upgrade Plan"
            description="Get unlimited generations"
            status="upgrade"
          />
        </div>
      </main>
    </div>
  );
}

// Stat card component
function StatCard({ label, value, icon, color }: { label: string; value: string; icon: React.ReactNode; color: string }) {
  const colorClasses = {
    violet: "from-violet-500/20 to-violet-500/5 text-violet-400",
    cyan: "from-cyan-500/20 to-cyan-500/5 text-cyan-400",
    yellow: "from-yellow-500/20 to-yellow-500/5 text-yellow-400",
    emerald: "from-emerald-500/20 to-emerald-500/5 text-emerald-400",
  }[color] || "from-white/10 to-white/5 text-white";

  return (
    <div className="relative p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden group hover:border-white/10 transition-all">
      <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.split(" ")[0]} ${colorClasses.split(" ")[1]} opacity-0 group-hover:opacity-100 transition-opacity`} />
      <div className="relative">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colorClasses.split(" ")[0]} ${colorClasses.split(" ")[1]} flex items-center justify-center mb-3`}>
          <span className={colorClasses.split(" ")[2]}>{icon}</span>
        </div>
        <p className="text-2xl font-bold text-white mb-1">{value}</p>
        <p className="text-sm text-white/50">{label}</p>
      </div>
    </div>
  );
}

// Quick action component
function QuickAction({ icon, title, description, status }: { icon: React.ReactNode; title: string; description: string; status: string }) {
  const statusClasses = {
    operational: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    info: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
    upgrade: "bg-violet-500/10 border-violet-500/20 text-violet-400",
  }[status] || "bg-white/5 border-white/10 text-white/60";

  return (
    <div className={`p-5 rounded-2xl border ${statusClasses} flex items-center gap-4 cursor-pointer hover:scale-[1.02] transition-all`}>
      <div className="w-12 h-12 rounded-xl bg-current/10 flex items-center justify-center">
        {icon}
      </div>
      <div className="flex-1">
        <p className="font-semibold text-white text-sm">{title}</p>
        <p className="text-xs opacity-70">{description}</p>
      </div>
      <ChevronRight className="w-5 h-5 opacity-50" />
    </div>
  );
}
