import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaSearch, 
  FaMapMarkerAlt, 
  FaHandsHelping, 
  FaShieldAlt, 
  FaLandmark 
} from 'react-icons/fa';

interface HeroCinematicProps {
  onSearch?: (query: string) => void;
}

export const HeroCinematic: React.FC<HeroCinematicProps> = ({ onSearch }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const popularPills = [
    { label: 'Jagannath Temple, Puri', to: '/destination/puri-jagannath' },
    { label: 'Konark Sun Temple', to: '/destination/konark' },
    { label: 'Raghurajpur Craft Village', to: '/village/v-raghurajpur' },
    { label: 'Chilika Lake & Dolphins', to: '/destination/chilika' },
    { label: 'Sambalpuri Weavers', to: '/villages' },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width - 0.5) * 2;
    const y = ((clientY - top) / height - 0.5) * 2;
    setMousePos({ x, y });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      if (onSearch) {
        onSearch(searchQuery.trim());
      } else {
        navigate(`/destinations?q=${encodeURIComponent(searchQuery.trim())}`);
      }
    }
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-[72vh] sm:min-h-[78vh] flex items-center justify-center overflow-hidden pb-10 sm:pb-14 pt-20 sm:pt-24"
    >
      {/* =========================================================================
          LAYER 0: MAJESTIC SHREE JAGANNATH TEMPLE PURI FULL-BLEED BACKGROUND
          With Authentic Sunset Hues, Nilachakra Flag & Temple Shikharas
          ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/puri.jpg"
          alt="Shree Jagannath Temple, Puri, Odisha"
          className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out scale-105"
          style={{
            transform: `scale(1.05) translate3d(${mousePos.x * -6}px, ${mousePos.y * -4}px, 0)`,
          }}
        />

        {/* Ambient Dark Atmospheric Gradient: Keeps Temple Gloriously Visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#180B2B] via-[#180B2B]/45 to-[#180B2B]/25 dark:block hidden" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#180B2B]/40 via-transparent to-[#180B2B] dark:block hidden" />

        {/* Ambient Light Mode Gradient: Warm Ethereal Lavender Haze */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8FC] via-[#FAF8FC]/50 to-[#FAF8FC]/15 dark:hidden block" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-[#FAF8FC] dark:hidden block" />
      </div>

      {/* =========================================================================
          LAYER 1: SOFT DRIFTING CLOUDY & MIST EFFECTS
          Creates the Mystical, Atmospheric, Celestial Temple Cloud Ambiance
          ========================================================================= */}
      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
        {/* Cloud Layer 1: Floating Low Mist across Temple Base */}
        <div 
          className="absolute -bottom-20 left-0 right-0 h-96 opacity-60 dark:opacity-40 blur-2xl bg-gradient-to-t from-[#180B2B] via-[#7955AE]/20 to-transparent animate-pulse duration-[6000ms]"
        />

        {/* Cloud Layer 2: Ethereal Soft White/Lavender Drifting Cloud Drift */}
        <div 
          className="absolute top-1/4 -left-40 w-[600px] h-[300px] rounded-full bg-white/20 dark:bg-[#B9A5DF]/15 blur-3xl transform -rotate-12 transition-transform duration-1000"
          style={{ transform: `translate3d(${mousePos.x * 15}px, ${mousePos.y * 10}px, 0)` }}
        />

        {/* Cloud Layer 3: Celestial Twilight Glow over the Nilachakra */}
        <div 
          className="absolute top-10 right-10 w-[500px] h-[350px] rounded-full bg-amber-400/15 dark:bg-[#7955AE]/25 blur-3xl pointer-events-none"
        />

        {/* Cloud Layer 4: Soft Horizon Mist Stream */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#FAF8FC] dark:from-[#180B2B] to-transparent pointer-events-none" />
      </div>

      {/* =========================================================================
          LAYER 2: HERO EDITORIAL CONTENT & AI SEARCH INTERACTION
          ========================================================================= */}
      <div 
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 pt-6 sm:pt-10"
        style={{
          transform: `translate3d(${mousePos.x * 5}px, ${mousePos.y * 3}px, 0)`,
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        
        {/* Floating Purpose-Driven Mission Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] bg-white/95 text-[#200D38] border border-[#7955AE]/30 dark:bg-[#1E0E34]/90 dark:text-[#E8E3F0] dark:border-[#B9A5DF]/40 backdrop-blur-2xl shadow-xl">
          <span className="w-2 h-2 rounded-full bg-[#7955AE] dark:bg-[#B9A5DF] animate-ping" />
          <span>Karma-Path · Travel with Purpose · Empower Local Odisha</span>
        </div>

        {/* Main Editorial Heading */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-cinzel font-black tracking-tight text-[#180B2B] dark:text-[#FFFFFF] leading-[1.08] drop-shadow-xl">
            Discover Odisha.{' '}
            <span className="bg-gradient-to-r from-[#7955AE] via-[#9370D8] to-[#503C6B] dark:from-[#FFFFFF] dark:via-[#D9CCF2] dark:to-[#B9A5DF] bg-clip-text text-transparent font-serif italic block sm:inline">
              Empower Its Soul.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-[#3A1F5E] dark:text-[#EDE6F8] font-serif italic max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Do good deeds. Elevate master handloom weavers and artisans. Experience living sacred traditions and travel with lasting purpose.
          </p>
        </div>

        {/* Glassmorphic Search Bar */}
        <form 
          onSubmit={handleSearchSubmit}
          className="max-w-2xl mx-auto relative group"
        >
          <div className="relative flex items-center rounded-2xl bg-white/95 dark:bg-[#1E0E34]/90 border border-[#7955AE]/30 dark:border-[#B9A5DF]/40 p-2 shadow-2xl backdrop-blur-2xl group-hover:border-[#7955AE] dark:group-hover:border-white transition-all duration-300">
            <div className="pl-4 pr-3 text-[#7955AE] dark:text-[#B9A5DF]">
              <FaSearch size={18} />
            </div>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Jagannath Puri, Sambalpuri Ikat, Raghurajpur, Odissi..."
              className="w-full bg-transparent border-none text-xs sm:text-sm font-medium text-[#180B2B] dark:text-white placeholder-[#716680] dark:placeholder-[#B9A5DF]/70 focus:outline-none"
            />

            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl font-cinzel font-bold text-xs uppercase tracking-wider transition-all duration-300 bg-[#7955AE] text-white hover:bg-[#613A9E] shadow-md shadow-purple-500/25 dark:bg-white dark:text-[#180B2B] dark:hover:bg-[#E8E3F0]"
            >
              Explore
            </button>
          </div>
        </form>

        {/* Quick Discovery Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1 max-w-3xl mx-auto">
          <span className="text-xs font-semibold text-[#503C6B] dark:text-[#D9CCF2] mr-1 hidden sm:inline">
            Popular:
          </span>
          {popularPills.map((pill, i) => (
            <button
              key={i}
              onClick={() => navigate(pill.to)}
              className="px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 bg-white/85 dark:bg-[#1E0E34]/80 text-[#200D38] dark:text-[#E8E3F0] border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 hover:border-[#7955AE] dark:hover:border-white hover:scale-105 shadow-sm"
            >
              {pill.label}
            </button>
          ))}
        </div>

      </div>

    </section>
  );
};
