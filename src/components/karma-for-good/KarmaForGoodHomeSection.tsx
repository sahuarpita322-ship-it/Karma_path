import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaHeart, 
  FaTree, 
  FaHandsHelping, 
  FaGraduationCap, 
  FaAward, 
  FaCheckCircle, 
  FaArrowRight, 
  FaPlusCircle,
  FaShieldAlt,
  FaWater
} from 'react-icons/fa';
import { KARMA_ACTIVITIES } from '../../data/karmaForGoodData';

export function KarmaForGoodHomeSection() {
  const featuredActivities = KARMA_ACTIVITIES.slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* Top Banner Card */}
      <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden p-6 sm:p-10 lg:p-12 border border-[#7955AE]/30 dark:border-[#B9A5DF]/35 bg-gradient-to-br from-[#24103D] via-[#2F1551] to-[#140824] text-white shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#7955AE]/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none -ml-16 -mb-16"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#7955AE] text-white shadow-md flex items-center gap-1.5">
                <FaHeart className="text-pink-300" />
                <span>Social Impact Platform</span>
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-amber-300 border border-white/20">
                “Every Good Deed Creates a Better World.”
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-cinzel font-black tracking-tight text-white">
              KARMA FOR GOOD
            </h2>

            <p className="text-base sm:text-lg font-serif font-bold text-amber-300">
              Do Good. Create Impact. Earn Karma.
            </p>

            <p className="text-xs sm:text-sm text-stone-300 font-serif leading-relaxed">
              “Your Journey Can Change Someone's Life.” Turn travel and daily actions into real-world blessings: clean beaches, plant native trees, tutor children, and support elderly shelters. Earn verified Karma Points and digital certificates.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/karma-for-good"
              className="flex items-center gap-2 px-6 py-3 rounded-2xl font-cinzel font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#7955AE] to-[#5C3691] hover:from-[#8E6BBF] hover:to-[#6E42B0] text-white shadow-lg shadow-purple-900/40 transition transform hover:-translate-y-0.5"
            >
              <span>Explore All Causes</span>
              <FaArrowRight size={11} />
            </Link>

            <Link
              to="/karma-for-good#my-dashboard"
              className="flex items-center gap-1.5 px-4 py-3 rounded-2xl font-cinzel font-bold text-xs uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/20 transition"
            >
              <FaAward size={12} className="text-amber-300" />
              <span>My Dashboard</span>
            </Link>
          </div>
        </div>

        {/* 4-Step Flow Pill Bar */}
        <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
            <div className="text-[10px] font-bold text-[#D9CCF2] uppercase">Step 1</div>
            <div className="font-cinzel font-bold text-white text-sm">Discover</div>
            <div className="text-[11px] text-stone-300 font-serif">Browse 12+ verified causes</div>
          </div>

          <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
            <div className="text-[10px] font-bold text-[#D9CCF2] uppercase">Step 2</div>
            <div className="font-cinzel font-bold text-white text-sm">Participate</div>
            <div className="text-[11px] text-stone-300 font-serif">Perform deed in real world</div>
          </div>

          <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
            <div className="text-[10px] font-bold text-[#D9CCF2] uppercase">Step 3</div>
            <div className="font-cinzel font-bold text-white text-sm">Submit Proof</div>
            <div className="text-[11px] text-stone-300 font-serif">Upload photos & location</div>
          </div>

          <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
            <div className="text-[10px] font-bold text-[#D9CCF2] uppercase">Step 4</div>
            <div className="font-cinzel font-bold text-white text-sm">Get Verified</div>
            <div className="text-[11px] text-stone-300 font-serif">Earn Points & Certificate</div>
          </div>
        </div>

      </div>

      {/* Featured 4 Activities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {featuredActivities.map((act) => (
          <div
            key={act.id}
            className="rounded-3xl overflow-hidden bg-white/95 dark:bg-[#1E0E34]/90 backdrop-blur-xl border border-[#7955AE]/20 dark:border-[#B9A5DF]/25 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
          >
            <div>
              <div className="relative h-44 overflow-hidden bg-stone-900">
                <img
                  src={act.image}
                  alt={act.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-black/75 backdrop-blur-md text-amber-300 border border-white/20">
                    {act.category}
                  </span>
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#7955AE] text-white">
                    +{act.karmaPoints} KP
                  </span>
                </div>
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                  <div className="text-[10px] font-bold text-amber-300 font-serif">{act.odiaName}</div>
                  <div className="text-[10px] text-stone-200">{act.timeRequired} • {act.difficulty}</div>
                </div>
              </div>

              <div className="p-4 space-y-2">
                <h3 className="font-cinzel font-black text-sm text-[#180B2B] dark:text-white leading-snug line-clamp-1">
                  {act.name}
                </h3>
                <p className="text-xs text-stone-600 dark:text-[#E8E3F0] font-serif leading-relaxed line-clamp-2">
                  {act.shortDescription}
                </p>
                <div className="text-[10px] text-stone-500 dark:text-stone-400 font-semibold pt-1 border-t border-[#7955AE]/10">
                  Target: {act.impactMetric}
                </div>
              </div>
            </div>

            <div className="p-4 pt-0">
              <Link
                to="/karma-for-good"
                className="w-full flex items-center justify-center gap-1.5 py-2 rounded-xl font-cinzel font-bold text-xs uppercase tracking-wider bg-[#7955AE]/15 hover:bg-[#7955AE] text-[#7955AE] hover:text-white dark:bg-white/10 dark:text-[#D9CCF2] dark:hover:bg-[#7955AE] dark:hover:text-white border border-[#7955AE]/30 transition"
              >
                <span>Participate</span>
                <FaArrowRight size={9} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Ethos Footer Quote */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#7955AE]/10 via-purple-500/5 to-transparent border border-[#7955AE]/20 text-center text-xs font-serif italic text-stone-700 dark:text-[#D0C3E3]">
        “Travel with Purpose. Help with Kindness. Leave Behind Good Karma.”
      </div>

    </section>
  );
}
