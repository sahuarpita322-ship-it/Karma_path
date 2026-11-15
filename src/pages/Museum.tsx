import React, { useState, useMemo, useEffect } from 'react';
import { 
  FaSearch, 
  FaTimes, 
  FaVolumeUp, 
  FaStop, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaBookOpen, 
  FaUtensils, 
  FaCheckCircle, 
  FaInfoCircle, 
  FaChevronRight, 
  FaTheaterMasks, 
  FaMusic, 
  FaDrum, 
  FaLandmark, 
  FaCompactDisc,
  FaHands
} from 'react-icons/fa';
import { ODISHA_30_FESTIVALS, type OdishaFestival } from '../data/odisha30FestivalsData';
import { ODISHA_DANCES, type OdishaDance } from '../data/odishaDancesData';
import { ODISHA_MUSIC, type OdishaMusic } from '../data/odishaMusicData';

type VaultCategory = 'festivals' | 'dance' | 'music';

export function Museum() {
  const [activeTab, setActiveTab] = useState<VaultCategory>('festivals');
  
  // Festivals State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSeason, setSelectedSeason] = useState('All');
  const [activeFestival, setActiveFestival] = useState<OdishaFestival | null>(null);

  // Dances State
  const [danceSearchQuery, setDanceSearchQuery] = useState('');
  const [selectedDanceCategory, setSelectedDanceCategory] = useState('All');
  const [activeDance, setActiveDance] = useState<OdishaDance | null>(null);

  // Music State
  const [musicSearchQuery, setMusicSearchQuery] = useState('');
  const [activeMusic, setActiveMusic] = useState<OdishaMusic | null>(null);

  // Audio Speech Synthesis state
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const [audioLang, setAudioLang] = useState<'en' | 'hi' | 'or'>('hi');

  // Cancel speech on unmount
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleStopAudio = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setSpeakingId(null);
  };

  // Filter festivals based on search and season
  const seasonsList = ['All', 'Monsoon', 'Autumn', 'Winter', 'Spring', 'Summer'];
  const filteredFestivals = useMemo(() => {
    return ODISHA_30_FESTIVALS.filter((f) => {
      const matchSearch =
        f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.odiaName.includes(searchQuery) ||
        f.tithi.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.whyWeCelebrate.toLowerCase().includes(searchQuery.toLowerCase());

      const matchSeason =
        selectedSeason === 'All' ||
        f.season.toLowerCase().includes(selectedSeason.toLowerCase());

      return matchSearch && matchSeason;
    });
  }, [searchQuery, selectedSeason]);

  // Voice narration handler for a festival
  const handleToggleAudio = (festival: OdishaFestival) => {
    if (!('speechSynthesis' in window)) {
      alert('Speech audio is not supported in this browser.');
      return;
    }

    if (speakingId === festival.id) {
      handleStopAudio();
      return;
    }

    handleStopAudio();
    setSpeakingId(festival.id);

    let textToSpeak = '';
    if (audioLang === 'hi') {
      textToSpeak = `${festival.name}, यानी ${festival.odiaName}। यह पर्व ${festival.tithi} को मनाया जाता है। क्यों मनाते हैं: ${festival.whyWeCelebrate}। इसकी वास्तविक कहानी: ${festival.fullStory}`;
    } else if (audioLang === 'or') {
      textToSpeak = `${festival.name}, ${festival.odiaName}। ଏହା ${festival.tithiOdia}ରେ ପାଳିତ ହୁଏ। କାହିଁକି ପାଳନ କରାଯାଏ: ${festival.whyWeCelebrate}। ଏହାର ଇତିହାସ ଓ କାହାଣୀ: ${festival.fullStory}`;
    } else {
      textToSpeak = `${festival.name}, known in Odia as ${festival.odiaName}. Celebrated during ${festival.tithi}. Why we celebrate: ${festival.whyWeCelebrate}. The living legend: ${festival.fullStory}`;
    }

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.rate = 0.92;
    utterance.pitch = 1.0;
    if (audioLang === 'hi') utterance.lang = 'hi-IN';
    else if (audioLang === 'or') utterance.lang = 'or-IN';
    else utterance.lang = 'en-IN';

    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);

    window.speechSynthesis.speak(utterance);
  };

  // Filter dances based on search and category
  const danceCategories = ['All', 'Classical', 'Martial Folk', 'Folk Dance', 'Sambalpuri Folk', 'Acrobatic Folk'];
  const filteredDances = useMemo(() => {
    return ODISHA_DANCES.filter((d) => {
      const matchSearch =
        d.name.toLowerCase().includes(danceSearchQuery.toLowerCase()) ||
        d.odiaName.includes(danceSearchQuery) ||
        d.district.toLowerCase().includes(danceSearchQuery.toLowerCase()) ||
        d.originVillage.toLowerCase().includes(danceSearchQuery.toLowerCase()) ||
        d.significance.toLowerCase().includes(danceSearchQuery.toLowerCase());

      const matchCat =
        selectedDanceCategory === 'All' || d.category === selectedDanceCategory;

      return matchSearch && matchCat;
    });
  }, [danceSearchQuery, selectedDanceCategory]);

  // Voice narration handler for a dance
  const handleToggleDanceAudio = (dance: OdishaDance) => {
    if (!('speechSynthesis' in window)) {
      alert('Speech audio is not supported in this browser.');
      return;
    }

    if (speakingId === dance.id) {
      handleStopAudio();
      return;
    }

    handleStopAudio();
    setSpeakingId(dance.id);

    let textToSpeak = '';
    if (audioLang === 'hi') {
      textToSpeak = `${dance.name}, जिसे ओड़िया में ${dance.odiaName} कहा जाता है। यह ${dance.district} के ${dance.originVillage} से प्रसिद्ध है। महत्व और उत्पत्ति: ${dance.significance}। यह नृत्य कैसे होता है: ${dance.performanceStyle}। इसकी पूर्ण कहानी: ${dance.story.hi}`;
    } else if (audioLang === 'or') {
      textToSpeak = `${dance.name}, ${dance.odiaName}। ଏହା ${dance.district}ର ${dance.originVillage}ରେ ବିଶେଷ ପ୍ରସିଦ୍ଧ। ମହତ୍ତ୍ୱ: ${dance.significance}। କିପରି ନୃତ୍ୟ ହୁଏ: ${dance.performanceStyle}। ଏହାର ଇତିହାସ: ${dance.story.or}`;
    } else {
      textToSpeak = `${dance.name}, known in Odia as ${dance.odiaName}. Famous in ${dance.district}, rooted in ${dance.originVillage}. Significance: ${dance.significance}. Performance style: ${dance.performanceStyle}. Full history: ${dance.story.en}`;
    }

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.rate = 0.92;
    utterance.pitch = 1.0;
    if (audioLang === 'hi') utterance.lang = 'hi-IN';
    else if (audioLang === 'or') utterance.lang = 'or-IN';
    else utterance.lang = 'en-IN';

    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);

    window.speechSynthesis.speak(utterance);
  };

  // Filter music based on search
  const filteredMusic = useMemo(() => {
    return ODISHA_MUSIC.filter((m) => {
      const matchSearch =
        m.title.toLowerCase().includes(musicSearchQuery.toLowerCase()) ||
        m.odiaTitle.includes(musicSearchQuery) ||
        m.subtitle.toLowerCase().includes(musicSearchQuery.toLowerCase()) ||
        m.overview.toLowerCase().includes(musicSearchQuery.toLowerCase()) ||
        m.subtypes.some((s) => s.name.toLowerCase().includes(musicSearchQuery.toLowerCase()));
      return matchSearch;
    });
  }, [musicSearchQuery]);

  // Voice narration handler for a music type
  const handleToggleMusicAudio = (music: OdishaMusic) => {
    if (!('speechSynthesis' in window)) {
      alert('Speech audio is not supported in this browser.');
      return;
    }

    if (speakingId === music.id) {
      handleStopAudio();
      return;
    }

    handleStopAudio();
    setSpeakingId(music.id);

    let textToSpeak = '';
    const subtypesStr = music.subtypes.map((s) => `${s.name}: ${s.description}`).join('। ');
    if (audioLang === 'hi') {
      textToSpeak = `${music.title}, ओड़िया में ${music.odiaTitle}। विवरण: ${music.overview}। इसके मुख्य प्रकार: ${subtypesStr}। ऐतिहासिक कथा: ${music.story.hi}`;
    } else if (audioLang === 'or') {
      textToSpeak = `${music.title}, ${music.odiaTitle}। ମହତ୍ତ୍ୱ: ${music.overview}। ମୁଖ୍ୟ ପ୍ରକାର: ${subtypesStr}। ଇତିହାସ: ${music.story.or}`;
    } else {
      textToSpeak = `${music.title}, in Odia ${music.odiaTitle}. Overview: ${music.overview}. Traditions: ${subtypesStr}. Cultural story: ${music.story.en}`;
    }

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.rate = 0.92;
    utterance.pitch = 1.0;
    if (audioLang === 'hi') utterance.lang = 'hi-IN';
    else if (audioLang === 'or') utterance.lang = 'or-IN';
    else utterance.lang = 'en-IN';

    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);

    window.speechSynthesis.speak(utterance);
  };

  return (
    <main className="min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* =========================================================================
          HERO BANNER: CULTURAL VAULT
          ========================================================================= */}
      <div className="relative rounded-3xl overflow-hidden p-6 sm:p-10 border border-[#7955AE]/25 dark:border-[#B9A5DF]/35 bg-white/95 dark:bg-[#1E0E34]/95 shadow-2xl backdrop-blur-2xl">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#7955AE]/15 dark:bg-[#B9A5DF]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#9370D8]/15 dark:bg-[#7955AE]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#7955AE]/15 text-[#7955AE] dark:bg-white/15 dark:text-[#FFFFFF] border border-[#7955AE]/30 dark:border-[#B9A5DF]/40">
            <span className="w-2 h-2 rounded-full bg-[#7955AE] dark:bg-[#B9A5DF] animate-ping" />
            <span>Odisha Cultural Vault · ଓଡ଼ିଶା ସାଂସ୍କୃତିକ ଭଣ୍ଡାର</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-cinzel font-black tracking-tight text-[#180B2B] dark:text-white leading-[1.15]">
            Living Soul of <span className="bg-gradient-to-r from-[#7955AE] via-[#9370D8] to-[#503C6B] dark:from-white dark:via-[#D9CCF2] dark:to-[#B9A5DF] bg-clip-text text-transparent font-serif italic">Odisha’s Heritage</span>
          </h1>

          <p className="text-sm sm:text-base text-[#503C6B] dark:text-[#E8E3F0] leading-relaxed font-serif italic max-w-2xl">
            Explore Odisha’s 30 sacred festivals, legendary folk & classical dances, and 5 foundational musical traditions narrated with living oral chronicles.
          </p>

          {/* Master Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <button
              onClick={() => setActiveTab('festivals')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition shadow-sm ${
                activeTab === 'festivals'
                  ? 'bg-[#7955AE] text-white shadow-purple-600/30'
                  : 'bg-stone-100 dark:bg-[#150A26] text-stone-700 dark:text-stone-300 hover:bg-[#7955AE]/15'
              }`}
            >
              <FaLandmark size={12} />
              <span>30 Festivals (ପର୍ବପର୍ବାଣି)</span>
            </button>

            <button
              onClick={() => setActiveTab('dance')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition ${
                activeTab === 'dance'
                  ? 'bg-[#7955AE] text-white shadow-purple-600/30'
                  : 'bg-stone-100 dark:bg-[#150A26] text-stone-700 dark:text-stone-300 hover:bg-[#7955AE]/15'
              }`}
            >
              <FaTheaterMasks size={12} />
              <span>Classical & Folk Dances (ନୃତ୍ୟ)</span>
            </button>

            <button
              onClick={() => setActiveTab('music')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition ${
                activeTab === 'music'
                  ? 'bg-[#7955AE] text-white shadow-purple-600/30'
                  : 'bg-stone-100 dark:bg-[#150A26] text-stone-700 dark:text-stone-300 hover:bg-[#7955AE]/15'
              }`}
            >
              <FaMusic size={12} />
              <span>5 Types of Music (ସଙ୍ଗୀତ)</span>
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          TAB 1: FESTIVALS OF ODISHA (NO EMPTY SPACE UNDER IMAGE, VOICE ON SIDE)
          ========================================================================= */}
      {activeTab === 'festivals' && (
        <div className="space-y-6 animate-fade-in">

          {/* Section Header */}
          <div className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#7955AE]/30 dark:border-[#B9A5DF]/35 bg-gradient-to-r from-[#200C38] via-[#2E1250] to-[#180B2B] shadow-xl overflow-hidden text-white flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div className="space-y-1.5 max-w-2xl relative z-10">
              <span className="px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#7955AE] text-white shadow-md inline-block">
                Archive · ୩୦ ପର୍ବପର୍ବାଣି
              </span>
              <h2 className="text-xl sm:text-3xl font-cinzel font-black">
                Odisha’s 30 Historic Festivals
              </h2>
              <p className="text-xs text-stone-300 font-serif italic">
                Presented in crystal-clear natural framing with comprehensive oral chronicles, tithi dates, why we celebrate, and sacred delicacies.
              </p>
            </div>

            {/* Language Switcher */}
            <div className="relative z-10 bg-black/50 backdrop-blur-md p-2 rounded-xl border border-white/20 flex items-center gap-1.5 self-start md:self-auto">
              <span className="text-xs text-white/90 font-bold px-1.5">Voice:</span>
              {(['hi', 'en', 'or'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    handleStopAudio();
                    setAudioLang(lang);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                    audioLang === lang
                      ? 'bg-[#7955AE] text-white shadow-sm'
                      : 'text-stone-300 hover:text-white'
                  }`}
                >
                  {lang === 'hi' ? 'हिंदी' : lang === 'or' ? 'ଓଡ଼ିଆ' : 'English'}
                </button>
              ))}
            </div>
          </div>

          {/* Search & Season Filter Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 p-3.5 rounded-2xl bg-white/90 dark:bg-[#1E0E34]/90 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 shadow-md backdrop-blur-xl">
            <div className="relative w-full md:w-80">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 text-xs" />
              <input
                type="text"
                placeholder="Search festival, tithi, or region..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-xl text-xs bg-stone-100 dark:bg-[#150A26] border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 focus:outline-none focus:ring-2 focus:ring-[#7955AE] text-[#180B2B] dark:text-white"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                >
                  <FaTimes size={11} />
                </button>
              )}
            </div>

            {/* Season Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto w-full md:w-auto">
              <span className="text-[11px] font-semibold text-stone-500 dark:text-stone-400 mr-1">Season:</span>
              {seasonsList.map((season) => (
                <button
                  key={season}
                  onClick={() => setSelectedSeason(season)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition ${
                    selectedSeason === season
                      ? 'bg-[#7955AE] text-white shadow-sm'
                      : 'bg-stone-100 dark:bg-[#150A26] text-stone-600 dark:text-stone-300 hover:bg-[#7955AE]/15'
                  }`}
                >
                  {season}
                </button>
              ))}
            </div>
          </div>

          {/* 30 Festivals List: No Empty Space Under Image! Name & Details Below Image + Full Story on Right */}
          <div className="space-y-5">
            {filteredFestivals.map((festival, idx) => {
              const isSpeaking = speakingId === festival.id;

              return (
                <div
                  key={festival.id}
                  id={`fest-${festival.id}`}
                  className="relative rounded-2xl sm:rounded-3xl overflow-hidden p-4 sm:p-6 bg-white/90 dark:bg-[#1E0E34]/90 backdrop-blur-xl border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex flex-col md:flex-row gap-5 lg:gap-6 items-stretch">
                    
                    {/* Left Column: Visual Card with Image + Festival Name & Key Meta Underneath (Zero Empty Space!) */}
                    <div className="w-full md:w-64 lg:w-72 shrink-0 flex flex-col justify-between p-3 rounded-2xl bg-[#7955AE]/5 dark:bg-black/30 border border-[#7955AE]/15 space-y-2.5">
                      <div className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-sm border border-[#7955AE]/20 bg-stone-100 dark:bg-black/40 relative group">
                        <img
                          src={festival.image}
                          alt={festival.name}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/festivals-grid.jpg';
                          }}
                        />
                        <span className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-md text-[10px] font-black bg-black/75 backdrop-blur-md text-amber-300 border border-white/20">
                          #{idx + 1}
                        </span>
                        <span className="absolute bottom-1.5 left-1.5 px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#7955AE]/90 backdrop-blur-md text-white border border-white/20">
                          {festival.season}
                        </span>
                      </div>

                      {/* Under image: Name, Odia Name, Tithi date, and Region (Fills all space!) */}
                      <div className="space-y-1.5 pt-1">
                        <div className="text-xs font-serif font-bold text-[#7955AE] dark:text-[#B9A5DF]">
                          {festival.odiaName}
                        </div>
                        <h3 className="text-base sm:text-lg font-cinzel font-black text-[#180B2B] dark:text-white leading-tight">
                          {festival.name}
                        </h3>
                        <div className="flex flex-wrap items-center gap-1.5 text-[11px] pt-0.5">
                          <span className="px-2 py-0.5 rounded-md font-semibold bg-white/70 dark:bg-white/10 text-stone-700 dark:text-stone-300 border border-[#7955AE]/15 flex items-center gap-1">
                            <FaCalendarAlt size={10} className="text-[#7955AE]" />
                            <span>{festival.tithi}</span>
                          </span>
                          <span className="px-2 py-0.5 rounded-md font-semibold bg-white/70 dark:bg-white/10 text-stone-700 dark:text-stone-300 border border-[#7955AE]/15 flex items-center gap-1">
                            <FaMapMarkerAlt size={10} className="text-rose-500" />
                            <span>{festival.region}</span>
                          </span>
                        </div>
                        <p className="text-[11px] font-serif text-stone-600 dark:text-stone-300 leading-relaxed italic border-t border-[#7955AE]/10 pt-1 line-clamp-2">
                          "{festival.summary}"
                        </p>
                      </div>
                    </div>

                    {/* Right Column: Detailed Stories, Why Celebrated, Rituals, Significance, Delicacies, and Voice Narration */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between space-y-3">
                      {/* Top Bar with Voice Narration Button on Side */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#7955AE]/15 dark:border-white/10 pb-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <div className="text-xs font-bold text-[#7955AE] dark:text-amber-300 flex items-center gap-1.5 uppercase tracking-wider">
                            <FaLandmark size={12} />
                            <span>Festival History & Sacred Rituals</span>
                          </div>
                          {festival.primaryDeity && (
                            <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-500/15 text-amber-900 dark:text-amber-300 border border-amber-500/30">
                              Deity: {festival.primaryDeity}
                            </span>
                          )}
                        </div>

                        <button
                          onClick={() => handleToggleAudio(festival)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition shadow-sm border ${
                            isSpeaking
                              ? 'bg-amber-600 text-white border-amber-500 animate-pulse'
                              : 'bg-[#7955AE]/15 hover:bg-[#7955AE] text-[#7955AE] hover:text-white dark:bg-white/10 dark:text-white border-[#7955AE]/30 dark:border-[#B9A5DF]/30'
                          }`}
                        >
                          {isSpeaking ? <FaStop size={10} /> : <FaVolumeUp size={10} />}
                          <span>{isSpeaking ? 'Stop Voice' : `Play Voice (${audioLang.toUpperCase()})`}</span>
                        </button>
                      </div>

                      {/* Why We Celebrate (କାହିଁକି ପାଳନ କରାଯାଏ) */}
                      <div className="p-3 rounded-xl bg-[#7955AE]/10 dark:bg-white/5 border border-[#7955AE]/15 space-y-1">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#7955AE] dark:text-amber-300 flex items-center gap-1.5">
                          <FaCheckCircle size={10} />
                          <span>Why We Celebrate (କାହିଁକି ପାଳନ କରାଯାଏ / क्यों मनाते हैं):</span>
                        </div>
                        <p className="text-xs font-serif text-stone-800 dark:text-stone-200 leading-relaxed">
                          {festival.whyWeCelebrate}
                        </p>
                      </div>

                      {/* Sacred Rites & Vedic Observances (ମୁଖ୍ୟ ବିଧି ଓ ରୀତିନୀତି) */}
                      {festival.rituals && festival.rituals.length > 0 && (
                        <div className="p-3 rounded-xl bg-[#7955AE]/10 dark:bg-white/5 border border-[#7955AE]/15 space-y-1.5">
                          <div className="text-[11px] font-bold uppercase tracking-wider text-[#7955AE] dark:text-amber-300 flex items-center gap-1.5">
                            <FaLandmark size={10} />
                            <span>Sacred Rites & Observances (ମୁଖ୍ୟ ବିଧି ଓ ରୀତିନୀତି):</span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                            {festival.rituals.slice(0, 4).map((ritual, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-1.5 p-1.5 rounded-lg bg-white/80 dark:bg-black/30 border border-[#7955AE]/15 text-[11px]"
                              >
                                <span className="text-[#7955AE] dark:text-[#B9A5DF] font-black">•</span>
                                <span className="text-stone-700 dark:text-stone-300 font-serif leading-snug">
                                  {ritual}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Cultural & Spiritual Significance */}
                      {festival.culturalSignificance && (
                        <div className="p-2.5 rounded-xl bg-[#7955AE]/5 dark:bg-white/5 border border-[#7955AE]/15 text-xs">
                          <strong className="text-[#7955AE] dark:text-amber-300">Cultural & Spiritual Essence: </strong>
                          <span className="text-stone-700 dark:text-stone-300 font-serif leading-relaxed">
                            {festival.culturalSignificance}
                          </span>
                        </div>
                      )}

                      {/* Sacred Bhoga Delicacies & Explore Button */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs border-t border-[#7955AE]/10 dark:border-white/10">
                        <div className="flex flex-wrap items-center gap-1.5 text-xs">
                          <span className="font-bold text-[#7955AE] dark:text-amber-300 flex items-center gap-1 text-[11px]">
                            <FaUtensils size={10} /> Sacred Bhoga:
                          </span>
                          {festival.traditionalFood.map((food, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#7955AE]/10 dark:bg-white/10 text-[#503C6B] dark:text-white border border-[#7955AE]/20"
                            >
                              {food}
                            </span>
                          ))}
                        </div>

                        <button
                          onClick={() => setActiveFestival(festival)}
                          className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#7955AE] to-[#613A9E] hover:from-[#8E6BBF] hover:to-[#7344BD] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition transform hover:-translate-y-0.5"
                        >
                          <FaBookOpen size={11} />
                          <span>Explore Full Story</span>
                          <FaChevronRight size={9} />
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 2: CLASSICAL & FOLK DANCES (NEW 4 SHARP IMAGES, NO EMPTY SPACE UNDER IMAGE)
          ========================================================================= */}
      {activeTab === 'dance' && (
        <div className="space-y-6 animate-fade-in">
          
          {/* Section Header */}
          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 bg-gradient-to-r from-[#180B2B] via-[#24123E] to-[#120722] text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-5 relative overflow-hidden">
            <div className="space-y-1.5 max-w-2xl relative z-10">
              <span className="px-3 py-0.5 rounded-full text-[11px] font-bold bg-white/10 text-amber-300 border border-white/20 uppercase tracking-widest inline-flex items-center gap-1.5">
                <FaTheaterMasks size={11} /> Living Rhythm · ୧୩ ପ୍ରସିଦ୍ଧ ନୃତ୍ୟ
              </span>
              <h2 className="text-xl sm:text-3xl font-cinzel font-black">
                Dances of Odisha & Folk Traditions
              </h2>
              <p className="text-xs text-stone-300 font-serif italic">
                From temple sanctum postures of Odissi and Raghurajpur's acrobatic Gotipua, to Mayurbhanj Chhau's martial leaps and Kalahandi Ghumura's thunderous beats.
              </p>
            </div>

            {/* Language Switcher */}
            <div className="relative z-10 bg-black/50 backdrop-blur-md p-2 rounded-xl border border-white/20 flex items-center gap-1.5 self-start md:self-auto">
              <span className="text-xs text-white/90 font-bold px-1.5">Voice:</span>
              {(['hi', 'en', 'or'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    handleStopAudio();
                    setAudioLang(lang);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                    audioLang === lang
                      ? 'bg-[#7955AE] text-white shadow-sm'
                      : 'text-stone-300 hover:text-white'
                  }`}
                >
                  {lang === 'hi' ? 'हिंदी' : lang === 'or' ? 'ଓଡ଼ିଆ' : 'English'}
                </button>
              ))}
            </div>
          </div>

          {/* Search & Category Filter Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 p-3.5 rounded-2xl bg-white/90 dark:bg-[#1E0E34]/90 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 shadow-md backdrop-blur-xl">
            <div className="relative w-full md:w-80">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 text-xs" />
              <input
                type="text"
                placeholder="Search dance, district, or origin village..."
                value={danceSearchQuery}
                onChange={(e) => setDanceSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-xl text-xs bg-stone-100 dark:bg-[#150A26] border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 focus:outline-none focus:ring-2 focus:ring-[#7955AE] text-[#180B2B] dark:text-white"
              />
              {danceSearchQuery && (
                <button
                  onClick={() => setDanceSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                >
                  <FaTimes size={11} />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              {danceCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedDanceCategory(cat)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition ${
                    selectedDanceCategory === cat
                      ? 'bg-[#7955AE] text-white shadow-sm'
                      : 'bg-stone-100 dark:bg-[#150A26] text-stone-600 dark:text-stone-300 hover:bg-[#7955AE]/15'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 13 Dances List: Name & Origin Directly Below Image + Rich Description & Voice on Side */}
          <div className="space-y-5">
            {filteredDances.map((dance, idx) => {
              const isSpeaking = speakingId === dance.id;

              return (
                <div
                  key={dance.id}
                  id={`dance-${dance.id}`}
                  className="relative rounded-2xl sm:rounded-3xl overflow-hidden p-4 sm:p-6 bg-white/90 dark:bg-[#1E0E34]/90 backdrop-blur-xl border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex flex-col md:flex-row gap-5 lg:gap-6 items-stretch">
                    
                    {/* Left Column: Visual Card with Image + Dance Name & Origin Underneath (Zero Empty Space!) */}
                    <div className="w-full md:w-64 lg:w-72 shrink-0 flex flex-col justify-between p-3 rounded-2xl bg-[#7955AE]/5 dark:bg-black/30 border border-[#7955AE]/15 space-y-2.5">
                      <div className="w-full aspect-[16/9] rounded-xl overflow-hidden shadow-sm border border-[#7955AE]/20 bg-stone-100 dark:bg-black/40 relative group">
                        <img
                          src={dance.image}
                          alt={dance.name}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/festivals-grid.jpg';
                          }}
                        />
                        <span className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-md text-[10px] font-black bg-black/75 backdrop-blur-md text-amber-300 border border-white/20">
                          #{idx + 1}
                        </span>
                      </div>

                      {/* Under image: Name, Odia Name, Category, and Origin Village/District */}
                      <div className="space-y-1.5 pt-1">
                        <div className="text-xs font-serif font-bold text-[#7955AE] dark:text-[#B9A5DF]">
                          {dance.odiaName}
                        </div>
                        <h3 className="text-base sm:text-lg font-cinzel font-black text-[#180B2B] dark:text-white leading-tight">
                          {dance.name}
                        </h3>
                        <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
                          <span className="px-2 py-0.5 rounded-md font-bold bg-[#7955AE] text-white">
                            {dance.category}
                          </span>
                          <span className="px-2 py-0.5 rounded-md font-semibold bg-white/70 dark:bg-white/10 text-stone-700 dark:text-stone-300 border border-[#7955AE]/15 flex items-center gap-1">
                            <FaMapMarkerAlt size={10} className="text-rose-500" />
                            <span>{dance.district}</span>
                          </span>
                        </div>
                        <p className="text-[11px] font-serif text-stone-600 dark:text-stone-300 leading-relaxed pt-1 border-t border-[#7955AE]/10">
                          <strong>Root & Village:</strong> {dance.originVillage}, {dance.district}
                        </p>
                      </div>
                    </div>

                    {/* Right Column: Descriptions, Significance, Performance Style, Costumes, and Voice on Side */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between space-y-3">
                      {/* Top Bar with Voice Narration Button on Side */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#7955AE]/15 dark:border-white/10 pb-2">
                        <div className="text-xs font-bold text-[#7955AE] dark:text-amber-300 flex items-center gap-1.5 uppercase tracking-wider">
                          <FaTheaterMasks size={12} />
                          <span>Dance Heritage & Performance Art</span>
                        </div>

                        <button
                          onClick={() => handleToggleDanceAudio(dance)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition shadow-sm border ${
                            isSpeaking
                              ? 'bg-amber-600 text-white border-amber-500 animate-pulse'
                              : 'bg-[#7955AE]/15 hover:bg-[#7955AE] text-[#7955AE] hover:text-white dark:bg-white/10 dark:text-white border-[#7955AE]/30 dark:border-[#B9A5DF]/30'
                          }`}
                        >
                          {isSpeaking ? <FaStop size={10} /> : <FaVolumeUp size={10} />}
                          <span>{isSpeaking ? 'Stop Voice' : `Play Voice (${audioLang.toUpperCase()})`}</span>
                        </button>
                      </div>

                      {/* Why Celebrated & Famous */}
                      <div className="p-3 rounded-xl bg-[#7955AE]/10 dark:bg-white/5 border border-[#7955AE]/15 space-y-1">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#7955AE] dark:text-amber-300 flex items-center gap-1.5">
                          <FaCheckCircle size={10} />
                          <span>Why Celebrated & Famous (କାହିଁକି ପ୍ରସିଦ୍ଧ ଓ କାହିଁକି ପାଳନ କରାଯାଏ):</span>
                        </div>
                        <p className="text-xs font-serif text-stone-800 dark:text-stone-200 leading-relaxed">
                          {dance.significance}
                        </p>
                      </div>

                      {/* How the Dance is Performed */}
                      <div className="p-3 rounded-xl bg-purple-500/10 dark:bg-purple-900/20 border border-purple-500/20 space-y-1">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#7955AE] dark:text-[#D9CCF2] flex items-center gap-1.5">
                          <FaTheaterMasks size={10} />
                          <span>How Performed (କିପରି ନୃତ୍ୟ ହୁଏ / कैसे नृत्य होता है):</span>
                        </div>
                        <p className="text-xs font-serif text-stone-700 dark:text-stone-300 leading-relaxed">
                          {dance.performanceStyle}
                        </p>
                      </div>

                      {/* Costumes, Instruments & Explore Button */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
                        <div className="flex flex-wrap items-center gap-3">
                          <div className="flex flex-wrap items-center gap-1 text-[11px]">
                            <span className="font-bold text-[#7955AE] dark:text-amber-300">Costumes:</span>
                            {dance.costumes.slice(0, 3).map((c, i) => (
                              <span key={i} className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#7955AE]/10 dark:bg-white/10 text-[#503C6B] dark:text-white border border-[#7955AE]/20">
                                {c}
                              </span>
                            ))}
                          </div>

                          <div className="flex flex-wrap items-center gap-1 text-[11px]">
                            <span className="font-bold text-[#7955AE] dark:text-amber-300">Instruments:</span>
                            {dance.instruments.slice(0, 3).map((inst, i) => (
                              <span key={i} className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-amber-500/10 dark:bg-amber-400/15 text-amber-900 dark:text-amber-200 border border-amber-500/20">
                                {inst}
                              </span>
                            ))}
                          </div>
                        </div>

                        <button
                          onClick={() => setActiveDance(dance)}
                          className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#7955AE] to-[#613A9E] hover:from-[#8E6BBF] hover:to-[#7344BD] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition transform hover:-translate-y-0.5"
                        >
                          <FaBookOpen size={11} />
                          <span>Explore Story</span>
                          <FaChevronRight size={9} />
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 3: MUSIC OF ODISHA (NO EMPTY SPACE UNDER IMAGE, VOICE ON SIDE)
          ========================================================================= */}
      {activeTab === 'music' && (
        <div className="space-y-6 animate-fade-in">
          
          {/* Section Header */}
          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 bg-gradient-to-r from-[#1E0E34] via-[#2F154E] to-[#120722] text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-5 relative overflow-hidden">
            <div className="space-y-1.5 max-w-2xl relative z-10">
              <span className="px-3 py-0.5 rounded-full text-[11px] font-bold bg-white/10 text-amber-300 border border-white/20 uppercase tracking-widest inline-flex items-center gap-1.5">
                <FaMusic size={11} /> Melodic Soul · ୫ଟି ପ୍ରମୁଖ ସଙ୍ଗୀତ ପରମ୍ପରା
              </span>
              <h2 className="text-xl sm:text-3xl font-cinzel font-black">
                Music & Living Lore of Odisha
              </h2>
              <p className="text-xs text-stone-300 font-serif italic">
                From classical Odissi Sangita and Jayadeva's Gita Govinda, to deep devotional Bhajans, Chhanda-Champu, Sambalpuri folk ballads, and ancient tribal rhythms.
              </p>
            </div>

            {/* Language Switcher */}
            <div className="relative z-10 bg-black/50 backdrop-blur-md p-2 rounded-xl border border-white/20 flex items-center gap-1.5 self-start md:self-auto">
              <span className="text-xs text-white/90 font-bold px-1.5">Voice:</span>
              {(['hi', 'en', 'or'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    handleStopAudio();
                    setAudioLang(lang);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                    audioLang === lang
                      ? 'bg-[#7955AE] text-white shadow-sm'
                      : 'text-stone-300 hover:text-white'
                  }`}
                >
                  {lang === 'hi' ? 'हिंदी' : lang === 'or' ? 'ଓଡ଼ିଆ' : 'English'}
                </button>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 p-3.5 rounded-2xl bg-white/90 dark:bg-[#1E0E34]/90 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 shadow-md backdrop-blur-xl">
            <div className="relative w-full md:w-80">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 text-xs" />
              <input
                type="text"
                placeholder="Search music stream, raga, or tradition..."
                value={musicSearchQuery}
                onChange={(e) => setMusicSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-xl text-xs bg-stone-100 dark:bg-[#150A26] border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 focus:outline-none focus:ring-2 focus:ring-[#7955AE] text-[#180B2B] dark:text-white"
              />
              {musicSearchQuery && (
                <button
                  onClick={() => setMusicSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                >
                  <FaTimes size={11} />
                </button>
              )}
            </div>

            <div className="text-xs font-semibold text-stone-600 dark:text-[#D9CCF2]">
              Showing {filteredMusic.length} of 5 Major Musical Streams
            </div>
          </div>

          {/* 5 Music Streams: Name & Roots Below Banner Image + Description & Voice on Side */}
          <div className="space-y-5">
            {filteredMusic.map((music) => {
              const isSpeaking = speakingId === music.id;

              return (
                <div
                  key={music.id}
                  id={`music-${music.id}`}
                  className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white/95 dark:bg-[#1E0E34]/90 backdrop-blur-xl border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col"
                >
                  {/* Top Full-Width Panoramic Banner Graphic */}
                  <div className="w-full bg-[#FAF4EB] dark:bg-[#110720] border-b border-[#7955AE]/20 dark:border-white/10 flex items-center justify-center p-2.5 sm:p-4 overflow-hidden">
                    <img
                      src={music.image}
                      alt={music.title}
                      className="w-full max-h-[220px] sm:max-h-[260px] object-contain rounded-xl shadow-sm transition-transform duration-500 group-hover:scale-[1.01]"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/festivals-grid.jpg';
                      }}
                    />
                  </div>

                  {/* Structured Content Below Image */}
                  <div className="p-4 sm:p-6 space-y-4">
                    {/* Header: Stream badge, Title, Odia Title, Subtitle, and Voice Narration Button */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#7955AE]/15 dark:border-white/10 pb-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-md text-[11px] font-black bg-[#7955AE] text-white">
                            Stream #{music.id}
                          </span>
                          <span className="text-sm font-serif font-bold text-[#7955AE] dark:text-[#B9A5DF]">
                            {music.odiaTitle}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-cinzel font-black text-[#180B2B] dark:text-white leading-tight">
                          {music.title}
                        </h3>
                        <p className="text-xs font-semibold text-stone-500 dark:text-[#D9CCF2]">
                          {music.subtitle}
                        </p>
                      </div>

                      {/* Voice Narration Button */}
                      <button
                        onClick={() => handleToggleMusicAudio(music)}
                        className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition shadow-sm border self-start sm:self-auto ${
                          isSpeaking
                            ? 'bg-amber-600 text-white border-amber-500 animate-pulse'
                            : 'bg-[#7955AE]/15 hover:bg-[#7955AE] text-[#7955AE] hover:text-white dark:bg-white/10 dark:text-white border-[#7955AE]/30 dark:border-[#B9A5DF]/30'
                        }`}
                      >
                        {isSpeaking ? <FaStop size={11} /> : <FaVolumeUp size={11} />}
                        <span>{isSpeaking ? 'Stop Voice' : `Play Voice (${audioLang.toUpperCase()})`}</span>
                      </button>
                    </div>

                    {/* Root & Shastra */}
                    <div className="p-3 rounded-xl bg-[#7955AE]/5 dark:bg-white/5 border border-[#7955AE]/15 text-xs">
                      <strong className="text-[#7955AE] dark:text-amber-300">Root & Classical Shastra: </strong>
                      <span className="text-stone-700 dark:text-stone-300 font-serif">{music.origin}</span>
                    </div>

                    {/* Overview */}
                    <p className="text-xs sm:text-sm text-stone-700 dark:text-[#E8E3F0] font-serif leading-relaxed">
                      {music.overview}
                    </p>

                    {/* Sub-types & Traditions Breakdown */}
                    <div className="p-3.5 rounded-xl bg-[#7955AE]/10 dark:bg-white/5 border border-[#7955AE]/15 space-y-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#7955AE] dark:text-amber-300 flex items-center gap-1.5">
                        <FaCheckCircle size={11} />
                        <span>Key Sub-types & Traditions (ପ୍ରମୁଖ ଶାଖା ଓ ରୂପ):</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                        {music.subtypes.map((sub, i) => (
                          <div key={i} className="p-2.5 rounded-lg bg-white/80 dark:bg-black/30 border border-[#7955AE]/15 text-xs">
                            <span className="font-bold text-[#7955AE] dark:text-[#B9A5DF]">{sub.name}: </span>
                            <span className="text-stone-700 dark:text-stone-300 font-serif">{sub.description}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Instruments, Ragas & Explore Lore button */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2 text-xs border-t border-[#7955AE]/10 dark:border-white/10">
                      <div className="flex flex-wrap items-center gap-3">
                        <div className="flex flex-wrap items-center gap-1.5 text-xs">
                          <span className="font-bold text-[#7955AE] dark:text-amber-300">Instruments:</span>
                          {music.instruments.map((inst, i) => (
                            <span key={i} className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-[#7955AE]/10 dark:bg-white/10 text-[#503C6B] dark:text-white border border-[#7955AE]/20">
                              {inst}
                            </span>
                          ))}
                        </div>

                        {music.ragas && music.ragas.length > 0 && (
                          <div className="flex flex-wrap items-center gap-1.5 text-xs">
                            <span className="font-bold text-[#7955AE] dark:text-amber-300">Ragas:</span>
                            {music.ragas.map((raga, i) => (
                              <span key={i} className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-amber-500/10 dark:bg-amber-400/15 text-amber-900 dark:text-amber-200 border border-amber-500/20">
                                {raga}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <button
                        onClick={() => setActiveMusic(music)}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#7955AE] to-[#613A9E] hover:from-[#8E6BBF] hover:to-[#7344BD] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition transform hover:-translate-y-0.5 shrink-0"
                      >
                        <FaBookOpen size={12} />
                        <span>Explore Lore</span>
                        <FaChevronRight size={10} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* =========================================================================
          FESTIVAL FULL STORY MODAL DRAWER
          ========================================================================= */}
      {activeFestival && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-fade-in"
          onClick={() => {
            handleStopAudio();
            setActiveFestival(null);
          }}
        >
          <div 
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#1E0E34] border border-[#7955AE]/30 dark:border-[#B9A5DF]/35 shadow-2xl p-5 sm:p-7 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => {
                handleStopAudio();
                setActiveFestival(null);
              }}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-100 dark:bg-[#150A26] text-stone-600 dark:text-stone-300 hover:bg-[#7955AE] hover:text-white flex items-center justify-center transition shadow-md"
            >
              <FaTimes size={13} />
            </button>

            {/* Modal Header */}
            <div className="flex flex-col sm:flex-row gap-5 items-start">
              <div className="w-32 h-32 sm:w-36 sm:h-36 aspect-square rounded-2xl overflow-hidden shadow-md flex-shrink-0 bg-slate-900 border border-black/10">
                <img
                  src={activeFestival.image}
                  alt={activeFestival.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="space-y-1 flex-1 pr-6">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#7955AE] text-white">
                  {activeFestival.season} · {activeFestival.region}
                </span>
                <div className="text-xs font-serif font-bold text-[#7955AE] dark:text-[#B9A5DF] pt-0.5">
                  {activeFestival.odiaName}
                </div>
                <h2 className="text-xl sm:text-2xl font-cinzel font-black text-[#180B2B] dark:text-white leading-tight">
                  {activeFestival.name}
                </h2>
                <p className="text-[11px] text-stone-500 dark:text-[#D9CCF2] font-semibold flex items-center gap-1.5">
                  <FaCalendarAlt className="text-[#7955AE]" />
                  <span>{activeFestival.tithi} ({activeFestival.tithiOdia})</span>
                </p>
              </div>
            </div>

            {/* Audio Voice Story Bar inside Modal */}
            <div className="p-3 rounded-xl bg-purple-50 dark:bg-[#150A26] border border-[#7955AE]/20 flex flex-wrap items-center justify-between gap-2.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#7955AE] dark:text-[#B9A5DF]">
                <FaVolumeUp size={12} />
                <span>Audio Narration ({audioLang.toUpperCase()}):</span>
              </div>

              <div className="flex items-center gap-1.5">
                {(['hi', 'en', 'or'] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      handleStopAudio();
                      setAudioLang(l);
                    }}
                    className={`px-2 py-0.5 rounded-md text-[11px] font-bold transition ${
                      audioLang === l
                        ? 'bg-[#7955AE] text-white'
                        : 'bg-white dark:bg-[#1E0E34] text-stone-600 dark:text-stone-300'
                    }`}
                  >
                    {l === 'hi' ? 'हिंदी' : l === 'or' ? 'ଓଡ଼ିଆ' : 'English'}
                  </button>
                ))}

                <button
                  onClick={() => handleToggleAudio(activeFestival)}
                  className={`px-3 py-1 rounded-lg font-bold text-xs transition shadow-sm ${
                    speakingId === activeFestival.id
                      ? 'bg-amber-600 text-white'
                      : 'bg-[#7955AE] hover:bg-[#613A9E] text-white'
                  }`}
                >
                  {speakingId === activeFestival.id ? 'Stop' : 'Play Voice'}
                </button>
              </div>
            </div>

            {/* Why We Celebrate Section */}
            <div className="p-4 rounded-xl bg-[#7955AE]/10 dark:bg-white/5 border border-[#7955AE]/25 space-y-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#7955AE] dark:text-[#B9A5DF] flex items-center gap-1.5">
                <FaCheckCircle size={11} /> Why We Celebrate (କାହିଁକି ପାଳନ କରାଯାଏ):
              </h4>
              <p className="text-xs font-serif text-stone-700 dark:text-stone-200 leading-relaxed">
                {activeFestival.whyWeCelebrate}
              </p>
            </div>

            {/* Full Story Content */}
            <div className="space-y-2 text-xs font-serif leading-relaxed text-stone-700 dark:text-stone-300">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#7955AE] dark:text-[#B9A5DF] flex items-center gap-1.5">
                <FaInfoCircle size={11} /> The Living Legend & Rituals:
              </h4>
              <p className="whitespace-pre-line text-stone-800 dark:text-stone-200">
                {activeFestival.fullStory}
              </p>
            </div>

            {/* Cultural Significance Box */}
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-900 dark:text-amber-200">
              <strong>Deep Cultural Significance: </strong>
              {activeFestival.culturalSignificance}
            </div>

          </div>
        </div>
      )}

      {/* =========================================================================
          DANCE FULL STORY MODAL DRAWER
          ========================================================================= */}
      {activeDance && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => {
            handleStopAudio();
            setActiveDance(null);
          }}
        >
          <div 
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#140728] border border-[#7955AE]/40 shadow-2xl p-5 sm:p-7 space-y-5 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => {
                handleStopAudio();
                setActiveDance(null);
              }}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/15 hover:bg-[#7955AE] text-white flex items-center justify-center transition shadow-md border border-white/20"
            >
              <FaTimes size={13} />
            </button>

            {/* Modal Header */}
            <div className="flex flex-col sm:flex-row gap-5 items-start">
              <div className="w-32 h-32 sm:w-44 sm:h-32 aspect-[16/9] rounded-2xl overflow-hidden shadow-xl flex-shrink-0 bg-slate-900 border border-white/20">
                <img
                  src={activeDance.image}
                  alt={activeDance.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="space-y-1 flex-1 pr-6">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#7955AE] text-white">
                    {activeDance.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/15 text-amber-300 border border-white/20">
                    📍 {activeDance.district}
                  </span>
                </div>
                <div className="text-xs font-serif font-bold text-amber-300 pt-0.5">
                  {activeDance.odiaName}
                </div>
                <h2 className="text-xl sm:text-2xl font-cinzel font-black text-white leading-tight">
                  {activeDance.name}
                </h2>
                <p className="text-[11px] text-stone-300 font-semibold flex items-center gap-1.5">
                  <FaMapMarkerAlt className="text-rose-400" />
                  <span>Origin Village / Root: {activeDance.originVillage}</span>
                </p>
              </div>
            </div>

            {/* Audio Voice Story Bar inside Modal */}
            <div className="p-3 rounded-xl bg-white/10 border border-white/20 flex flex-wrap items-center justify-between gap-2.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
                <FaVolumeUp size={12} />
                <span>Audio Narration ({audioLang.toUpperCase()}):</span>
              </div>

              <div className="flex items-center gap-1.5">
                {(['hi', 'en', 'or'] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      handleStopAudio();
                      setAudioLang(l);
                    }}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                      audioLang === l
                        ? 'bg-[#7955AE] text-white shadow-sm'
                        : 'bg-white/10 text-stone-300 hover:text-white'
                    }`}
                  >
                    {l === 'hi' ? 'हिंदी' : l === 'or' ? 'ଓଡ଼ିଆ' : 'English'}
                  </button>
                ))}

                <button
                  onClick={() => handleToggleDanceAudio(activeDance)}
                  className={`flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold transition shadow-sm ${
                    speakingId === activeDance.id
                      ? 'bg-amber-600 text-white animate-pulse'
                      : 'bg-[#7955AE] text-white hover:bg-[#613A9E]'
                  }`}
                >
                  {speakingId === activeDance.id ? <FaStop size={10} /> : <FaVolumeUp size={10} />}
                  <span>{speakingId === activeDance.id ? 'Stop' : 'Play Voice'}</span>
                </button>
              </div>
            </div>

            {/* Full Story Content */}
            <div className="space-y-3 text-xs font-serif leading-relaxed text-stone-200">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/15 space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                  <FaInfoCircle size={11} />
                  <span>Cultural Legacy & Story (ଇତିହାସ ଓ କିମ୍ବଦନ୍ତୀ / ऐतिहासिक कथा):</span>
                </h4>
                <p className="text-white/95 leading-relaxed pt-0.5">
                  {activeDance.story[audioLang] || activeDance.story.en}
                </p>
              </div>

              {/* Performance Technique */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/15 space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-purple-300 flex items-center gap-1.5">
                  <FaTheaterMasks size={11} />
                  <span>Performance Style & Movements (କିପରି ନୃତ୍ୟ ହୁଏ):</span>
                </h4>
                <p className="text-white/90 leading-relaxed pt-0.5">
                  {activeDance.performanceStyle}
                </p>
              </div>

              {/* Costumes & Instruments */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-0.5">
                <div className="p-3 rounded-xl bg-white/5 border border-white/15 space-y-1.5">
                  <h4 className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                    <FaHands size={11} /> Costumes & Ornaments (ପୋଷାକ):
                  </h4>
                  <ul className="list-disc list-inside space-y-0.5 text-stone-300 text-xs">
                    {activeDance.costumes.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/15 space-y-1.5">
                  <h4 className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                    <FaDrum size={11} /> Traditional Instruments (ବାଦ୍ୟଯନ୍ତ୍ର):
                  </h4>
                  <ul className="list-disc list-inside space-y-0.5 text-stone-300 text-xs">
                    {activeDance.instruments.map((inst, i) => (
                      <li key={i}>{inst}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-3 border-t border-white/15 flex items-center justify-between">
              <span className="text-[11px] text-stone-400 italic">
                District: {activeDance.district} · Village: {activeDance.originVillage}
              </span>
              <button
                onClick={() => {
                  handleStopAudio();
                  setActiveDance(null);
                }}
                className="px-4 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs uppercase tracking-wider transition border border-white/20"
              >
                Close Story
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MUSIC FULL HERITAGE MODAL DRAWER
          ========================================================================= */}
      {activeMusic && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => {
            handleStopAudio();
            setActiveMusic(null);
          }}
        >
          <div 
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#17092B] border border-[#7955AE]/40 shadow-2xl p-5 sm:p-7 space-y-5 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => {
                handleStopAudio();
                setActiveMusic(null);
              }}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/15 hover:bg-[#7955AE] text-white flex items-center justify-center transition shadow-md border border-white/20"
            >
              <FaTimes size={13} />
            </button>

            {/* Modal Header */}
            <div className="flex flex-col sm:flex-row gap-5 items-start">
              <div className="w-full sm:w-56 aspect-[16/6] rounded-2xl overflow-hidden shadow-xl flex-shrink-0 bg-slate-900 border border-white/20">
                <img
                  src={activeMusic.image}
                  alt={activeMusic.title}
                  className="w-full h-full object-contain bg-[#FAF4EB]"
                />
              </div>

              <div className="space-y-1 flex-1 pr-6">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#7955AE] text-white">
                  Stream #{activeMusic.id} · {activeMusic.origin}
                </span>
                <div className="text-xs font-serif font-bold text-amber-300 pt-0.5">
                  {activeMusic.odiaTitle}
                </div>
                <h2 className="text-xl sm:text-2xl font-cinzel font-black text-white leading-tight">
                  {activeMusic.title}
                </h2>
                <p className="text-[11px] text-stone-300 font-semibold">
                  {activeMusic.subtitle}
                </p>
              </div>
            </div>

            {/* Audio Voice Story Bar inside Modal */}
            <div className="p-3 rounded-xl bg-white/10 border border-white/20 flex flex-wrap items-center justify-between gap-2.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
                <FaVolumeUp size={12} />
                <span>Audio Narration ({audioLang.toUpperCase()}):</span>
              </div>

              <div className="flex items-center gap-1.5">
                {(['hi', 'en', 'or'] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      handleStopAudio();
                      setAudioLang(l);
                    }}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                      audioLang === l
                        ? 'bg-[#7955AE] text-white shadow-sm'
                        : 'bg-white/10 text-stone-300 hover:text-white'
                    }`}
                  >
                    {l === 'hi' ? 'हिंदी' : l === 'or' ? 'ଓଡ଼ିଆ' : 'English'}
                  </button>
                ))}

                <button
                  onClick={() => handleToggleMusicAudio(activeMusic)}
                  className={`flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold transition shadow-sm ${
                    speakingId === activeMusic.id
                      ? 'bg-amber-600 text-white animate-pulse'
                      : 'bg-[#7955AE] text-white hover:bg-[#613A9E]'
                  }`}
                >
                  {speakingId === activeMusic.id ? <FaStop size={10} /> : <FaVolumeUp size={10} />}
                  <span>{speakingId === activeMusic.id ? 'Stop' : 'Play Voice'}</span>
                </button>
              </div>
            </div>

            {/* Deep History and Story */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/15 space-y-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                <FaInfoCircle size={11} />
                <span>Historical Evolution & Legend (ଇତିହାସ ଓ ବିକାଶ):</span>
              </h4>
              <p className="text-xs font-serif text-white/95 leading-relaxed pt-0.5">
                {activeMusic.story[audioLang] || activeMusic.story.en}
              </p>
            </div>

            {/* Subtypes In-Depth */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/15 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-300 flex items-center gap-1.5">
                <FaCompactDisc size={11} />
                <span>Major Sub-types & Repertoire:</span>
              </h4>
              <div className="space-y-1.5">
                {activeMusic.subtypes.map((sub, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-xs">
                    <div className="font-bold text-amber-300 text-xs">{sub.name}</div>
                    <div className="text-stone-300 font-serif pt-0.5 leading-relaxed">{sub.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Instruments & Ragas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-0.5">
              <div className="p-3 rounded-xl bg-white/5 border border-white/15 space-y-1.5">
                <h4 className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                  <FaDrum size={11} /> Traditional Instruments:
                </h4>
                <ul className="list-disc list-inside space-y-0.5 text-stone-300 text-xs">
                  {activeMusic.instruments.map((inst, i) => (
                    <li key={i}>{inst}</li>
                  ))}
                </ul>
              </div>

              {activeMusic.ragas && (
                <div className="p-3 rounded-xl bg-white/5 border border-white/15 space-y-1.5">
                  <h4 className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                    <FaMusic size={11} /> Canonical Ragas & Taalas:
                  </h4>
                  <ul className="list-disc list-inside space-y-0.5 text-stone-300 text-xs">
                    {activeMusic.ragas.map((raga, i) => (
                      <li key={i}>{raga}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="pt-3 border-t border-white/15 flex items-center justify-between">
              <span className="text-[11px] text-stone-400 italic">
                Tradition: {activeMusic.title}
              </span>
              <button
                onClick={() => {
                  handleStopAudio();
                  setActiveMusic(null);
                }}
                className="px-4 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs uppercase tracking-wider transition border border-white/20"
              >
                Close Story
              </button>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
