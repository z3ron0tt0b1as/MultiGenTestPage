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
            {/* Press & Media Section */}
            <section id="press" className="relative z-10 py-32 bg-gradient-to-b from-black/80 via-black/60 to-black/90">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
                    In the <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Press</span>
                  </h2>
                  <p className="text-lg text-white/50 max-w-xl mx-auto">
                    See what the media is saying about MultiGen.
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-10">
                  <a href="#" className="flex items-center gap-4 px-8 py-6 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-xl shadow-lg hover:scale-105 transition-all">
                    <img src="/press-forbes.svg" alt="Forbes" className="h-8" />
                    Forbes
                  </a>
                  <a href="#" className="flex items-center gap-4 px-8 py-6 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-xl shadow-lg hover:scale-105 transition-all">
                    <img src="/press-techcrunch.svg" alt="TechCrunch" className="h-8" />
                    TechCrunch
                  </a>
                  <a href="#" className="flex items-center gap-4 px-8 py-6 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-xl shadow-lg hover:scale-105 transition-all">
                    <img src="/press-verge.svg" alt="The Verge" className="h-8" />
                    The Verge
                  </a>
                  <a href="#" className="flex items-center gap-4 px-8 py-6 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-xl shadow-lg hover:scale-105 transition-all">
                    <img src="/press-mashable.svg" alt="Mashable" className="h-8" />
                    Mashable
                  </a>
                </div>
              </div>
            </section>

            {/* Changelog Section */}
            <section id="changelog" className="relative z-10 py-32 bg-gradient-to-b from-[#0a0a0a] via-black/60 to-black/90">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
                    Product <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Changelog</span>
                  </h2>
                  <p className="text-lg text-white/50 max-w-xl mx-auto">
                    Stay up to date with the latest features and improvements.
                  </p>
                </div>
                <div className="space-y-8 max-w-3xl mx-auto">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
                    <h3 className="text-xl font-bold text-white mb-2">v2.1.0 <span className="text-xs text-white/40 ml-2">Jan 2026</span></h3>
                    <ul className="list-disc list-inside text-white/60 text-base pl-4">
                      <li>Added Roadmap, Partners, and Community sections</li>
                      <li>Improved homepage performance</li>
                      <li>Minor bug fixes</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
                    <h3 className="text-xl font-bold text-white mb-2">v2.0.0 <span className="text-xs text-white/40 ml-2">Dec 2025</span></h3>
                    <ul className="list-disc list-inside text-white/60 text-base pl-4">
                      <li>Launched new pricing plans</li>
                      <li>Added user reviews and testimonials</li>
                      <li>Major UI redesign</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Download App Section */}
            <section id="download" className="relative z-10 py-32 bg-gradient-to-b from-black/80 via-black/60 to-black/90">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
                    Download the <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">App</span>
                  </h2>
                  <p className="text-lg text-white/50 max-w-xl mx-auto">
                    Get MultiGen on your device for the best experience.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                  <a href="#" className="flex items-center gap-4 px-8 py-6 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold text-xl shadow-lg hover:scale-105 transition-all">
                    <Download className="w-8 h-8" />
                    Download for Windows
                  </a>
                  <a href="#" className="flex items-center gap-4 px-8 py-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-xl shadow-lg hover:scale-105 transition-all">
                    <Download className="w-8 h-8" />
                    Download for Mac
                  </a>
                  <a href="#" className="flex items-center gap-4 px-8 py-6 rounded-2xl bg-gradient-to-r from-black to-gray-800 text-white font-bold text-xl shadow-lg hover:scale-105 transition-all">
                    <Download className="w-8 h-8" />
                    Download for Linux
                  </a>
                </div>
              </div>
            </section>
      {/* Partners Section */}
      <section id="partners" className="relative z-10 py-32 bg-gradient-to-b from-black/80 via-black/60 to-black/90">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Our <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Partners</span>
            </h2>
            <p className="text-lg text-white/50 max-w-xl mx-auto">
              Trusted by leading platforms and communities.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {/* Example partner logos (replace src with real logos) */}
            <img src="/partner-roblox.svg" alt="Roblox" className="h-12 opacity-80 grayscale hover:grayscale-0 transition-all" />
            <img src="/partner-discord.svg" alt="Discord" className="h-12 opacity-80 grayscale hover:grayscale-0 transition-all" />
            <img src="/partner-github.svg" alt="GitHub" className="h-12 opacity-80 grayscale hover:grayscale-0 transition-all" />
            <img src="/partner-vercel.svg" alt="Vercel" className="h-12 opacity-80 grayscale hover:grayscale-0 transition-all" />
            <img src="/partner-google.svg" alt="Google" className="h-12 opacity-80 grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="relative z-10 py-32 bg-gradient-to-b from-[#0a0a0a] via-black/60 to-black/90">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Product <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Roadmap</span>
            </h2>
            <p className="text-lg text-white/50 max-w-xl mx-auto">
              See what’s coming next for MultiGen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">Mobile App</h3>
              <p className="text-white/60 text-base mb-2">Generate and manage accounts on the go.</p>
              <span className="inline-block px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-semibold">Q2 2026</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">API for Developers</h3>
              <p className="text-white/60 text-base mb-2">Programmatic access for automation and integrations.</p>
              <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-semibold">Q3 2026</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">Marketplace</h3>
              <p className="text-white/60 text-base mb-2">Buy, sell, and trade exclusive accounts and items.</p>
              <span className="inline-block px-3 py-1 rounded-full bg-fuchsia-500/20 text-fuchsia-400 text-xs font-semibold">Q4 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section id="security" className="relative z-10 py-32 bg-gradient-to-b from-black/80 via-black/60 to-black/90">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Security & <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Compliance</span>
            </h2>
            <p className="text-lg text-white/50 max-w-xl mx-auto">
              Your safety is our top priority. We follow industry best practices to keep your data secure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl text-center">
              <Shield className="w-10 h-10 mx-auto text-emerald-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">End-to-End Encryption</h3>
              <p className="text-white/60 text-base">All data is encrypted in transit and at rest.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl text-center">
              <Lock className="w-10 h-10 mx-auto text-fuchsia-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Privacy First</h3>
              <p className="text-white/60 text-base">We never sell or share your personal information.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl text-center">
              <Check className="w-10 h-10 mx-auto text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Compliance</h3>
              <p className="text-white/60 text-base">Fully compliant with GDPR, CCPA, and other major regulations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="relative z-10 py-32 bg-gradient-to-b from-[#0a0a0a] via-black/60 to-black/90">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Join Our <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Community</span>
            </h2>
            <p className="text-lg text-white/50 max-w-xl mx-auto">
              Connect with other users, share tips, and get support.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <a href="https://discord.gg/YOUR_INVITE" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 px-8 py-6 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold text-xl shadow-lg hover:scale-105 transition-all">
              <Bot className="w-8 h-8" />
              Join Discord
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 px-8 py-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-xl shadow-lg hover:scale-105 transition-all">
              <Smile className="w-8 h-8" />
              Follow on Twitter
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 px-8 py-6 rounded-2xl bg-gradient-to-r from-black to-gray-800 text-white font-bold text-xl shadow-lg hover:scale-105 transition-all">
              <Code className="w-8 h-8" />
              Star on GitHub
            </a>
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
      <section id="testimonials" className="relative z-10 py-32 bg-gradient-to-b from-black/80 via-black/60 to-black/90">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-white mb-6 tracking-tight">
              What Our <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Users</span> Say
            </h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">
              Hear from our satisfied users who love MultiGen.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Testimonial Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
              <p className="text-white/60 text-base mb-4">&quot;MultiGen has been a lifesaver for my gaming needs. Highly recommend!&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold">John Doe</h4>
                  <span className="text-white/50 text-sm">Verified User</span>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
              <p className="text-white/60 text-base mb-4">&quot;The premium features are worth every penny. Great service!&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Jane Smith</h4>
                  <span className="text-white/50 text-sm">Premium User</span>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
              <p className="text-white/60 text-base mb-4">&quot;Fast, reliable, and secure. MultiGen is the best!&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Alex Johnson</h4>
                  <span className="text-white/50 text-sm">Long-time User</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="our-team" className="relative z-10 py-32 bg-gradient-to-b from-[#0a0a0a] via-black/60 to-black/90">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Meet Our <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-lg text-white/50 max-w-xl mx-auto">
              The passionate individuals behind MultiGen.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Team Member Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center mb-4">
                <User className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Alice Johnson</h3>
              <p className="text-white/60 text-sm">CEO & Founder</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4">
                <User className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Bob Smith</h3>
              <p className="text-white/60 text-sm">CTO</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mb-4">
                <User className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Charlie Davis</h3>
              <p className="text-white/60 text-sm">Lead Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline Section */}
      <section id="history" className="relative z-10 py-32 bg-gradient-to-b from-[#0a0a0a] via-black/60 to-black/90">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Our <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-lg text-white/50 max-w-xl mx-auto">
              A timeline of our milestones and achievements.
            </p>
          </div>
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                <Check className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">2020</h3>
                <p className="text-white/60 text-sm">MultiGen was founded with the vision to revolutionize account generation.</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                <Check className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">2022</h3>
                <p className="text-white/60 text-sm">Launched our premium plans with advanced features.</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                <Check className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">2025</h3>
                <p className="text-white/60 text-sm">Reached 2 million users worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer & User Reviews Section */}
      <section id="reviews" className="relative z-10 py-32 bg-gradient-to-b from-[#0a0a0a] via-black/60 to-black/90">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Customer <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Reviews</span>
            </h2>
            <p className="text-lg text-white/50 max-w-xl mx-auto">
              See what our customers have to say about MultiGen.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
              <p className="text-white/60 text-base mb-4">&quot;MultiGen has been a lifesaver for my gaming needs. Highly recommend!&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Emily Brown</h4>
                  <span className="text-white/50 text-sm">Verified Customer</span>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
              <p className="text-white/60 text-base mb-4">&quot;The premium features are worth every penny. Great service!&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Michael Green</h4>
                  <span className="text-white/50 text-sm">Premium User</span>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
              <p className="text-white/60 text-base mb-4">&quot;Fast, reliable, and secure. MultiGen is the best!&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Sophia Lee</h4>
                  <span className="text-white/50 text-sm">Long-time User</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-lg text-white/40 max-w-xl mx-auto">
              Have questions? We’ve got answers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Is MultiGen free to use?</h3>
              <p className="text-sm text-white/60">Yes, MultiGen offers a free plan with basic features. Paid plans unlock premium features.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">How secure is MultiGen?</h3>
              <p className="text-sm text-white/60">We use advanced encryption and privacy measures to ensure your data is safe.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Can I cancel my subscription?</h3>
              <p className="text-sm text-white/60">Yes, you can cancel your subscription anytime from your account dashboard.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">What payment methods are accepted?</h3>
              <p className="text-sm text-white/60">We accept all major credit cards, PayPal, and other secure payment methods.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="relative z-10 py-32 bg-gradient-to-b from-[#0a0a0a] via-black/60 to-black/90">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Latest <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Articles</span>
            </h2>
            <p className="text-lg text-white/50 max-w-xl mx-auto">
              Stay updated with the latest news and insights from MultiGen.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Blog Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">How MultiGen Revolutionized Account Generation</h3>
              <p className="text-white/60 text-sm mb-6">Discover the story behind MultiGen and how we became the leading platform for account generation.</p>
              <a href="#" className="text-violet-400 hover:underline">Read More</a>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">Top 5 Features of MultiGen</h3>
              <p className="text-white/60 text-sm mb-6">Explore the features that make MultiGen the best choice for gamers and developers.</p>
              <a href="#" className="text-violet-400 hover:underline">Read More</a>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">Tips for Safe Account Generation</h3>
              <p className="text-white/60 text-sm mb-6">Learn how to generate accounts securely and avoid common pitfalls.</p>
              <a href="#" className="text-violet-400 hover:underline">Read More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="relative z-10 py-32 bg-gradient-to-b from-[#0a0a0a] via-black/60 to-black/90">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Get in <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-lg text-white/50 max-w-xl mx-auto">
              Have questions or feedback? We’d love to hear from you.
            </p>
          </div>
          <form className="max-w-3xl mx-auto space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Name</label>
              <input type="text" id="name" className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email</label>
              <input type="email" id="email" className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Your Email" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">Message</label>
              <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold hover:opacity-90 transition-all">Send Message</button>
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
                <a href="https://discord.gg/YOUR_INVITE" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors"><svg width="26" height="26" fill="currentColor" viewBox="0 0 71 55"><path d="M60.104 4.552A58.6 58.6 0 0 0 46.852.8a.14.14 0 0 0-.15.07c-2.01 3.58-4.25 8.25-5.83 12.01-7.01-1.05-13.85-1.05-20.77 0-1.59-3.77-3.86-8.43-5.84-12.01a.13.13 0 0 0-.15-.07A58.6 58.6 0 0 0 .896 4.552a.12.12 0 0 0-.06.05C-3.12 11.09-5.32 17.44-6.62 23.72a.13.13 0 0 0 .05.13c8.47 6.19 16.7 9.97 24.77 12.44a.14.14 0 0 0 .15-.05c1.9-2.6 3.6-5.36 5.08-8.23a.13.13 0 0 0-.07-.18c-2.77-1.05-5.41-2.3-7.98-3.77a.13.13 0 0 1-.01-.22c.54-.41 1.08-.84 1.6-1.27a.13.13 0 0 1 .13-.02c16.7 7.65 34.8 7.65 51.36 0a.13.13 0 0 1 .14.02c.53.43 1.06.86 1.6 1.27a.13.13 0 0 1-.01.22c-2.57 1.47-5.21 2.72-7.98 3.77a.13.13 0 0 0-.07.18c1.48 2.87 3.18 5.63 5.08 8.23a.14.14 0 0 0 .15.05c8.08-2.47 16.31-6.25 24.77-12.44a.13.13 0 0 0 .05-.13c-1.3-6.28-3.5-12.63-7.62-19.12a.12.12 0 0 0-.06-.05ZM23.73 37.14c-2.36 0-4.29-2.16-4.29-4.81 0-2.65 1.91-4.81 4.29-4.81 2.39 0 4.31 2.18 4.29 4.81 0 2.65-1.91 4.81-4.29 4.81Zm23.54 0c-2.36 0-4.29-2.16-4.29-4.81 0-2.65 1.91-4.81 4.29-4.81 2.39 0 4.31 2.18 4.29 4.81 0 2.65-1.91 4.81-4.29 4.81Z"/></svg></a>
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
                <li><a href="/legal/terms-of-service" className="hover:text-violet-400 transition-colors">Terms of Service</a></li>
                <li><a href="/policies/privacy-policy" className="hover:text-violet-400 transition-colors">Privacy Policy</a></li>
                <li><a href="/legal/security" className="hover:text-violet-400 transition-colors">Security</a></li>
                <li><a href="/legal/dmca" className="hover:text-violet-400 transition-colors">DMCA</a></li>
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
