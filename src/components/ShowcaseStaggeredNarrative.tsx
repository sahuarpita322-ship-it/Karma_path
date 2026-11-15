import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowRight, 
  FaHeart, 
  FaHandsHelping,
  FaAward
} from 'react-icons/fa';

interface MissionFeature {
  id: string;
  badge: string;
  title: string;
  odiaTitle: string;
  tagline: string;
  description: string;
  impactMetrics: Array<{ label: string; value: string }>;
  image: string;
  actionText: string;
  actionLink: string;
  tags: string[];
}

export const ShowcaseStaggeredNarrative: React.FC = () => {
  // Card 1: Doing Good Deeds & Social Impact (Image LEFT, Content RIGHT)
  const featGoodKarma: MissionFeature = {
    id: 'good-karma',
    badge: 'Purpose-Driven Tourism',
    title: 'Doing Good Deeds & Social Impact',
    odiaTitle: 'କର୍ମ ଯାତ୍ରା ଓ ସମାଜ ସେବା',
    tagline: 'Earn Karma Tokens by preserving living heritage and doing good deeds.',
    description: 'Karma-Path transforms passive sightseeing into active cultural stewardship. Travelers earn Karma Tokens (KT) by cleaning heritage trails, documenting endangered oral folklore, respecting sacred rituals, and supporting grassroots conservation. Every token earned can be spent directly on authentic artisan creations and village homestays.',
    impactMetrics: [
      { label: 'Token Utility', value: '100% Community-Backed' },
      { label: 'Artisan Fund Allocation', value: 'Zero Middlemen' },
      { label: 'Conservation Tasks', value: '250+ Verified Missions' },
      { label: 'Impact Reward Rate', value: 'Earn up to 50 KT/Day' }
    ],
    image: '/doing-good-deeds.jpg',
    actionText: 'Explore Karma Missions',
    actionLink: '/tasks',
    tags: ['Social Impact', 'Karma Tokens', 'Volunteer Travel', 'Eco-Cleanliness']
  };

  // Card 2: Handloom & Rare Handicrafts Uplift (Image RIGHT, Content LEFT)
  const featHandloomCrafts: MissionFeature = {
    id: 'handloom-crafts',
    badge: 'Fair Trade & Artisan Uplift',
    title: 'Empowering Odisha Handlooms & Rare Handicrafts',
    odiaTitle: 'ଓଡ଼ିଶା ହସ୍ତତନ୍ତ ଓ ହସ୍ତଶିଳ୍ପ ବିକାଶ',
    tagline: 'Supporting rural master weavers, Pattachitra painters, and metal smiths with direct fair trade.',
    description: "Karma-Path directly champions Odisha's world-renowned artisan heritage—from master Sambalpuri Ikat and Berhampur Patta silk weavers to Raghurajpur's ancient Pattachitra painters and Belaguntha's flexible brass masters. By eliminating middlemen and connecting travelers directly to verified craft clusters, we ensure that every artisan receives fair recognition, sustainable income, and global appreciation.",
    impactMetrics: [
      { label: 'Direct Weaver Earnings', value: '100% Fair Remuneration' },
      { label: 'Verified Craft Clusters', value: '22+ Artisan Villages' },
      { label: 'GI-Tag Protection', value: 'Authentic Heritage Certified' },
      { label: 'Middlemen Eliminated', value: 'Direct-to-Artisan Platform' }
    ],
    image: '/odisha-handloom-crafts.jpg',
    actionText: 'Explore Artisan Clusters & Crafts',
    actionLink: '/villages',
    tags: ['Handloom Weavers', 'Pattachitra Art', 'Sambalpuri Ikat', 'Bell Metal Craft']
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[#7955AE]/15 text-[#7955AE] dark:bg-white/15 dark:text-white border border-[#7955AE]/25 dark:border-white/20">
          <FaHeart className="text-rose-500 animate-pulse" />
          <span>How Karma-Path Empowers Odisha</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-cinzel font-black tracking-tight text-[#180B2B] dark:text-white leading-tight">
          What We Stand For:{' '}
          <span className="bg-gradient-to-r from-[#7955AE] via-[#9370D8] to-[#503C6B] dark:from-white dark:via-[#D9CCF2] dark:to-[#B9A5DF] bg-clip-text text-transparent font-serif italic">
            Incredible Work & Purpose
          </span>
        </h2>

        <p className="text-sm sm:text-base text-stone-600 dark:text-[#E8E3F0] font-serif italic leading-relaxed">
          We combine cutting-edge technology with deep cultural respect to uplift rural weavers, safeguard heritage, and reward conscious travelers for doing good deeds.
        </p>
      </div>

      <div className="space-y-10">

        {/* =========================================================================
            CARD 1: DOING GOOD DEEDS & SOCIAL IMPACT
            Image on the LEFT (md:order-1), Content on the RIGHT (md:order-2)
            ========================================================================= */}
        <div className="relative rounded-3xl overflow-hidden border border-[#7955AE]/25 dark:border-[#B9A5DF]/35 bg-white/95 dark:bg-[#1E0E34]/95 shadow-2xl p-6 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center backdrop-blur-2xl hover:border-[#7955AE]/50 transition-all duration-300">
          
          {/* Visual Photo Card (5 Cols) — md:order-1 (LEFT) */}
          <div className="md:col-span-5 md:order-1 rounded-2xl overflow-hidden shadow-2xl border border-black/10 relative group">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full bg-slate-900">
              <img
                src={featGoodKarma.image}
                alt={featGoodKarma.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/puri.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold bg-[#180B2B]/85 text-white backdrop-blur-md border border-white/20">
                {featGoodKarma.badge}
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <div className="text-xs font-serif text-[#D9CCF2]">{featGoodKarma.odiaTitle}</div>
                <div className="font-cinzel font-bold text-base">{featGoodKarma.title}</div>
              </div>
            </div>

            {/* Tag Pills */}
            <div className="p-3 bg-stone-100 dark:bg-[#150A26] flex flex-wrap gap-1.5 border-t border-black/5">
              {featGoodKarma.tags.map((t, i) => (
                <span key={i} className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-white dark:bg-[#1E0E34] text-[#7955AE] dark:text-[#B9A5DF] border border-black/5">
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* Narrative & Impact Metrics (7 Cols) — md:order-2 (RIGHT) */}
          <div className="md:col-span-7 md:order-2 space-y-5">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#7955AE] dark:text-[#B9A5DF]">
                Core Platform Capability • Feature 01
              </span>
              <h3 className="text-2xl sm:text-3xl font-cinzel font-black text-[#180B2B] dark:text-white leading-tight">
                {featGoodKarma.title}
              </h3>
              <p className="text-sm font-serif italic font-semibold text-[#613A9E] dark:text-[#C7B5E8]">
                {featGoodKarma.tagline}
              </p>
              <p className="text-sm font-serif text-stone-700 dark:text-[#E8E3F0] leading-relaxed pt-1">
                {featGoodKarma.description}
              </p>
            </div>

            {/* 4 Impact Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {featGoodKarma.impactMetrics.map((metric, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-stone-50 dark:bg-[#150A26] border border-[#7955AE]/15 dark:border-[#B9A5DF]/20 space-y-1"
                >
                  <div className="text-[10px] uppercase font-bold tracking-wider text-stone-400 dark:text-stone-400">
                    {metric.label}
                  </div>
                  <div className="font-cinzel font-black text-sm sm:text-base text-[#180B2B] dark:text-white">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <Link
                to={featGoodKarma.actionLink}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-cinzel font-bold text-xs uppercase tracking-wider transition-all duration-300 bg-[#7955AE] text-white hover:bg-[#613A9E] shadow-lg shadow-purple-500/25 dark:bg-white dark:text-[#180B2B] dark:hover:bg-[#E8E3F0]"
              >
                <span>{featGoodKarma.actionText}</span>
                <FaArrowRight size={11} />
              </Link>
            </div>

          </div>

        </div>

        {/* =========================================================================
            CARD 2: ODISHA HANDLOOM & RARE HANDICRAFTS UPLIFT
            Image on the RIGHT (md:order-2), Content on the LEFT (md:order-1)
            ========================================================================= */}
        <div className="relative rounded-3xl overflow-hidden border border-[#7955AE]/25 dark:border-[#B9A5DF]/35 bg-white/95 dark:bg-[#1E0E34]/95 shadow-2xl p-6 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center backdrop-blur-2xl hover:border-[#7955AE]/50 transition-all duration-300">
          
          {/* Visual Photo Card (5 Cols) — md:order-2 (RIGHT) */}
          <div className="md:col-span-5 md:order-2 rounded-2xl overflow-hidden shadow-2xl border border-black/10 relative group">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full bg-slate-900 flex items-center justify-center overflow-hidden">
              <img
                src={featHandloomCrafts.image}
                alt={featHandloomCrafts.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/puri.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold bg-[#180B2B]/85 text-white backdrop-blur-md border border-white/20">
                {featHandloomCrafts.badge}
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <div className="text-xs font-serif text-[#D9CCF2]">{featHandloomCrafts.odiaTitle}</div>
                <div className="font-cinzel font-bold text-base">Handloom & Crafts Uplift</div>
              </div>
            </div>

            {/* Tag Pills */}
            <div className="p-3 bg-stone-100 dark:bg-[#150A26] flex flex-wrap gap-1.5 border-t border-black/5">
              {featHandloomCrafts.tags.map((t, i) => (
                <span key={i} className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-white dark:bg-[#1E0E34] text-[#7955AE] dark:text-[#B9A5DF] border border-black/5">
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* Narrative & Impact Metrics (7 Cols) — md:order-1 (LEFT) */}
          <div className="md:col-span-7 md:order-1 space-y-5">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#7955AE] dark:text-[#B9A5DF]">
                Artisan Prosperity • Feature 02
              </span>
              <h3 className="text-2xl sm:text-3xl font-cinzel font-black text-[#180B2B] dark:text-white leading-tight">
                {featHandloomCrafts.title}
              </h3>
              <p className="text-sm font-serif italic font-semibold text-[#613A9E] dark:text-[#C7B5E8]">
                {featHandloomCrafts.tagline}
              </p>
              <p className="text-sm font-serif text-stone-700 dark:text-[#E8E3F0] leading-relaxed pt-1">
                {featHandloomCrafts.description}
              </p>
            </div>

            {/* 4 Impact Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {featHandloomCrafts.impactMetrics.map((metric, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-stone-50 dark:bg-[#150A26] border border-[#7955AE]/15 dark:border-[#B9A5DF]/20 space-y-1"
                >
                  <div className="text-[10px] uppercase font-bold tracking-wider text-stone-400 dark:text-stone-400">
                    {metric.label}
                  </div>
                  <div className="font-cinzel font-black text-sm sm:text-base text-[#180B2B] dark:text-white">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <Link
                to={featHandloomCrafts.actionLink}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-cinzel font-bold text-xs uppercase tracking-wider transition-all duration-300 bg-[#7955AE] text-white hover:bg-[#613A9E] shadow-lg shadow-purple-500/25 dark:bg-white dark:text-[#180B2B] dark:hover:bg-[#E8E3F0]"
              >
                <span>{featHandloomCrafts.actionText}</span>
                <FaArrowRight size={11} />
              </Link>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
