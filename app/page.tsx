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
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32 sm:pt-28 sm:pb-40">
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
              <span className="text-white">Free & Paid </span>
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">Roblox Alt Account</span>
              <br />
              <span className="text-white">Generator </span>
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Instantly</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
              The free & paid Roblox alt account generator. Create unlimited accounts with premium features and exclusive items.<br />
              <span className="text-white/70">Safe, fast, and completely undetectable.</span><br />
              <span className="text-white/60">No phone/email required. Works worldwide. Trusted by creators, developers, and gamers.</span>
            </p>

            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-6 mb-10">
                          <div className="flex items-center gap-2 text-sm text-white/40">
                            <Cpu className="w-4 h-4 text-cyan-400" />
                            <span>AI-Powered Generation</span>
                          </div>
              <div className="flex items-center gap-2 text-sm text-white/40">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>100% Safe</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/40">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>Instant Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/40">
                <Eye className="w-4 h-4 text-violet-400" />
                <span>Undetectable</span>
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

      {/* Stats Section */}
      <section className="relative z-10 py-16">
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

      {/* Features Section */}
      <section id="generator" className="relative z-10 py-32 bg-gradient-to-b from-[#0a0a0a]/80 via-black/60 to-black/90">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-cyan-500/20 border border-white/10 mb-8">
              <Sparkles className="w-5 h-5 text-violet-400" />
              <span className="text-base text-violet-200 font-semibold tracking-wide">Why MultiGen?</span>
            </div>
            <h2 className="text-5xl font-black text-white mb-6 tracking-tight">
              Everything You <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Need</span>
            </h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">
              All the features you expect from a world-class alt generator, plus more.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Feature Card */}
            <div className="group bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <Layers className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Customizable Avatars</h3>
              <p className="text-white/60 text-base">Choose from a variety of avatar styles and accessories for every generated account.</p>
            </div>
            <div className="group bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <Crown className="w-12 h-12 text-amber-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Premium Status</h3>
              <p className="text-white/60 text-base">All generated accounts come with Roblox Premium subscription active.</p>
            </div>
            <div className="group bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <Gift className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Robux (Paid Plans)</h3>
              <p className="text-white/60 text-base">Robux is only included with paid plans. Amount may vary per account.</p>
            </div>
            <div className="group bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <Shield className="w-12 h-12 text-emerald-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Undetectable</h3>
              <p className="text-white/60 text-base">Advanced generation methods that avoid detection systems.</p>
            </div>
            <div className="group bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <Zap className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Instant Delivery</h3>
              <p className="text-white/60 text-base">Accounts are generated and delivered in under 5 seconds.</p>
            </div>
            <div className="group bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <Infinity className="w-12 h-12 text-violet-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Unlimited Accounts</h3>
              <p className="text-white/60 text-base">No limits on how many accounts you can generate.</p>
            </div>
            <div className="group bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <Lock className="w-12 h-12 text-fuchsia-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Secure & Private</h3>
              <p className="text-white/60 text-base">Your data is encrypted and never shared with third parties.</p>
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

      {/* Discord CTA */}
      <section id="discord" className="relative z-10 py-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#5865F2]/30 bg-gradient-to-br from-[#23272A]/80 via-[#5865F2]/20 to-[#23272A]/80">
            {/* Animated Discord background */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-10 -left-10 w-60 h-60 bg-[#5865F2]/30 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 right-0 w-72 h-72 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
              <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s", transform: "translate(-50%, -50%)" }} />
            </div>
            <div className="relative px-8 py-16 sm:px-20 sm:py-20 flex flex-col items-center text-center gap-4">
              {/* Discord SVG logo */}
              <div className="w-24 h-24 rounded-full bg-[#5865F2] flex items-center justify-center mb-6 shadow-2xl shadow-[#5865F2]/40 border-4 border-white/10 animate-bounce">
                <svg width="56" height="56" viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M60.104 4.552A58.6 58.6 0 0 0 46.852.8a.14.14 0 0 0-.15.07c-2.01 3.58-4.25 8.25-5.83 12.01-7.01-1.05-13.85-1.05-20.77 0-1.59-3.77-3.86-8.43-5.84-12.01a.13.13 0 0 0-.15-.07A58.6 58.6 0 0 0 .896 4.552a.12.12 0 0 0-.06.05C-3.12 11.09-5.32 17.44-6.62 23.72a.13.13 0 0 0 .05.13c8.47 6.19 16.7 9.97 24.77 12.44a.14.14 0 0 0 .15-.05c1.9-2.6 3.6-5.36 5.08-8.23a.13.13 0 0 0-.07-.18c-2.77-1.05-5.41-2.3-7.98-3.77a.13.13 0 0 1-.01-.22c.54-.41 1.08-.84 1.6-1.27a.13.13 0 0 1 .13-.02c16.7 7.65 34.8 7.65 51.36 0a.13.13 0 0 1 .14.02c.53.43 1.06.86 1.6 1.27a.13.13 0 0 1-.01.22c-2.57 1.47-5.21 2.72-7.98 3.77a.13.13 0 0 0-.07.18c1.48 2.87 3.18 5.63 5.08 8.23a.14.14 0 0 0 .15.05c8.08-2.47 16.31-6.25 24.77-12.44a.13.13 0 0 0 .05-.13c-1.3-6.28-3.5-12.63-7.62-19.12a.12.12 0 0 0-.06-.05ZM23.73 37.14c-2.36 0-4.29-2.16-4.29-4.81 0-2.65 1.91-4.81 4.29-4.81 2.39 0 4.31 2.18 4.29 4.81 0 2.65-1.91 4.81-4.29 4.81Zm23.54 0c-2.36 0-4.29-2.16-4.29-4.81 0-2.65 1.91-4.81 4.29-4.81 2.39 0 4.31 2.18 4.29 4.81 0 2.65-1.91 4.81-4.29 4.81Z" fill="#fff"/>
                </svg>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-2 drop-shadow-lg">
                Join Our <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Discord</span>
              </h2>
              <h3 className="text-lg text-white/70 mb-2 font-medium">Be part of the MultiGen community!</h3>
              <p className="text-base sm:text-lg text-white/60 mb-8 max-w-xl mx-auto">
                Get support, share accounts, access exclusive giveaways, and connect with 15,000+ members.<br />
                <span className="text-white/40">Our team is online 24/7 to help you with any questions or issues.</span>
              </p>
              <a href="https://discord.gg/YOUR_INVITE" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="h-14 px-10 bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold rounded-full shadow-xl shadow-[#5865F2]/30 transition-all duration-300 hover:scale-105 flex items-center gap-2 text-lg">
                  <svg width="28" height="28" viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2"><path d="M60.104 4.552A58.6 58.6 0 0 0 46.852.8a.14.14 0 0 0-.15.07c-2.01 3.58-4.25 8.25-5.83 12.01-7.01-1.05-13.85-1.05-20.77 0-1.59-3.77-3.86-8.43-5.84-12.01a.13.13 0 0 0-.15-.07A58.6 58.6 0 0 0 .896 4.552a.12.12 0 0 0-.06.05C-3.12 11.09-5.32 17.44-6.62 23.72a.13.13 0 0 0 .05.13c8.47 6.19 16.7 9.97 24.77 12.44a.14.14 0 0 0 .15-.05c1.9-2.6 3.6-5.36 5.08-8.23a.13.13 0 0 0-.07-.18c-2.77-1.05-5.41-2.3-7.98-3.77a.13.13 0 0 1-.01-.22c.54-.41 1.08-.84 1.6-1.27a.13.13 0 0 1 .13-.02c16.7 7.65 34.8 7.65 51.36 0a.13.13 0 0 1 .14.02c.53.43 1.06.86 1.6 1.27a.13.13 0 0 1-.01.22c-2.57 1.47-5.21 2.72-7.98 3.77a.13.13 0 0 0-.07.18c1.48 2.87 3.18 5.63 5.08 8.23a.14.14 0 0 0 .15.05c8.08-2.47 16.31-6.25 24.77-12.44a.13.13 0 0 0 .05-.13c-1.3-6.28-3.5-12.63-7.62-19.12a.12.12 0 0 0-.06-.05ZM23.73 37.14c-2.36 0-4.29-2.16-4.29-4.81 0-2.65 1.91-4.81 4.29-4.81 2.39 0 4.31 2.18 4.29 4.81 0 2.65-1.91 4.81-4.29 4.81Zm23.54 0c-2.36 0-4.29-2.16-4.29-4.81 0-2.65 1.91-4.81 4.29-4.81 2.39 0 4.31 2.18 4.29 4.81 0 2.65-1.91 4.81-4.29 4.81Z" fill="#fff"/></svg>
                  Join Discord Server
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <p className="mt-6 text-sm text-white/40">15,000+ members and growing • Safe, friendly, and active</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our History Timeline Section */}
      <section id="history" className="relative z-10 py-32 bg-black/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Our <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">History</span>
            </h2>
            <p className="text-lg text-white/40 max-w-xl mx-auto">
              Key milestones and growth of MultiGen.
            </p>
          </div>
          <div className="relative border-l-2 border-violet-500/30 pl-8">
            {[
              { year: 2026, title: "Major Redesign", desc: "Launched a new UI, added team, reviews, and contact features." },
              { year: 2025, title: "Reached 2M+ Accounts", desc: "Surpassed 2 million accounts generated and 15,000 Discord members." },
              { year: 2024, title: "Premium Plans", desc: "Introduced paid plans with Robux and custom features." },
              { year: 2023, title: "MultiGen Launch", desc: "MultiGen was founded and launched to the public." },
            ].map((item, i) => (
              <div key={i} className="mb-12 flex items-start group">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold shadow-lg mr-6 border-4 border-black/40 group-hover:scale-110 transition-transform">{item.year}</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-fuchsia-400 transition-colors">{item.title}</h3>
                  <p className="text-white/60 text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section - Improved */}
      <section id="team" className="relative z-10 py-32 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Meet <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Our Team</span>
            </h2>
            <p className="text-lg text-white/40 max-w-xl mx-auto">
              The passionate creators behind MultiGen.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { name: "Tobias (PrismaticTobias)", role: "Founder & Lead Dev", img: "https://randomuser.me/api/portraits/men/32.jpg", bio: "Full-stack dev, Roblox enthusiast, and product visionary.", twitter: "#", github: "#", secret: "Alex once generated 1000 alts in a single day." },
              { name: "None", role: "None", img: "", bio: "Designs beautiful, user-friendly interfaces.", twitter: "#", github: "#", secret: "Jamie designed the MultiGen logo in 10 minutes." },
              { name: "None", role: "None", img: "", bio: "Keeps the servers fast, secure, and reliable.", twitter: "#", github: "#", secret: "Taylor can code backend in their sleep." },
              { name: "None", role: "None", img: "", bio: "Engages and supports our amazing user base.", twitter: "#", github: "#", secret: "Morgan has answered over 10,000 support tickets." },
            ].map((member, i) => (
              <div key={i} className={
                `flex flex-col items-center text-center bg-white/5 rounded-2xl p-8 border border-white/10 shadow-lg group hover:scale-105 transition-transform ${spunIndex === i ? "animate-spin-slow" : ""}`
              }>
                <div className="relative">
                  {member.img ? (
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-24 h-24 rounded-full mb-4 border-4 border-violet-500/30 object-cover group-hover:border-fuchsia-400 transition-colors cursor-pointer"
                      onClick={() => setSpunIndex(spunIndex === i ? null : i)}
                      title="Click me for a secret!"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full mb-4 border-4 border-violet-500/30 bg-gray-700 flex items-center justify-center text-white/40 text-xl cursor-pointer" onClick={() => setSpunIndex(spunIndex === i ? null : i)} title="Click me for a secret!">
                      No Image
                    </div>
                  )}
                  {spunIndex === i && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-black/90 text-white text-xs rounded-lg px-4 py-2 shadow-xl z-10 border border-violet-500/40 animate-fade-in">
                      <Smile className="inline w-4 h-4 mr-1 text-yellow-300" />{member.secret}
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-fuchsia-400 text-sm font-semibold mb-1">{member.role}</p>
                <p className="text-white/50 text-sm mb-3">{member.bio}</p>
                <div className="flex gap-3 justify-center">
                  <a href={member.twitter} className="text-white/40 hover:text-cyan-400 transition-colors" aria-label="Twitter"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.92 4.92 0 0 0 16.616 3c-2.73 0-4.942 2.21-4.942 4.932 0 .386.045.762.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.237-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z"/></svg></a>
                  <a href={member.github} className="text-white/40 hover:text-violet-400 transition-colors" aria-label="GitHub"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.48C19.138 20.2 22 16.448 22 12.021 22 6.484 17.523 2 12 2z"/></svg></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer & User Reviews Section - Improved */}
      <section id="reviews" className="relative z-10 py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Customer <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Reviews</span>
            </h2>
            <p className="text-lg text-white/40 max-w-xl mx-auto">
              See what our users are saying about MultiGen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "RobloxianPro",
                review: "MultiGen is a game changer! I generated 10 alts in minutes. Super easy and safe.",
                avatar: "https://randomuser.me/api/portraits/men/12.jpg",
                rating: 5,
                badge: "Verified User",
                date: "Jan 2026",
              },
              {
                name: "DevQueen",
                review: "The premium plan is worth every penny. Robux included and instant delivery!",
                avatar: "https://randomuser.me/api/portraits/women/22.jpg",
                rating: 5,
                badge: "Premium",
                date: "Dec 2025",
              },
              {
                name: "AltMaster",
                review: "Support is fast and helpful. The accounts work perfectly for my projects.",
                avatar: "https://randomuser.me/api/portraits/men/45.jpg",
                rating: 4,
                badge: "Creator",
                date: "Nov 2025",
              },
            ].map((user, i) => (
              <div key={i} className="bg-white/5 rounded-2xl p-8 border border-white/10 shadow-lg flex flex-col items-center text-center group hover:scale-105 transition-transform">
                <Image src={user.avatar} alt={user.name} width={64} height={64} className="w-16 h-16 rounded-full mb-4 border-2 border-fuchsia-400 object-cover group-hover:border-violet-400 transition-colors" />
                <div className="flex gap-1 mb-2">
                  {[...Array(user.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                  {[...Array(5 - user.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-white/20" />
                  ))}
                </div>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-900/30 px-2 py-0.5 rounded-full mb-2">{user.badge}</span>
                <p className="text-white/80 text-base mb-2">&quot;{user.review}&quot;</p>
                <span className="text-white/50 text-sm font-semibold">{user.name}</span>
                <span className="text-white/30 text-xs mt-1">{user.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section - Improved */}
      <section id="contact" className="relative z-10 py-32 bg-black/20 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Contact <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Us</span>
            </h2>
            <p className="text-lg text-white/40 max-w-xl mx-auto">
              Have a question or need help? Fill out the form below and our team will get back to you soon.
            </p>
          </div>
          <form className="bg-white/5 rounded-2xl p-8 border border-white/10 shadow-lg flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-white/70 text-sm font-medium flex items-center gap-2"><User className="w-4 h-4 text-violet-400" /> Name</label>
              <input id="name" name="name" type="text" required className="h-12 px-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/30 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 outline-none transition-all" placeholder="Your name" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-white/70 text-sm font-medium flex items-center gap-2"><Mail className="w-4 h-4 text-violet-400" /> Email</label>
              <input id="email" name="email" type="email" required className="h-12 px-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/30 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 outline-none transition-all" placeholder="you@example.com" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-white/70 text-sm font-medium flex items-center gap-2"><MessageCircle className="w-4 h-4 text-violet-400" /> Message</label>
              <textarea id="message" name="message" required rows={5} className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/30 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 outline-none transition-all resize-none" placeholder="How can we help you?" />
            </div>
            <button type="submit" className="h-12 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition-all">Send Message</button>
            <div className="text-green-400 text-center text-sm mt-2 hidden" id="contact-success">Thank you! Your message has been sent.</div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 border-t border-white/10 pt-24 pb-10 bg-gradient-to-b from-black/80 via-[#0a0a0a]/95 to-black/100 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 border-b border-white/10 pb-14">
            {/* Brand & About */}
            <div className="flex-1 min-w-[260px] mb-10 lg:mb-0">
              <Link href="/" className="flex items-center gap-4 mb-6 group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 flex items-center justify-center shadow-2xl">
                  <Gamepad2 className="w-8 h-8 text-white" />
                </div>
                <span className="font-black text-3xl tracking-tight group-hover:text-violet-400 transition-colors">MultiGen</span>
              </Link>
              <p className="text-white/70 text-base mb-6 max-w-sm">The #1 Roblox alt account generator. Secure, fast, and trusted by creators, developers, and gamers worldwide.</p>
              <div className="flex gap-4 mt-4">
                {/* Hidden clickable PartyPopper icon for confetti easter egg */}
                <a
                  href="#"
                  className="hover:text-violet-400 transition-colors relative"
                  style={{ opacity: 0.2, position: "absolute", left: "-2.5rem", top: "0.5rem" }}
                  tabIndex={-1}
                  aria-label="Easter Egg"
                  onClick={e => { e.preventDefault(); setShowConfetti(true); }}
                >
                  <PartyPopper className="w-7 h-7" />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors"><svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.916 4.916 0 0 0 16.616 3c-2.72 0-4.924 2.206-4.924 4.924 0 .386.044.763.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.423.724-.666 1.562-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.868 9.868 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg></a>
                <a href="https://discord.gg/YOUR_INVITE" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors"><svg width="26" height="26" fill="currentColor" viewBox="0 0 71 55"><path d="M60.104 4.552A58.6 58.6 0 0 0 46.852.8a.14.14 0 0 0-.15.07c-2.01 3.58-4.25 8.25-5.83 12.01-7.01-1.05-13.85-1.05-20.77 0-1.59-3.77-3.86-8.43-5.84-12.01a.13.13 0 0 0-.15-.07A58.6 58.6 0 0 0 .896 4.552a.12.12 0 0 0-.06.05C-3.12 11.09-5.32 17.44-6.62 23.72a.13.13 0 0 0 .05.13c8.47 6.19 16.7 9.97 24.77 12.44a.14.14 0 0 0 .15-.05c1.9-2.6 3.6-5.36 5.08-8.23a.13.13 0 0 0-.07-.18c-2.77-1.05-5.41-2.3-7.98-3.77a.13.13 0 0 1-.01-.22c.54-.41 1.08-.84 1.6-1.27a.13.13 0 0 1 .13-.02c16.7 7.65 34.8 7.65 51.36 0a.13.13 0 0 1 .14.02c.53.43 1.06.86 1.6 1.27a.13.13 0 0 1-.01.22c-2.57 1.47-5.21 2.72-7.98 3.77a.13.13 0 0 0-.07-.18c1.48 2.87 3.18 5.63 5.08 8.23a.14.14 0 0 0 .15.05c8.08-2.47 16.31-6.25 24.77-12.44a.13.13 0 0 0 .05-.13c-1.3-6.28-3.5-12.63-7.62-19.12a.12.12 0 0 0-.06-.05ZM23.73 37.14c-2.36 0-4.29-2.16-4.29-4.81 0-2.65 1.91-4.81 4.29-4.81 2.39 0 4.31 2.18 4.29 4.81 0 2.65-1.91 4.81-4.29 4.81Zm23.54 0c-2.36 0-4.29-2.16-4.29-4.81 0-2.65 1.91-4.81 4.29-4.81 2.39 0 4.31 2.18 4.29 4.81 0 2.65-1.91 4.81-4.29 4.81Z"/></svg></a>
                <a href="mailto:support@multigen.com" className="hover:text-violet-400 transition-colors"><Mail className="w-8 h-8" /></a>
              </div>
            </div>
            {/* Product Links */}
            <div className="flex-1 min-w-[200px]">
              <h4 className="font-bold text-lg mb-5 text-white/90 tracking-wide">Product</h4>
              <ul className="space-y-3 text-white/70 text-base">
                <li><a href="#generator" className="hover:text-violet-400 transition-colors">Account Generator</a></li>
                <li><a href="#plans" className="hover:text-violet-400 transition-colors">Pricing & Plans</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">API Access</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">Integrations</a></li>
              </ul>
            </div>
            {/* Resources */}
            <div className="flex-1 min-w-[200px]">
              <h4 className="font-bold text-lg mb-5 text-white/90 tracking-wide">Resources</h4>
              <ul className="space-y-3 text-white/70 text-base">
                <li><a href="#reviews" className="hover:text-violet-400 transition-colors">User Reviews</a></li>
                <li><a href="#history" className="hover:text-violet-400 transition-colors">Our History</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">Help Center</a></li>
              </ul>
            </div>
            {/* Legal */}
            <div className="flex-1 min-w-[200px]">
              <h4 className="font-bold text-lg mb-5 text-white/90 tracking-wide">Legal</h4>
              <ul className="space-y-3 text-white/70 text-base">
                <li><a href="#" className="hover:text-violet-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">DMCA</a></li>
              </ul>
            </div>
            {/* Newsletter Signup */}
            <div className="flex-1 min-w-[260px] flex flex-col justify-between">
              <h4 className="font-bold text-lg mb-5 text-white/90 tracking-wide">Stay Updated</h4>
              <p className="text-white/60 text-base mb-4">Get product updates, news, and exclusive offers straight to your inbox.</p>
              <form className="flex flex-col sm:flex-row gap-2 w-full">
                <input type="email" required placeholder="Your email" className="flex-1 h-12 px-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/30 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 outline-none transition-all min-w-0" />
                <div className="flex w-full sm:w-auto">
                  <Button type="submit" className="h-12 px-7 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-all w-full sm:w-auto">Subscribe</Button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10">
            <p className="text-base text-white/50">© 2026 MultiGen. All rights reserved.</p>
            <div className="flex flex-wrap gap-8 text-white/40 text-base">
              <a href="#" className="hover:text-violet-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-violet-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-violet-400 transition-colors">Security</a>
              <a href="#discord" className="hover:text-violet-400 transition-colors">Discord</a>
              <a href="mailto:support@multigen.com" className="hover:text-violet-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
