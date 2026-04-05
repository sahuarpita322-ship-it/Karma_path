import { useMemo } from 'react';
import { useStore } from '../context/store';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export function Wallet() {
  const karmaBalance = useStore((s) => s.karmaBalance);
  const tasks = useStore((s) => s.tasks);

  const earned = useMemo(() => tasks.reduce((acc, t) => acc + (t.completed ? t.reward : 0), 0), [tasks]);
  const spent = Math.max(0, earned - karmaBalance);
  const chartData = [
    { name: 'Earned', value: earned },
    { name: 'Spent', value: spent },
    { name: 'Balance', value: karmaBalance }
  ];

  return (
    <main className="min-h-screen relative p-4 pt-24 md:p-8 pb-12">
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1920&q=80')` }}
      >
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
      </div>
      <section className="mx-auto max-w-6xl rounded-3xl border border-white/50 bg-white/80 backdrop-blur-xl p-6 shadow-2xl relative z-10">
        <h1 className="text-3xl font-bold text-forest mb-4">Token Wallet</h1>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/50 bg-white/60 backdrop-blur-md shadow-lg p-4">Balance<br/><span className="text-3xl font-bold text-forest">{karmaBalance}</span></div>
          <div className="rounded-2xl border border-white/50 bg-white/60 backdrop-blur-md shadow-lg p-4">Earned<br/><span className="text-3xl font-bold text-forest">{earned}</span></div>
          <div className="rounded-2xl border border-white/50 bg-white/60 backdrop-blur-md shadow-lg p-4">Spent<br/><span className="text-3xl font-bold text-forest">{spent}</span></div>
        </div>

        <div className="mt-6 h-64 rounded-2xl border border-white/50 bg-white/60 backdrop-blur-md shadow-lg p-3">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#1B5E20" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-forest">Reward Levels</h2>
          <ul className="mt-2 space-y-2 text-earth">
            <li>Level 1: Virtual Museum Premium Access</li>
            <li>Level 2: Artisan Workshop Invite</li>
            <li>Level 3: Guided Eco Trek</li>
            <li>Level 4: Cultural Immersion Event</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
