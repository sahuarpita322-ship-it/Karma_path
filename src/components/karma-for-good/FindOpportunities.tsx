import React, { useState, useMemo } from 'react';
import { 
  FaCalendarAlt, 
  FaClock, 
  FaMapMarkerAlt, 
  FaCheckCircle, 
  FaUsers, 
  FaUserPlus, 
  FaSearch, 
  FaShieldAlt,
  FaEnvelope
} from 'react-icons/fa';
import { VOLUNTEER_OPPORTUNITIES, type VolunteerOpportunity } from '../../data/karmaForGoodData';

export function FindOpportunities() {
  const [selectedDistrict, setSelectedDistrict] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [registeredIds, setRegisteredIds] = useState<string[]>([]);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const districts = ['All', 'Puri', 'Khurda', 'Cuttack', 'Ganjam'];
  const categories = ['All', 'Environmental', 'Education', 'Helping People', 'Community Service', 'Culture & Heritage'];

  const filteredOpportunities = useMemo(() => {
    return VOLUNTEER_OPPORTUNITIES.filter((opp) => {
      const matchDist = selectedDistrict === 'All' || opp.district === selectedDistrict;
      const matchCat = selectedCategory === 'All' || opp.category === selectedCategory;
      return matchDist && matchCat;
    });
  }, [selectedDistrict, selectedCategory]);

  const handleJoin = (opp: VolunteerOpportunity) => {
    if (registeredIds.includes(opp.id)) {
      setAlertMessage(`You are already registered for "${opp.title}". We look forward to seeing you!`);
    } else {
      setRegisteredIds([...registeredIds, opp.id]);
      setAlertMessage(`Success! You have joined "${opp.title}". A confirmation has been sent to your registered email.`);
    }
    setTimeout(() => setAlertMessage(null), 4000);
  };

  return (
    <section id="find-opportunities" className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#7955AE]/15 pb-4">
        <div className="space-y-1.5 max-w-2xl">
          <span className="px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-600 text-white shadow-md inline-block">
            Field Opportunities · ପ୍ରତ୍ୟକ୍ଷ ସେବା ଅଭିଯାନ
          </span>
          <h2 className="text-2xl sm:text-4xl font-cinzel font-black text-[#180B2B] dark:text-white">
            Find Opportunities Near You
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-[#D0C3E3] font-serif">
            Join verified upcoming community drives, beach cleanups, blood donation camps, and children mentorship sessions across Odisha.
          </p>
        </div>

        <div className="text-xs font-semibold text-stone-500 dark:text-stone-400 self-start md:self-auto">
          {filteredOpportunities.length} Upcoming Events Active
        </div>
      </div>

      {alertMessage && (
        <div className="p-3.5 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-800 dark:text-emerald-200 text-xs font-semibold flex items-center gap-2 animate-fadeIn">
          <FaCheckCircle className="text-emerald-500 shrink-0 text-base" />
          <span>{alertMessage}</span>
        </div>
      )}

      {/* Filter Bar */}
      <div className="p-4 rounded-3xl bg-white/90 dark:bg-[#1E0E34]/90 backdrop-blur-xl border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 shadow-md flex flex-wrap items-center justify-between gap-3 text-xs">
        
        {/* District Filter */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-stone-600 dark:text-stone-300 flex items-center gap-1">
            <FaMapMarkerAlt size={11} className="text-rose-500" /> District:
          </span>
          <div className="flex flex-wrap items-center gap-1">
            {districts.map((dist) => (
              <button
                key={dist}
                onClick={() => setSelectedDistrict(dist)}
                className={`px-3 py-1 rounded-xl text-[11px] font-bold transition ${
                  selectedDistrict === dist
                    ? 'bg-[#7955AE] text-white shadow-sm'
                    : 'bg-stone-100 dark:bg-[#150A26] text-stone-600 dark:text-stone-300 hover:bg-[#7955AE]/15'
                }`}
              >
                {dist === 'All' ? 'All Odisha' : dist}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-stone-600 dark:text-stone-300">Cause:</span>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-1.5 rounded-xl text-xs bg-stone-100 dark:bg-[#150A26] border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 focus:outline-none focus:ring-2 focus:ring-[#7955AE] text-[#180B2B] dark:text-white font-semibold"
          >
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

      </div>

      {/* Opportunities List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredOpportunities.map((opp) => {
          const isJoined = registeredIds.includes(opp.id);
          const totalRegistered = opp.volunteersRegistered + (isJoined ? 1 : 0);
          const progressPercent = Math.min(100, Math.round((totalRegistered / opp.volunteersNeeded) * 100));

          return (
            <div
              key={opp.id}
              className="p-5 rounded-3xl bg-white/95 dark:bg-[#1E0E34]/90 backdrop-blur-xl border border-[#7955AE]/20 dark:border-[#B9A5DF]/25 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                
                {/* Header Tag and Urgency */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-[#7955AE]/15 text-[#7955AE] dark:text-[#D9CCF2] border border-[#7955AE]/25">
                    {opp.category}
                  </span>
                  {opp.isUrgent && (
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-rose-500/20 text-rose-600 dark:text-rose-300 border border-rose-500/30 animate-pulse">
                      Urgent Drive
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-cinzel font-black text-[#180B2B] dark:text-white leading-snug group-hover:text-[#7955AE] dark:group-hover:text-[#D9CCF2] transition">
                  {opp.title}
                </h3>

                {/* Organization Pill with Verified Badge */}
                <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-700 dark:text-stone-300">
                  <FaShieldAlt size={11} className="text-emerald-500 shrink-0" />
                  <span className="truncate">{opp.organization}</span>
                  {opp.isVerifiedOrg && (
                    <FaCheckCircle size={10} className="text-emerald-500 shrink-0" title="Verified NGO" />
                  )}
                </div>

                {/* Date & Time */}
                <div className="p-2.5 rounded-xl bg-stone-100/80 dark:bg-black/30 border border-[#7955AE]/10 space-y-1 text-xs">
                  <div className="flex items-center gap-2 text-stone-800 dark:text-stone-200">
                    <FaCalendarAlt size={11} className="text-[#7955AE] shrink-0" />
                    <span className="font-semibold">{opp.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <FaClock size={10} className="text-stone-400" />
                      <span>{opp.time}</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-600 dark:text-stone-300 text-[11px]">
                    <FaMapMarkerAlt size={11} className="text-rose-500 shrink-0" />
                    <span className="truncate">{opp.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-stone-600 dark:text-[#E8E3F0] font-serif leading-relaxed line-clamp-2">
                  {opp.description}
                </p>

                {/* Volunteers Needed Progress Bar */}
                <div className="space-y-1 pt-1 text-[11px]">
                  <div className="flex items-center justify-between font-semibold text-stone-600 dark:text-stone-300">
                    <span className="flex items-center gap-1">
                      <FaUsers size={11} className="text-[#7955AE]" />
                      <span>Volunteers: {totalRegistered} / {opp.volunteersNeeded}</span>
                    </span>
                    <span className="font-bold text-[#7955AE] dark:text-amber-300">{progressPercent}% Full</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-stone-200 dark:bg-white/10 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#7955AE] to-emerald-500 rounded-full transition-all duration-500"
                      style={{ width: `${progressPercent}%` }}
                    ></div>
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <button
                onClick={() => handleJoin(opp)}
                className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-cinzel font-bold text-xs uppercase tracking-wider transition ${
                  isJoined
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-[#7955AE] hover:bg-[#613A9E] text-white shadow-md shadow-purple-900/25'
                }`}
              >
                {isJoined ? (
                  <>
                    <FaCheckCircle size={11} />
                    <span>Registered (Spot Reserved)</span>
                  </>
                ) : (
                  <>
                    <FaUserPlus size={11} />
                    <span>Join Volunteer Drive</span>
                  </>
                )}
              </button>

            </div>
          );
        })}
      </div>

    </section>
  );
}
