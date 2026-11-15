import { useMemo } from 'react';
import { useStore } from '../context/store';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { FaCoins, FaTrophy, FaHistory, FaCheckCircle, FaLock, FaStore, FaHandsHelping, FaExchangeAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function Wallet() {
  const karmaBalance = useStore((s) => s.karmaBalance);
  const currentUser = useStore((s) => s.currentUser);

  if (!currentUser) {
    return (
      <main className="min-h-screen pt-32 pb-20 px-4 sm:px-6 flex items-center justify-center max-w-xl mx-auto">
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-orange-500/30 w-full text-center space-y-6 shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-600 via-orange-600 to-red-600 flex items-center justify-center text-white text-3xl mx-auto shadow-xl shadow-orange-600/30">
            <FaCoins />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-cinzel font-black text-stone-900 dark:text-white">
              Karma Token Wallet
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-2 max-w-md mx-auto">
              Please create an account or sign in to view your token balance, unlock cultural workshop levels, and redeem artisan discounts.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              to="/signup?mode=signup"
              className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold text-xs shadow-lg transition text-center"
            >
              Create Account (+50 KT)
            </Link>
            <Link
              to="/signup?mode=login"
              className="flex-1 py-3 rounded-2xl border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200 font-bold text-xs transition text-center"
            >
              Sign In
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const earned = currentUser?.totalEarned || karmaBalance;
  const spent = Math.max(0, earned - karmaBalance);

  const chartData = [
    { name: 'Available Balance', value: karmaBalance, fill: '#f59e0b' },
    { name: 'Total Earned', value: earned, fill: '#10b981' },
    { name: 'Points Redeemed', value: spent, fill: '#8b5cf6' }
  ];

  const redemptionLevels = [
    { level: 'Level 1 (50 KP)', title: 'Virtual Museum Student & Researcher Pass', desc: 'Full unrestricted HD photogrammetry and audio access', unlocked: karmaBalance >= 50 },
    { level: 'Level 2 (100 KP)', title: 'Artisan Workshop Invitation', desc: 'Direct invitation to Pattachitra or Ikat weaving masterclasses', unlocked: karmaBalance >= 100 },
    { level: 'Level 3 (200 KP)', title: 'Guided Community Eco-Trek in Deomali', desc: 'Trek with certified local indigenous guides', unlocked: karmaBalance >= 200 },
    { level: 'Level 4 (350 KP)', title: 'Cultural Immersion & Handloom Discount', desc: 'Special 20% subsidy voucher on Local Hands marketplace products', unlocked: karmaBalance >= 350 }
  ];

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8">
      {/* Header Card */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-amber-500/25 bg-gradient-to-r from-amber-950/30 to-orange-950/30">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-500 uppercase tracking-wider mb-1">
              <FaCoins /> Verified Karma Wallet
            </div>
            <h1 className="text-3xl font-black text-slate-900 dark:text-white">
              {currentUser.name}’s Karma Vault
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Tokens earned by completing verified environmental tasks, cultural deeds, and supporting village artisans.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-center flex-shrink-0">
            <div className="text-3xl sm:text-4xl font-black text-amber-500">{karmaBalance}</div>
            <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300">Available Karma Tokens (KT)</div>
          </div>
        </div>

        {/* 3 Metric Pills */}
        <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 text-center">
          <div>
            <div className="text-xs text-slate-400">Current Balance</div>
            <div className="text-xl sm:text-2xl font-black text-amber-500">{karmaBalance} KT</div>
          </div>
          <div>
            <div className="text-xs text-slate-400">Total Earned</div>
            <div className="text-xl sm:text-2xl font-black text-emerald-500">{earned} KT</div>
          </div>
          <div>
            <div className="text-xs text-slate-400">Points Redeemed</div>
            <div className="text-xl sm:text-2xl font-black text-purple-400">{spent} KT</div>
          </div>
        </div>
      </div>

      {/* Wallet Chart */}
      <div className="glass-card rounded-3xl p-6 border border-orange-500/20">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">
          Token Distribution Analytics
        </h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
              <YAxis stroke="#94a3b8" fontSize={12} />
              <Tooltip
                contentStyle={{ backgroundColor: '#181824', borderColor: '#ff5722', borderRadius: '12px', fontSize: '12px' }}
              />
              <Bar dataKey="value" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Redemption Levels */}
      <div className="glass-card rounded-3xl p-6 border border-orange-500/20 space-y-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <FaTrophy className="text-amber-500" /> Karma Reward Redemption Tiers
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {redemptionLevels.map((lvl, i) => (
            <div
              key={i}
              className={`p-4 rounded-2xl border transition ${
                lvl.unlocked
                  ? 'bg-emerald-500/10 border-emerald-500/30'
                  : 'bg-slate-100 dark:bg-slate-800/60 border-slate-200 dark:border-slate-800 opacity-70'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-bold mb-1">
                <span className={lvl.unlocked ? 'text-emerald-500' : 'text-slate-400'}>{lvl.level}</span>
                {lvl.unlocked ? (
                  <span className="text-emerald-500 flex items-center gap-1"><FaCheckCircle /> Unlocked</span>
                ) : (
                  <span className="text-slate-400 flex items-center gap-1"><FaLock /> Locked</span>
                )}
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">{lvl.title}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{lvl.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Transaction History */}
      <div className="glass-card rounded-3xl p-6 border border-orange-500/20 space-y-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <FaHistory className="text-orange-500" /> Transaction & Point History
        </h3>
        <div className="space-y-3">
          {currentUser?.history.map((tx) => (
            <div
              key={tx.id}
              className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs"
            >
              <div>
                <div className="font-bold text-slate-900 dark:text-white">{tx.taskTitle}</div>
                <div className="text-[10px] text-slate-400">{tx.date}</div>
              </div>
              <div className="font-black text-amber-500 text-sm">+{tx.tokens} KT</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
