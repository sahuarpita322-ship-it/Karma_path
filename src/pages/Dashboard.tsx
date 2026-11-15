import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaCoins, 
  FaCompass, 
  FaLandmark, 
  FaStore, 
  FaHeart, 
  FaMapMarkerAlt, 
  FaCheckCircle, 
  FaHourglassHalf, 
  FaShieldAlt,
  FaPlus
} from 'react-icons/fa';
import { useStore } from '../context/store';

export function Dashboard() {
  const { 
    karmaBalance, 
    currentUser, 
    karmaDeeds, 
    destinations, 
    villages, 
    experiences 
  } = useStore();

  // User-specific deeds
  const myDeeds = useMemo(() => {
    if (!currentUser) return [];
    return karmaDeeds.filter((d) => d.userId === currentUser.id);
  }, [karmaDeeds, currentUser]);

  // Real stats from signed-in user or 0
  const placesExploredCount = currentUser?.destinationsVisited ?? 0;
  const communitiesSupportedCount = currentUser?.localPurchases ?? 0;
  const culturesDiscoveredCount = currentUser?.villagesExplored ?? 0;
  const goodDeedsCount = myDeeds.length || (currentUser?.verifiedSocialActivities ?? 0);

  // Real recommended destinations
  const recommendedDestinations = useMemo(() => {
    return destinations.slice(0, 4);
  }, [destinations]);

  // Real recommended villages
  const recommendedVillages = useMemo(() => {
    return villages.slice(0, 3);
  }, [villages]);

  // Real recommended community experiences
  const recommendedExperiences = useMemo(() => {
    return experiences.slice(0, 2);
  }, [experiences]);

  return (
    <main className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Editorial Dashboard Header with Royal Purple Glassmorphism */}
      <section className="relative rounded-3xl p-8 sm:p-12 overflow-hidden glass-card border border-[#D9CCF2]/30 bg-[#F5F0FC]/90 dark:bg-[#170D2C]/90 shadow-2xl">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#7955AE]/15 text-[#7955AE] dark:text-[#D9CCF2] border border-[#D9CCF2]/30">
            <FaCompass className="text-[#BBA5E5]" /> Personalized Guardian Dashboard
          </div>
          <h1 className="text-3xl sm:text-5xl font-cinzel font-black tracking-tight text-[#302342] dark:text-[#F8F4FF]">
            Your Journey, Your Impact
          </h1>
          <p className="text-sm sm:text-base text-[#716680] dark:text-[#D0C3E3] font-serif italic leading-relaxed">
            Explore Odisha, connect with local communities and become part of its living heritage.
          </p>

          {currentUser ? (
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <div className="px-4 py-2 rounded-xl bg-[#7955AE]/20 text-[#7955AE] dark:text-[#D9CCF2] border border-[#D9CCF2]/30 text-xs font-bold flex items-center gap-2 shadow-sm">
                <FaCoins className="text-[#BBA5E5]" />
                <span>{karmaBalance} Karma Points</span>
              </div>
              <span className="text-xs text-[#716680] dark:text-[#D0C3E3]">
                Guardian: <strong className="text-[#302342] dark:text-[#F8F4FF]">{currentUser.name}</strong> • {currentUser.homeDistrict || 'Odisha'}
              </span>
            </div>
          ) : (
            <div className="pt-4 flex flex-wrap gap-3">
              <Link
                to="/signup?mode=signup"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-xs shadow-xl transition-all duration-300 bg-[#7955AE] text-white hover:bg-[#613A9E] dark:bg-white dark:text-[#180B2B] dark:hover:bg-[#F3EDFC] dark:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
              >
                <span>Create Guardian Account (+50 KT Bonus)</span> &rarr;
              </Link>
              <Link
                to="/signup?mode=login"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs shadow-md transition-all duration-300 bg-[#F0EAF8] text-[#5A2C99] hover:bg-[#E2D4F5] border border-[#7955AE]/40 dark:bg-[#B9A5DF]/20 dark:text-white dark:hover:bg-[#B9A5DF]/35 dark:border-[#B9A5DF]/60"
              >
                <span>Sign In to Existing Account</span>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* 4 ELEGANT CONTENT CARDS (Real Account Data Only) */}
      <section className="space-y-3">
        <div className="text-xs font-bold uppercase tracking-wider text-[#716680] dark:text-[#D0C3E3]">
          Verified Journey Metrics
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Card 1: Places Explored */}
          <div className="glass-card rounded-2xl p-5 border border-[#D9CCF2]/25 space-y-3">
            <div className="flex items-center justify-between text-xs text-[#716680] dark:text-[#D0C3E3]">
              <span className="font-semibold uppercase tracking-wider text-[11px]">Places Explored</span>
              <FaCompass className="text-[#BBA5E5] text-sm" />
            </div>
            <div className="text-3xl font-cinzel font-black text-[#302342] dark:text-[#F8F4FF]">
              {placesExploredCount}
            </div>
            <p className="text-xs text-[#716680] dark:text-[#9C8FB3]">
              {placesExploredCount > 0 ? 'Verified archaeological & heritage sites visited' : 'Your journey starts here.'}
            </p>
          </div>

          {/* Card 2: Communities Supported */}
          <div className="glass-card rounded-2xl p-5 border border-[#D9CCF2]/25 space-y-3">
            <div className="flex items-center justify-between text-xs text-[#716680] dark:text-[#D0C3E3]">
              <span className="font-semibold uppercase tracking-wider text-[11px]">Communities Supported</span>
              <FaStore className="text-[#BBA5E5] text-sm" />
            </div>
            <div className="text-3xl font-cinzel font-black text-[#302342] dark:text-[#F8F4FF]">
              {communitiesSupportedCount}
            </div>
            <p className="text-xs text-[#716680] dark:text-[#9C8FB3]">
              {communitiesSupportedCount > 0 ? 'Direct artisan purchases & fair-trade support' : 'Your journey starts here.'}
            </p>
          </div>

          {/* Card 3: Cultures Discovered */}
          <div className="glass-card rounded-2xl p-5 border border-[#D9CCF2]/25 space-y-3">
            <div className="flex items-center justify-between text-xs text-[#716680] dark:text-[#D0C3E3]">
              <span className="font-semibold uppercase tracking-wider text-[11px]">Cultures Discovered</span>
              <FaLandmark className="text-[#BBA5E5] text-sm" />
            </div>
            <div className="text-3xl font-cinzel font-black text-[#302342] dark:text-[#F8F4FF]">
              {culturesDiscoveredCount}
            </div>
            <p className="text-xs text-[#716680] dark:text-[#9C8FB3]">
              {culturesDiscoveredCount > 0 ? 'Traditional craft settlements & tribal hamlets' : 'Your journey starts here.'}
            </p>
          </div>

          {/* Card 4: Good Deeds */}
          <div className="glass-card rounded-2xl p-5 border border-[#D9CCF2]/25 space-y-3">
            <div className="flex items-center justify-between text-xs text-[#716680] dark:text-[#D0C3E3]">
              <span className="font-semibold uppercase tracking-wider text-[11px]">Good Deeds</span>
              <FaHeart className="text-rose-400 text-sm" />
            </div>
            <div className="text-3xl font-cinzel font-black text-[#302342] dark:text-[#F8F4FF]">
              {goodDeedsCount}
            </div>
            <p className="text-xs text-[#716680] dark:text-[#9C8FB3]">
              {goodDeedsCount > 0 ? 'Verified environmental & community contributions' : 'Your journey starts here.'}
            </p>
          </div>

        </div>
      </section>

      {/* PERSONALIZED SECTIONS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column (Span 8): Continue Exploring & Recommended Experiences */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* Section: Continue Exploring */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-cinzel font-bold text-[#302342] dark:text-[#F8F4FF]">
                  Continue Exploring
                </h2>
                <p className="text-xs text-[#716680] dark:text-[#D0C3E3]">
                  Handpicked destinations across Odisha's 30 districts based on living heritage.
                </p>
              </div>
              <Link to="/destinations" className="text-xs font-bold text-[#7955AE] dark:text-[#D9CCF2] hover:underline flex items-center gap-1">
                <span>View All 50+</span> &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {recommendedDestinations.map((dest) => (
                <Link
                  key={dest.id}
                  to={`/destination/${dest.id}`}
                  className="group glass-card rounded-2xl overflow-hidden border border-[#D9CCF2]/25 hover:border-[#BBA5E5] transition flex flex-col justify-between"
                >
                  <div className="h-36 overflow-hidden relative bg-[#211238]">
                    <img
                      src={dest.heroImage}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/bhubaneswar.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#170D2C]/85 text-[#D9CCF2] border border-[#D9CCF2]/30">
                      {dest.district} District
                    </div>
                    <div className="absolute bottom-2 left-3 right-3">
                      <div className="text-sm font-cinzel font-bold text-white truncate">{dest.name}</div>
                      <div className="text-[10px] text-[#D9CCF2] font-serif">{dest.odiaName}</div>
                    </div>
                  </div>
                  <div className="p-3 text-xs text-[#716680] dark:text-[#D0C3E3] flex items-center justify-between">
                    <span className="truncate">{dest.tagline}</span>
                    <span className="font-bold text-[#7955AE] dark:text-[#D9CCF2] flex-shrink-0">&rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Section: Recommended Community Experiences */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-cinzel font-bold text-[#302342] dark:text-[#F8F4FF]">
                  Recommended Experiences
                </h2>
                <p className="text-xs text-[#716680] dark:text-[#D0C3E3]">
                  Engage directly with rural host communities, organic farmers, and master weavers.
                </p>
              </div>
              <Link to="/experiences" className="text-xs font-bold text-[#7955AE] dark:text-[#D9CCF2] hover:underline">
                View All Experiences &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {recommendedExperiences.map((exp) => (
                <div
                  key={exp.id}
                  className="glass-card rounded-2xl overflow-hidden border border-[#D9CCF2]/25 p-4 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-[#716680] dark:text-[#D0C3E3]">
                      <span>{exp.village}, {exp.district}</span>
                      <span className="font-bold text-[#7955AE] dark:text-[#D9CCF2]">{exp.duration}</span>
                    </div>
                    <h3 className="font-cinzel font-bold text-sm text-[#302342] dark:text-[#F8F4FF] leading-tight">
                      {exp.title}
                    </h3>
                    <p className="text-xs text-[#716680] dark:text-[#D0C3E3] line-clamp-2">
                      {exp.description}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-[#D9CCF2]/20 text-xs">
                    <span className="font-bold text-[#302342] dark:text-[#F8F4FF]">₹{exp.price}</span>
                    <Link
                      to="/experiences"
                      className="px-3 py-1 rounded-xl btn-lavender text-[11px] font-bold"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Your Cultural Contributions (Submitted Deeds) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-cinzel font-bold text-[#302342] dark:text-[#F8F4FF]">
                  Your Cultural Contributions
                </h2>
                <p className="text-xs text-[#716680] dark:text-[#D0C3E3]">
                  Small actions verified by community governance and local guardians.
                </p>
              </div>
              <Link
                to="/tasks"
                className="px-3.5 py-1.5 rounded-xl btn-royal text-xs font-bold flex items-center gap-1.5 shadow"
              >
                <FaPlus className="text-[10px]" /> Add Contribution
              </Link>
            </div>

            {myDeeds.length > 0 ? (
              <div className="space-y-3">
                {myDeeds.map((deed) => (
                  <div
                    key={deed.id}
                    className="glass-card p-4 rounded-2xl border border-[#D9CCF2]/25 flex items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#7955AE]/20 text-[#7955AE] dark:text-[#D9CCF2] border border-[#D9CCF2]/30">
                          {deed.activityType}
                        </span>
                        <span className="text-xs text-[#716680] dark:text-[#D0C3E3] flex items-center gap-1">
                          <FaMapMarkerAlt className="text-[#BBA5E5] text-[10px]" /> {deed.location}
                        </span>
                      </div>
                      <div className="text-sm font-bold text-[#302342] dark:text-[#F8F4FF]">
                        {deed.title}
                      </div>
                      <div className="text-xs text-[#716680] dark:text-[#D0C3E3] line-clamp-1">
                        {deed.description}
                      </div>
                    </div>

                    <div className="text-right flex-shrink-0 space-y-1">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        deed.status === 'Approved'
                          ? 'bg-emerald-600/20 text-emerald-600 dark:text-emerald-400'
                          : deed.status === 'Rejected'
                          ? 'bg-rose-600/20 text-rose-500'
                          : 'bg-amber-600/20 text-amber-600 dark:text-amber-400'
                      }`}>
                        {deed.status === 'Approved' ? <FaCheckCircle /> : <FaHourglassHalf />}
                        {deed.status}
                      </span>
                      {deed.status === 'Approved' && (
                        <div className="text-xs font-bold text-[#BBA5E5]">
                          +{deed.awardedPoints} KP
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 rounded-2xl glass-card text-center border border-dashed border-[#D9CCF2]/30 space-y-2">
                <FaHeart className="text-3xl text-[#9C8FB3] mx-auto" />
                <h3 className="text-sm font-bold text-[#302342] dark:text-[#F8F4FF]">
                  Your journey starts here.
                </h3>
                <p className="text-xs text-[#716680] dark:text-[#D0C3E3] max-w-sm mx-auto">
                  Submit an environmental cleanup, document a village folk tradition, or support local artisans to record your first contribution.
                </p>
                <div className="pt-2">
                  <Link
                    to="/tasks"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl btn-lavender text-xs font-bold"
                  >
                    <span>Record a Good Deed</span> &rarr;
                  </Link>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Right Column (Span 4): Discover Local Communities & Safety */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Section: Discover Local Communities */}
          <div className="glass-card rounded-3xl p-6 border border-[#D9CCF2]/30 space-y-4">
            <div>
              <h2 className="text-lg font-cinzel font-bold text-[#302342] dark:text-[#F8F4FF] flex items-center gap-2">
                <FaLandmark className="text-[#BBA5E5]" /> Discover Communities
              </h2>
              <p className="text-xs text-[#716680] dark:text-[#D0C3E3] mt-0.5">
                Living craft hamlets of Odisha.
              </p>
            </div>

            <div className="space-y-3">
              {recommendedVillages.map((vil) => (
                <Link
                  key={vil.id}
                  to={`/village/${vil.id}`}
                  className="block p-3.5 rounded-2xl glass-card border border-[#D9CCF2]/20 hover:border-[#BBA5E5] transition space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-[#302342] dark:text-[#F8F4FF]">{vil.name}</span>
                    <span className="text-[10px] text-[#7955AE] dark:text-[#D9CCF2] font-semibold">{vil.district}</span>
                  </div>
                  <p className="text-[11px] text-[#716680] dark:text-[#D0C3E3] line-clamp-1">
                    {vil.speciality}
                  </p>
                </Link>
              ))}
            </div>

            <Link
              to="/villages"
              className="w-full py-2.5 rounded-xl font-bold text-xs btn-lavender transition flex items-center justify-center gap-1.5"
            >
              <span>Explore All Villages</span> &rarr;
            </Link>
          </div>

          {/* Safe Path Guardian Status Card */}
          <div className="glass-card rounded-3xl p-6 border border-[#D9CCF2]/30 space-y-3">
            <div className="flex items-center gap-2 text-rose-500 font-bold text-xs uppercase tracking-wider">
              <FaShieldAlt /> Safe Path Guardian
            </div>
            <h3 className="font-cinzel font-bold text-sm text-[#302342] dark:text-[#F8F4FF]">
              Travel Protected Across Rural Odisha
            </h3>
            <p className="text-xs text-[#716680] dark:text-[#D0C3E3] leading-relaxed">
              Activate real-time route alerts, trusted emergency contacts, and verified tourist helpline coordinates.
            </p>
            <Link
              to="/safety"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7955AE] dark:text-[#D9CCF2] hover:underline pt-1"
            >
              <span>Open Safe Path Monitor</span> &rarr;
            </Link>
          </div>

        </div>

      </div>

    </main>
  );
}
