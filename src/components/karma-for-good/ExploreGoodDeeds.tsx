import React, { useState, useMemo } from 'react';
import { 
  FaSearch, 
  FaTimes, 
  FaClock, 
  FaAward, 
  FaMapMarkerAlt, 
  FaBuilding, 
  FaCheckCircle, 
  FaChevronRight,
  FaFilter,
  FaHeart
} from 'react-icons/fa';
import { KARMA_ACTIVITIES, IMPACT_CATEGORIES, type KarmaActivity } from '../../data/karmaForGoodData';

interface ExploreGoodDeedsProps {
  onSelectActivityToParticipate: (activity: KarmaActivity) => void;
}

export function ExploreGoodDeeds({ onSelectActivityToParticipate }: ExploreGoodDeedsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredActivities = useMemo(() => {
    return KARMA_ACTIVITIES.filter((act) => {
      const matchCat =
        selectedCategory === 'All' ||
        act.category === selectedCategory ||
        act.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        selectedCategory.toLowerCase().includes(act.category.toLowerCase());
      const matchDiff = selectedDifficulty === 'All' || act.difficulty === selectedDifficulty;
      const matchSearch =
        act.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        act.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        act.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (act.organization && act.organization.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchDiff && matchSearch;
    });
  }, [selectedCategory, selectedDifficulty, searchQuery]);

  return (
    <section id="explore-deeds" className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#7955AE]/15 pb-4">
        <div className="space-y-1.5 max-w-2xl">
          <span className="px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#7955AE] text-white shadow-md inline-block">
            Impact Catalog · {KARMA_ACTIVITIES.length} Verified Causes
          </span>
          <h2 className="text-2xl sm:text-4xl font-cinzel font-black text-[#180B2B] dark:text-white">
            Explore Good Deeds
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-[#D0C3E3] font-serif">
            Discover meaningful causes across Odisha. Choose an activity, participate in the real world, and upload your verified proof to earn Karma Points.
          </p>
        </div>

        <div className="text-xs font-semibold text-stone-500 dark:text-stone-400 self-start md:self-auto">
          Showing <span className="font-bold text-[#7955AE] dark:text-amber-300">{filteredActivities.length}</span> verified causes
        </div>
      </div>

      {/* Filter & Search Controls */}
      <div className="p-4 rounded-3xl bg-white/90 dark:bg-[#1E0E34]/90 backdrop-blur-xl border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 shadow-md space-y-3">
        
        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative w-full sm:flex-1">
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 text-xs" />
            <input
              type="text"
              placeholder="Search by activity, location, beach, school, or NGO..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 rounded-xl text-xs bg-stone-100 dark:bg-[#150A26] border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 focus:outline-none focus:ring-2 focus:ring-[#7955AE] text-[#180B2B] dark:text-white"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
              >
                <FaTimes size={12} />
              </button>
            )}
          </div>

          {/* Difficulty Dropdown */}
          <div className="flex items-center gap-2 self-start sm:self-auto w-full sm:w-auto">
            <span className="text-[11px] font-bold text-stone-500 dark:text-stone-400">Difficulty:</span>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-3 py-1.5 rounded-xl text-xs bg-stone-100 dark:bg-[#150A26] border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 focus:outline-none focus:ring-2 focus:ring-[#7955AE] text-[#180B2B] dark:text-white font-semibold"
            >
              <option value="All">All Levels</option>
              <option value="Easy">Easy (1-2 hrs)</option>
              <option value="Medium">Medium (2-3 hrs)</option>
              <option value="Challenging">Challenging (4+ hrs)</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1 overflow-x-auto">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-3 py-1 rounded-xl text-[11px] font-bold transition whitespace-nowrap ${
              selectedCategory === 'All'
                ? 'bg-[#7955AE] text-white shadow-sm'
                : 'bg-stone-100 dark:bg-[#150A26] text-stone-600 dark:text-stone-300 hover:bg-[#7955AE]/15'
            }`}
          >
            All Causes ({KARMA_ACTIVITIES.length})
          </button>

          {IMPACT_CATEGORIES.map((cat) => {
            const count = KARMA_ACTIVITIES.filter(
              (a) =>
                a.category === cat.name ||
                a.category.toLowerCase().includes(cat.name.toLowerCase()) ||
                cat.name.toLowerCase().includes(a.category.toLowerCase())
            ).length;
            const isSelected = selectedCategory === cat.name || selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-3 py-1 rounded-xl text-[11px] font-bold transition whitespace-nowrap flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#7955AE] text-white shadow-sm'
                    : 'bg-stone-100 dark:bg-[#150A26] text-stone-600 dark:text-stone-300 hover:bg-[#7955AE]/15'
                }`}
              >
                <span>{cat.name}</span>
                <span className="opacity-75 text-[10px]">({count})</span>
              </button>
            );
          })}
        </div>

      </div>

      {/* Activity Cards Grid */}
      {filteredActivities.length === 0 ? (
        <div className="p-12 text-center rounded-3xl bg-white/70 dark:bg-[#1E0E34]/70 border border-[#7955AE]/20 space-y-3">
          <FaHeart className="mx-auto text-3xl text-stone-400" />
          <h3 className="font-cinzel font-bold text-lg text-[#180B2B] dark:text-white">No Activities Match Filter</h3>
          <p className="text-xs text-stone-500 font-serif">Try clearing your search query or selecting a different category.</p>
          <button
            onClick={() => { setSelectedCategory('All'); setSelectedDifficulty('All'); setSearchQuery(''); }}
            className="px-4 py-1.5 rounded-xl text-xs font-bold bg-[#7955AE] text-white"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActivities.map((activity) => (
            <div
              key={activity.id}
              className="rounded-3xl overflow-hidden bg-white/95 dark:bg-[#1E0E34]/90 backdrop-blur-xl border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                
                {/* Visual Image Header */}
                <div className="relative h-48 overflow-hidden bg-stone-900">
                  <img
                    src={activity.image}
                    alt={activity.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-black/75 backdrop-blur-md text-amber-300 border border-white/20">
                      {activity.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg text-[11px] font-black bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md border border-amber-400/40 flex items-center gap-1">
                      <FaAward size={10} />
                      <span>+{activity.karmaPoints} KP</span>
                    </span>
                  </div>

                  {/* Bottom Image Info */}
                  <div className="absolute bottom-3 left-3 right-3 text-white space-y-0.5">
                    <div className="text-[10px] font-serif font-bold text-amber-300">
                      {activity.odiaName}
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-stone-200">
                      <span className="flex items-center gap-1">
                        <FaClock size={9} className="text-[#B9A5DF]" />
                        <span>{activity.timeRequired}</span>
                      </span>
                      <span>•</span>
                      <span className="px-1.5 py-0.2 rounded bg-white/20 font-bold">
                        {activity.difficulty}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5 space-y-3">
                  <h3 className="text-base sm:text-lg font-cinzel font-black text-[#180B2B] dark:text-white leading-snug group-hover:text-[#7955AE] dark:group-hover:text-[#D9CCF2] transition">
                    {activity.name}
                  </h3>

                  <p className="text-xs text-stone-600 dark:text-[#E8E3F0] font-serif leading-relaxed line-clamp-2">
                    {activity.shortDescription}
                  </p>

                  {/* Location & Organization */}
                  <div className="space-y-1.5 pt-1 text-[11px] border-t border-[#7955AE]/10 dark:border-white/10">
                    <div className="flex items-center gap-1.5 text-stone-700 dark:text-stone-300">
                      <FaMapMarkerAlt size={10} className="text-rose-500 shrink-0" />
                      <span className="truncate">{activity.location}</span>
                    </div>
                    {activity.organization && (
                      <div className="flex items-center gap-1.5 text-stone-500 dark:text-stone-400">
                        <FaBuilding size={10} className="text-[#7955AE] shrink-0" />
                        <span className="truncate">{activity.organization}</span>
                      </div>
                    )}
                  </div>

                  {/* Impact Metric Pill */}
                  <div className="p-2 rounded-xl bg-[#7955AE]/10 dark:bg-white/5 border border-[#7955AE]/15 text-[11px] font-semibold text-[#7955AE] dark:text-[#D9CCF2] flex items-center gap-1.5">
                    <FaCheckCircle size={10} className="text-emerald-500" />
                    <span>Target Impact: {activity.impactMetric}</span>
                  </div>

                </div>
              </div>

              {/* Action Button */}
              <div className="p-4 sm:p-5 pt-0">
                <button
                  onClick={() => onSelectActivityToParticipate(activity)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-cinzel font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#7955AE] to-[#5C3691] hover:from-[#8E6BBF] hover:to-[#6E42B0] text-white shadow-md shadow-purple-900/25 transition transform active:scale-95"
                >
                  <span>Participate Now</span>
                  <FaChevronRight size={10} />
                </button>
              </div>

            </div>
          ))}
        </div>
      )}

    </section>
  );
}
