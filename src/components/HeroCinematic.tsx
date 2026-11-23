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
      className="relative min-h-[92vh] sm:min-h-screen w-full flex items-center justify-center overflow-hidden pt-24 sm:pt-28 pb-14 sm:pb-20"
    >
      {/* =========================================================================
          LAYER 0: MAJESTIC SHREE JAGANNATH TEMPLE PURI FULL-SCREEN BACKGROUND
          Authentic temple shikhara, golden sunset glow, edge-to-edge full screen
          ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/puri.jpg"
          alt="Shree Jagannath Temple, Puri, Odisha"
          className="w-full h-full object-cover object-[center_30%] scale-105"
          style={{
            transform: `scale(1.05) translate3d(${mousePos.x * -5}px, ${mousePos.y * -3}px, 0)`,
            transition: 'transform 0.4s ease-out'
          }}
        />

        {/* Ambient Overlay for crisp contrast */}
        <div className="absolute inset-0 bg-black/20 dark:bg-black/45" />

        {/* Gentle Seamless Bottom Edge Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-[#180B2B] to-transparent pointer-events-none" />
      </div>

      {/* =========================================================================
          LAYER 1: HERO EDITORIAL CONTENT IN FROSTED GLASSMORPHISM CONTAINER
          ========================================================================= */}
      <div 
        className="relative z-10 w-full max-w-4xl mx-4 sm:mx-auto px-6 sm:px-10 py-8 sm:py-12 rounded-3xl bg-white/65 dark:bg-[#180B2B]/75 backdrop-blur-2xl border border-white/80 dark:border-white/20 shadow-[0_8px_32px_0_rgba(107,70,193,0.22)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] text-center space-y-4 sm:space-y-6"
        style={{
          transform: `translate3d(${mousePos.x * 3}px, ${mousePos.y * 2}px, 0)`,
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        
        {/* Floating Mission Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] bg-white/85 text-[#200D38] border border-white/90 dark:bg-[#1E0E34]/85 dark:text-[#E8E3F0] dark:border-white/20 shadow-sm backdrop-blur-md">
          <span className="w-2.5 h-2.5 rounded-full bg-[#6B46C1] dark:bg-[#B9A5DF]" />
          <span>KARMA-PATH · TRAVEL WITH PURPOSE · EMPOWER LOCAL ODISHA</span>
        </div>

        {/* Main Editorial Heading */}
        <div className="space-y-1">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-cinzel font-black tracking-tight text-[#180B2B] dark:text-white leading-[1.05]">
            DISCOVER ODISHA.
          </h1>
          <div className="text-4xl sm:text-6xl lg:text-7xl font-serif italic font-bold text-[#6B46C1] dark:text-[#D4BBFF] leading-[1.08]">
            Empower Its Soul.
          </div>

          <p className="text-base sm:text-lg text-[#2D1D44] dark:text-[#EDE6F8] font-serif italic max-w-2xl mx-auto leading-relaxed pt-1">
            Do good deeds. Elevate master handloom weavers and artisans. Experience living sacred traditions and travel with lasting purpose.
          </p>
        </div>

        {/* Rounded-Full Pill Search Bar */}
        <form 
          onSubmit={handleSearchSubmit}
          className="max-w-2xl mx-auto pt-2"
        >
          <div className="relative flex items-center rounded-full bg-white/90 dark:bg-[#1E0E34]/90 border border-white/90 dark:border-white/20 p-1.5 pl-5 shadow-lg backdrop-blur-xl hover:shadow-2xl transition-all duration-300">
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

        {/* Popular Pills in 2 Rows matching design */}
        <div className="space-y-2 pt-1 max-w-3xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-semibold text-stone-600 dark:text-[#D9CCF2] mr-1 hidden sm:inline">
              Popular:
            </span>
            {popularPillsRow1.map((pill, i) => (
              <button
                key={i}
                onClick={() => navigate(pill.to)}
                className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 bg-white/85 dark:bg-[#2A1647]/80 text-stone-800 dark:text-[#E8E3F0] border border-white/80 dark:border-white/15 hover:border-[#6B46C1] hover:scale-105 shadow-sm backdrop-blur-md"
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
                className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 bg-white/85 dark:bg-[#2A1647]/80 text-stone-800 dark:text-[#E8E3F0] border border-white/80 dark:border-white/15 hover:border-[#6B46C1] hover:scale-105 shadow-sm backdrop-blur-md"
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
