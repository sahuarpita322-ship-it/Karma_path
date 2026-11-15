import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHeart, 
  FaTree, 
  FaHandsHelping, 
  FaWater, 
  FaGraduationCap, 
  FaUsers, 
  FaAward, 
  FaPlusCircle,
  FaShieldAlt,
  FaChevronDown
} from 'react-icons/fa';

interface KarmaForGoodHeroProps {
  onOpenSubmitModal: () => void;
  onScrollToSection: (sectionId: string) => void;
  onOpenAdminPanel: () => void;
}

export function KarmaForGoodHero({
  onOpenSubmitModal,
  onScrollToSection,
  onOpenAdminPanel
}: KarmaForGoodHeroProps) {
  return (
    <section className="relative rounded-3xl sm:rounded-[36px] overflow-hidden p-6 sm:p-12 lg:p-16 border border-[#7955AE]/35 dark:border-[#B9A5DF]/35 bg-gradient-to-br from-[#24103D] via-[#2F1551] to-[#140824] text-white shadow-2xl">
      
      {/* Background Animated Glow Spheres */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7955AE]/25 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Decorative Floating Glass Badges */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden xl:flex absolute top-12 right-16 items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-xs shadow-lg"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
        <span className="font-semibold text-emerald-300">Live Impact Network</span>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="hidden xl:flex absolute bottom-16 right-24 items-center gap-2.5 p-3 rounded-2xl bg-black/40 backdrop-blur-md border border-amber-400/30 text-xs text-amber-200 shadow-xl"
      >
        <FaAward className="text-amber-400 text-lg" />
        <div>
          <div className="font-bold">Verified Certificates</div>
          <div className="text-[10px] text-stone-300">Issued for Genuine Deeds</div>
        </div>
      </motion.div>

      <div className="relative z-10 max-w-4xl space-y-6">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#7955AE] text-white shadow-md flex items-center gap-1.5">
            <FaHeart className="text-pink-300" />
            <span>Social Impact Experience</span>
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md text-[#D9CCF2] border border-white/20">
            Every Good Deed Creates a Better World
          </span>
        </div>

        {/* Hero Title & Ethos */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-cinzel font-black tracking-tight leading-tight text-white">
            KARMA FOR GOOD
          </h1>
          <p className="text-lg sm:text-2xl font-serif font-bold text-amber-300 tracking-wide">
            Do Good. Create Impact. Earn Karma.
          </p>
          <p className="text-xs sm:text-sm text-stone-200 font-serif leading-relaxed max-w-2xl pt-1">
            “Your Journey Can Change Someone's Life.” Karma-Path empowers conscious travelers and citizens to plant trees, clean coastal shores, feed the hungry, mentor children, and preserve sacred culture. Submit verified proof, earn Karma Points, and unlock digital certificates.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={() => onScrollToSection('explore-deeds')}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl font-cinzel font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#7955AE] to-[#5C3691] hover:from-[#8E6BBF] hover:to-[#6E42B0] text-white shadow-lg shadow-purple-900/40 transition transform hover:-translate-y-0.5"
          >
            <FaHandsHelping size={14} />
            <span>Explore Good Deeds</span>
          </button>

          <button
            onClick={onOpenSubmitModal}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl font-cinzel font-bold text-xs uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/30 transition transform hover:-translate-y-0.5"
          >
            <FaPlusCircle size={14} />
            <span>“I Did Something Good”</span>
          </button>

          <button
            onClick={() => onScrollToSection('my-dashboard')}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl font-cinzel font-bold text-xs uppercase tracking-wider bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 transition"
          >
            <FaAward size={14} className="text-amber-300" />
            <span>My Karma Dashboard</span>
          </button>

          <button
            onClick={onOpenAdminPanel}
            className="flex items-center gap-1.5 px-3.5 py-3 rounded-2xl font-cinzel font-bold text-[11px] uppercase tracking-wider bg-black/40 hover:bg-black/60 text-stone-300 hover:text-white border border-white/15 transition"
            title="Moderator Verification Desk"
          >
            <FaShieldAlt size={12} className="text-[#B9A5DF]" />
            <span>Moderator Desk</span>
          </button>
        </div>

        {/* Live Aggregated Community Impact Metrics Bar */}
        <div className="pt-6 border-t border-white/15">
          <div className="text-[11px] uppercase tracking-wider font-bold text-[#D9CCF2] mb-3 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Verified Collective State Impact (ଓଡ଼ିଶା ସାମାଜିକ ଅବଦାନ)</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            
            <div className="p-3 rounded-2xl bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/15 text-center">
              <div className="flex items-center justify-center text-emerald-400 text-base mb-1">
                <FaTree />
              </div>
              <div className="text-lg sm:text-2xl font-black font-cinzel text-white">2,540+</div>
              <div className="text-[10px] text-stone-300 font-serif">Trees Planted</div>
            </div>

            <div className="p-3 rounded-2xl bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/15 text-center">
              <div className="flex items-center justify-center text-amber-400 text-base mb-1">
                <FaHandsHelping />
              </div>
              <div className="text-lg sm:text-2xl font-black font-cinzel text-white">1,280+</div>
              <div className="text-[10px] text-stone-300 font-serif">Meals Distributed</div>
            </div>

            <div className="p-3 rounded-2xl bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/15 text-center">
              <div className="flex items-center justify-center text-cyan-400 text-base mb-1">
                <FaWater />
              </div>
              <div className="text-lg sm:text-2xl font-black font-cinzel text-white">48</div>
              <div className="text-[10px] text-stone-300 font-serif">Beaches & Rivers Cleaned</div>
            </div>

            <div className="p-3 rounded-2xl bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/15 text-center">
              <div className="flex items-center justify-center text-indigo-400 text-base mb-1">
                <FaGraduationCap />
              </div>
              <div className="text-lg sm:text-2xl font-black font-cinzel text-white">620+</div>
              <div className="text-[10px] text-stone-300 font-serif">Children Tutored</div>
            </div>

            <div className="col-span-2 sm:col-span-1 p-3 rounded-2xl bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/15 text-center">
              <div className="flex items-center justify-center text-pink-400 text-base mb-1">
                <FaUsers />
              </div>
              <div className="text-lg sm:text-2xl font-black font-cinzel text-white">840+</div>
              <div className="text-[10px] text-stone-300 font-serif">Volunteers Joined</div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
