import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { stats } from '../data/mock';
import { FaLeaf, FaRecycle, FaCheckCircle, FaLandmark, FaCoins } from 'react-icons/fa';

export function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-4 pt-24 md:p-8 relative overflow-hidden">
      {/* Blurred Theme Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80" 
          alt="Eco theme background" 
           
          className="w-full h-full object-cover opacity-40 blur-lg scale-110"
        />
        <div className="absolute inset-0 bg-emerald-50/30"></div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-200/30 to-teal-200/40 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-200/40 to-emerald-200/30 rounded-full blur-3xl"></div>
      </div>

      <section className="mx-auto max-w-6xl rounded-3xl border border-emerald-200/50 bg-white/80 backdrop-blur-xl p-6 shadow-2xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid gap-8 md:grid-cols-2"
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-700 via-teal-600 to-green-600 bg-clip-text text-transparent leading-tight">
                Travel with Purpose
              </h1>
              <p className="text-xl text-emerald-700/80 mt-4 leading-relaxed">
                Earn Karma Tokens by completing eco-friendly tasks, preserving culture, and protecting nature in Odisha.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/dashboard"
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10">Start Your Journey</span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                to="/tasks"
                className="group rounded-2xl border-2 border-emerald-600/50 bg-white/70 backdrop-blur-sm px-8 py-4 text-emerald-700 font-semibold hover:bg-emerald-50 hover:border-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Tasks
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl border border-emerald-200/50 bg-white/60 backdrop-blur-sm p-6 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=800&q=80"
                alt="Beautiful mystical forest"
                className="h-80 w-full rounded-2xl object-cover shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4 rounded-2xl shadow-xl">
                <FaLeaf className="text-2xl" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 grid gap-6 md:grid-cols-4"
        >
          {[
            { label: 'Plastic Waste Collected', value: stats.plasticCollected, icon: FaRecycle, color: 'from-green-500 to-emerald-600' },
            { label: 'Tasks Completed', value: stats.tasksCompleted, icon: FaCheckCircle, color: 'from-blue-500 to-cyan-600' },
            { label: 'Heritage Preserved', value: stats.heritagePreserved, icon: FaLandmark, color: 'from-purple-500 to-indigo-600' },
            { label: 'Tokens Distributed', value: stats.tokensDistributed, icon: FaCoins, color: 'from-amber-500 to-orange-600' }
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.15, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-emerald-200/50 bg-white/70 backdrop-blur-sm p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <stat.icon className={`text-2xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${stat.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
              </div>
              <div className="text-sm text-emerald-700/70 font-medium">{stat.label}</div>
              <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mt-1`}>
                {stat.value}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 rounded-3xl border border-emerald-200/50 bg-white/70 backdrop-blur-sm p-8 shadow-2xl"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent mb-4">
              How Karma-Path Works
            </h2>
            <p className="text-emerald-700/70 text-lg">Your journey to meaningful travel in 4 simple steps</p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              { step: 'Explore', desc: 'Discover eco tasks and cultural experiences', icon: '🔍' },
              { step: 'Complete', desc: 'Upload proof of your positive impact', icon: '📸' },
              { step: 'Earn', desc: 'Receive Karma Tokens for your efforts', icon: '🏆' },
              { step: 'Unlock', desc: 'Access exclusive cultural experiences', icon: '🎭' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + idx * 0.1, duration: 0.6 }}
                className="group text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-emerald-200/30 hover:bg-white/70 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-xl font-bold text-emerald-700 mb-2">Step {idx + 1}</div>
                <div className="text-sm font-semibold text-emerald-600 mb-2">{item.step}</div>
                <div className="text-xs text-emerald-600/70">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
