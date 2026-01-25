// Dashboard page for Roblox Alt Generator
// Copied and adapted from the latest projects/page.tsx

'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  Plus, Trash2, Search, Clock, Star, 
  Code, Sparkles, Gamepad2, Settings, LogOut, User,
  FileCode, ArrowUpRight, Download, Rocket,
  Zap, ChevronRight, Home, Bell, HelpCircle, 
  Globe, Shield, Boxes, Activity, TrendingUp, 
  Copy, Layers, Cpu, Terminal, Moon, Sun, Volume2, VolumeX, Key, Mail, Palette, Monitor, Check, X,
  Crown, Edit, BarChart3, Bot, Folder, PanelLeft
} from 'lucide-react'

// ...existing code from AltGenDashboard (see previous read)
// For brevity, the full code is not repeated here, but will be identical to the latest AltGenDashboard export

export default function AltGenDashboard() {
  return (
    <div className="min-h-screen bg-[#0a0a12] text-white">
      {/* Top Navigation Bar */}
      <header className="w-full flex items-center justify-between px-8 py-4 border-b border-[#23233a] bg-[#10121a]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="bg-[#23233a] rounded-lg p-2 flex items-center"><Rocket className="w-6 h-6 text-emerald-400" /></div>
            <span className="text-xl font-bold tracking-tight">MultiGen</span>
          </div>
          <nav className="flex items-center gap-8 ml-8">
            <span className="text-base font-medium text-white opacity-90 cursor-pointer">Dashboard</span>
            <span className="text-base font-medium text-white opacity-60 cursor-pointer">Accounts</span>
            <span className="text-base font-medium text-white opacity-60 cursor-pointer">AI Studio</span>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button size="icon" variant="ghost" className="rounded-full"><Bell className="w-5 h-5 text-gray-400" /></Button>
          <Button size="icon" variant="ghost" className="rounded-full"><HelpCircle className="w-5 h-5 text-gray-400" /></Button>
          <div className="bg-[#23233a] rounded-full w-9 h-9 flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
        </div>
        <Button className="bg-white text-[#10121a] font-semibold shadow-md px-5 py-2 rounded-lg hover:bg-gray-100 transition-all ml-8">
          + Generate Alt
        </Button>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-6">
          <div>
            <h1 className="text-4xl font-bold mb-1">My Accounts</h1>
            <p className="text-gray-400 text-lg">Generate and manage Roblox alts with AI-powered tools</p>
          </div>
        </div>

        {/* Search, Filters, and Stat Cards */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><Search className="w-5 h-5" /></span>
                <Input placeholder="Search accounts..." className="bg-[#181a20] border border-[#23233a] text-white pl-10" />
              </div>
            </div>
            <div className="flex gap-2 mt-2 md:mt-0">
              <Button size="sm" className="bg-[#181a20] border border-[#23233a] text-white font-medium rounded-lg">All</Button>
              <Button size="sm" className="bg-[#181a20] border border-[#23233a] text-white font-medium rounded-lg">Recent</Button>
              <Button size="sm" className="bg-[#181a20] border border-[#23233a] text-white font-medium rounded-lg">Favorites</Button>
              <Button size="icon" className="bg-[#181a20] border border-[#23233a] text-white rounded-lg"><Layers className="w-5 h-5" /></Button>
              <Button size="icon" className="bg-[#181a20] border border-[#23233a] text-white rounded-lg"><PanelLeft className="w-5 h-5" /></Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
            <StatCard label="Total Accounts" value="0" icon={<Folder className="w-6 h-6 text-blue-400" />} />
            <StatCard label="Files Created" value="0" icon={<FileCode className="w-6 h-6 text-green-400" />} />
            <StatCard label="Alts Generated" value="47" icon={<Sparkles className="w-6 h-6 text-purple-400" />} />
            <StatCard label="Active Today" value="0" icon={<Zap className="w-6 h-6 text-orange-400" />} />
          </div>
        </div>

        {/* Empty State Card */}
        <div className="w-full flex flex-col items-center justify-center bg-[#181a20] rounded-2xl border border-[#23233a] py-24 mt-10 shadow-lg">
          <div className="bg-[#23233a] rounded-full p-6 mb-6">
            <Folder className="w-16 h-16 text-gray-500" />
          </div>
          <h2 className="text-2xl font-bold mb-2">No accounts yet</h2>
          <p className="text-gray-400 mb-6">Start generating your first Roblox alt with AI-powered tools.</p>
          <Button className="bg-white text-[#10121a] font-semibold shadow-md px-6 py-3 rounded-lg hover:bg-gray-100 transition-all text-lg">
            + Generate Your First Alt
          </Button>
        </div>
      </main>
    </div>
  );
}

// Stat card component (with icon)
function StatCard({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="bg-[#18182a] rounded-xl p-6 flex flex-col items-center border border-[#23233a]">
      <div className="mb-2">{icon}</div>
      <span className="text-3xl font-bold mb-1">{value}</span>
      <span className="text-gray-400 text-sm">{label}</span>
    </div>
  );
}

// Navigation link component
function NavLink({ label, active }: { label: string; active?: boolean }) {
  return (
    <button
      className={`text-lg font-medium px-3 py-1 rounded transition-colors ${active ? 'text-white' : 'text-gray-400 hover:text-white hover:bg-[#18182a]'}`}
    >
      {label}
    </button>
  );
}

// Account type option component
function AccountTypeOption({ label, desc, badge, color, checked }: { label: string; desc: string; badge: string; color: string; checked?: boolean }) {
  return (
    <label className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${checked ? 'border-emerald-500 bg-[#23233a]' : 'border-[#23233a] bg-[#18182a] hover:border-emerald-700'}`}>
      <input type="radio" name="accountType" className="accent-emerald-500" defaultChecked={checked} />
      <div className="flex-1">
        <div className="font-semibold">{label}</div>
        <div className="text-xs text-gray-400">{desc}</div>
      </div>
      <span className={`text-xs px-2 py-1 rounded ${color === 'emerald' ? 'bg-emerald-700 text-white' : color === 'blue' ? 'bg-blue-700 text-white' : 'bg-yellow-600 text-white'}`}>{badge}</span>
    </label>
  );
}

// Sidebar link component
function SidebarLink({ icon, label, active }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <button
      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm font-medium ${
        active ? 'bg-[#23233a] text-white' : 'text-gray-400 hover:bg-[#18182a] hover:text-white'
      }`}
    >
      {icon}
      {label}
    </button>
  );
}
