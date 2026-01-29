"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, ArrowRight, Star, Shield, Check, Users, Zap,
  Gamepad2, Crown, Gift, Timer, Infinity, Globe, Lock, Bot,
  Rocket, ChevronRight, Play, Download, MessageCircle, Code,
  Cpu, Terminal, Layers, Eye, TrendingUp, User, Mail, Smile, PartyPopper
} from "lucide-react";

export default function Home() {
  // Easter egg state
  const [showConfetti, setShowConfetti] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [spunIndex, setSpunIndex] = React.useState<number|null>(null);

  // Auth state for navbar button
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  React.useEffect(() => {
    // Check for token in localStorage (client-side only)
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    }
  }, []);

  // Konami code: up up down down left right left right b a
  React.useEffect(() => {
    const sequence = [38,38,40,40,37,39,37,39,66,65];
    let pos = 0;
    const handler = (e: KeyboardEvent) => {
      if (e.keyCode === sequence[pos]) {
        pos++;
        if (pos === sequence.length) {
          setShowModal(true);
          pos = 0;
        }
      } else {
        pos = 0;
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Confetti animation (simple emoji burst)
  React.useEffect(() => {
    if (showConfetti) {
      const timeout = setTimeout(() => setShowConfetti(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [showConfetti]);

  return (
    <main className="min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Multi-Color Aurora Background - Violet/Cyan/Pink */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Primary violet aurora */}
        <div className="absolute top-[-40%] left-[-10%] w-[1000px] h-[800px] bg-violet-600/30 rounded-full blur-[200px] animate-pulse" />
        {/* Cyan accent */}
        <div className="absolute top-[-20%] right-[-5%] w-[700px] h-[600px] bg-cyan-500/25 rounded-full blur-[180px] animate-pulse" style={{ animationDelay: "1s" }} />
        {/* Pink/magenta glow */}
        <div className="absolute top-[5%] left-[25%] w-[500px] h-[500px] bg-pink-500/30 rounded-full blur-[160px] animate-pulse" style={{ animationDelay: "2s" }} />
        {/* Deep purple accent */}
        <div className="absolute top-[40%] right-[10%] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: "3s" }} />
        {/* Fuchsia bottom glow */}
        <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[500px] bg-fuchsia-500/20 rounded-full blur-[180px] animate-pulse" style={{ animationDelay: "1.5s" }} />
        {/* Animated grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        {/* Radial fade */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,#0a0a0a_70%)]" />
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox=\"0 0 256 256\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noise)\"/%3E%3C/svg%3E\")" }} />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 border-b border-white/[0.06] backdrop-blur-xl bg-black/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 rounded-xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 flex items-center justify-center shadow-lg">
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
            </div>
            <div>
              <span className="font-black text-xl text-white tracking-tight">MultiGen</span>
              <span className="hidden sm:inline text-xs text-white/40 ml-2 font-medium">ROBLOX</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-1 p-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
            <a href="#" className="px-5 py-2 text-sm font-medium text-white bg-white/10 rounded-full transition-all">Home</a>
            <a href="#generator" className="px-5 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-full transition-all">Generator</a>
            <a href="#plans" className="px-5 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-full transition-all">Plans</a>
            <a href="#discord" className="px-5 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-full transition-all">Discord</a>
          </div>
          
          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <Link href="/dashboard">
                <Button className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 text-white hover:opacity-90 font-semibold rounded-full px-6 transition-all duration-300 hover:scale-105 shadow-lg shadow-violet-500/25">
                  Dashboard
                </Button>
              </Link>
            ) : (
              <>
                <Link href="/auth/login">
                  <Button variant="ghost" className="text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-full">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/register">
                  <Button className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 text-white hover:opacity-90 font-semibold rounded-full px-6 transition-all duration-300 hover:scale-105 shadow-lg shadow-violet-500/25">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-24 pb-40 sm:pt-32 sm:pb-48">
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-32 left-[10%] w-2 h-2 bg-violet-400 rounded-full animate-ping" style={{ animationDuration: "3s" }} />
          <div className="absolute top-48 right-[15%] w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" style={{ animationDuration: "2.5s", animationDelay: "1s" }} />
          <div className="absolute top-64 left-[20%] w-1 h-1 bg-pink-400 rounded-full animate-ping" style={{ animationDuration: "4s", animationDelay: "0.5s" }} />
          <div className="absolute top-40 right-[25%] w-1.5 h-1.5 bg-fuchsia-400 rounded-full animate-ping" style={{ animationDuration: "3.5s", animationDelay: "2s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          {/* Confetti Easter Egg */}
          {showConfetti && (
            <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[9999]">
              <div className="text-6xl animate-bounce select-none">
                🎉🎊🥳✨<span className="animate-spin inline-block">🎈</span>
              </div>
            </div>
          )}
          {/* Modal Easter Egg */}
          {showModal && (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999]">
              <div className="bg-white rounded-2xl p-10 shadow-2xl text-center max-w-xs mx-auto">
                <PartyPopper className="w-12 h-12 mx-auto text-violet-500 mb-4 animate-bounce" />
                <h2 className="text-2xl font-bold mb-2 text-violet-600">Easter Egg Found!</h2>
                <p className="text-black/80 mb-4">You discovered the secret Konami code!<br/>You are a true gamer. 🕹️</p>
                <button onClick={() => setShowModal(false)} className="mt-2 px-6 py-2 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold shadow hover:opacity-90 transition-all">Close</button>
              </div>
            </div>
          )}
          <div className="text-center max-w-5xl mx-auto">
            {/* Premium Generator Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-cyan-500/10 border border-white/10 mb-10 backdrop-blur-sm">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-xs text-emerald-400 font-semibold">LIVE</span>
              </div>
              <div className="w-px h-4 bg-white/20" />
              <Sparkles className="w-4 h-4 text-violet-400" />
              <span className="text-sm text-white/80 font-medium">Premium Account Generator</span>
              <div className="px-2 py-0.5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-[10px] font-bold text-white">v2.0</div>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight mb-8 leading-[1.05]">
              <span className="text-white">The Ultimate </span>
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">Roblox Alt Account</span>
              <br />
              <span className="text-white">Generator & Platform</span>
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent"> Fast, Secure, Limitless</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              MultiGen is the all-in-one solution for Roblox creators, gamers, and developers. Instantly generate free or premium alt accounts, customize avatars, and unlock exclusive features. <span className="text-white/80 font-semibold">No phone or email required. Global access. 100% safe & undetectable.</span>
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
              <div className="flex items-center gap-2 text-sm text-white/50">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>AI-Powered Generation</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/50">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>100% Safe & Private</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/50">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>Instant Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/50">
                <Eye className="w-4 h-4 text-violet-400" />
                <span>Undetectable & Secure</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/50">
                <TrendingUp className="w-4 h-4 text-pink-400" />
                <span>2.4M+ Accounts Generated</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/auth/register">
                <Button size="lg" className="group h-14 px-10 text-base font-semibold bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 text-white hover:opacity-90 rounded-full shadow-2xl shadow-violet-500/30 transition-all duration-300 hover:scale-105 hover:shadow-violet-500/40">
                  <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Generate Account
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="#plans">
                <Button size="lg" variant="outline" className="h-14 px-10 text-base font-semibold border-white/20 bg-white/5 text-white hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                  <Crown className="w-5 h-5 mr-2 text-yellow-400" />
                  View Plans
                </Button>
              </Link>
            </div>

            {/* Social proof */}
            <div className="mt-12 flex items-center justify-center gap-4">
                          <div className="flex items-center gap-2 text-sm text-white/40">
                            <Bot className="w-4 h-4 text-fuchsia-400" />
                            <span>Bot Protection</span>
                          </div>
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 border-2 border-[#0a0a0a] flex items-center justify-center">
                    <span className="text-[10px] font-bold text-white">{String.fromCharCode(65 + i)}</span>
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-xs text-white/40"><span className="text-white/70">2,400+</span> users online now</p>
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* Trusted By Section */}
            <section id="press" className="relative z-10 py-20 border-y border-white/[0.06]">
              <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-sm text-white/40 mb-10 uppercase tracking-widest font-medium">
                  Trusted by gamers and creators worldwide
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
                  {[
                    { name: "500K+", label: "Discord Members" },
                    { name: "4.9/5", label: "User Rating" },
                    { name: "150+", label: "Countries" },
                    { name: "24/7", label: "Support" },
                  ].map((item, i) => (
                    <div key={i} className="text-center group cursor-default">
                      <p className="text-3xl font-black text-white group-hover:text-violet-400 transition-colors">{item.name}</p>
                      <p className="text-xs text-white/40 mt-1">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Changelog Section */}
            <section id="changelog" className="relative z-10 py-24">
              <div className="max-w-4xl mx-auto px-6">
                <div className="flex items-center justify-between mb-12">
                  <div>
                    <h2 className="text-3xl font-black text-white mb-2">
                      What{"'"}s New
                    </h2>
                    <p className="text-white/50">Latest updates and improvements</p>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-sm text-emerald-400 font-medium">All systems operational</span>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-fuchsia-500/30 to-transparent" />
                  <div className="space-y-8">
                    {[
                      { version: "2.1.0", date: "Jan 2026", tag: "Latest", tagColor: "bg-violet-500", changes: ["New avatar customization system", "Faster account generation (3x)", "Enhanced security protocols"] },
                      { version: "2.0.0", date: "Dec 2025", tag: "Major", tagColor: "bg-fuchsia-500", changes: ["Complete platform redesign", "New pricing tiers", "API v2 released"] },
                      { version: "1.9.5", date: "Nov 2025", tag: "Patch", tagColor: "bg-white/20", changes: ["Bug fixes and stability improvements", "Mobile experience enhanced"] },
                    ].map((release, i) => (
                      <div key={i} className="relative pl-12 group">
                        <div className={`absolute left-2 top-1 w-5 h-5 rounded-full ${release.tagColor} flex items-center justify-center ring-4 ring-[#0a0a0a] group-hover:scale-110 transition-transform`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="text-lg font-bold text-white">v{release.version}</span>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${release.tagColor} text-white`}>{release.tag}</span>
                          <span className="text-sm text-white/40">{release.date}</span>
                        </div>
                        <ul className="space-y-1.5">
                          {release.changes.map((change, j) => (
                            <li key={j} className="text-sm text-white/60 flex items-start gap-2">
                              <ChevronRight className="w-4 h-4 text-white/30 mt-0.5 flex-shrink-0" />
                              {change}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Download App Section */}
            <section id="download" className="relative z-10 py-24">
              <div className="max-w-5xl mx-auto px-6">
                <div className="relative rounded-3xl border border-white/[0.08] bg-gradient-to-br from-violet-500/5 via-fuchsia-500/5 to-cyan-500/5 p-10 sm:p-16 overflow-hidden">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-violet-500/10 rounded-full blur-[100px]" />
                  <div className="absolute bottom-0 left-0 w-60 h-60 bg-cyan-500/10 rounded-full blur-[80px]" />
                  <div className="relative flex flex-col lg:flex-row items-center gap-10">
                    <div className="flex-1 text-center lg:text-left">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
                        <Terminal className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs text-white/60 font-medium">Desktop App Available</span>
                      </div>
                      <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                        Generate accounts faster with our desktop app
                      </h2>
                      <p className="text-white/50 mb-8 max-w-lg">
                        Native performance, offline support, and system tray integration. Available for all major platforms.
                      </p>
                      <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                        <a href="#" className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-white/10 border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                            <Download className="w-4 h-4 text-white" />
                          </div>
                          <div className="text-left">
                            <p className="text-[10px] text-white/40 uppercase tracking-wider">Download for</p>
                            <p className="text-sm font-semibold text-white">Windows</p>
                          </div>
                        </a>
                        <a href="#" className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-white/10 border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                            <Download className="w-4 h-4 text-white" />
                          </div>
                          <div className="text-left">
                            <p className="text-[10px] text-white/40 uppercase tracking-wider">Download for</p>
                            <p className="text-sm font-semibold text-white">macOS</p>
                          </div>
                        </a>
                        <a href="#" className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-white/10 border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center">
                            <Download className="w-4 h-4 text-white" />
                          </div>
                          <div className="text-left">
                            <p className="text-[10px] text-white/40 uppercase tracking-wider">Download for</p>
                            <p className="text-sm font-semibold text-white">Linux</p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-3xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-white/10 flex items-center justify-center">
                      <Gamepad2 className="w-20 h-20 text-white/20" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
      {/* Integrations Section */}
      <section id="partners" className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Works with your favorite tools
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Seamlessly integrate with platforms you already use
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: "Discord", desc: "Bot integration", icon: MessageCircle, color: "from-indigo-500 to-purple-500" },
              { name: "Chrome", desc: "Browser extension", icon: Globe, color: "from-yellow-500 to-orange-500" },
              { name: "API", desc: "REST & Webhooks", icon: Code, color: "from-emerald-500 to-teal-500" },
              { name: "Roblox", desc: "Direct connect", icon: Gamepad2, color: "from-red-500 to-pink-500" },
              { name: "Telegram", desc: "Bot support", icon: Bot, color: "from-blue-500 to-cyan-500" },
            ].map((item, i) => (
              <div key={i} className="group relative p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all cursor-default">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white mb-1">{item.name}</h3>
                <p className="text-xs text-white/40">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="relative z-10 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
                <Rocket className="w-4 h-4 text-cyan-400" />
                <span className="text-xs text-cyan-400 font-medium">Roadmap</span>
              </div>
              <h2 className="text-3xl font-black text-white">
                Building the future
              </h2>
            </div>
            <p className="text-white/40 text-sm max-w-xs">Features and improvements we{"'"}re working on</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Mobile App", desc: "Generate on the go with native iOS & Android apps", status: "In Progress", statusColor: "bg-yellow-500", quarter: "Q2 2026", progress: 65 },
              { title: "API v3", desc: "Enhanced developer tools with real-time webhooks", status: "Planned", statusColor: "bg-cyan-500", quarter: "Q3 2026", progress: 20 },
              { title: "Marketplace", desc: "Trade and sell accounts securely within the platform", status: "Research", statusColor: "bg-fuchsia-500", quarter: "Q4 2026", progress: 5 },
            ].map((item, i) => (
              <div key={i} className="group relative p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/10 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2 py-1 rounded text-[10px] font-bold ${item.statusColor} text-white`}>{item.status}</span>
                  <span className="text-xs text-white/30">{item.quarter}</span>
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/50 mb-4">{item.desc}</p>
                <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                  <div className={`h-full ${item.statusColor} transition-all`} style={{ width: `${item.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="relative z-10 py-24 border-y border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span className="text-xs text-emerald-400 font-medium">Enterprise Security</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                Your security is non-negotiable
              </h2>
              <p className="text-white/50 mb-8">
                We{"'"}ve built MultiGen with security at its core. Every account, every transaction, every piece of data is protected.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Lock, label: "256-bit encryption" },
                  { icon: Eye, label: "Zero-knowledge" },
                  { icon: Shield, label: "SOC 2 compliant" },
                  { icon: Bot, label: "Anti-detection" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-white/60">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-emerald-400" />
                    </div>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-80 aspect-square rounded-3xl bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10 border border-white/[0.06] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]" />
              <Shield className="w-24 h-24 text-emerald-500/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="relative z-10 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-pink-500/10 p-10 sm:p-14 overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/20 rounded-full blur-[100px]" />
            <div className="relative flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                  Join 500K+ members on Discord
                </h2>
                <p className="text-white/50 mb-6 max-w-md">
                  Get help, share strategies, participate in giveaways, and connect with fellow users.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <a href="https://discord.gg/YOUR_INVITE" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#5865F2] text-white font-semibold hover:bg-[#4752C4] transition-all">
                    <MessageCircle className="w-5 h-5" />
                    Join Discord
                  </a>
                  <div className="flex items-center gap-2 text-white/40 text-sm">
                    <div className="flex -space-x-2">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 border-2 border-[#0a0a0a]" />
                      ))}
                    </div>
                    <span>2.4K online now</span>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex flex-col gap-3 w-64">
                {[
                  { user: "RobloxPro99", msg: "Just generated 50 accounts!", time: "2m ago" },
                  { user: "GamerKid", msg: "This is so fast!", time: "5m ago" },
                  { user: "DevMaster", msg: "API integration works great", time: "12m ago" },
                ].map((chat, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500" />
                      <span className="text-xs font-semibold text-white">{chat.user}</span>
                      <span className="text-[10px] text-white/30 ml-auto">{chat.time}</span>
                    </div>
                    <p className="text-xs text-white/50">{chat.msg}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="generator" className="relative z-10 py-36 bg-gradient-to-b from-[#0a0a0a]/80 via-black/60 to-black/90">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-cyan-500/20 border border-white/10 mb-8">
              <Sparkles className="w-5 h-5 text-violet-400" />
              <span className="text-base text-violet-200 font-semibold tracking-wide">Why MultiGen?</span>
            </div>
            <h2 className="text-5xl font-black text-white mb-6 tracking-tight">
              Everything You <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Need</span> & More
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              MultiGen offers a robust suite of features for every Roblox user. From customizable avatars to instant delivery, discover why we’re the #1 choice for alt account generation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Feature Card */}
            <div className="group bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <Layers className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Customizable Avatars</h3>
              <p className="text-white/70 text-base">Personalize every account with unique styles, accessories, and exclusive items.</p>
            </div>
            <div className="group bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <Crown className="w-12 h-12 text-amber-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Premium Status</h3>
              <p className="text-white/70 text-base">Enjoy Roblox Premium on every generated account—no extra steps required.</p>
            </div>
            <div className="group bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <Gift className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Robux (Paid Plans)</h3>
              <p className="text-white/70 text-base">Get Robux with every paid account. Perfect for creators, traders, and gamers.</p>
            </div>
            <div className="group bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <Shield className="w-12 h-12 text-emerald-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Undetectable</h3>
              <p className="text-white/70 text-base">Advanced stealth tech keeps your accounts safe from bans and detection.</p>
            </div>
            <div className="group bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <Zap className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Instant Delivery</h3>
              <p className="text-white/70 text-base">Receive your new account credentials in seconds—no waiting, ever.</p>
            </div>
            <div className="group bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <Infinity className="w-12 h-12 text-violet-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Unlimited Accounts</h3>
              <p className="text-white/70 text-base">Generate as many accounts as you need, whenever you need them.</p>
            </div>
            <div className="group bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <Lock className="w-12 h-12 text-fuchsia-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Secure & Private</h3>
              <p className="text-white/70 text-base">Your privacy is our priority. All data is encrypted and never shared.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.03] to-transparent p-8 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-transparent to-cyan-500/5 rounded-3xl" />
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "2.4M+", label: "Accounts Generated", icon: Users, color: "text-violet-400" },
                { value: "99.9%", label: "Success Rate", icon: Check, color: "text-emerald-400" },
                { value: "<5s", label: "Avg. Generation Time", icon: Zap, color: "text-yellow-400" },
                { value: "70+", label: "Premium Features", icon: Crown, color: "text-pink-400" },
                { value: "24/7", label: "Uptime", icon: Globe, color: "text-cyan-400" },
                { value: "100+", label: "Countries Supported", icon: Globe, color: "text-fuchsia-400" },
              ].map((stat, i) => (
                <div key={i} className="text-center group relative">
                  {i < 3 && <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-white/10 to-transparent" />}
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <div className={"w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform"}>
                      <stat.icon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                  <p className="text-3xl sm:text-4xl font-black text-white">{stat.value}</p>
                  </div>
                  <p className="text-sm text-white/40">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <Rocket className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-300">Quick Start</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              How It <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-lg text-white/40 max-w-xl mx-auto">
              Generate your first account in 3 simple steps.<br />
              <span className="text-white/60">No technical skills required. Our AI handles everything for you.</span>
            </p>
          </div>
          
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[55%] left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Create Account",
                description: "Sign up for free and access the generator dashboard. No payment required to start.",
                icon: Users,
                color: "from-violet-500 to-purple-500",
              },
              {
                step: "02",
                title: "Choose Options",
                description: "Select account features, Robux amount (paid plans), avatar style, and privacy settings.",
                icon: Gamepad2,
                color: "from-fuchsia-500 to-pink-500",
              },
              {
                step: "03",
                title: "Generate & Use",
                description: "Click generate and receive your account credentials instantly. Use on any device, anywhere.",
                icon: Rocket,
                color: "from-cyan-500 to-blue-500",
              },
            ].map((item, i) => (
              <div key={i} className="relative text-center group">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
                <div className="text-8xl font-black bg-gradient-to-br from-white/[0.03] to-transparent bg-clip-text text-transparent mb-4 group-hover:from-violet-500/20 transition-all duration-500" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.05)" }}>
                  {item.step}
                </div>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-white/40">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="plans" className="relative z-10 py-32">
        <div className="absolute inset-0 bg-gradient-to-t from-violet-500/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
              <Crown className="w-4 h-4 text-violet-400" />
              <span className="text-sm text-violet-300">Pricing Plans</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Choose Your <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Plan</span>
            </h2>
            <p className="text-lg text-white/40 max-w-xl mx-auto">
              Start free or unlock unlimited potential with premium.<br />
              <span className="text-white/60">Flexible plans for casual users, creators, and businesses. Cancel anytime.</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {/* Plan Comparison Note */}
                        <div className="col-span-1 md:col-span-3 mb-8 text-center">
                          <span className="text-white/50 text-sm">All plans include secure, undetectable generation. Paid plans unlock Robux, custom usernames, and more.</span>
                        </div>
            {/* Free Plan */}
            <div className="group relative p-8 rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.03] to-transparent hover:border-white/[0.15] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white/60" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Free</h3>
                <p className="text-white/40 text-sm mb-6">Perfect to get started</p>
                <div className="mb-6">
                  <span className="text-5xl font-black text-white">$0</span>
                  <span className="text-white/40">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {["5 accounts/day", "Basic features", "Standard support", "No Robux included"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/60">
                      <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white/60" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="w-full h-12 bg-white/10 text-white hover:bg-white/20 rounded-xl font-semibold transition-all duration-300">
                  Get Started Free
                </Button>
              </div>
            </div>
            
            {/* Pro Plan */}
            <div className="group relative p-8 rounded-3xl border-2 border-violet-500/50 bg-gradient-to-br from-violet-500/10 via-fuchsia-500/10 to-pink-500/10 scale-105 shadow-2xl shadow-violet-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent rounded-3xl" />
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 text-white text-xs font-bold shadow-lg">
                ✨ MOST POPULAR
              </div>
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center mb-4 shadow-lg">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
                <p className="text-white/40 text-sm mb-6">For serious users</p>
                <div className="mb-6">
                  <span className="text-5xl font-black bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">$9.99</span>
                  <span className="text-white/40">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {["100 accounts/day", "Premium features", "Priority support", "100 Robux per account", "Custom usernames"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="w-full h-12 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 text-white hover:opacity-90 rounded-xl font-semibold shadow-lg shadow-violet-500/25 transition-all duration-300 hover:shadow-violet-500/40">
                  Upgrade to Pro
                </Button>
              </div>
            </div>
            
            {/* Enterprise Plan */}
            <div className="group relative p-8 rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.03] to-transparent hover:border-white/[0.15] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 flex items-center justify-center mb-4">
                  <Infinity className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
                <p className="text-white/40 text-sm mb-6">Unlimited everything</p>
                <div className="mb-6">
                  <span className="text-5xl font-black text-white">$29.99</span>
                  <span className="text-white/40">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {["Unlimited accounts", "All premium features", "24/7 VIP support", "500 Robux per account", "API access", "Custom integrations"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/60">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-cyan-400" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="w-full h-12 bg-white/10 text-white hover:bg-white/20 rounded-xl font-semibold border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative z-10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl font-black text-white mb-2">
                Loved by gamers worldwide
              </h2>
              <p className="text-white/50">Real reviews from real users</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-white font-bold">4.9</span>
              <span className="text-white/40 text-sm">from 12K+ reviews</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { name: "xProGamer", platform: "Discord", review: "Generated 200+ accounts in a week. Zero bans, works flawlessly. The stealth tech is actually insane.", rating: 5, avatar: "X", color: "from-violet-500 to-fuchsia-500" },
              { name: "RobloxDev2024", platform: "Trustpilot", review: "As a developer, the API access is exactly what I needed. Documentation is clear and support responds within hours.", rating: 5, avatar: "R", color: "from-cyan-500 to-blue-500" },
              { name: "CasualPlayer", platform: "Discord", review: "Started with free tier, upgraded to Pro after day one. The speed difference is night and day. Worth every penny.", rating: 5, avatar: "C", color: "from-emerald-500 to-teal-500" },
            ].map((item, i) => (
              <div key={i} className="group p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">{"\""}{item.review}{"\""}</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-sm`}>
                    {item.avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{item.name}</p>
                    <p className="text-white/40 text-xs">via {item.platform}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>







      {/* FAQ Section */}
      <section id="faq" className="relative z-10 py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white mb-3">
              Questions? Answers.
            </h2>
            <p className="text-white/50">Everything you need to know about MultiGen</p>
          </div>
          <div className="space-y-3">
            {[
              { q: "Is MultiGen really free?", a: "Yes! Our free tier gives you 5 accounts per day with basic features. No credit card required to start." },
              { q: "Are the accounts safe to use?", a: "Absolutely. We use advanced stealth technology and rotating proxies. Zero bans reported in 2+ years." },
              { q: "How fast is account generation?", a: "Free users get accounts in ~10 seconds. Pro and Enterprise users enjoy sub-3 second generation." },
              { q: "Can I cancel my subscription anytime?", a: "Yes, cancel anytime from your dashboard. No questions asked, no hidden fees." },
              { q: "Do you offer refunds?", a: "We offer a 7-day money-back guarantee on all paid plans if you{\"'\"}re not satisfied." },
            ].map((item, i) => (
              <details key={i} className="group">
                <summary className="flex items-center justify-between p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] cursor-pointer hover:bg-white/[0.04] transition-all list-none">
                  <span className="font-semibold text-white pr-4">{item.q}</span>
                  <ChevronRight className="w-5 h-5 text-white/40 group-open:rotate-90 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-5 pb-5 pt-2 text-sm text-white/60 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="relative z-10 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 via-fuchsia-500/5 to-pink-500/10 p-12 sm:p-16 text-center overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-500/20 rounded-full blur-[120px]" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 text-balance">
                Ready to generate your first account?
              </h2>
              <p className="text-white/50 mb-8 max-w-lg mx-auto">
                Join 2.4M+ users who trust MultiGen. Start free, no credit card required.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/auth/register">
                  <Button size="lg" className="h-14 px-10 text-base font-semibold bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 text-white hover:opacity-90 rounded-full shadow-2xl shadow-violet-500/30 transition-all hover:scale-105">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Get Started Free
                  </Button>
                </Link>
                <a href="https://discord.gg/YOUR_INVITE" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-sm font-medium transition-colors">
                  or join our Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 border-t border-white/[0.06] py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-10">
            <div className="max-w-xs">
              <Link href="/" className="flex items-center gap-3 mb-4 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 flex items-center justify-center">
                  <Gamepad2 className="w-5 h-5 text-white" />
                </div>
                <span className="font-black text-xl text-white">MultiGen</span>
              </Link>
              <p className="text-sm text-white/40 leading-relaxed">The most trusted Roblox account generator. Fast, secure, and loved by millions.</p>
              {/* Hidden easter egg */}
              <button
                className="opacity-10 hover:opacity-30 transition-opacity mt-4"
                onClick={() => setShowConfetti(true)}
                aria-label="Easter Egg"
              >
                <PartyPopper className="w-5 h-5 text-white" />
              </button>
            </div>
            <div className="flex flex-wrap gap-x-16 gap-y-8">
              <div>
                <h4 className="font-semibold text-white mb-4 text-sm">Product</h4>
                <ul className="space-y-2.5 text-sm text-white/50">
                  <li><a href="#generator" className="hover:text-white transition-colors">Generator</a></li>
                  <li><a href="#plans" className="hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4 text-sm">Company</h4>
                <ul className="space-y-2.5 text-sm text-white/50">
                  <li><a href="#testimonials" className="hover:text-white transition-colors">Reviews</a></li>
                  <li><a href="#community" className="hover:text-white transition-colors">Community</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4 text-sm">Legal</h4>
                <ul className="space-y-2.5 text-sm text-white/50">
                  <li><a href="/legal/terms-of-service" className="hover:text-white transition-colors">Terms</a></li>
                  <li><a href="/policies/privacy-policy" className="hover:text-white transition-colors">Privacy</a></li>
                  <li><a href="/legal/security" className="hover:text-white transition-colors">Security</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.06]">
            <p className="text-xs text-white/30">2026 MultiGen. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://discord.gg/YOUR_INVITE" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">
                <MessageCircle className="w-[18px] h-[18px]" />
              </a>
              <a href="mailto:support@multigen.com" className="text-white/30 hover:text-white transition-colors">
                <Mail className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
