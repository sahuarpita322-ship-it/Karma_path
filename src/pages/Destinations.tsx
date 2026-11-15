import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaSearch, 
  FaMapMarkerAlt, 
  FaArrowRight, 
  FaVolumeUp, 
  FaStop, 
  FaCompass, 
  FaTimes, 
  FaUmbrellaBeach, 
  FaTheaterMasks, 
  FaFire, 
  FaLandmark, 
  FaPaw, 
  FaThLarge,
  FaCheckCircle
} from 'react-icons/fa';
import { useStore } from '../context/store';
import { getStoryCategoryForDestination, curatedDestinationStories } from '../data/destinationStories';

type StoryCategoryType = 'All Stories' | 'Beaches' | 'Culture' | 'Festivals' | 'Heritage' | 'Wildlife';

export function Destinations() {
  const destinations = useStore((s) => s.destinations);
  const [selectedCategory, setSelectedCategory] = useState<StoryCategoryType>('All Stories');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Audio playback state for quick card narration
  const [playingStoryId, setPlayingStoryId] = useState<string | null>(null);
  const [narrationLang, setNarrationLang] = useState<'en' | 'hi' | 'or'>('en');

  // Handle stopping speech on unmount
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleToggleAudio = (e: React.MouseEvent, destId: string, title: string, tagline: string) => {
    e.preventDefault();
    e.stopPropagation();

    if (!('speechSynthesis' in window)) {
      alert('Speech audio is not supported in this browser.');
      return;
    }

    if (playingStoryId === destId) {
      window.speechSynthesis.cancel();
      setPlayingStoryId(null);
      return;
    }

    window.speechSynthesis.cancel();
    setPlayingStoryId(destId);

    const curated = curatedDestinationStories[destId];
    let textToSpeak = '';

    if (curated && curated.narration) {
      textToSpeak = curated.narration[narrationLang] || curated.narration.en;
    } else {
      if (narrationLang === 'hi') {
        textToSpeak = `${title}, ओडिशा के समृद्ध इतिहास और संस्कृति का अभिन्न अंग है। ${tagline}`;
      } else if (narrationLang === 'or') {
        textToSpeak = `${title}, ଓଡ଼ିଶାର ଏକ ଗୌରବମୟ ଐତିହାସିକ ସ୍ଥାନ। ${tagline}`;
      } else {
        textToSpeak = `Welcome to the story of ${title}. ${tagline}. Discover the timeless living heritage of Odisha.`;
      }
    }

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.rate = 0.95;
    utterance.pitch = 1.0;
    if (narrationLang === 'hi') utterance.lang = 'hi-IN';
    else if (narrationLang === 'or') utterance.lang = 'or-IN';
    else utterance.lang = 'en-IN';

    utterance.onend = () => {
      setPlayingStoryId(null);
    };
    utterance.onerror = () => {
      setPlayingStoryId(null);
    };

    window.speechSynthesis.speak(utterance);
  };

  const EXCLUDED_DESTINATIONS = useMemo(() => new Set([
    'chandipur',
    'raghurajpur-dest',
    'ratnagiri',
    'lalitgiri',
    'udayagiri-jajpur',
    'joranda',
    'harishankar',
    'nrusinghanath',
    'gupteswar',
    'duduma',
    'khandadhar',
    'barehipani',
    'joranda-falls',
    'bhimkund',
    'panchalingeswar',
    'chandragiri-dest',
    'talsari',
    'astaranga',
    'ramachandi',
    'baladevjew',
    'saptasajya',
    'pradhanpat',
    'badaghagara',
    'sanaghagara',
    'charisambhu-boudh',
    'koilighugar',
    'balimela',
    'chandan-dhara',
    'sarankul-ladubaba',
    'patora-dam',
    'majhighariani',
    'patali-srikhetra',
    'vedvyas',
    'debrigarh',
    'satkosia'
  ]), []);

  const activeDestinations = useMemo(() => {
    return destinations.filter((d) => !EXCLUDED_DESTINATIONS.has(d.id));
  }, [destinations, EXCLUDED_DESTINATIONS]);

  const districts = useMemo(() => {
    const list = ['All', ...new Set(activeDestinations.map((d) => d.district))].sort();
    return list;
  }, [activeDestinations]);

  // Map and filter destinations based on story category, district, and search
  const filteredStories = useMemo(() => {
    return activeDestinations.filter((dest) => {
      const storyCategory = getStoryCategoryForDestination(dest.category, dest.id);
      
      const matchCategory = 
        selectedCategory === 'All Stories' || 
        storyCategory === selectedCategory;

      const matchDistrict = selectedDistrict === 'All' || dest.district === selectedDistrict;

      const matchSearch =
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.odiaName.includes(searchQuery) ||
        dest.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (curatedDestinationStories[dest.id]?.storyTitle.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);

      return matchCategory && matchDistrict && matchSearch;
    });
  }, [activeDestinations, selectedCategory, selectedDistrict, searchQuery]);

  // Pill definitions matching Odisha Tourism reference screenshots
  const categoryPills: Array<{ key: StoryCategoryType; label: string; icon: React.ReactNode }> = [
    { key: 'All Stories', label: 'All Stories', icon: <FaThLarge /> },
    { key: 'Beaches', label: 'Beaches', icon: <FaUmbrellaBeach /> },
    { key: 'Culture', label: 'Culture', icon: <FaTheaterMasks /> },
    { key: 'Festivals', label: 'Festivals', icon: <FaFire /> },
    { key: 'Heritage', label: 'Heritage', icon: <FaLandmark /> },
    { key: 'Wildlife', label: 'Wildlife', icon: <FaPaw /> },
  ];

  return (
    <main className="min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      
      {/* =========================================================================
          SECTION 1: INTRODUCTORY CINEMATIC VISUAL & ATMOSPHERE
          ========================================================================= */}
      <div className="relative rounded-3xl overflow-hidden p-8 sm:p-14 border border-[#7955AE]/25 dark:border-[#B9A5DF]/35 bg-white/95 dark:bg-[#1E0E34]/90 shadow-2xl backdrop-blur-2xl">
        {/* Soft Royal Purple cloudy atmospheric glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#7955AE]/20 dark:bg-[#B9A5DF]/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#9370D8]/15 dark:bg-[#7955AE]/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Column: Heading, Subtitle & Audio Narration */}
          <div className="flex-1 space-y-4 text-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[#7955AE]/15 text-[#7955AE] dark:bg-white/20 dark:text-[#FFFFFF] border border-[#7955AE]/30 dark:border-[#B9A5DF]/40">
              <span className="w-2 h-2 rounded-full bg-[#7955AE] dark:bg-[#B9A5DF] animate-ping"></span>
              <span>Odisha Cultural Audio & Visual Archives</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-cinzel font-black tracking-tight text-[#180B2B] dark:text-white leading-[1.12]">
              Listen to the <span className="bg-gradient-to-r from-[#7955AE] via-[#9370D8] to-[#503C6B] dark:from-white dark:via-[#D9CCF2] dark:to-[#B9A5DF] bg-clip-text text-transparent font-serif italic">Stories of Odisha</span>
            </h1>

            <p className="text-base sm:text-lg text-[#503C6B] dark:text-[#E8E3F0] leading-relaxed font-serif italic max-w-2xl">
              Every destination has a story. Discover the history, legends, traditions and memories that shaped Odisha.
            </p>

            {/* Language selector for audio preview */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
              <span className="font-semibold text-stone-500 dark:text-stone-300">Audio Narration:</span>
              <div className="inline-flex rounded-xl bg-stone-100 dark:bg-[#150A26] p-1 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30">
                <button
                  onClick={() => setNarrationLang('en')}
                  className={`px-3 py-1 rounded-lg font-bold transition text-xs ${
                    narrationLang === 'en'
                      ? 'bg-[#7955AE] text-white shadow-sm'
                      : 'text-stone-600 dark:text-stone-300 hover:text-[#7955AE]'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setNarrationLang('hi')}
                  className={`px-3 py-1 rounded-lg font-bold transition text-xs ${
                    narrationLang === 'hi'
                      ? 'bg-[#7955AE] text-white shadow-sm'
                      : 'text-stone-600 dark:text-stone-300 hover:text-[#7955AE]'
                  }`}
                >
                  हिंदी
                </button>
                <button
                  onClick={() => setNarrationLang('or')}
                  className={`px-3 py-1 rounded-lg font-bold transition text-xs ${
                    narrationLang === 'or'
                      ? 'bg-[#7955AE] text-white shadow-sm'
                      : 'text-stone-600 dark:text-stone-300 hover:text-[#7955AE]'
                  }`}
                >
                  ଓଡ଼ିଆ
                </button>
              </div>
              {playingStoryId && (
                <button
                  onClick={() => {
                    window.speechSynthesis.cancel();
                    setPlayingStoryId(null);
                  }}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-red-600/15 text-red-600 dark:text-red-400 font-bold border border-red-500/30 text-xs animate-pulse"
                >
                  <FaStop size={10} /> Stop Narration
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Travel Airplane Sticker / Black Logo Badge */}
          <div className="shrink-0 flex items-center justify-center lg:justify-end pt-2 lg:pt-0">
            <div className="relative group cursor-pointer select-none" title="Travel Safe • Explore Odisha">
              {/* Ambient atmospheric purple glow behind sticker */}
              <div className="absolute inset-0 rounded-full bg-[#7955AE]/25 dark:bg-[#B9A5DF]/20 blur-2xl transform scale-110 group-hover:scale-125 transition-transform duration-500"></div>

              {/* Die-cut Vinyl Travel Airplane Sticker Badge */}
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-[#111116] border-[5px] border-white dark:border-stone-100 shadow-[0_20px_50px_rgba(0,0,0,0.35)] flex flex-col items-center justify-center p-4 transform -rotate-6 group-hover:rotate-0 group-hover:scale-105 transition-all duration-300 ease-out overflow-hidden">
                
                {/* Vinyl Gloss Sheen Reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none"></div>
                <div className="absolute -top-12 -left-12 w-28 h-28 bg-white/10 rounded-full blur-xl pointer-events-none"></div>

                {/* Flight Trajectory Orbit & Arc */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 200" fill="none">
                  {/* Outer subtle orbit ring */}
                  <circle cx="100" cy="100" r="82" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="5 5" />
                  {/* Contrail / Dotted flight curve */}
                  <path 
                    d="M35 155 C 55 145, 75 110, 105 100 C 125 92, 145 75, 160 50" 
                    stroke="#A78BFA" 
                    strokeWidth="2.5" 
                    strokeDasharray="4 4" 
                    strokeLinecap="round" 
                    opacity="0.85"
                  />
                  <circle cx="35" cy="155" r="3.5" fill="#A78BFA" />
                  <circle cx="160" cy="50" r="2.5" fill="#FFFFFF" />
                </svg>

                {/* Airplane Silhouette Logo */}
                <div className="relative z-10 flex items-center justify-center">
                  <svg 
                    className="w-20 h-20 sm:w-24 sm:h-24 text-white transform rotate-45 drop-shadow-[0_6px_14px_rgba(0,0,0,0.6)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                  </svg>
                </div>

                {/* Travel Badge Tag */}
                <div className="absolute bottom-3.5 z-10 flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/10 border border-white/15 text-[9px] sm:text-[10px] font-black tracking-widest text-purple-200 uppercase backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>TRAVEL ODISHA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          SECTION 2: ODISHA TOURISM CATEGORY FILTER PILL BAR & CONTROLS
          ========================================================================= */}
      <div className="space-y-4">
        {/* Category Pills Bar (Matching Odisha Tourism Screenshot exactly) */}
        <div className="flex items-center justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 sm:p-2 rounded-2xl sm:rounded-full bg-white/95 dark:bg-[#1E0E34]/90 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 shadow-lg backdrop-blur-xl">
            {categoryPills.map((pill) => {
              const isActive = selectedCategory === pill.key;
              return (
                <button
                  key={pill.key}
                  onClick={() => setSelectedCategory(pill.key)}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#7955AE] to-[#9370D8] text-white shadow-md shadow-purple-500/30 scale-105'
                      : 'text-stone-600 dark:text-[#E8E3F0] hover:text-[#7955AE] dark:hover:text-white hover:bg-[#7955AE]/10 dark:hover:bg-white/10'
                  }`}
                >
                  <span className={`text-xs ${isActive ? 'text-white' : 'text-[#7955AE] dark:text-[#B9A5DF]'}`}>
                    {pill.icon}
                  </span>
                  <span>{pill.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search & District Filter Controls */}
        <div className="glass-card rounded-2xl p-4 flex flex-col md:flex-row gap-3 items-center justify-between border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 bg-white/95 dark:bg-[#1E0E34]/90 shadow-md">
          <div className="relative w-full md:w-88">
            <FaSearch className="absolute left-3.5 top-3.5 text-[#7955AE] dark:text-[#B9A5DF]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Konark, Jagannath Puri, Chilika, Similipal..."
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl bg-stone-50 dark:bg-[#150A26] border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 focus:outline-none focus:border-[#7955AE] dark:focus:border-white text-[#180B2B] dark:text-white font-medium placeholder-[#716680] dark:placeholder-[#B9A5DF]/70"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-3.5 text-stone-400 hover:text-stone-600 dark:hover:text-white"
              >
                <FaTimes size={12} />
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto items-center justify-end">
            <span className="text-xs font-semibold text-stone-500 dark:text-stone-300 hidden sm:inline">
              Filter District:
            </span>
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="px-3.5 py-2 text-xs font-bold rounded-xl bg-stone-50 dark:bg-[#150A26] border border-[#7955AE]/25 dark:border-[#B9A5DF]/35 text-[#180B2B] dark:text-white focus:outline-none cursor-pointer"
            >
              {districts.map((d) => (
                <option key={d} value={d} className="bg-white dark:bg-[#150A26]">
                  {d === 'All' ? 'All 30 Districts' : `${d} District`}
                </option>
              ))}
            </select>

            {(selectedCategory !== 'All Stories' || selectedDistrict !== 'All' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory('All Stories');
                  setSelectedDistrict('All');
                  setSearchQuery('');
                }}
                className="px-3 py-2 text-xs font-bold text-[#7955AE] dark:text-white hover:underline transition"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* =========================================================================
          SECTION 3: STORIES GRID (MATCHING ODISHA TOURISM EDITORIAL TILES)
          ========================================================================= */}
      {filteredStories.length === 0 ? (
        <div className="text-center py-20 bg-white/70 dark:bg-[#1E0E34]/70 rounded-3xl border border-[#7955AE]/20 dark:border-[#B9A5DF]/20 p-8">
          <p className="text-lg font-cinzel text-stone-600 dark:text-stone-300">
            No historical stories found matching your filter criteria.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All Stories');
              setSelectedDistrict('All');
              setSearchQuery('');
            }}
            className="mt-4 px-6 py-2 rounded-xl bg-[#7955AE] text-white text-xs font-bold hover:bg-[#613A9E] transition"
          >
            Show All Stories
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((dest) => {
            const curated = curatedDestinationStories[dest.id];
            const storyCategory = getStoryCategoryForDestination(dest.category, dest.id);
            const isPlaying = playingStoryId === dest.id;

            return (
              <article
                key={dest.id}
                className="group relative rounded-3xl overflow-hidden border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 bg-white dark:bg-[#1E0E34] shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-between hover:-translate-y-1"
              >
                {/* Image Container with Watermark */}
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-slate-900">
                  <img
                    src={dest.heroImage}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/bhubaneswar.jpg';
                    }}
                  />

                  {/* Gradient Vignette for Text Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

                  {/* Top-Left Category Badge */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-[#180B2B]/80 text-[#D9CCF2] border border-white/20 backdrop-blur-md shadow-md">
                    <span>{storyCategory}</span>
                  </div>

                  {/* Top-Right Quick Listen Button */}
                  <button
                    onClick={(e) => handleToggleAudio(e, dest.id, dest.name, dest.tagline)}
                    title={isPlaying ? 'Pause Narration' : 'Listen to Story'}
                    className={`absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold transition shadow-lg backdrop-blur-md ${
                      isPlaying
                        ? 'bg-red-600 text-white animate-pulse'
                        : 'bg-white/90 text-[#180B2B] hover:bg-[#7955AE] hover:text-white dark:bg-[#180B2B]/90 dark:text-white dark:hover:bg-white dark:hover:text-[#180B2B]'
                    }`}
                  >
                    <FaVolumeUp className={isPlaying ? 'animate-bounce' : ''} />
                    <span>{isPlaying ? 'Playing...' : 'Listen'}</span>
                  </button>

                  {/* BOTTOM-LEFT OFFICIAL WATERMARK (Matching the user screenshot) */}
                  <div className="absolute bottom-3 left-4 z-10 text-[9px] font-sans font-medium text-white/80 drop-shadow-md select-none tracking-tight pointer-events-none">
                    © Odisha Tourism, Government of Odisha. All Rights Reserved
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-2">
                    {/* Odia Script & Subtitle */}
                    <div className="flex items-center justify-between text-xs text-[#7955AE] dark:text-[#B9A5DF] font-medium">
                      <span className="font-serif font-bold text-sm">{dest.odiaName}</span>
                      <span className="inline-flex items-center gap-1">
                        <FaMapMarkerAlt size={11} /> {dest.district}
                      </span>
                    </div>

                    {/* Destination Title */}
                    <h2 className="text-xl font-cinzel font-black text-[#180B2B] dark:text-white group-hover:text-[#7955AE] dark:group-hover:text-[#D9CCF2] transition line-clamp-1">
                      {dest.name}
                    </h2>

                    {/* Evocative Story Subtitle */}
                    {curated && (
                      <p className="text-xs font-serif italic font-semibold text-[#613A9E] dark:text-[#C7B5E8] line-clamp-1">
                        {curated.storyTitle}: {curated.storySubtitle}
                      </p>
                    )}

                    {/* Brief Narrative Teaser */}
                    <p className="text-xs text-stone-600 dark:text-[#D0C3E3] line-clamp-2 leading-relaxed">
                      {dest.historicalBackground || dest.tagline}
                    </p>
                  </div>

                  {/* Action Link Footer */}
                  <div className="pt-3 border-t border-stone-200/60 dark:border-white/10 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-stone-500 dark:text-[#A98AD9]">
                      4 Historical Chapters
                    </span>

                    <Link
                      to={`/destination/${dest.id}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 bg-[#7955AE]/15 text-[#7955AE] hover:bg-[#7955AE] hover:text-white dark:bg-white/15 dark:text-white dark:hover:bg-white dark:hover:text-[#180B2B]"
                    >
                      <span>Read Story</span>
                      <FaArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* =========================================================================
          SECTION 4: VERIFIED ARCHIVAL CREDITS FOOTER
          ========================================================================= */}
      <div className="p-6 rounded-2xl border border-[#7955AE]/20 dark:border-[#B9A5DF]/20 bg-stone-50/80 dark:bg-[#150A26]/80 text-center space-y-2">
        <p className="text-xs text-stone-600 dark:text-stone-300">
          Historical narratives, epigraphical inscriptions, and archaeological facts verified in consultation with the
          <span className="font-bold text-[#7955AE] dark:text-[#B9A5DF]"> Archaeological Survey of India (ASI)</span> and
          <span className="font-bold text-[#7955AE] dark:text-[#B9A5DF]"> Odisha Tourism, Government of Odisha</span>.
        </p>
        <p className="text-[11px] text-stone-400 dark:text-stone-500">
          Photographic assets are attributed to the Government of Odisha, Archaeological Survey of India, and Wikimedia Commons contributors under Creative Commons licenses.
        </p>
      </div>

    </main>
  );
}
