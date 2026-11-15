import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaCompass, FaExternalLinkAlt } from 'react-icons/fa';

interface MapHotspot {
  id: string;
  name: string;
  odiaName: string;
  type: string;
  x: number;
  y: number;
  route: string;
  desc: string;
}

export const OdishaHeroMap: React.FC<{ mousePos: { x: number; y: number } }> = ({ mousePos }) => {
  const [activeSpot, setActiveSpot] = useState<MapHotspot | null>(null);

  // Key Heritage & Tourism Beacon Nodes on Odisha Map
  const hotspots: MapHotspot[] = [
    {
      id: 'puri',
      name: 'Puri (Shree Jagannath)',
      odiaName: 'ପୁରୀ',
      type: 'Spiritual Heritage & Beach',
      x: 556,
      y: 363,
      route: '/destination/dest-puri',
      desc: '12th-century grand temple of Mahaprabhu Jagannath & Blue Flag Golden Beach.'
    },
    {
      id: 'bbsr',
      name: 'Bhubaneswar',
      odiaName: 'ଭୁବନେଶ୍ୱର',
      type: 'Ekamra Kshetra & Caves',
      x: 555,
      y: 309,
      route: '/destination/dest-lingaraj',
      desc: 'City of 500+ ancient sandstone temples, Lingaraj, and Khandagiri caves.'
    },
    {
      id: 'konark',
      name: 'Konark Sun Temple',
      odiaName: 'କୋଣାର୍କ',
      type: 'UNESCO World Heritage',
      x: 585,
      y: 354,
      route: '/destination/dest-konark',
      desc: 'Monumental 13th-century stone chariot of Surya with 24 carved sundial wheels.'
    },
    {
      id: 'cuttack',
      name: 'Cuttack (Millennium City)',
      odiaName: 'କଟକ',
      type: 'Silver Filigree & Fort',
      x: 562,
      y: 290,
      route: '/destination/dest-barabati',
      desc: '1000-year-old historic capital, Barabati fortress & famous Chandi Medha artisans.'
    },
    {
      id: 'chilika',
      name: 'Chilika Lagoon',
      odiaName: 'ଚିଲିକା',
      type: 'Ramsar Wetland & Birds',
      x: 504,
      y: 381,
      route: '/destination/dest-chilika',
      desc: 'Asia’s largest brackish lagoon, home to Irrawaddy dolphins & migratory birds.'
    },
    {
      id: 'similipal',
      name: 'Similipal Biosphere',
      odiaName: 'ଶିମିଳିପାଳ',
      type: 'Tiger Sanctuary & Waterfalls',
      x: 613,
      y: 128,
      route: '/destination/dest-similipal',
      desc: 'Vast UNESCO Biosphere, Royal Bengal Tigers, elephants & Barehipani Falls.'
    },
    {
      id: 'daringbadi',
      name: 'Daringbadi',
      odiaName: 'ଦାରିଙ୍ଗବାଡ଼ି',
      type: 'Kashmir of Odisha',
      x: 370,
      y: 353,
      route: '/destination/dest-daringbadi',
      desc: 'Pine valleys, coffee plantations, frost-kissed plateaus & Kutia Kondh heritage.'
    },
    {
      id: 'koraput',
      name: 'Koraput & Deomali',
      odiaName: 'କୋରାପୁଟ',
      type: 'Eastern Ghats & Tribes',
      x: 215,
      y: 475,
      route: '/destination/dest-deomali',
      desc: 'Highest mountain peak of Odisha (1,672m), indigenous tribal cultures & waterfalls.'
    },
    {
      id: 'sambalpur',
      name: 'Sambalpur & Hirakud',
      odiaName: 'ସମ୍ବଲପୁର',
      type: 'Longest Dam & Ikat Weaves',
      x: 353,
      y: 178,
      route: '/destination/dest-hirakud',
      desc: 'World’s longest earthen dam on Mahanadi, Samaleswari Temple & Sambalpuri handloom.'
    },
    {
      id: 'bhitarkanika',
      name: 'Bhitarkanika Mangroves',
      odiaName: 'ଭିତରକନିକା',
      type: 'Mangrove Sanctuary',
      x: 671,
      y: 260,
      route: '/destination/dest-bhitarkanika',
      desc: 'Giant saltwater crocodiles, kingfishers, and India’s second-largest mangrove forest.'
    },
    {
      id: 'raghurajpur',
      name: 'Raghurajpur Village',
      odiaName: 'ରଘୁରାଜପୁର',
      type: 'Heritage Craft Village',
      x: 555,
      y: 355,
      route: '/village/v-raghurajpur',
      desc: 'UNESCO recognized artisan village where every family crafts Pattachitra art.'
    }
  ];

  // Authentic Odisha Perimeter Path
  const odishaBoundaryPath = `
    M 630,55 
    C 660,70 690,110 734,162 
    C 710,175 695,190 689,179 
    C 684,200 680,215 679,224 
    C 676,240 675,250 673,258 
    C 665,280 658,295 652,308 
    C 625,330 605,342 586,353 
    C 575,358 565,361 556,363 
    C 535,372 518,378 504,381 
    C 485,395 470,410 455,425 
    C 440,445 425,470 410,480 
    C 380,485 350,470 330,465 
    C 290,470 250,473 215,475 
    C 180,480 150,520 120,555 
    C 105,580 80,600 50,600 
    C 60,560 75,520 90,480 
    C 110,440 130,400 150,360 
    C 170,330 190,300 215,270 
    C 240,240 270,215 315,193 
    C 335,185 345,182 353,178 
    C 375,160 405,130 449,89 
    C 485,75 520,70 555,75 
    C 585,65 610,58 630,55 Z
  `;

  // Pilgrimage & Heritage Corridors
  const pilgrimageCorridor1 = "M 555,309 L 555,355 L 556,363 L 585,354"; // BBSr -> Raghurajpur -> Puri -> Konark
  const inlandCorridor2 = "M 555,309 L 562,290 L 353,178 L 315,193"; // BBSR -> Cuttack -> Sambalpur -> Bargarh
  const mangroveCorridor3 = "M 562,290 L 671,260 L 613,128"; // Cuttack -> Bhitarkanika -> Similipal
  const ghatsCorridor4 = "M 556,363 L 504,381 L 370,353 L 215,475"; // Puri -> Chilika -> Daringbadi -> Koraput

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
      
      {/* Background Deep Purple to Cosmic Indigo Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#180B2B] via-[#240C3E] to-[#0E0518] dark:block hidden" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFFFFF] via-[#FAF6FE] to-[#F1E8FC] dark:hidden block" />

      {/* Atmospheric Radial Glow Behind Central Odisha */}
      <div 
        className="absolute w-[80vw] max-w-[900px] h-[70vh] rounded-full blur-[90px] opacity-40 dark:opacity-50 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(121, 85, 174, 0.45) 0%, rgba(185, 165, 223, 0.25) 45%, transparent 75%)',
          transform: `translate3d(${mousePos.x * 12}px, ${mousePos.y * 8}px, 0)`
        }}
      />

      {/* High-Tech Vector SVG Map of Odisha */}
      <div 
        className="relative w-full max-w-6xl h-full flex items-center justify-center transition-transform duration-500 ease-out"
        style={{
          transform: `scale(1.02) translate3d(${mousePos.x * -10}px, ${mousePos.y * -6}px, 0)`,
        }}
      >
        <svg
          viewBox="0 0 800 650"
          className="w-full h-[85vh] max-h-[720px] object-contain drop-shadow-[0_0_35px_rgba(121,85,174,0.35)]"
          style={{ overflow: 'visible' }}
        >
          <defs>
            {/* Holographic Glowing Filter */}
            <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Subtle Gradient Fill for Odisha Landmass */}
            <linearGradient id="odisha-landmass-dark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#301552" stopOpacity="0.55" />
              <stop offset="50%" stopColor="#220D3C" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#150824" stopOpacity="0.75" />
            </linearGradient>

            <linearGradient id="odisha-landmass-light" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EDE3FA" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#F5EDFC" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.3" />
            </linearGradient>

            {/* Pulsing Trade Route Gradient */}
            <linearGradient id="route-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#B9A5DF" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#E8E3F0" stopOpacity="1" />
              <stop offset="100%" stopColor="#A98AD9" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Grid Background Pattern */}
          <g opacity="0.12" stroke="currentColor" className="text-[#B9A5DF]">
            <line x1="100" y1="50" x2="100" y2="600" strokeDasharray="4 6" />
            <line x1="300" y1="50" x2="300" y2="600" strokeDasharray="4 6" />
            <line x1="500" y1="50" x2="500" y2="600" strokeDasharray="4 6" />
            <line x1="700" y1="50" x2="700" y2="600" strokeDasharray="4 6" />
            <line x1="50" y1="150" x2="750" y2="150" strokeDasharray="4 6" />
            <line x1="50" y1="300" x2="750" y2="300" strokeDasharray="4 6" />
            <line x1="50" y1="450" x2="750" y2="450" strokeDasharray="4 6" />
          </g>

          {/* Bay of Bengal Wave Contours (Southeast of Odisha) */}
          <g opacity="0.25" stroke="currentColor" className="text-[#A98AD9]" strokeWidth="1.2" fill="none">
            <path d="M 680,270 Q 720,330 630,420 T 480,520" strokeDasharray="5 7" />
            <path d="M 700,290 Q 750,350 650,440 T 500,540" strokeDasharray="3 8" />
            <text x="640" y="470" fill="currentColor" fontSize="11" letterSpacing="0.2em" className="font-cinzel uppercase opacity-70">
              Bay of Bengal
            </text>
          </g>

          {/* Odisha Landmass Geometry */}
          <path
            d={odishaBoundaryPath}
            className="dark:fill-[url(#odisha-landmass-dark)] fill-[url(#odisha-landmass-light)] transition-all duration-500"
            stroke="currentColor"
            strokeWidth="2.5"
            filter="url(#neon-glow)"
            style={{
              stroke: 'rgba(185, 165, 223, 0.75)',
            }}
          />

          {/* Subtle Secondary Topographic Layer */}
          <path
            d={odishaBoundaryPath}
            fill="none"
            stroke="rgba(255, 255, 255, 0.4)"
            strokeWidth="1"
            strokeDasharray="8 6"
            className="dark:opacity-40 opacity-20"
          />

          {/* Ancient Pilgrimage & Cultural Corridors */}
          <g fill="none" strokeWidth="2" strokeDasharray="6 6" className="opacity-70">
            <path d={pilgrimageCorridor1} stroke="url(#route-gradient)" />
            <path d={inlandCorridor2} stroke="url(#route-gradient)" />
            <path d={mangroveCorridor3} stroke="url(#route-gradient)" />
            <path d={ghatsCorridor4} stroke="url(#route-gradient)" />
          </g>

          {/* Hotspots & Cultural Nodes */}
          {hotspots.map((spot) => (
            <g
              key={spot.id}
              className="pointer-events-auto cursor-pointer group"
              onMouseEnter={() => setActiveSpot(spot)}
              onMouseLeave={() => setActiveSpot(null)}
            >
              {/* Animated Radar Pulse Ring */}
              <circle
                cx={spot.x}
                cy={spot.y}
                r="12"
                fill="none"
                stroke="#B9A5DF"
                strokeWidth="1"
                className="animate-ping origin-center opacity-60"
              />

              {/* Node Outer Glow */}
              <circle
                cx={spot.x}
                cy={spot.y}
                r="6.5"
                className="fill-[#FFFFFF] dark:fill-[#FFFFFF] group-hover:fill-[#A98AD9] transition shadow-lg"
              />

              {/* Node Core Center */}
              <circle
                cx={spot.x}
                cy={spot.y}
                r="3.5"
                className="fill-[#7955AE] dark:fill-[#200D38]"
              />

              {/* District Label */}
              <text
                x={spot.x + 9}
                y={spot.y + 4}
                className="font-bold text-[10px] select-none fill-[#180B2B] dark:fill-[#E8E3F0] group-hover:fill-[#7955AE] dark:group-hover:fill-[#FFFFFF] transition"
                style={{
                  textShadow: '0 1px 3px rgba(0,0,0,0.5)',
                }}
              >
                {spot.name.split(' ')[0]}
              </text>
            </g>
          ))}
        </svg>

        {/* Interactive Tooltip Card When Hovering a Node */}
        {activeSpot && (
          <div
            className="absolute z-30 glass-card rounded-2xl p-4 border border-[#B9A5DF]/50 shadow-2xl text-left space-y-1.5 w-64 pointer-events-auto animate-fadeIn bg-white/95 dark:bg-[#180B2B]/95 backdrop-blur-2xl"
            style={{
              left: `calc(50% + ${(activeSpot.x - 400) * 0.85}px)`,
              top: `calc(50% + ${(activeSpot.y - 325) * 0.85}px)`,
              transform: 'translate(-50%, -115%)',
            }}
          >
            <div className="flex items-center justify-between border-b border-[#B9A5DF]/20 pb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#7955AE] dark:text-[#B9A5DF]">
                {activeSpot.type}
              </span>
              <span className="text-xs font-serif text-[#7955AE] dark:text-[#D9CCF2]">
                {activeSpot.odiaName}
              </span>
            </div>

            <div className="font-cinzel font-black text-sm text-[#180B2B] dark:text-white">
              {activeSpot.name}
            </div>

            <p className="text-[11px] text-[#503C6B] dark:text-[#D0C3E3] line-clamp-2 leading-relaxed">
              {activeSpot.desc}
            </p>

            <Link
              to={activeSpot.route}
              className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#7955AE] dark:text-white hover:underline pt-1"
            >
              <span>Explore Destination</span>
              <FaExternalLinkAlt className="text-[8px]" />
            </Link>
          </div>
        )}
      </div>

      {/* Atmospheric Vignette Gradients for Text Legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF] via-transparent to-[#FFFFFF]/60 dark:hidden block pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#180B2B] via-transparent to-[#180B2B]/75 dark:block hidden pointer-events-none" />
    </div>
  );
};
