
"use client";
// export const metadata = {
//   title: "Register | MultiGen - Roblox Alt Generator",
//   description: "Create a free MultiGen account and start generating unlimited Roblox alts instantly. No payment required!",
// };

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Zap, Mail, Lock, ArrowRight, Sparkles, Eye, EyeOff, AlertCircle, User, Check, Rocket, Shield, Star, Code, Users, Gift, Trophy, Crown } from "lucide-react";
import { Timer } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  useEffect(() => {
    // If token cookie exists, redirect to dashboard
    if (typeof window !== "undefined") {
      if (document.cookie.split(';').some((item) => item.trim().startsWith('token='))) {
        router.replace("/dashboard");
      }
    }
  }, [router]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Password complexity requirements
  const passwordRequirements = [
    { label: "At least 8 characters", met: password.length >= 8 },
    { label: "One uppercase letter", met: /[A-Z]/.test(password) },
    { label: "One lowercase letter", met: /[a-z]/.test(password) },
    { label: "One number", met: /[0-9]/.test(password) },
    { label: "One special character (!@#$%^&*)", met: /[!@#$%^&*(),.?":{}|<>]/.test(password) },
  ];

  const isPasswordValid = passwordRequirements.every(req => req.met);
  const doPasswordsMatch = password === confirmPassword && confirmPassword.length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate password complexity
    if (!isPasswordValid) {
      setError("Password does not meet all requirements");
      return;
    }

    // Validate passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        // User-friendly messages for common HTTP errors
        const statusMessages: Record<number, string> = {
          400: "Bad request. Please check your input and try again.",
          401: "Unauthorized. Please check your credentials or verify your email.",
          403: "Registration is currently disabled. Please contact our Support Team.",
          408: "Request timed out. Please try again.",
          409: "An account with that email already exists.",
          502: "Bad gateway. Please try again later.",
          503: "Service unavailable. Please try again later.",
          504: "Server timeout. Please try again later.",
          509: "Bandwidth limit exceeded. Please try again later or contact support.",
        };
        if (statusMessages[res.status]) {
          setError(statusMessages[res.status]);
        } else if (
          data.error === "Registration is currently disabled. Please contact our Support Team." ||
          data.error === "Registration may be disabled. This may be due to a Database Connection Issue. Please contact our Support Team."
        ) {
          setError(data.error);
        } else if (
          data.error === "Internal server error" ||
          (typeof data.error === "string" && data.error.toLowerCase().includes("database"))
        ) {
          setError(
            "Registration may be disabled. This may be due to a Database Connection Issue. Please contact our Support Team."
          );
        } else {
          setError(data.error || "Registration failed");
        }
        return;
      }

      // Store token
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Redirect to projects
      router.push("/dashboard");
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#030308] flex">
      {/* Epic Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] bg-cyan-500/25 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-violet-600/25 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-1/3 w-[500px] h-[500px] bg-fuchsia-500/15 rounded-full blur-[130px] animate-pulse" style={{ animationDelay: "2s" }} />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030308_70%)]" />
        
        {/* Floating particles */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-cyan-400/50 rounded-full animate-bounce" style={{ animationDuration: "3s" }} />
        <div className="absolute top-2/3 left-1/4 w-1.5 h-1.5 bg-violet-400/50 rounded-full animate-bounce" style={{ animationDuration: "2.5s", animationDelay: "0.5s" }} />
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-fuchsia-400/50 rounded-full animate-bounce" style={{ animationDuration: "4s", animationDelay: "1s" }} />
      </div>
      
      {/* Left Panel - Premium Registration Form */}
      <div className="w-full lg:w-1/2 relative z-10 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-10">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 rounded-xl blur-lg opacity-60" />
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
            </div>
            <span className="font-bold text-2xl text-white">MultiGen</span>
          </div>
          
          {/* Form Card */}
          <div className="relative">
            {/* Card glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/20 to-violet-500/20 rounded-3xl blur-xl" />
            
            <div className="relative bg-black/40 border border-white/10 rounded-3xl p-8 backdrop-blur-2xl shadow-2xl">
              <div className="text-center mb-8">
                <div className="relative inline-flex">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-2xl blur-lg opacity-40" />
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center mb-5 shadow-inner">
                    <Rocket className="w-8 h-8 text-violet-400" />
                  </div>
                </div>
                <h2 className="text-3xl font-black text-white">Create Account</h2>
                <p className="text-sm text-white/40 mt-2">
                  Start generating <span className="text-pink-400 font-semibold">premium Roblox alts</span> instantly
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="flex items-center gap-3 p-4 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-2xl">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                       {error && error.replace(/'/g, '&apos;').replace(/"/g, '&quot;')}
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white/70 text-sm font-medium">Name (optional)</Label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-violet-400 transition-colors" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="h-12 pl-12 bg-white/5 border-white/10 text-white placeholder:text-white/25 focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 rounded-xl transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white/70 text-sm font-medium">Email address</Label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-violet-400 transition-colors" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 pl-12 bg-white/5 border-white/10 text-white placeholder:text-white/25 focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 rounded-xl transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white/70 text-sm font-medium">Password</Label>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-violet-400 transition-colors" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={`h-12 pl-12 pr-12 bg-white/5 border-white/10 text-white placeholder:text-white/25 focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 rounded-xl transition-all ${password && !isPasswordValid ? "border-amber-500/50 focus:border-amber-500/50" : ""} ${password && isPasswordValid ? "border-emerald-500/50 focus:border-emerald-500/50" : ""}`}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  
                  {/* Password Requirements */}
                  {password && (
                    <div className="mt-3 p-4 bg-white/[0.03] border border-white/10 rounded-xl space-y-2">
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-xs font-semibold text-white/50 uppercase tracking-wider">Password Strength</p>
                        <div className="flex gap-1">
                          {[1,2,3,4,5].map((i) => (
                            <div key={i} className={`w-6 h-1.5 rounded-full transition-colors ${passwordRequirements.filter(r => r.met).length >= i ? (passwordRequirements.filter(r => r.met).length >= 4 ? "bg-emerald-500" : "bg-amber-500") : "bg-white/10"}`} />
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {passwordRequirements.map((req, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${req.met ? "bg-emerald-500/20 scale-100" : "bg-white/5 scale-90"}`}>
                              {req.met ? (
                                <Check className="w-3 h-3 text-emerald-400" />
                              ) : (
                                <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                              )}
                            </div>
                            <span className={`text-xs transition-colors ${req.met ? "text-emerald-400" : "text-white/40"}`}>{req.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-white/70 text-sm font-medium">Confirm Password</Label>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-violet-400 transition-colors" />
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className={`h-12 pl-12 pr-12 bg-white/5 border-white/10 text-white placeholder:text-white/25 focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 rounded-xl transition-all ${confirmPassword && !doPasswordsMatch ? "border-red-500/50 focus:border-red-500/50" : ""} ${doPasswordsMatch ? "border-emerald-500/50 focus:border-emerald-500/50" : ""}`}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {confirmPassword && (
                    <div className={`flex items-center gap-2 mt-2 text-xs ${doPasswordsMatch ? "text-emerald-400" : "text-red-400"}`}>
                      {doPasswordsMatch ? (
                        <><Check className="w-3.5 h-3.5" /> Passwords match</>
                      ) : (
                        <><AlertCircle className="w-3.5 h-3.5" /> Passwords do not match</>
                      )}
                    </div>
                  )}
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 hover:from-violet-500 hover:via-fuchsia-500 hover:to-cyan-500 text-white border-0 shadow-xl shadow-violet-500/30 rounded-xl font-semibold text-base transition-all duration-300 hover:shadow-violet-500/50 hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed" 
                  disabled={loading || !isPasswordValid || !doPasswordsMatch}
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Create Account
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-8 text-center">
                <span className="text-sm text-white/40">Already have an account? </span>
                <Link href="/auth/login" className="text-sm text-violet-400 hover:text-violet-300 font-semibold transition-colors">
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Panel - MultiGen Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative z-10 p-12 flex-col justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 rounded-xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 flex items-center justify-center shadow-2xl shadow-violet-500/30">
              <Star className="w-6 h-6 text-white" />
            </div>
          </div>
          <div>
            <span className="font-bold text-2xl text-white tracking-tight">MultiGen</span>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-pink-400" />
              <span className="text-xs text-white/50">Roblox Alt Generator</span>
            </div>
            <div className="text-xs text-violet-300 font-semibold mt-1">Free & Paid Roblox Alt Account Generator</div>
          </div>
        </Link>
        <div className="max-w-lg">
          {/* Special offer badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-fuchsia-500/20 border border-pink-500/30 mb-8">
            <Gift className="w-4 h-4 text-pink-400" />
            <span className="text-sm text-pink-200">Robux is only included with paid plans</span>
          </div>
          <h1 className="text-5xl font-black text-white mb-6 leading-tight">
            Start generating<br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">free & paid Roblox alts</span>
          </h1>
          <p className="text-lg text-white/40 mb-12 leading-relaxed">
            Join the top Roblox creators using MultiGen, the free & paid Roblox alt account generator, for instant, undetectable, Robux-included alt accounts.
          </p>
          {/* What's included */}
          <div className="space-y-4">
            {[
              { icon: Gift, text: "Robux (Paid Plans Only)", highlight: true },
              { icon: Infinity, text: "Unlimited alt generation", highlight: false },
              { icon: Shield, text: "Undetectable & secure", highlight: false },
              { icon: Timer, text: "Instant delivery", highlight: false },
              { icon: Crown, text: "Premium status", highlight: false },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 cursor-default ${feature.highlight ? "bg-gradient-to-r from-pink-500/10 to-fuchsia-500/10 border border-white/10" : "hover:bg-white/[0.02]"}`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${feature.highlight ? "bg-gradient-to-br from-pink-500 to-fuchsia-500 shadow-lg shadow-pink-500/30" : "bg-white/5"}`}>
                    {typeof Icon === "function" ? <Icon className={`w-5 h-5 ${feature.highlight ? "text-white" : "text-pink-400"}`} /> : null}
                  </div>
                  <span className={feature.highlight ? "text-white font-semibold" : "text-white/70"}>{feature.text}</span>
                  {feature.highlight && (
                    <span className="ml-auto px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">PAID</span>
                  )}
                </div>
              );
            })}
          </div>
          {/* Social proof */}
          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1,2,3,4,5].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500/30 to-fuchsia-500/30 border-2 border-[#030308] flex items-center justify-center">
                  <span className="text-xs font-bold text-white/60">{String.fromCharCode(64 + i)}</span>
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-sm text-white/40">Loved by <span className="text-white/70">2,400+</span> Roblox creators</p>
            </div>
          </div>
        </div>
        <p className="text-sm text-white/20">
          © 2026 MultiGen. All rights reserved.
        </p>
      </div>
    </div>
  );
}