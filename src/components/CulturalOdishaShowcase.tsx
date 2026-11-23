import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaLandmark, 
  FaMusic, 
  FaCalendarAlt, 
  FaArrowRight,
  FaThLarge,
  FaStream,
  FaCheckCircle,
  FaStar
} from 'react-icons/fa';

export const CulturalOdishaShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dance' | 'music' | 'festival'>('dance');
  const [layoutMode, setLayoutMode] = useState<'staggered' | 'cards'>('staggered');

  const danceHighlights = [
    { label: 'Classical Odissi', value: '2,000+ Yrs Temple Heritage' },
    { label: 'Mayurbhanj Chhau', value: 'UNESCO Martial Art Dance' },
    { label: 'Sambalpuri Folk', value: 'Dalkhai & Rangabati Beats' },
    { label: 'Gotipua Lineage', value: 'Acrobatic Temple Roots' }
  ];

  const danceTags = [
    'Classical Odissi',
    'Tribhanga Posture',
    'Mahari Tradition',
    'Gotipua',
    'Sambalpuri Dalkhai',
    'Mayurbhanj Chhau'
  ];

  const musicHighlights = [
    { label: 'Geeta Govinda', value: '800+ Yrs Nightly Temple Hymn' },
    { label: 'Classical Grammar', value: 'Sangita Narayana & Gita Prakasa' },
    { label: 'Ragas & Talas', value: 'Mangala Gujjari, Kamodi & Yati' },
    { label: 'Sacred Mardala', value: 'Classical Temple Percussion' }
  ];

  const musicTags = [
    'Odissi Classical Music',
    'Geeta Govinda',
    'Saint Jayadeva',
    'Mardala Drum',
    'Chhanda Champu',
    'Temple Ragas'
  ];

  const festivalHighlights = [
    { label: 'Puri Ratha Yatra', value: 'World\'s Largest Chariot Festival' },
    { label: 'Raja Parba', value: 'Celebrating Mother Earth & Fertility' },
    { label: 'Bali Yatra', value: 'Asia\'s Largest Open-Air Trade Fair' },
    { label: 'Nuakhai & Chandi Medha', value: 'Harvest Gratitude & Silver Filigree' }
  ];

  const festivalTags = [
    'Puri Ratha Yatra',
    'Nandighosha Chariot',
    'Raja Parba',
    'Bali Yatra',
    'Nuakhai',
    'Cuttack Durga Puja'
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[#7955AE]/15 text-[#7955AE] dark:bg-white/15 dark:text-white border border-[#7955AE]/25 dark:border-white/20">
          <FaLandmark />
          <span>Odisha Traditional Culture & Performing Arts</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-cinzel font-black tracking-tight text-[#180B2B] dark:text-white leading-tight">
          Living Soul of Odisha:{' '}
          <span className="text-[#5B21B6] dark:text-[#E0D2FE] font-serif italic font-extrabold drop-shadow-sm">
            Dance, Music & Festivals
          </span>
        </h2>

        <p className="text-sm sm:text-base text-stone-600 dark:text-[#E8E3F0] font-serif italic leading-relaxed">
          From ancient 2nd-century BCE rock carvings of Udayagiri to Jayadeva’s Geeta Govinda ballads and the celestial chariots of Ratha Yatra.
        </p>

        {/* View Mode Switcher: Cards vs Alternating Staggered */}
        <div className="flex items-center justify-center gap-2 pt-2">
          <div className="inline-flex p-1 rounded-xl bg-stone-100 dark:bg-[#150A26] border border-[#7955AE]/20 dark:border-[#B9A5DF]/30">
            <button
              onClick={() => setLayoutMode('staggered')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                layoutMode === 'staggered'
                  ? 'bg-[#7955AE] text-white dark:bg-white dark:text-[#180B2B] shadow-md'
                  : 'text-stone-600 dark:text-[#B9A5DF] hover:text-[#180B2B]'
              }`}
            >
              <FaStream size={11} />
              <span>Alternating Story Cards</span>
            </button>
            <button
              onClick={() => setLayoutMode('cards')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                layoutMode === 'cards'
                  ? 'bg-[#7955AE] text-white dark:bg-white dark:text-[#180B2B] shadow-md'
                  : 'text-stone-600 dark:text-[#B9A5DF] hover:text-[#180B2B]'
              }`}
            >
              <FaThLarge size={11} />
              <span>3-Pillars Card Deck</span>
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MODE 1: 3-PILLARS CARD DECK (CARDS SIDE-BY-SIDE + SPOTLIGHT)
          ========================================================================= */}
      {layoutMode === 'cards' && (
        <div className="space-y-8 animate-fadeIn">
          {/* 3 Interactive Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Dance */}
            <div 
              onClick={() => setActiveTab('dance')}
              className={`rounded-2xl overflow-hidden cursor-pointer border-2 transition-all duration-300 p-5 space-y-4 ${
                activeTab === 'dance'
                  ? 'bg-white dark:bg-[#1E0E34] border-[#7955AE] dark:border-white shadow-2xl scale-[1.02]'
                  : 'bg-white/80 dark:bg-[#1E0E34]/80 border-[#7955AE]/20 dark:border-[#B9A5DF]/25 hover:border-[#7955AE]/50 shadow-md'
              }`}
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black">
                <img
                  src="/odissi-dance.jpg"
                  alt="Classical Odissi & Folk Dance"
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/culture-grid.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-[#180B2B]/90 text-white backdrop-blur-md">
                  Pillar 01
                </div>
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                  <div className="text-[10px] text-[#D9CCF2] font-serif">ଓଡ଼ିଶୀ ନୃତ୍ୟ</div>
                  <div className="font-cinzel font-bold text-sm">Classical Dance</div>
                </div>
              </div>
              <div className="space-y-1">
                <h4 className="font-cinzel font-black text-base text-[#180B2B] dark:text-white">
                  Odissi, Chhau & Folk Beats
                </h4>
                <p className="text-xs text-stone-600 dark:text-[#D0C3E3] font-serif line-clamp-2">
                  Sculptures in motion, ancient temple devotion, and high-spirited rural harvest celebrations.
                </p>
              </div>
              <div className="text-xs font-bold text-[#7955AE] dark:text-[#B9A5DF] flex items-center gap-1">
                <span>{activeTab === 'dance' ? '● Currently Active' : 'Tap to View Details →'}</span>
              </div>
            </div>

            {/* Card 2: Music */}
            <div 
              onClick={() => setActiveTab('music')}
              className={`rounded-2xl overflow-hidden cursor-pointer border-2 transition-all duration-300 p-5 space-y-4 ${
                activeTab === 'music'
                  ? 'bg-white dark:bg-[#1E0E34] border-[#7955AE] dark:border-white shadow-2xl scale-[1.02]'
                  : 'bg-white/80 dark:bg-[#1E0E34]/80 border-[#7955AE]/20 dark:border-[#B9A5DF]/25 hover:border-[#7955AE]/50 shadow-md'
              }`}
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900">
                <img
                  src="/odisha-classical-music.jpg"
                  alt="Odisha Classical Music & Sacred Ballads"
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/culture-grid.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-[#180B2B]/90 text-white backdrop-blur-md">
                  Pillar 02
                </div>
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                  <div className="text-[10px] text-[#D9CCF2] font-serif">ଓଡ଼ିଶୀ ଶାସ୍ତ୍ରୀୟ ସଙ୍ଗୀତ</div>
                  <div className="font-cinzel font-bold text-sm">Classical Music</div>
                </div>
              </div>
              <div className="space-y-1">
                <h4 className="font-cinzel font-black text-base text-[#180B2B] dark:text-white">
                  Geeta Govinda & Ragas
                </h4>
                <p className="text-xs text-stone-600 dark:text-[#D0C3E3] font-serif line-clamp-2">
                  Distinct Shastric grammar, Jayadeva's Geeta Govinda & ancient temple ragas.
                </p>
              </div>
              <div className="text-xs font-bold text-[#7955AE] dark:text-[#B9A5DF] flex items-center gap-1">
                <span>{activeTab === 'music' ? '● Currently Active' : 'Tap to View Details →'}</span>
              </div>
            </div>

            {/* Card 3: Festivals */}
            <div 
              onClick={() => setActiveTab('festival')}
              className={`rounded-2xl overflow-hidden cursor-pointer border-2 transition-all duration-300 p-5 space-y-4 ${
                activeTab === 'festival'
                  ? 'bg-white dark:bg-[#1E0E34] border-[#7955AE] dark:border-white shadow-2xl scale-[1.02]'
                  : 'bg-white/80 dark:bg-[#1E0E34]/80 border-[#7955AE]/20 dark:border-[#B9A5DF]/25 hover:border-[#7955AE]/50 shadow-md'
              }`}
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900">
                <img
                  src="/ratha-yatra-festival.jpg"
                  alt="Ratha Yatra: The World's Biggest Festival"
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/puri.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-[#180B2B]/90 text-white backdrop-blur-md">
                  Pillar 03
                </div>
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                  <div className="text-[10px] text-[#D9CCF2] font-serif">ରଥଯାତ୍ରା ଓ ପର୍ବ</div>
                  <div className="font-cinzel font-bold text-sm">Grand Festivals</div>
                </div>
              </div>
              <div className="space-y-1">
                <h4 className="font-cinzel font-black text-base text-[#180B2B] dark:text-white">
                  Ratha Yatra: World's Biggest Festival
                </h4>
                <p className="text-xs text-stone-600 dark:text-[#D0C3E3] font-serif line-clamp-2">
                  Millions of devotees, colossal wooden chariots, and a celebration of universal brotherhood.
                </p>
              </div>
              <div className="text-xs font-bold text-[#7955AE] dark:text-[#B9A5DF] flex items-center gap-1">
                <span>{activeTab === 'festival' ? '● Currently Active' : 'Tap to View Details →'}</span>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* =========================================================================
          MODE 2: STAGGERED SIDE-BY-SIDE ALTERNATING CARDS
          Card 1: Picture LEFT, Content RIGHT
          Card 2: Picture RIGHT, Content LEFT
          Card 3: Picture LEFT, Content RIGHT
          (Active from md: breakpoint so it alternates clearly on laptops & tablets!)
          ========================================================================= */}
      <div className="space-y-10">

        {/* =========================================================================
            CARD 1: CLASSICAL ODISSI & FOLK DANCE (PICTURE ON LEFT)
            ========================================================================= */}
        <div className="relative rounded-3xl overflow-hidden border border-[#7955AE]/25 dark:border-[#B9A5DF]/35 bg-white/95 dark:bg-[#1E0E34]/95 shadow-2xl p-6 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center backdrop-blur-2xl hover:border-[#7955AE]/50 transition-all duration-300">
          
          {/* Visual Photo Card (5 Cols) — md:order-1 (LEFT) */}
          <div className="md:col-span-5 md:order-1 rounded-2xl overflow-hidden shadow-2xl border border-black/10 relative group">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full bg-black flex items-center justify-center overflow-hidden">
              <img
                src="/odissi-dance.jpg"
                alt="Odissi Classical Dancer performing Tribhanga posture"
                className="w-full h-full object-contain sm:object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/culture-grid.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold bg-[#180B2B]/85 text-white backdrop-blur-md border border-white/20">
                Traditional Performing Art
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <div className="text-xs font-serif text-[#D9CCF2]">ଓଡ଼ିଶୀ ନୃତ୍ୟ ଓ ପରମ୍ପରା</div>
                <div className="font-cinzel font-bold text-base">Classical Odissi & Folk Dance</div>
              </div>
            </div>

            {/* Tag Pills */}
            <div className="p-3 bg-stone-100 dark:bg-[#150A26] flex flex-wrap gap-1.5 border-t border-black/5">
              {danceTags.map((t, i) => (
                <span 
                  key={i} 
                  className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-white dark:bg-[#1E0E34] text-[#7955AE] dark:text-[#B9A5DF] border border-black/5"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* Narrative & Dance Highlights (7 Cols) — md:order-2 (RIGHT) */}
          <div className="md:col-span-7 md:order-2 space-y-5">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#7955AE] dark:text-[#B9A5DF]">
                Sacred Heritage in Motion • Pillar 01
              </span>
              <h3 className="text-2xl sm:text-3xl font-cinzel font-black text-[#180B2B] dark:text-white leading-tight">
                Odissi, Chhau & Folk Rhythms of Odisha
              </h3>
              <p className="text-sm font-serif italic font-semibold text-[#613A9E] dark:text-[#C7B5E8]">
                Sculptures in motion, ancient temple devotion, and high-spirited rural harvest celebrations.
              </p>
              <p className="text-sm font-serif text-stone-700 dark:text-[#E8E3F0] leading-relaxed pt-1">
                Odisha's dance traditions trace back over two millennia, from the sacred carvings of Udayagiri caves to the Mahari temple dancer servitors of Shree Jagannath Temple. Classical Odissi mesmerizes with its sculpturesque Tribhanga postures, silver filigree ornaments, and Jayadeva’s Geeta Govinda abhinaya, while vibrant folk traditions like Sambalpuri Dalkhai and UNESCO-recognized Mayurbhanj Chhau celebrate rural life, nature, and martial valour.
              </p>
            </div>

            {/* 4 Dance Highlights Matrix */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {danceHighlights.map((metric, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-stone-50 dark:bg-[#150A26] border border-[#7955AE]/15 dark:border-[#B9A5DF]/20 space-y-1"
                >
                  <div className="text-[10px] uppercase font-bold tracking-wider text-stone-400 dark:text-stone-400">
                    {metric.label}
                  </div>
                  <div className="font-cinzel font-black text-sm sm:text-base text-[#180B2B] dark:text-white">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <Link
                to="/destinations"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-cinzel font-bold text-xs uppercase tracking-wider transition-all duration-300 bg-[#7955AE] text-white hover:bg-[#613A9E] shadow-lg shadow-purple-500/25 dark:bg-white dark:text-[#180B2B] dark:hover:bg-[#E8E3F0]"
              >
                <span>Explore Cultural Stories</span>
                <FaArrowRight size={11} />
              </Link>
            </div>

          </div>

        </div>

        {/* =========================================================================
            CARD 2: ODISHA CLASSICAL MUSIC (PICTURE ON RIGHT, CONTENT ON LEFT)
            ========================================================================= */}
        <div className="relative rounded-3xl overflow-hidden border border-[#7955AE]/25 dark:border-[#B9A5DF]/35 bg-white/95 dark:bg-[#1E0E34]/95 shadow-2xl p-6 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center backdrop-blur-2xl hover:border-[#7955AE]/50 transition-all duration-300">
          
          {/* Visual Photo Card (5 Cols) — md:order-2 (RIGHT) */}
          <div className="md:col-span-5 md:order-2 rounded-2xl overflow-hidden shadow-2xl border border-black/10 relative group">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full bg-slate-900 flex items-center justify-center overflow-hidden">
              <img
                src="/odisha-classical-music.jpg"
                alt="Odisha Classical Music recital on temple stage with Tanpura, Mardala and Harmonium"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/culture-grid.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold bg-[#180B2B]/85 text-white backdrop-blur-md border border-white/20">
                Classical Music Stream
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <div className="text-xs font-serif text-[#D9CCF2]">ଓଡ଼ିଶୀ ଶାସ୍ତ୍ରୀୟ ସଙ୍ଗୀତ</div>
                <div className="font-cinzel font-bold text-base">Odissi Classical Music & Ballads</div>
              </div>
            </div>

            {/* Tag Pills */}
            <div className="p-3 bg-stone-100 dark:bg-[#150A26] flex flex-wrap gap-1.5 border-t border-black/5">
              {musicTags.map((t, i) => (
                <span 
                  key={i} 
                  className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-white dark:bg-[#1E0E34] text-[#7955AE] dark:text-[#B9A5DF] border border-black/5"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* Narrative & Music Highlights (7 Cols) — md:order-1 (LEFT) */}
          <div className="md:col-span-7 md:order-1 space-y-5">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#7955AE] dark:text-[#B9A5DF]">
                Shastric Musical Grammar • Pillar 02
              </span>
              <h3 className="text-2xl sm:text-3xl font-cinzel font-black text-[#180B2B] dark:text-white leading-tight">
                Odissi Classical Music & Sacred Ballads
              </h3>
              <p className="text-sm font-serif italic font-semibold text-[#613A9E] dark:text-[#C7B5E8]">
                Distinct Shastric grammar, Jayadeva's Geeta Govinda & ancient temple ragas.
              </p>
              <p className="text-sm font-serif text-stone-700 dark:text-[#E8E3F0] leading-relaxed pt-1">
                Odissi classical music is a distinct, ancient Indian classical stream with its own codified Shastras dating back to ancient Kalinga treatises like Sangita Narayana and Gita Prakasa. For over eight hundred uninterrupted years, Saint Jayadeva’s immortal 12th-century Geeta Govinda Ashtapadis have been sung nightly to Lord Jagannath during the Bada Singhara ritual, accompanied by the sacred resonant beats of the Mardala drum, bamboo flute, and soulful Chhanda-Champu ragas.
              </p>
            </div>

            {/* 4 Music Highlights Matrix */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {musicHighlights.map((metric, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-stone-50 dark:bg-[#150A26] border border-[#7955AE]/15 dark:border-[#B9A5DF]/20 space-y-1"
                >
                  <div className="text-[10px] uppercase font-bold tracking-wider text-stone-400 dark:text-stone-400">
                    {metric.label}
                  </div>
                  <div className="font-cinzel font-black text-sm sm:text-base text-[#180B2B] dark:text-white">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <Link
                to="/destinations"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-cinzel font-bold text-xs uppercase tracking-wider transition-all duration-300 bg-[#7955AE] text-white hover:bg-[#613A9E] shadow-lg shadow-purple-500/25 dark:bg-white dark:text-[#180B2B] dark:hover:bg-[#E8E3F0]"
              >
                <span>Explore Musical Heritage</span>
                <FaArrowRight size={11} />
              </Link>
            </div>

          </div>

        </div>

        {/* =========================================================================
            CARD 3: RATHA YATRA: BIGGEST FESTIVAL OF THE WORLD (PICTURE ON LEFT)
            ========================================================================= */}
        <div className="relative rounded-3xl overflow-hidden border border-[#7955AE]/25 dark:border-[#B9A5DF]/35 bg-white/95 dark:bg-[#1E0E34]/95 shadow-2xl p-6 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center backdrop-blur-2xl hover:border-[#7955AE]/50 transition-all duration-300">
          
          {/* Visual Photo Card (5 Cols) — md:order-1 (LEFT) */}
          <div className="md:col-span-5 md:order-1 rounded-2xl overflow-hidden shadow-2xl border border-black/10 relative group">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full bg-slate-900 flex items-center justify-center overflow-hidden">
              <img
                src="/ratha-yatra-festival.jpg"
                alt="Puri Ratha Yatra: The three grand chariots on Bada Danda surrounded by millions of devotees"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/puri.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold bg-[#180B2B]/85 text-white backdrop-blur-md border border-white/20">
                Universal Sacred Festival
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <div className="text-xs font-serif text-[#D9CCF2]">ଶ୍ରୀଜଗନ୍ନାଥ ରଥଯାତ୍ରା ଓ ପର୍ବପର୍ବାଣି</div>
                <div className="font-cinzel font-bold text-base">Ratha Yatra: The World's Grandest Fair</div>
              </div>
            </div>

            {/* Tag Pills */}
            <div className="p-3 bg-stone-100 dark:bg-[#150A26] flex flex-wrap gap-1.5 border-t border-black/5">
              {festivalTags.map((t, i) => (
                <span 
                  key={i} 
                  className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-white dark:bg-[#1E0E34] text-[#7955AE] dark:text-[#B9A5DF] border border-black/5"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* Narrative & Festival Highlights (7 Cols) — md:order-2 (RIGHT) */}
          <div className="md:col-span-7 md:order-2 space-y-5">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#7955AE] dark:text-[#B9A5DF]">
                The Epicenter of Living Faith • Pillar 03
              </span>
              <h3 className="text-2xl sm:text-3xl font-cinzel font-black text-[#180B2B] dark:text-white leading-tight">
                Ratha Yatra: The Biggest Festival of the World
              </h3>
              <p className="text-sm font-serif italic font-semibold text-[#613A9E] dark:text-[#C7B5E8]">
                Millions of devotees, colossal wooden chariots, and a celebration of universal brotherhood.
              </p>
              <p className="text-sm font-serif text-stone-700 dark:text-[#E8E3F0] leading-relaxed pt-1">
                Odisha is celebrated as the sacred land of "Baro Mase Tero Parba" (thirteen festivals in twelve months). Crowned by the world-famous Ratha Yatra in Puri—where Lord Jagannath, Balabhadra, and Devi Subhadra emerge onto Bada Danda on colossal hand-carved wooden chariots to embrace all humanity—the state celebrates living sacred traditions including Raja Parba (celebrating Mother Earth), Bali Yatra (ancient maritime pride), Cuttack's silver filigree Durga Puja, and the Nuakhai agrarian harvest.
              </p>
            </div>

            {/* 4 Festival Highlights Matrix */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {festivalHighlights.map((metric, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-stone-50 dark:bg-[#150A26] border border-[#7955AE]/15 dark:border-[#B9A5DF]/20 space-y-1"
                >
                  <div className="text-[10px] uppercase font-bold tracking-wider text-stone-400 dark:text-stone-400">
                    {metric.label}
                  </div>
                  <div className="font-cinzel font-black text-sm sm:text-base text-[#180B2B] dark:text-white">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <Link
                to="/destinations"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-cinzel font-bold text-xs uppercase tracking-wider transition-all duration-300 bg-[#7955AE] text-white hover:bg-[#613A9E] shadow-lg shadow-purple-500/25 dark:bg-white dark:text-[#180B2B] dark:hover:bg-[#E8E3F0]"
              >
                <span>Explore Festival Stories</span>
                <FaArrowRight size={11} />
              </Link>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
