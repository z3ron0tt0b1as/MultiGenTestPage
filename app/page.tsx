"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, ArrowRight, Star, Shield, Check, Users, Zap,
  Gamepad2, Crown, Gift, Infinity, Globe, Lock, Bot,
  Rocket, ChevronRight, User, Mail, PartyPopper
} from "lucide-react";

export default function Home() {
  const [showConfetti, setShowConfetti] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    }
  }, []);

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

  React.useEffect(() => {
    if (showConfetti) {
      const timeout = setTimeout(() => setShowConfetti(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [showConfetti]);

  return (
    <main className="min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Subtle Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
              <Gamepad2 className="w-4 h-4 text-[#0a0a0a]" />
            </div>
            <span className="font-bold text-lg text-white">MultiGen</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-white/60 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm text-white/60 hover:text-white transition-colors">How It Works</a>
            <a href="#pricing" className="text-sm text-white/60 hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="text-sm text-white/60 hover:text-white transition-colors">FAQ</a>
          </div>
          
          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <Link href="/dashboard">
                <Button className="bg-white text-[#0a0a0a] hover:bg-white/90 font-medium rounded-full px-5 h-9 text-sm">
                  Dashboard
                </Button>
              </Link>
            ) : (
              <>
                <Link href="/auth/login">
                  <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10 rounded-full h-9 text-sm">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/register">
                  <Button className="bg-white text-[#0a0a0a] hover:bg-white/90 font-medium rounded-full px-5 h-9 text-sm">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Confetti & Modal Easter Eggs */}
      {showConfetti && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[9999]">
          <div className="text-6xl animate-bounce select-none">
            {'🎉🎊🥳✨'}<span className="animate-spin inline-block">{'🎈'}</span>
          </div>
        </div>
      )}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999]">
          <div className="bg-white rounded-2xl p-10 shadow-2xl text-center max-w-xs mx-auto">
            <PartyPopper className="w-12 h-12 mx-auto text-[#0a0a0a] mb-4 animate-bounce" />
            <h2 className="text-2xl font-bold mb-2 text-[#0a0a0a]">Easter Egg Found!</h2>
            <p className="text-[#0a0a0a]/70 mb-4">You discovered the secret Konami code!</p>
            <button onClick={() => setShowModal(false)} className="mt-2 px-6 py-2 rounded-lg bg-[#0a0a0a] text-white font-medium hover:bg-[#0a0a0a]/90 transition-all">Close</button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative z-10 pt-24 pb-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-xs text-white/70 font-medium">Premium Account Generator</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white leading-[1.1]">
            The fastest way to generate
            <br />
            <span className="text-white/40">Roblox alt accounts</span>
          </h1>
          
          <p className="text-lg text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
            Instantly generate secure alt accounts with customizable avatars. 
            No phone or email required. Trusted by 2M+ users worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/auth/register">
              <Button size="lg" className="h-12 px-8 text-sm font-medium bg-white text-[#0a0a0a] hover:bg-white/90 rounded-full">
                Start Generating
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="#pricing">
              <Button size="lg" variant="outline" className="h-12 px-8 text-sm font-medium border-white/20 bg-transparent text-white hover:bg-white/10 rounded-full">
                View Pricing
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-white/40">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>100% Safe</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span>Instant Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>Global Access</span>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="relative z-10 py-16 border-y border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-sm text-white/30 mb-10 uppercase tracking-widest">Trusted by creators worldwide</p>
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
            {["2.4M+", "99.9%", "<5s", "24/7"].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-white">{stat}</p>
                <p className="text-xs text-white/40 mt-1">
                  {["Accounts Generated", "Success Rate", "Generation Time", "Uptime"][i]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Bento Grid Style */}
      <section id="features" className="relative z-10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm text-white/50 uppercase tracking-widest mb-4">Features</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Everything you need
            </h2>
            <p className="text-lg text-white/40 max-w-xl mx-auto">
              Powerful features designed for gamers, developers, and creators.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Large Feature Card */}
            <div className="lg:col-span-2 p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.15] transition-all group">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-white/60 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Instant Generation</h3>
              <p className="text-white/50 leading-relaxed">
                Generate accounts in under 5 seconds with our AI-powered system. 
                No waiting, no captchas, just instant delivery to your dashboard.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.15] transition-all group">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-white/60 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Undetectable</h3>
              <p className="text-white/50 leading-relaxed">
                Advanced stealth technology keeps your accounts safe from detection and bans.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.15] transition-all group">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-white/60 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Premium Status</h3>
              <p className="text-white/50 leading-relaxed">
                Every account comes with Premium status included. No extra steps required.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.15] transition-all group">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-white/60 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Robux Included</h3>
              <p className="text-white/50 leading-relaxed">
                Paid plans include Robux with every generated account. Perfect for trading.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.15] transition-all group">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  <Infinity className="w-6 h-6 text-white" />
                </div>
                <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-white/60 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Unlimited Access</h3>
              <p className="text-white/50 leading-relaxed">
                Generate as many accounts as you need with our unlimited enterprise plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative z-10 py-24 border-y border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm text-white/50 uppercase tracking-widest mb-4">How It Works</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Three simple steps
            </h2>
            <p className="text-lg text-white/40 max-w-xl mx-auto">
              Get started in minutes with our streamlined process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Create Account",
                description: "Sign up for free and access your personal dashboard. No payment needed to start.",
                icon: Users,
              },
              {
                step: "02",
                title: "Configure Options",
                description: "Select features, avatar style, and Robux amount for your generated accounts.",
                icon: Gamepad2,
              },
              {
                step: "03",
                title: "Generate & Use",
                description: "Click generate and receive credentials instantly. Use anywhere, anytime.",
                icon: Rocket,
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-7xl font-bold text-white/[0.03] absolute -top-4 left-0">
                  {item.step}
                </div>
                <div className="relative pt-12">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-white/50 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm text-white/50 uppercase tracking-widest mb-4">Pricing</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-white/40 max-w-xl mx-auto">
              Start free, upgrade when you need more. Cancel anytime.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Free Plan */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.15] transition-all">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-1">Free</h3>
                <p className="text-sm text-white/40">Perfect to get started</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$0</span>
                <span className="text-white/40 ml-1">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {["5 accounts/day", "Basic features", "Standard support", "No Robux included"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/60">
                    <Check className="w-4 h-4 text-white/40 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button className="w-full h-11 bg-white/10 text-white hover:bg-white/20 rounded-xl font-medium">
                Get Started
              </Button>
            </div>
            
            {/* Pro Plan */}
            <div className="p-8 rounded-2xl bg-white/[0.05] border-2 border-white/20 relative scale-[1.02]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white text-[#0a0a0a] text-xs font-semibold">
                Popular
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-1">Pro</h3>
                <p className="text-sm text-white/40">For serious users</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$9.99</span>
                <span className="text-white/40 ml-1">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {["100 accounts/day", "Premium features", "Priority support", "100 Robux per account", "Custom usernames"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                    <Check className="w-4 h-4 text-white flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button className="w-full h-11 bg-white text-[#0a0a0a] hover:bg-white/90 rounded-xl font-medium">
                Upgrade to Pro
              </Button>
            </div>
            
            {/* Enterprise Plan */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.15] transition-all">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-1">Enterprise</h3>
                <p className="text-sm text-white/40">Unlimited everything</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$29.99</span>
                <span className="text-white/40 ml-1">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {["Unlimited accounts", "All features included", "24/7 VIP support", "500 Robux per account", "API access"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/60">
                    <Check className="w-4 h-4 text-white/40 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button className="w-full h-11 bg-white/10 text-white hover:bg-white/20 rounded-xl font-medium">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-24 border-y border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm text-white/50 uppercase tracking-widest mb-4">Testimonials</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Loved by users
            </h2>
            <p className="text-lg text-white/40 max-w-xl mx-auto">
              See what our community has to say about MultiGen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Alex Chen", role: "Game Developer", quote: "MultiGen has completely transformed how I test my Roblox games. The instant generation is incredible." },
              { name: "Sarah Miller", role: "Content Creator", quote: "The premium features are worth every penny. Best investment I've made for my content creation workflow." },
              { name: "Marcus Johnson", role: "Pro Gamer", quote: "Fast, reliable, and secure. Been using MultiGen for over a year now with zero issues." },
            ].map((testimonial, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-white fill-white" />
                  ))}
                </div>
                <p className="text-white/70 mb-6 leading-relaxed">{`"${testimonial.quote}"`}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-white/60" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{testimonial.name}</p>
                    <p className="text-xs text-white/40">{testimonial.role}</p>
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
          <div className="text-center mb-16">
            <p className="text-sm text-white/50 uppercase tracking-widest mb-4">FAQ</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Common questions
            </h2>
          </div>
          
          <div className="space-y-6">
            {[
              { q: "Is MultiGen free to use?", a: "Yes, MultiGen offers a free plan with basic features. Paid plans unlock premium features, more accounts per day, and Robux included with each account." },
              { q: "How secure is MultiGen?", a: "We use advanced encryption and privacy measures. All data is encrypted in transit and at rest, and we never share your personal information." },
              { q: "Can I cancel my subscription?", a: "Yes, you can cancel your subscription anytime from your account dashboard. No questions asked, no hidden fees." },
              { q: "What payment methods are accepted?", a: "We accept all major credit cards, PayPal, and cryptocurrency payments for maximum flexibility." },
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                <h3 className="text-lg font-medium text-white mb-2">{faq.q}</h3>
                <p className="text-white/50 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 border-y border-white/[0.08]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-lg text-white/40 max-w-xl mx-auto mb-10">
            Join over 2 million users who trust MultiGen for their account generation needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/auth/register">
              <Button size="lg" className="h-12 px-8 text-sm font-medium bg-white text-[#0a0a0a] hover:bg-white/90 rounded-full">
                Start Generating Free
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="#pricing">
              <Button size="lg" variant="outline" className="h-12 px-8 text-sm font-medium border-white/20 bg-transparent text-white hover:bg-white/10 rounded-full">
                View All Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            {/* Brand */}
            <div className="col-span-2">
              <Link href="/" className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                  <Gamepad2 className="w-4 h-4 text-[#0a0a0a]" />
                </div>
                <span className="font-bold text-lg text-white">MultiGen</span>
              </Link>
              <p className="text-sm text-white/40 mb-4 max-w-xs">
                The #1 Roblox alt account generator. Secure, fast, and trusted worldwide.
              </p>
              <button
                onClick={() => setShowConfetti(true)}
                className="opacity-20 hover:opacity-40 transition-opacity"
                aria-label="Easter Egg"
              >
                <PartyPopper className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-3 text-sm text-white/40">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-3 text-sm text-white/40">
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-3 text-sm text-white/40">
                <li><a href="/legal/terms-of-service" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="/policies/privacy-policy" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="/legal/security" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/30">2026 MultiGen. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://discord.gg/" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">
                <Bot className="w-5 h-5" />
              </a>
              <a href="mailto:support@multigen.com" className="text-white/30 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
