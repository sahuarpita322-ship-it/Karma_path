import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaShieldAlt, 
  FaPlay, 
  FaPause, 
  FaVolumeUp, 
  FaStop, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaBookOpen, 
  FaLandmark, 
  FaCheckCircle, 
  FaInfoCircle, 
  FaUtensils, 
  FaHands, 
  FaBed, 
  FaShareAlt,
  FaFileAlt,
  FaChevronDown,
  FaChevronUp,
  FaHeadphones
} from 'react-icons/fa';
import { useStore } from '../context/store';
import { getDestinationStory } from '../data/destinationStories';

export function DestinationDetailPage() {
  const { id } = useParams<{ id: string }>();
  const destinations = useStore((s) => s.destinations);
  const villages = useStore((s) => s.villages);
  const navigate = useNavigate();

  const destination = destinations.find((d) => d.id === id);

  // Audio narration state
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedLang, setSelectedLang] = useState<'en' | 'hi' | 'or'>('en');
  const [showTranscript, setShowTranscript] = useState(false);
  const [speechProgress, setSpeechProgress] = useState(0);
  const progressTimerRef = useRef<number | null>(null);

  // Chapter-specific Voice Assistant state
  const [activeVoiceChapterId, setActiveVoiceChapterId] = useState<string | null>(null);
  const [isTourActive, setIsTourActive] = useState<boolean>(false);
  const tourActiveRef = useRef<boolean>(false);

  // Active Fact vs Legend Tab
  const [activeTab, setActiveTab] = useState<'facts' | 'legends'>('facts');

  // Stop speech when navigating away
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      if (progressTimerRef.current) {
        clearInterval(progressTimerRef.current);
      }
      tourActiveRef.current = false;
    };
  }, []);

  if (!destination) {
    return (
      <main className="min-h-screen pt-32 text-center px-4">
        <h2 className="text-2xl font-cinzel font-bold text-stone-800 dark:text-white">Story Not Found</h2>
        <p className="text-stone-500 mt-2 font-serif">The requested destination story could not be located.</p>
        <Link 
          to="/destinations" 
          className="mt-6 inline-block px-6 py-2.5 rounded-xl bg-[#7955AE] text-white font-bold text-xs hover:bg-[#613A9E] transition shadow-lg"
        >
          Return to Stories of Odisha
        </Link>
      </main>
    );
  }

  const story = getDestinationStory(destination);

  // Handle Audio Speech Playback
  const handlePlayAudio = () => {
    if (!('speechSynthesis' in window)) {
      alert('Speech audio is not supported in this browser.');
      return;
    }

    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      setIsPlaying(true);
      return;
    }

    window.speechSynthesis.cancel();

    const textToSpeak = story.narration[selectedLang] || story.narration.en;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);

    utterance.rate = 0.92;
    utterance.pitch = 1.0;
    if (selectedLang === 'hi') utterance.lang = 'hi-IN';
    else if (selectedLang === 'or') utterance.lang = 'or-IN';
    else utterance.lang = 'en-IN';

    // Approximate progress timer
    const estimatedSeconds = Math.max(8, textToSpeak.length / 14);
    let elapsed = 0;
    setSpeechProgress(0);

    if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    progressTimerRef.current = window.setInterval(() => {
      elapsed += 0.5;
      const pct = Math.min(100, Math.round((elapsed / estimatedSeconds) * 100));
      setSpeechProgress(pct);
      if (pct >= 100 && progressTimerRef.current) {
        clearInterval(progressTimerRef.current);
      }
    }, 500);

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setSpeechProgress(100);
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    };

    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
    setIsPaused(false);
  };

  const handlePauseAudio = () => {
    if ('speechSynthesis' in window && isPlaying) {
      window.speechSynthesis.pause();
      setIsPaused(true);
      setIsPlaying(false);
    }
  };

  const handleStopAudio = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setIsPaused(false);
      setActiveVoiceChapterId(null);
      setIsTourActive(false);
      tourActiveRef.current = false;
      setSpeechProgress(0);
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    }
  };

  const handleSpeakChapter = (chapterId: string, isFromTour: boolean = false) => {
    if (!('speechSynthesis' in window)) {
      alert('Speech audio is not supported in this browser.');
      return;
    }

    if (activeVoiceChapterId === chapterId && isPlaying) {
      handleStopAudio();
      return;
    }

    window.speechSynthesis.cancel();
    if (progressTimerRef.current) clearInterval(progressTimerRef.current);

    setActiveVoiceChapterId(chapterId);
    setIsPlaying(true);
    setIsPaused(false);
    if (!isFromTour) {
      setIsTourActive(false);
      tourActiveRef.current = false;
    }

    const chapterIndex = story.chapters.findIndex((c) => c.id === chapterId);
    const chapter = story.chapters[chapterIndex];
    if (!chapter) return;

    // Smoothly scroll the chapter into view
    const elem = document.getElementById(`chapter-${chapterId}`);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    let textToSpeak = '';
    if (selectedLang === 'hi') {
      textToSpeak = `अध्याय ${chapter.chapterNumber}: ${chapter.chapterTitle}। ऐतिहासिक काल और युग: ${chapter.eraOrDate}। आइए सुनते हैं इसका इतिहास। ${chapter.narrative}`;
    } else if (selectedLang === 'or') {
      textToSpeak = `ଅଧ୍ୟାୟ ${chapter.chapterNumber}: ${chapter.chapterTitle}। ଐତିହାସିକ ଯୁଗ: ${chapter.eraOrDate}। ${chapter.narrative}`;
    } else {
      textToSpeak = `Chapter ${chapter.chapterNumber}: ${chapter.chapterTitle}. Historical Era: ${chapter.eraOrDate}. Here is the story. ${chapter.narrative}`;
    }

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.rate = 0.92;
    utterance.pitch = 1.0;
    if (selectedLang === 'hi') utterance.lang = 'hi-IN';
    else if (selectedLang === 'or') utterance.lang = 'or-IN';
    else utterance.lang = 'en-IN';

    utterance.onend = () => {
      if (tourActiveRef.current && chapterIndex < story.chapters.length - 1) {
        const nextChapter = story.chapters[chapterIndex + 1];
        setTimeout(() => {
          if (tourActiveRef.current) {
            handleSpeakChapter(nextChapter.id, true);
          }
        }, 900);
      } else {
        setActiveVoiceChapterId(null);
        setIsPlaying(false);
        setIsTourActive(false);
        tourActiveRef.current = false;
      }
    };

    utterance.onerror = () => {
      setActiveVoiceChapterId(null);
      setIsPlaying(false);
      setIsTourActive(false);
      tourActiveRef.current = false;
    };

    window.speechSynthesis.speak(utterance);
  };

  const handleStartTour = () => {
    if (story.chapters.length === 0) return;
    tourActiveRef.current = true;
    setIsTourActive(true);
    handleSpeakChapter(story.chapters[0].id, true);
  };

  const nearbyVillageObjects = villages.filter((v) => 
    destination.nearbyVillages?.some((name) => 
      v.name.toLowerCase().includes(name.toLowerCase()) || name.toLowerCase().includes(v.name.toLowerCase())
    )
  );

  return (
    <main className="min-h-screen pt-24 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
      
      {/* =========================================================================
          TOP NAVIGATION BAR
          ========================================================================= */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate('/destinations')}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/90 dark:bg-[#1E0E34]/90 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 text-xs font-bold text-[#180B2B] dark:text-white hover:bg-[#7955AE]/10 transition shadow-sm"
        >
          <FaArrowLeft /> Back to Stories
        </button>

        <div className="flex items-center gap-3">
          <Link
            to="/safety"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-red-600/15 border border-red-500/30 text-red-600 dark:text-red-400 font-bold text-xs hover:bg-red-600/25 transition shadow-sm"
          >
            <FaShieldAlt /> Register Safe Path Trip
          </Link>
        </div>
      </div>

      {/* =========================================================================
          OPENING SCENE: AUTHENTIC PHOTOGRAPH EMERGING THROUGH SOFT CLOUDS
          ========================================================================= */}
      <div className="relative rounded-3xl overflow-hidden border border-[#7955AE]/25 dark:border-[#B9A5DF]/35 bg-[#180B2B] shadow-2xl">
        <div className="relative h-96 sm:h-[32rem] w-full overflow-hidden">
          <img
            src={destination.heroImage}
            alt={destination.name}
            className="w-full h-full object-cover scale-105 animate-pulse duration-[8000ms]"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/puri.jpg';
            }}
          />

          {/* Atmospheric Soft Clouds and Purple Lighting Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#180B2B] via-[#180B2B]/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent pointer-events-none" />

          {/* Official Watermark */}
          <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-[10px] font-sans font-medium bg-black/60 text-white/90 backdrop-blur-md border border-white/15">
            © Odisha Tourism, Government of Odisha. All Rights Reserved
          </div>

          {/* Opening Scene Title & Header Info */}
          <div className="absolute bottom-6 left-6 right-6 z-10 space-y-3 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#7955AE] text-white shadow-md">
                {story.storyCategory}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-md border border-white/20 flex items-center gap-1">
                <FaMapMarkerAlt /> {destination.district} District · {destination.region}
              </span>
            </div>

            <div className="text-sm font-serif font-semibold text-[#D9CCF2]">
              {destination.odiaName}
            </div>

            <h1 className="text-3xl sm:text-5xl font-cinzel font-black text-white leading-tight drop-shadow-lg">
              {story.storyTitle}
            </h1>

            <p className="text-sm sm:text-base text-stone-200 font-serif italic max-w-2xl leading-relaxed drop-shadow-md">
              {story.storySubtitle}
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================================
          INTERACTIVE AUDIO NARRATION BAR ("LISTEN TO STORY")
          ========================================================================= */}
      <div className="rounded-2xl p-6 sm:p-8 border border-[#7955AE]/25 dark:border-[#B9A5DF]/35 bg-white/95 dark:bg-[#1E0E34]/95 shadow-xl backdrop-blur-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#7955AE] to-[#9370D8] text-white flex items-center justify-center shadow-lg shadow-purple-500/30">
              <FaVolumeUp size={22} className={isPlaying ? 'animate-bounce' : ''} />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-cinzel font-bold text-[#180B2B] dark:text-white">
                Listen to the Story of {destination.name}
              </h2>
              <p className="text-xs text-stone-500 dark:text-[#B9A5DF]">
                Original spoken narration voiced in authentic regional accents
              </p>
            </div>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-stone-500 dark:text-stone-300">Language:</span>
            <div className="inline-flex rounded-xl bg-stone-100 dark:bg-[#150A26] p-1 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30">
              {(['en', 'hi', 'or'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    handleStopAudio();
                    setSelectedLang(lang);
                  }}
                  className={`px-3 py-1 rounded-lg font-bold text-xs transition ${
                    selectedLang === lang
                      ? 'bg-[#7955AE] text-white shadow-sm'
                      : 'text-stone-600 dark:text-stone-300 hover:text-[#7955AE]'
                  }`}
                >
                  {lang === 'en' ? 'English' : lang === 'hi' ? 'हिंदी' : 'ଓଡ଼ିଆ'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Audio Progress Bar */}
        <div className="space-y-1.5">
          <div className="h-2 w-full rounded-full bg-stone-200 dark:bg-[#150A26] overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#7955AE] to-[#BBA5E5] transition-all duration-300"
              style={{ width: `${speechProgress}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[11px] text-stone-400">
            <span>{isPlaying ? 'Narration in progress...' : isPaused ? 'Narration paused' : 'Ready to listen'}</span>
            <span>{speechProgress}%</span>
          </div>
        </div>

        {/* Audio Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-2">
            {!isPlaying ? (
              <button
                onClick={handlePlayAudio}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#7955AE] hover:bg-[#613A9E] text-white font-bold text-xs shadow-md transition"
              >
                <FaPlay size={11} /> <span>Play Story</span>
              </button>
            ) : (
              <button
                onClick={handlePauseAudio}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md transition"
              >
                <FaPause size={11} /> <span>Pause</span>
              </button>
            )}

            {(isPlaying || isPaused) && (
              <button
                onClick={handleStopAudio}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-200 dark:bg-[#150A26] hover:bg-stone-300 dark:hover:bg-[#200D38] text-stone-700 dark:text-stone-200 font-bold text-xs transition"
              >
                <FaStop size={11} /> <span>Stop</span>
              </button>
            )}
          </div>

          {/* Transcript Toggle Button */}
          <button
            onClick={() => setShowTranscript(!showTranscript)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-[#7955AE] dark:text-[#D9CCF2] hover:bg-[#7955AE]/10 transition"
          >
            <FaFileAlt />
            <span>{showTranscript ? 'Hide Written Transcript' : 'Read Full Written Transcript'}</span>
            {showTranscript ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
          </button>
        </div>

        {/* Transcript Drawer */}
        {showTranscript && (
          <div className="mt-4 p-4 rounded-xl bg-stone-50 dark:bg-[#150A26] border border-[#7955AE]/20 dark:border-[#B9A5DF]/20 text-xs sm:text-sm font-serif leading-relaxed text-stone-700 dark:text-[#E8E3F0]">
            <p className="font-sans font-bold text-xs uppercase tracking-wider text-[#7955AE] dark:text-[#B9A5DF] mb-2">
              Transcript ({selectedLang === 'en' ? 'English' : selectedLang === 'hi' ? 'हिंदी' : 'ଓଡ଼ିଆ'}):
            </p>
            {story.narration[selectedLang] || story.narration.en}
          </div>
        )}
      </div>

      {/* =========================================================================
          STORY INTRODUCTION: THE ESSENCE & ORIGIN
          ========================================================================= */}
      <section className="space-y-4">
        <h2 className="text-2xl font-cinzel font-bold text-[#180B2B] dark:text-white">
          The Origin & Identity
        </h2>
        <div className="p-6 sm:p-8 rounded-2xl bg-white/80 dark:bg-[#1E0E34]/80 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 leading-relaxed font-serif text-base text-stone-700 dark:text-[#E8E3F0] space-y-3">
          <p className="first-letter:text-4xl first-letter:font-cinzel first-letter:font-black first-letter:text-[#7955AE] dark:first-letter:text-[#D9CCF2] first-letter:mr-2 first-letter:float-left">
            {story.openingAtmosphere}
          </p>
          <p>
            {destination.historicalBackground}
          </p>
        </div>
      </section>

      {/* =========================================================================
          HISTORICAL CHRONICLE: CHAPTERS OF HISTORY WITH VOICE ASSISTANT
          ========================================================================= */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest font-bold text-[#7955AE] dark:text-[#B9A5DF]">
              Living Storytelling & Historical Chronicle
            </span>
            <h2 className="text-2xl sm:text-3xl font-cinzel font-bold text-[#180B2B] dark:text-white">
              Chapters in Stone & Memory
            </h2>
          </div>
          
          <div className="text-xs font-serif text-stone-500 dark:text-[#B9A5DF] max-w-sm">
            Voice Guide explains who the royal kings were, when it was built, architectural secrets, and living legends.
          </div>
        </div>

        {/* AI Historical Voice Guide Banner */}
        <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-purple-100/70 via-white to-purple-50/50 dark:from-[#271040] dark:via-[#1E0E34] dark:to-[#170929] border border-[#7955AE]/30 dark:border-[#B9A5DF]/35 shadow-xl backdrop-blur-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#7955AE] text-white shadow-sm">
              <FaHeadphones size={12} />
              <span>Karma-Path Voice Storyteller · ଐତିହ୍ୟ କଥାକାର</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-cinzel font-black text-[#180B2B] dark:text-white">
              Complete Oral History & Past Chronicles
            </h3>
            <p className="text-xs sm:text-sm font-serif text-stone-600 dark:text-[#D9CCF2] leading-relaxed">
              Experience the past as a spoken chronicle. Learn how {destination.name} was envisioned, the ruling monarchs who sculpted it, and how centuries of devotion shaped its legacy.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {isTourActive ? (
              <button
                onClick={handleStopAudio}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-600/30 transition"
              >
                <FaStop size={12} />
                <span>Stop Voice Tour</span>
              </button>
            ) : (
              <button
                onClick={handleStartTour}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#7955AE] hover:bg-[#613A9E] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-purple-600/30 transition transform hover:-translate-y-0.5"
              >
                <FaPlay size={11} />
                <span>Start Full Voice Tour (Ch. 1 - {story.chapters.length})</span>
              </button>
            )}
          </div>
        </div>

        {/* Chronological Narrative Chapters (Text & Voice Assistant Only - No Chapter Images) */}
        <div className="space-y-6">
          {story.chapters.map((chapter) => {
            const isThisSpeaking = activeVoiceChapterId === chapter.id && isPlaying;

            return (
              <div
                key={chapter.id}
                id={`chapter-${chapter.id}`}
                className={`rounded-3xl p-6 sm:p-8 border transition-all duration-300 relative overflow-hidden backdrop-blur-xl ${
                  isThisSpeaking
                    ? 'border-[#7955AE] ring-4 ring-[#7955AE]/20 bg-gradient-to-br from-purple-50/95 via-white to-purple-50/40 dark:from-[#2A124A] dark:via-[#1E0E34] dark:to-[#170929] shadow-2xl scale-[1.01]'
                    : 'border-[#7955AE]/20 dark:border-[#B9A5DF]/30 bg-white/95 dark:bg-[#1E0E34]/95 shadow-lg hover:border-[#7955AE]/40'
                }`}
              >
                {/* Active Speaking Ambient Glow */}
                {isThisSpeaking && (
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#7955AE] via-[#BBA5E5] to-[#7955AE] animate-pulse" />
                )}

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200/80 dark:border-white/10">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#7955AE] text-white shadow-sm">
                      Chapter {chapter.chapterNumber}
                    </span>
                    <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-stone-100 dark:bg-[#150A26] text-stone-700 dark:text-[#D9CCF2] border border-stone-200 dark:border-white/10">
                      ⏳ {chapter.eraOrDate}
                    </span>
                    {isThisSpeaking && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white animate-pulse">
                        <span className="w-2 h-2 rounded-full bg-white"></span>
                        Voice Assistant Speaking
                      </span>
                    )}
                  </div>

                  {/* Individual Chapter Voice Assistant Button */}
                  <button
                    onClick={() => handleSpeakChapter(chapter.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition shadow-sm ${
                      isThisSpeaking
                        ? 'bg-amber-600 hover:bg-amber-700 text-white shadow-amber-600/30'
                        : 'bg-[#7955AE] hover:bg-[#613A9E] text-white shadow-purple-600/20'
                    }`}
                  >
                    {isThisSpeaking ? (
                      <>
                        <FaStop size={11} />
                        <span>Stop Chapter Voice</span>
                      </>
                    ) : (
                      <>
                        <FaVolumeUp size={12} />
                        <span>Listen to Chapter Story</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="pt-5 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-cinzel font-black text-[#180B2B] dark:text-white leading-snug">
                    {chapter.chapterTitle}
                  </h3>

                  <p className="text-base sm:text-lg font-serif text-stone-700 dark:text-[#E8E3F0] leading-relaxed">
                    {chapter.narrative}
                  </p>

                  {/* Equalizer Wave when Voice Assistant is actively narrating this chapter */}
                  {isThisSpeaking && (
                    <div className="flex items-center gap-3 pt-3 p-3 rounded-2xl bg-[#7955AE]/10 dark:bg-[#B9A5DF]/10 border border-[#7955AE]/20 text-xs font-bold text-[#7955AE] dark:text-[#B9A5DF]">
                      <div className="flex items-end gap-1 h-5">
                        <span className="w-1 bg-[#7955AE] dark:bg-[#B9A5DF] rounded-full animate-bounce h-3"></span>
                        <span className="w-1 bg-[#7955AE] dark:bg-[#B9A5DF] rounded-full animate-bounce h-5 delay-75"></span>
                        <span className="w-1 bg-[#7955AE] dark:bg-[#B9A5DF] rounded-full animate-bounce h-2 delay-150"></span>
                        <span className="w-1 bg-[#7955AE] dark:bg-[#B9A5DF] rounded-full animate-bounce h-4 delay-100"></span>
                      </div>
                      <span>Karma-Path Cultural Voice Assistant is narrating Chapter {chapter.chapterNumber} ({selectedLang.toUpperCase()})...</span>
                    </div>
                  )}

                  {chapter.source && (
                    <div className="pt-2 text-[11px] text-stone-400 dark:text-stone-500 font-sans">
                      Verified Historical Reference: {chapter.source}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          VERTICAL HISTORICAL TIMELINE
          ========================================================================= */}
      <section className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs uppercase tracking-widest font-bold text-[#7955AE] dark:text-[#B9A5DF]">
            Key Historical Milestones
          </span>
          <h2 className="text-2xl sm:text-3xl font-cinzel font-bold text-[#180B2B] dark:text-white">
            Historical Timeline
          </h2>
        </div>

        <div className="relative border-l-2 border-[#7955AE]/30 dark:border-[#B9A5DF]/40 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-8">
          {story.timeline.map((event, idx) => (
            <div key={idx} className="relative group">
              {/* Bullet Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#7955AE] dark:bg-[#B9A5DF] border-4 border-white dark:border-[#180B2B] shadow-md group-hover:scale-125 transition" />

              <div className="p-5 rounded-2xl bg-white/90 dark:bg-[#1E0E34]/90 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 shadow-md space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#7955AE] text-white">
                    {event.yearOrEra}
                  </span>
                  {event.verifiedSource && (
                    <span className="text-[10px] text-stone-400 dark:text-stone-400">
                      Ref: {event.verifiedSource}
                    </span>
                  )}
                </div>

                <h4 className="text-base font-cinzel font-bold text-[#180B2B] dark:text-white">
                  {event.title}
                </h4>

                <p className="text-xs sm:text-sm font-serif text-stone-600 dark:text-[#D0C3E3] leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          VERIFIED HISTORICAL FACTS VS SACRED LIVING LEGENDS
          ========================================================================= */}
      <section className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs uppercase tracking-widest font-bold text-[#7955AE] dark:text-[#B9A5DF]">
            Epigraphy & Folklore
          </span>
          <h2 className="text-2xl sm:text-3xl font-cinzel font-bold text-[#180B2B] dark:text-white">
            Facts & Living Legends
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Verified Facts Card */}
          <div className="rounded-2xl p-6 bg-white/95 dark:bg-[#1E0E34]/95 border border-emerald-500/30 shadow-lg space-y-4">
            <div className="flex items-center gap-2.5 text-emerald-600 dark:text-emerald-400 font-bold text-sm uppercase tracking-wider">
              <FaCheckCircle />
              <span>Verified Historical Facts (ASI & Inscriptions)</span>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-serif leading-relaxed">
              {story.historicalFacts.map((fact, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold mt-1">✓</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Living Legends Card */}
          <div className="rounded-2xl p-6 bg-white/95 dark:bg-[#1E0E34]/95 border border-[#7955AE]/30 dark:border-[#B9A5DF]/35 shadow-lg space-y-4">
            <div className="flex items-center gap-2.5 text-[#7955AE] dark:text-[#B9A5DF] font-bold text-sm uppercase tracking-wider">
              <FaBookOpen />
              <span>Living Legends & Sacred Folklore</span>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-serif leading-relaxed">
              {story.livingLegends.map((legend, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#7955AE] dark:text-[#B9A5DF] font-bold mt-1">✦</span>
                  <span>{legend}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CULTURAL TRADITIONS, FOOD & LOCAL ARTISANS
          ========================================================================= */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Local Traditions */}
        <div className="p-6 rounded-2xl bg-white/95 dark:bg-[#1E0E34]/95 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 shadow-md space-y-3">
          <div className="flex items-center gap-2 text-[#7955AE] dark:text-[#B9A5DF] font-bold text-xs uppercase tracking-wider">
            <FaHands />
            <span>Rituals & Traditions</span>
          </div>
          <p className="text-xs sm:text-sm font-serif text-stone-700 dark:text-[#E8E3F0] leading-relaxed">
            {destination.localTraditions}
          </p>
        </div>

        {/* Local Cuisine */}
        <div className="p-6 rounded-2xl bg-white/95 dark:bg-[#1E0E34]/95 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 shadow-md space-y-3">
          <div className="flex items-center gap-2 text-[#7955AE] dark:text-[#B9A5DF] font-bold text-xs uppercase tracking-wider">
            <FaUtensils />
            <span>Authentic Local Delicacies</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {destination.localFood?.map((food, i) => (
              <span key={i} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-stone-100 dark:bg-[#150A26] text-stone-700 dark:text-stone-300">
                {food}
              </span>
            ))}
          </div>
        </div>

        {/* Local Crafts */}
        <div className="p-6 rounded-2xl bg-white/95 dark:bg-[#1E0E34]/95 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 shadow-md space-y-3">
          <div className="flex items-center gap-2 text-[#7955AE] dark:text-[#B9A5DF] font-bold text-xs uppercase tracking-wider">
            <FaLandmark />
            <span>Indigenous Handicrafts</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {destination.localHandicrafts?.map((craft, i) => (
              <span key={i} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-stone-100 dark:bg-[#150A26] text-stone-700 dark:text-stone-300">
                {craft}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          NEARBY HERITAGE VILLAGES
          ========================================================================= */}
      {nearbyVillageObjects.length > 0 && (
        <section className="space-y-4">
          <h3 className="text-xl font-cinzel font-bold text-[#180B2B] dark:text-white">
            Nearby Artisan & Heritage Villages
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {nearbyVillageObjects.map((village) => (
              <Link
                key={village.id}
                to={`/village/${village.id}`}
                className="group p-4 rounded-2xl bg-white/90 dark:bg-[#1E0E34]/90 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 hover:border-[#7955AE] transition shadow-md flex items-center justify-between"
              >
                <div>
                  <div className="text-xs text-[#7955AE] dark:text-[#B9A5DF] font-bold">{village.district} District</div>
                  <div className="font-cinzel font-bold text-base text-[#180B2B] dark:text-white group-hover:text-[#7955AE] transition">
                    {village.name}
                  </div>
                  <div className="text-xs text-stone-500 dark:text-stone-400 font-serif line-clamp-1">
                    {(village as any).speciality || (village as any).famousArt || (village as any).craftSpecialty || 'Traditional craft village'}
                  </div>
                </div>
                <div className="w-8 h-8 rounded-xl bg-[#7955AE]/15 text-[#7955AE] dark:text-white flex items-center justify-center group-hover:scale-110 transition">
                  →
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* =========================================================================
          CONSERVATION & RESPONSIBLE TRAVEL NOTE
          ========================================================================= */}
      <div className="p-6 rounded-2xl border border-[#7955AE]/30 dark:border-[#B9A5DF]/30 bg-purple-50/50 dark:bg-[#1A0B2E]/50 space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold text-[#7955AE] dark:text-[#D9CCF2] uppercase tracking-wider">
          <FaInfoCircle /> <span>Conservation Status & Responsible Travel</span>
        </div>
        <p className="text-xs sm:text-sm font-serif text-stone-700 dark:text-[#E8E3F0] leading-relaxed">
          {story.conservationNote}
        </p>
      </div>

      {/* =========================================================================
          VERIFIED SOURCES & IMAGE ATTRIBUTION FOOTER
          ========================================================================= */}
      <footer className="pt-6 border-t border-stone-200 dark:border-white/10 text-center space-y-2 text-xs text-stone-500 dark:text-stone-400">
        <p>
          Historical texts, timelines, and archaeological data compiled from official publications of the{' '}
          <strong className="text-stone-700 dark:text-stone-200">Archaeological Survey of India (ASI)</strong> and the{' '}
          <strong className="text-stone-700 dark:text-stone-200">Department of Tourism, Government of Odisha</strong>.
        </p>
        <p className="text-[11px] text-stone-400 dark:text-stone-500">
          Photographic assets: {destination.imageAttribution || 'Odisha Tourism & Archaeological Survey of India'}.
        </p>
      </footer>

    </main>
  );
}
