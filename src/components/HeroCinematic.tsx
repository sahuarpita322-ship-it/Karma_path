import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

interface HeroCinematicProps {
  onSearch?: (query: string) => void;
}

export const HeroCinematic: React.FC<HeroCinematicProps> = ({ onSearch }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const popularPillsRow1 = [
    { label: 'Jagannath Temple, Puri', to: '/destination/puri-jagannath' },
    { label: 'Konark Sun Temple', to: '/destination/konark' },
    { label: 'Raghurajpur Craft Village', to: '/village/v-raghurajpur' },
    { label: 'Chilika Lake & Dolphins', to: '/destination/chilika' },
  ];

  const popularPillsRow2 = [
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
      className="relative min-h-[82vh] sm:min-h-[88vh] w-full flex items-center justify-center overflow-hidden pt-20 sm:pt-24 pb-16 sm:pb-20"
    >
      {/* =========================================================================
          LAYER 0: MAJESTIC SHREE JAGANNATH TEMPLE PURI FULL-SCREEN BACKGROUND
          Authentic temple shikhara, blue sky and warm sunset glow
          ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/puri.jpg"
          alt="Shree Jagannath Temple, Puri, Odisha"
          className="w-full h-full object-cover object-[center_28%] scale-105"
          style={{
            transform: `scale(1.05) translate3d(${mousePos.x * -6}px, ${mousePos.y * -4}px, 0)`,
            transition: 'transform 0.4s ease-out'
          }}
        />

        {/* Subtle Ambient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-black/15 dark:from-[#180B2B] dark:via-transparent dark:to-black/35" />

        {/* Ethereal Smooth Fog / Mist Bottom Transition into White Section */}
        <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-white via-white/85 to-transparent dark:from-[#180B2B] dark:via-[#180B2B]/85 pointer-events-none" />
      </div>

      {/* =========================================================================
          LAYER 1: HERO EDITORIAL CONTENT (Centered exactly as in design)
          ========================================================================= */}
      <div 
        className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4 sm:space-y-5"
        style={{
          transform: `translate3d(${mousePos.x * 4}px, ${mousePos.y * 3}px, 0)`,
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        
        {/* Floating Mission Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] bg-white/95 text-[#200D38] border border-white/80 dark:bg-[#1E0E34]/95 dark:text-[#E8E3F0] dark:border-[#B9A5DF]/30 shadow-md backdrop-blur-md">
          <span className="w-2.5 h-2.5 rounded-full bg-[#B9A5DF] dark:bg-[#B9A5DF]" />
          <span>KARMA-PATH · TRAVEL WITH PURPOSE · EMPOWER LOCAL ODISHA</span>
        </div>

        {/* Main Editorial Heading */}
        <div className="space-y-1">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-cinzel font-black tracking-tight text-[#180B2B] dark:text-white leading-[1.05] drop-shadow-[0_2px_14px_rgba(255,255,255,0.7)] dark:drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]">
            DISCOVER ODISHA.
          </h1>
          <div className="text-4xl sm:text-6xl lg:text-7xl font-serif italic font-bold text-[#6B46C1] dark:text-[#DDD1F8] leading-[1.08] drop-shadow-[0_2px_14px_rgba(255,255,255,0.85)] dark:drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
            Empower Its Soul.
          </div>

          <p className="text-base sm:text-xl text-[#2D1D44] dark:text-[#EDE6F8] font-serif italic max-w-2xl mx-auto leading-relaxed pt-2 drop-shadow-[0_1px_10px_rgba(255,255,255,0.85)] dark:drop-shadow-none">
            Do good deeds. Elevate master handloom weavers and artisans. Experience living sacred traditions and travel with lasting purpose.
          </p>
        </div>

        {/* Rounded-Full Pill Search Bar */}
        <form 
          onSubmit={handleSearchSubmit}
          className="max-w-2xl mx-auto pt-2"
        >
          <div className="relative flex items-center rounded-full bg-white dark:bg-[#1E0E34] border border-stone-200/90 dark:border-[#B9A5DF]/30 p-1.5 pl-5 shadow-xl backdrop-blur-xl hover:shadow-2xl transition-all duration-300">
            <div className="text-[#6B46C1] dark:text-[#B9A5DF] mr-3">
              <FaSearch size={16} />
            </div>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Jagannath Puri, Sambalpuri Ikat, Raghurajpur, Odissi..."
              className="w-full bg-transparent border-none text-xs sm:text-sm font-medium text-[#180B2B] dark:text-white placeholder-stone-500 dark:placeholder-[#B9A5DF]/70 focus:outline-none"
            />

            <button
              type="submit"
              className="px-6 sm:px-8 py-2.5 rounded-full font-cinzel font-bold text-xs uppercase tracking-wider transition-all duration-300 bg-[#6B46C1] hover:bg-[#5B21B6] text-white shadow-md flex-shrink-0"
            >
              EXPLORE
            </button>
          </div>
        </form>

        {/* Popular Pills in 2 Rows matching screenshot */}
        <div className="space-y-2 pt-1 max-w-3xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-semibold text-stone-600 dark:text-[#D9CCF2] mr-1 hidden sm:inline">
              Popular:
            </span>
            {popularPillsRow1.map((pill, i) => (
              <button
                key={i}
                onClick={() => navigate(pill.to)}
                className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 bg-white/95 dark:bg-[#1E0E34]/90 text-stone-800 dark:text-[#E8E3F0] border border-stone-200/90 dark:border-[#B9A5DF]/30 hover:border-[#6B46C1] hover:scale-105 shadow-sm"
              >
                {pill.label}
              </button>
            ))}
          </div>
          <div className="flex justify-center">
            {popularPillsRow2.map((pill, i) => (
              <button
                key={i}
                onClick={() => navigate(pill.to)}
                className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 bg-white/95 dark:bg-[#1E0E34]/90 text-stone-800 dark:text-[#E8E3F0] border border-stone-200/90 dark:border-[#B9A5DF]/30 hover:border-[#6B46C1] hover:scale-105 shadow-sm"
              >
                {pill.label}
              </button>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};
