"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText, CheckCircle, Shield, Gamepad2 } from "lucide-react";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Aurora Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-40%] left-[-10%] w-[1000px] h-[800px] bg-violet-600/30 rounded-full blur-[200px] animate-pulse" />
        <div className="absolute top-[-20%] right-[-5%] w-[700px] h-[600px] bg-cyan-500/25 rounded-full blur-[180px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[5%] left-[25%] w-[500px] h-[500px] bg-pink-500/30 rounded-full blur-[160px] animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[40%] right-[10%] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: "3s" }} />
        <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[500px] bg-fuchsia-500/20 rounded-full blur-[180px] animate-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,#0a0a0a_70%)]" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 256 256\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noise)\"/%3E%3C/svg%3E')" }} />
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
            <Link href="/" className="px-5 py-2 text-sm font-medium text-white bg-white/10 rounded-full transition-all">Home</Link>
            <Link href="/legal/terms-of-service" className="px-5 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-full transition-all">Terms</Link>
            <Link href="/legal/security" className="px-5 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-full transition-all">Security</Link>
            <Link href="/legal/dmca" className="px-5 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-full transition-all">DMCA</Link>
            <Link href="/policies/privacy-policy" className="px-5 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-full transition-all">Privacy</Link>
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
      <section className="relative z-10 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FileText className="mx-auto w-16 h-16 text-violet-400 mb-6" />
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent mb-6">Terms of Service</h1>
          <p className="text-2xl text-white/80 mb-8 font-medium max-w-2xl mx-auto">
            Please read these terms carefully before using MultiGen. By accessing or using our service, you agree to these terms.
          </p>
        </div>
      </section>
      {/* Main Content */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 pb-24">
        <div className="bg-white/10 border border-violet-500/30 rounded-3xl p-8 shadow-2xl mb-10">
          <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-3"><CheckCircle className="w-7 h-7 text-cyan-400" />Acceptance of Terms</h2>
          <p className="text-lg text-white/70 mb-2">By using MultiGen, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use our service.</p>
        </div>
        <div className="bg-white/10 border border-fuchsia-500/30 rounded-3xl p-8 shadow-2xl mb-10">
          <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-3"><Shield className="w-7 h-7 text-fuchsia-400" />User Responsibilities</h2>
          <p className="text-lg text-white/70 mb-2">You are responsible for your account and all activities conducted through it. Do not use MultiGen for unlawful purposes or to violate the rights of others.</p>
        </div>
        <div className="bg-white/10 border border-cyan-500/30 rounded-3xl p-8 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-3"><FileText className="w-7 h-7 text-violet-400" />Changes to Terms</h2>
          <p className="text-lg text-white/70">We may update these terms from time to time. Continued use of MultiGen after changes means you accept the new terms.</p>
        </div>
      </section>
      {/* Footer */}
      <footer className="relative z-20 border-t border-white/10 pt-24 pb-10 bg-gradient-to-b from-black/80 via-[#0a0a0a]/95 to-black/100 text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Gamepad2 className="w-6 h-6 text-violet-400" />
            <span className="font-bold text-lg tracking-tight">MultiGen</span>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-white/60">
            <Link href="/legal/terms-of-service" className="hover:text-white underline underline-offset-2">Terms of Service</Link>
            <Link href="/legal/security" className="hover:text-white underline underline-offset-2">Security</Link>
            <Link href="/legal/dmca" className="hover:text-white underline underline-offset-2">DMCA</Link>
            <Link href="/policies/privacy-policy" className="hover:text-white underline underline-offset-2">Privacy Policy</Link>
          </div>
          <div className="text-xs text-white/30">&copy; {new Date().getFullYear()} MultiGen. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}
