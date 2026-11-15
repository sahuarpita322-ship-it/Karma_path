import React, { useState } from 'react';
import { 
  FaHeart, 
  FaHandsHelping, 
  FaTree, 
  FaWater, 
  FaGraduationCap, 
  FaMapMarkerAlt, 
  FaAward, 
  FaShieldAlt,
  FaShareAlt
} from 'react-icons/fa';
import { COMMUNITY_IMPACT_STORIES, type ImpactStory } from '../../data/karmaForGoodData';

export function CommunityImpactWall() {
  const [stories, setStories] = useState<ImpactStory[]>(COMMUNITY_IMPACT_STORIES);
  const [celebratedIds, setCelebratedIds] = useState<string[]>([]);

  const handleApplaud = (id: string) => {
    if (celebratedIds.includes(id)) return;
    setCelebratedIds([...celebratedIds, id]);
    setStories((prev) =>
      prev.map((s) => (s.id === id ? { ...s, applauseCount: s.applauseCount + 1 } : s))
    );
  };

  return (
    <section id="community-wall" className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#7955AE]/15 pb-4">
        <div className="space-y-1.5 max-w-2xl">
          <span className="px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#7955AE] text-white shadow-md inline-block">
            Community Impact Wall · ସାମାଜିକ ପ୍ରଭାବ
          </span>
          <h2 className="text-2xl sm:text-4xl font-cinzel font-black text-[#180B2B] dark:text-white">
            Together, We Create Impact
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-[#D0C3E3] font-serif">
            Celebrate inspiring verified deeds accomplished across Odisha. Every tree planted, meal served, and child tutored brings light into the world.
          </p>
        </div>

        <div className="text-xs font-semibold text-stone-500 dark:text-stone-400 self-start md:self-auto">
          Over 5,000+ Verified Collective Deeds
        </div>
      </div>

      {/* Verified Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stories.map((story) => {
          const isCelebrated = celebratedIds.includes(story.id);

          return (
            <div
              key={story.id}
              className="rounded-3xl overflow-hidden bg-white/95 dark:bg-[#1E0E34]/90 backdrop-blur-xl border border-[#7955AE]/20 dark:border-[#B9A5DF]/25 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                
                {/* Photo with Overlay */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-stone-900">
                  <img
                    src={story.image}
                    alt={story.activityTitle}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider bg-black/70 backdrop-blur-md text-amber-300 border border-white/20">
                      {story.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-xl text-[11px] font-bold bg-[#7955AE]/90 backdrop-blur-md text-white border border-white/20 flex items-center gap-1">
                      <FaAward size={10} className="text-amber-300" />
                      <span>+{story.karmaPoints} KP Verified</span>
                    </span>
                  </div>

                  {/* Bottom Contributor Info */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2.5 text-white">
                    <img
                      src={story.userAvatar}
                      alt={story.userName}
                      className="w-10 h-10 rounded-full object-cover border-2 border-amber-300 shadow-md shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="font-bold text-xs truncate">{story.userName}</div>
                      <div className="text-[10px] text-stone-200 flex items-center gap-1 font-serif">
                        <FaMapMarkerAlt size={9} className="text-rose-400 shrink-0" />
                        <span className="truncate">{story.location}</span>
                        <span>•</span>
                        <span>{story.date}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Story Body */}
                <div className="p-5 space-y-2.5">
                  <h3 className="text-base sm:text-lg font-cinzel font-black text-[#180B2B] dark:text-white leading-snug">
                    {story.activityTitle}
                  </h3>
                  <p className="text-xs text-stone-700 dark:text-[#E8E3F0] font-serif leading-relaxed italic">
                    “{story.story}”
                  </p>
                </div>

              </div>

              {/* Action Bar: Celebrate / Applaud */}
              <div className="p-5 pt-0 flex items-center justify-between border-t border-[#7955AE]/10 dark:border-white/10 mt-2">
                <span className="text-[11px] font-bold text-stone-500 dark:text-stone-400">
                  {story.applauseCount} Fellow Travelers Applauded
                </span>

                <button
                  onClick={() => handleApplaud(story.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition shadow-sm ${
                    isCelebrated
                      ? 'bg-rose-500 text-white shadow-rose-500/30'
                      : 'bg-[#7955AE]/15 hover:bg-rose-500 hover:text-white text-[#7955AE] dark:text-[#D9CCF2] border border-[#7955AE]/30'
                  }`}
                >
                  <FaHeart size={12} className={isCelebrated ? 'animate-ping' : ''} />
                  <span>{isCelebrated ? 'Celebrated!' : 'Celebrate Deed'}</span>
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {/* Privacy & Ethical Standards Banner */}
      <div className="p-4 rounded-2xl bg-[#7955AE]/5 dark:bg-black/30 border border-[#7955AE]/15 flex items-start gap-3 text-xs text-stone-600 dark:text-stone-300 font-serif leading-relaxed">
        <FaShieldAlt className="text-[#7955AE] text-lg shrink-0 mt-0.5" />
        <div>
          <strong className="text-[#180B2B] dark:text-white font-sans font-bold">Privacy & Beneficiary Dignity Protection: </strong>
          Karma-Path strictly protects the privacy and dignity of all supported individuals. We never publish identifiable photographs of children, hospital patients, or vulnerable individuals without verified guardian consent.
        </div>
      </div>

    </section>
  );
}
