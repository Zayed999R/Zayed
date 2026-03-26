/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Trophy, 
  Target, 
  Users, 
  Gift, 
  Calendar, 
  ExternalLink, 
  Menu, 
  TrendingUp, 
  Award,
  CircleCheck,
  UserCheck,
  Info,
  Link
} from 'lucide-react';
import { motion } from 'motion/react';

const Card = ({ title, icon: Icon, children, className = "" }: { title: string, icon?: any, children: React.ReactNode, className?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`bg-[#111a44] p-6 rounded-xl shadow-[0_0_15px_rgba(0,123,255,0.2)] border border-[#2a3a7a] hover:border-[#4da3ff] transition-colors ${className}`}
  >
    <div className="flex items-center gap-2 mb-4">
      {Icon && <Icon className="w-5 h-5 text-[#4da3ff]" />}
      <h2 className="text-lg font-bold text-[#4da3ff] uppercase tracking-wider">{title}</h2>
    </div>
    <div className="space-y-3 text-gray-300">
      {children}
    </div>
  </motion.div>
);

const LeaderRow = ({ label, value, badge, badgeColor }: { label: string, value: string, badge?: string, badgeColor?: string }) => (
  <div className="flex justify-between items-center py-2 border-bottom border-[#2a3a7a] last:border-0">
    <span className="text-sm md:text-base">{label}</span>
    <div className="flex items-center gap-2">
      <span className="font-mono font-bold text-white">{value}</span>
      {badge && (
        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${badgeColor}`}>
          {badge}
        </span>
      )}
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0f2c] text-white font-sans selection:bg-[#4da3ff] selection:text-black">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-[#0d6efd] to-[#001f5b] px-6 py-4 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-[#001f5b] font-black text-xl italic">V</span>
          </div>
          <span className="text-2xl font-black tracking-tighter italic">VERSE</span>
        </div>
        <button className="bg-[#4da3ff] hover:bg-[#3d82cc] text-black px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-all active:scale-95 shadow-md">
          <Menu className="w-5 h-5" />
          <span className="hidden sm:inline">Menu</span>
        </button>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Monthly Role Models */}
          <Card title="Monthly Role Models" icon={Trophy} className="lg:col-span-2">
            <LeaderRow 
              label="🥇 RM Accountant (High Impact User)" 
              value="150 USDT" 
              badge="Gold" 
              badgeColor="bg-yellow-500 text-black" 
            />
            <LeaderRow 
              label="🥈 Other High Impact Users" 
              value="5-20 USDT" 
              badge="Silver" 
              badgeColor="bg-slate-300 text-black" 
            />
            <LeaderRow 
              label="🥉 Active Contributors" 
              value="Varies" 
              badge="Bronze" 
              badgeColor="bg-[#cd7f32] text-black" 
            />
          </Card>

          {/* Performance Stats */}
          <Card title="Performance Stats" icon={TrendingUp}>
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-sm text-gray-400">Tasks Completed</span>
                <span className="text-2xl font-bold text-white">120</span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-sm text-gray-400">Referrals Count</span>
                <span className="text-2xl font-bold text-white">35</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400 uppercase">Activity Score</span>
                  <span className="text-[#4da3ff] font-bold">89%</span>
                </div>
                <div className="w-full bg-[#1a2a6c] rounded-full h-2 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '89%' }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="bg-[#0d6efd] h-full shadow-[0_0_10px_rgba(13,110,253,0.5)]"
                  />
                </div>
              </div>
            </div>
          </Card>

          {/* Prize Pool Tracker */}
          <Card title="Prize Pool Tracker" icon={Award} className="lg:col-span-2">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <p className="text-sm">Total USDT for the month: <span className="text-white font-bold">2000$ - 3500$</span></p>
                <p className="text-xs text-gray-400 italic self-end">(Amount varies monthly)</p>
              </div>
              <div className="p-3 bg-[#0a0f2c] rounded-lg border border-[#2a3a7a] flex items-center justify-between">
                <span className="text-sm">Distributed amount: <span className="text-green-400 font-bold">Varies</span></span>
                <a 
                  href="https://t.me/GetVerse/486213/507384" 
                  target="_blank" 
                  className="text-[#4da3ff] hover:underline flex items-center gap-1 text-xs font-bold"
                >
                  Developers Reward List <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] text-gray-500 uppercase font-bold">
                  <span>Pool Progress</span>
                  <span>60% Allocated</span>
                </div>
                <div className="w-full bg-[#1a2a6c] rounded-full h-4 overflow-hidden p-0.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '60%' }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="bg-gradient-to-r from-[#0d6efd] to-[#4da3ff] h-full rounded-full"
                  />
                </div>
              </div>
            </div>
          </Card>

          {/* Leaderboard Summary */}
          <Card title="RM Leaderboard" icon={Users}>
            <div className="space-y-1">
              <LeaderRow label="1: Max Reward" value="150 USDT" />
              <LeaderRow label="2: Mid Reward" value="50 USDT" />
              <LeaderRow label="3: Minimum Reward" value="5-50 USDT" />
            </div>
          </Card>

          {/* Vibe Coding Winners */}
          <Card title="March Vibe Coding" icon={Gift} className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-[#0a0f2c] rounded-xl border border-[#2a3a7a] text-center">
                <div className="text-[#4da3ff] font-black text-2xl mb-1">Top 4</div>
                <div className="text-xs text-gray-400 uppercase mb-2">Users</div>
                <div className="text-white font-bold">500 USDT <span className="text-[10px] text-gray-500">each</span></div>
              </div>
              <div className="p-4 bg-[#0a0f2c] rounded-xl border border-[#2a3a7a] text-center">
                <div className="text-[#4da3ff] font-black text-2xl mb-1">1st 8</div>
                <div className="text-xs text-gray-400 uppercase mb-2">Users</div>
                <div className="text-white font-bold">100 USDT <span className="text-[10px] text-gray-500">each</span></div>
              </div>
              <div className="p-4 bg-[#0a0f2c] rounded-xl border border-[#2a3a7a] text-center">
                <div className="text-[#4da3ff] font-black text-2xl mb-1">102</div>
                <div className="text-xs text-gray-400 uppercase mb-2">Builders</div>
                <div className="text-white font-bold">20 USDT <span className="text-[10px] text-gray-500">each</span></div>
              </div>
            </div>
            <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-[#2a3a7a]">
              <div className="flex items-center gap-2 text-sm text-yellow-500">
                <Calendar className="w-4 h-4" />
                <span>Rewards: April, 1st Week</span>
              </div>
              <a 
                href="https://t.me/GetVerse/486213/507384" 
                target="_blank" 
                className="bg-[#0d6efd] hover:bg-[#0b5ed7] text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all"
              >
                See Details <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </Card>

          {/* Reset System */}
          <Card title="Reset System" icon={Calendar}>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-red-500/10 rounded-lg">
                <CircleCheck className="w-5 h-5 text-red-500" />
              </div>
              <p className="text-sm leading-relaxed">
                Data resets every month. A new competition starts fresh! Stay active to maintain your rank.
              </p>
            </div>
          </Card>

          {/* Community Links */}
          <Card title="Community Links" icon={Link}>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: "Main Channel", url: "https://t.me/GetVerse/177601" },
                { name: "Newbies", url: "https://t.me/GetVerse/387150" },
                { name: "Vibe Coding", url: "https://t.me/GetVerse/486213" },
                { name: "Verse Research", url: "https://t.me/GetVerse/476423" }
              ].map((link) => (
                <a 
                  key={link.name}
                  href={link.url} 
                  target="_blank"
                  className="flex items-center justify-between p-2 bg-[#0a0f2c] rounded hover:bg-[#1a2a6c] transition-colors text-xs font-medium"
                >
                  {link.name}
                  <ExternalLink className="w-3 h-3 text-gray-500" />
                </a>
              ))}
            </div>
          </Card>

          {/* Credits */}
          <Card title="Credits" icon={Info}>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0d6efd] flex items-center justify-center text-xs font-bold">JT</div>
                <div>
                  <div className="text-xs text-gray-400 uppercase">Chief Commander</div>
                  <div className="text-sm font-bold">JT @stone_brb</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#4da3ff] flex items-center justify-center text-xs font-bold text-black">ZB</div>
                <div>
                  <div className="text-xs text-gray-400 uppercase">Built By</div>
                  <div className="text-sm font-bold">@zayed999R</div>
                </div>
              </div>
            </div>
          </Card>

        </div>
      </main>

      <footer className="mt-12 py-8 border-t border-[#2a3a7a] text-center text-gray-500 text-xs">
        <p>© 2026 Verse Community Hub. All rights reserved.</p>
        <p className="mt-1">Empowering builders and role models in the Verse ecosystem.</p>
      </footer>
    </div>
  );
}
