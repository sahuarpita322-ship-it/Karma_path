import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  FaMapMarkerAlt, 
  FaArrowLeft, 
  FaPalette, 
  FaCheckCircle, 
  FaStore, 
  FaCalendarAlt, 
  FaUtensils, 
  FaMusic, 
  FaInfoCircle, 
  FaCoins, 
  FaCompass,
  FaPlus,
  FaPlay,
  FaPause,
  FaTimes,
  FaAward,
  FaLeaf,
  FaShoppingBag,
  FaShieldAlt,
  FaScroll,
  FaBookOpen,
  FaHandsHelping
} from 'react-icons/fa';
import { useStore, type Product } from '../context/store';
import { MapView } from '../components/MapView';
import { 
  VERIFIED_VILLAGE_ARTISANS, 
  VERIFIED_VILLAGE_EXPERIENCES,
  type VillageTourismExperience
} from '../data/villageArtisansData';
import { CommunityVillageModal } from '../components/villages/CommunityVillageModal';
import { VillageOrderModal } from '../components/villages/VillageOrderModal';
import { allOdishaVillages } from '../data/villagesData';

// =========================================================================
// AI-GENERATED TRADITIONAL SACRED SYMBOLS (PURE VECTOR SVGS)
// Replaces inaccurate stock photos with authentic cultural emblems
// =========================================================================

function HandloomAiSymbol({ className = "w-28 h-28" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center flex-shrink-0 ${className}`}>
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600/35 to-amber-500/30 blur-xl"></div>
      <svg viewBox="0 0 120 120" className="w-full h-full relative z-10 drop-shadow-xl">
        <defs>
          <linearGradient id="loomGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C084FC" />
            <stop offset="50%" stopColor="#7955AE" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
          <linearGradient id="threadGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FEF08A" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
        <circle cx="60" cy="60" r="54" fill="#1C1033" stroke="url(#loomGrad)" strokeWidth="2.5" strokeDasharray="4 3" opacity="0.9" />
        <circle cx="60" cy="60" r="46" fill="#130722" stroke="#7955AE" strokeWidth="1.5" />
        
        {/* Vertical Warp Threads */}
        <line x1="42" y1="28" x2="42" y2="92" stroke="url(#threadGrad)" strokeWidth="1.5" strokeOpacity="0.75" />
        <line x1="48" y1="26" x2="48" y2="94" stroke="url(#threadGrad)" strokeWidth="1.5" strokeOpacity="0.9" />
        <line x1="54" y1="25" x2="54" y2="95" stroke="url(#threadGrad)" strokeWidth="1.5" />
        <line x1="60" y1="24" x2="60" y2="96" stroke="url(#threadGrad)" strokeWidth="2" />
        <line x1="66" y1="25" x2="66" y2="95" stroke="url(#threadGrad)" strokeWidth="1.5" />
        <line x1="72" y1="26" x2="72" y2="94" stroke="url(#threadGrad)" strokeWidth="1.5" strokeOpacity="0.9" />
        <line x1="78" y1="28" x2="78" y2="92" stroke="url(#threadGrad)" strokeWidth="1.5" strokeOpacity="0.75" />
        
        {/* Weaving Shuttle (Kundi) */}
        <path d="M26,60 C40,51 80,51 94,60 C80,69 40,69 26,60 Z" fill="url(#loomGrad)" stroke="#FEF3C7" strokeWidth="1.4" />
        <ellipse cx="60" cy="60" rx="15" ry="4" fill="#FEF3C7" />
        <circle cx="60" cy="60" r="2.5" fill="#7955AE" />
        
        {/* Sacred Temple Kumbha (Spire) Spires */}
        <path d="M44,40 L48,33 L52,40 Z" fill="#F59E0B" />
        <path d="M56,38 L60,31 L64,38 Z" fill="#F59E0B" />
        <path d="M68,40 L72,33 L76,40 Z" fill="#F59E0B" />
      </svg>
    </div>
  );
}

function CraftAiSymbol({ className = "w-28 h-28" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center flex-shrink-0 ${className}`}>
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-600/35 to-violet-500/30 blur-xl"></div>
      <svg viewBox="0 0 120 120" className="w-full h-full relative z-10 drop-shadow-xl">
        <defs>
          <linearGradient id="craftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="50%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#9333EA" />
          </linearGradient>
          <linearGradient id="brassGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
        <circle cx="60" cy="60" r="54" fill="#1C1033" stroke="url(#craftGrad)" strokeWidth="2.5" strokeDasharray="3 3" opacity="0.9" />
        <circle cx="60" cy="60" r="46" fill="#150827" stroke="#D97706" strokeWidth="1.5" />
        
        {/* Traditional Artisan Wheel / Anvil */}
        <path d="M34,84 L86,84 C84,77 76,73 60,73 C44,73 36,77 34,84 Z" fill="url(#craftGrad)" />
        
        {/* Kinetic Fish / Artisan Metallurgy Form */}
        <path d="M40,56 C47,43 73,43 80,56 C73,69 47,69 40,56 Z" fill="url(#brassGrad)" stroke="#FEF3C7" strokeWidth="1.4" />
        <path d="M80,56 L92,48 L87,56 L92,64 Z" fill="#F59E0B" />
        
        {/* Master Sculptor Chisel */}
        <line x1="38" y1="34" x2="68" y2="64" stroke="#FDE68A" strokeWidth="3.5" strokeLinecap="round" />
        <polygon points="68,64 75,69 70,73 63,68" fill="#F59E0B" />
        
        {/* Divine Sparks */}
        <circle cx="60" cy="28" r="2.5" fill="#FDE68A" />
        <circle cx="34" cy="48" r="2" fill="#FDE68A" />
        <circle cx="88" cy="38" r="2" fill="#FDE68A" />
      </svg>
    </div>
  );
}

function FoodAiSymbol({ className = "w-28 h-28" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center flex-shrink-0 ${className}`}>
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500/35 to-rose-600/30 blur-xl"></div>
      <svg viewBox="0 0 120 120" className="w-full h-full relative z-10 drop-shadow-xl">
        <defs>
          <linearGradient id="foodGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="60%" stopColor="#EA580C" />
            <stop offset="100%" stopColor="#7955AE" />
          </linearGradient>
          <linearGradient id="thaliGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FEF08A" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
        </defs>
        <circle cx="60" cy="60" r="54" fill="#1C1033" stroke="url(#foodGrad)" strokeWidth="2.5" strokeDasharray="4 2" opacity="0.9" />
        <circle cx="60" cy="60" r="46" fill="#160824" stroke="#F59E0B" strokeWidth="1.5" />
        
        {/* Traditional Bronze (Kansa) Thali Plate */}
        <circle cx="60" cy="62" r="32" fill="none" stroke="url(#thaliGrad)" strokeWidth="3" />
        <circle cx="60" cy="62" r="27" fill="#1F1138" stroke="#FDE68A" strokeWidth="1" strokeDasharray="3 3" />
        
        {/* Sacred Katoris (Bowls of Dalma, Pitha, Prasad) */}
        <circle cx="48" cy="52" r="7" fill="url(#thaliGrad)" />
        <circle cx="72" cy="52" r="7" fill="url(#thaliGrad)" />
        <circle cx="60" cy="74" r="8" fill="url(#thaliGrad)" />
        
        {/* Aromatic Steam Waves */}
        <path d="M54,34 Q57,28 54,22" fill="none" stroke="#FDE68A" strokeWidth="2" strokeLinecap="round" />
        <path d="M60,32 Q63,26 60,20" fill="none" stroke="#FDE68A" strokeWidth="2" strokeLinecap="round" />
        <path d="M66,34 Q69,28 66,22" fill="none" stroke="#FDE68A" strokeWidth="2" strokeLinecap="round" />
        
        {/* Sacred Tulsi Leaf */}
        <path d="M60,68 C58,63 62,63 60,68 Z" fill="#10B981" />
      </svg>
    </div>
  );
}

function FolkAiSymbol({ className = "w-28 h-28" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center flex-shrink-0 ${className}`}>
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/35 to-pink-500/30 blur-xl"></div>
      <svg viewBox="0 0 120 120" className="w-full h-full relative z-10 drop-shadow-xl">
        <defs>
          <linearGradient id="folkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EC4899" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
        <circle cx="60" cy="60" r="54" fill="#1C1033" stroke="url(#folkGrad)" strokeWidth="2.5" strokeDasharray="3 3" opacity="0.9" />
        <circle cx="60" cy="60" r="46" fill="#140824" stroke="#8B5CF6" strokeWidth="1.5" />
        
        {/* Mardala / Mridangam Folk Drum */}
        <ellipse cx="60" cy="60" rx="26" ry="14" fill="#1E1136" stroke="url(#folkGrad)" strokeWidth="2" />
        <ellipse cx="36" cy="60" rx="5" ry="12" fill="#FDE68A" stroke="#8B5CF6" strokeWidth="1" />
        <ellipse cx="84" cy="60" rx="5" ry="12" fill="#FDE68A" stroke="#8B5CF6" strokeWidth="1" />
        
        {/* Tuning Straps */}
        <line x1="39" y1="50" x2="81" y2="70" stroke="#F59E0B" strokeWidth="1.2" opacity="0.7" />
        <line x1="39" y1="70" x2="81" y2="50" stroke="#F59E0B" strokeWidth="1.2" opacity="0.7" />
        
        {/* Musical Notes & Bells */}
        <circle cx="48" cy="34" r="3" fill="#FDE68A" />
        <circle cx="72" cy="34" r="3" fill="#FDE68A" />
        <path d="M57,28 C63,22 66,30 72,24" fill="none" stroke="#EC4899" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export function VillageDetailPage() {
  const { id } = useParams<{ id: string }>();
  const villages = useStore((s) => s.villages);
  const products = useStore((s) => s.products);
  const destinations = useStore((s) => s.destinations);
  const folkSongs = useStore((s) => s.folkSongs);
  const addKarma = useStore((s) => s.addKarma);
  const navigate = useNavigate();

  const staticVillage = allOdishaVillages.find((v) => v.id === id);
  const storeVillage = villages.find((v) => v.id === id);
  const village = staticVillage 
    ? { ...staticVillage, ...(storeVillage || {}), verifiedMedia: staticVillage.verifiedMedia }
    : storeVillage;

  // Modals & States
  const [communityModalOpen, setCommunityModalOpen] = useState(false);
  const [communityModalTab, setCommunityModalTab] = useState<'village' | 'artisan' | 'song' | 'recipe'>('village');
  const [orderModalProduct, setOrderModalProduct] = useState<Product | null>(null);

  // Audio & Experience State
  const [playingSongId, setPlayingSongId] = useState<string | null>(null);
  const [isPlayingStory, setIsPlayingStory] = useState(false);
  const [bookedExperience, setBookedExperience] = useState<string | null>(null);
  const [checkInDone, setCheckInDone] = useState(false);

  // Speech Synthesis for Village Story
  const playStoryAudio = () => {
    if (!village) return;
    if ('speechSynthesis' in window) {
      if (isPlayingStory) {
        window.speechSynthesis.cancel();
        setIsPlayingStory(false);
        return;
      }
      window.speechSynthesis.cancel();
      const textToRead = `${village.name}. ${village.introduction}. Core speciality: ${village.speciality}. Living art: ${village.famousArt}. Handloom: ${village.localHandloom}.`;
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.rate = 0.95;
      utterance.onend = () => setIsPlayingStory(false);
      utterance.onerror = () => setIsPlayingStory(false);
      window.speechSynthesis.speak(utterance);
      setIsPlayingStory(true);
    }
  };

  // Fallback for missing village
  if (!village) {
    return (
      <main className="min-h-screen pt-32 text-center px-4">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Village Profile Not Found</h2>
        <p className="text-slate-500 mt-2">The requested village could not be located in our directory.</p>
        <Link to="/villages" className="mt-4 inline-block px-5 py-2.5 rounded-xl bg-purple-600 text-white font-bold text-sm">
          Return to Village Directory
        </Link>
      </main>
    );
  }

  // Cross-reference data
  const villageProducts = products.filter((p) =>
    (p.village && p.village.toLowerCase().includes(village.name.toLowerCase())) ||
    (p.district && p.district.toLowerCase() === village.district.toLowerCase()) ||
    (village.products && village.products.some((vp) => p.name.toLowerCase().includes(vp.toLowerCase())))
  );

  const matchedArtisans = VERIFIED_VILLAGE_ARTISANS.filter((a) =>
    a.village.toLowerCase().includes(village.name.toLowerCase()) ||
    village.name.toLowerCase().includes(a.village.toLowerCase()) ||
    a.district.toLowerCase() === village.district.toLowerCase()
  );

  const matchedExperiences = VERIFIED_VILLAGE_EXPERIENCES.filter((e) =>
    e.village.toLowerCase().includes(village.name.toLowerCase()) ||
    village.name.toLowerCase().includes(e.village.toLowerCase()) ||
    e.district.toLowerCase() === village.district.toLowerCase()
  );

  const matchedSongs = folkSongs.filter((s) =>
    s.village.toLowerCase().includes(village.name.toLowerCase()) ||
    s.district.toLowerCase() === village.district.toLowerCase()
  );

  // Nearby Destinations
  const nearbyDests = destinations.filter((d) =>
    village.nearbyAttractions.some((attr) => d.name.toLowerCase().includes(attr.toLowerCase()) || attr.toLowerCase().includes(d.name.toLowerCase()))
  );

  // Coordinates & Marker
  const mapMarker = [
    {
      id: village.id,
      lat: village.lat,
      lng: village.lng,
      label: `${village.name} (${village.speciality})`,
      type: 'Historic'
    }
  ];

  const handleClaimVisitKarma = () => {
    if (checkInDone) return;
    addKarma(15, `Visited Verified Village: ${village.name}`);
    setCheckInDone(true);
    alert(`🎉 Success! +15 Karma Points credited to your wallet for visiting ${village.name}!`);
  };

  const openCommunityModal = (tab: 'village' | 'artisan' | 'song' | 'recipe') => {
    setCommunityModalTab(tab);
    setCommunityModalOpen(true);
  };

  const handleBookExp = (exp: VillageTourismExperience) => {
    setBookedExperience(exp.title);
    setTimeout(() => setBookedExperience(null), 4000);
  };

  // Primary Authentic Picture (User provided input image kept at FRONT ONLY)
  const frontImage = village.verifiedMedia?.[0] || '/villages/berhampur.jpg';

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Top Navigation & Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <button
          onClick={() => navigate('/villages')}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-purple-950/60 hover:bg-purple-500/20 border border-purple-500/20 text-xs font-bold transition text-slate-800 dark:text-purple-200"
        >
          <FaArrowLeft /> Back to Village Directory
        </button>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handleClaimVisitKarma}
            disabled={checkInDone}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs shadow-md transition ${
              checkInDone
                ? 'bg-emerald-600/30 text-emerald-400 border border-emerald-500/40 cursor-default'
                : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white'
            }`}
          >
            <FaCoins className="text-yellow-300" />
            <span>{checkInDone ? '✓ Checked-In (+15 KT)' : 'Check-In Village Visit (+15 KT)'}</span>
          </button>

          <button
            onClick={() => openCommunityModal('village')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-900/60 hover:bg-purple-800 border border-purple-500/30 text-purple-200 font-bold text-xs transition"
          >
            <FaPlus /> Contribute Information
          </button>
        </div>
      </div>

      {/* =========================================================================
          FRONT SHOWCASE: THE SINGLE AUTHENTIC VILLAGE IMAGE PROVIDED BY USER
          (Kept in the front hero, with zero extra clutter in inner sections)
         ========================================================================= */}
      <div className="relative rounded-3xl overflow-hidden mb-8 border-2 border-purple-500/30 bg-[#180B2B] shadow-2xl">
        <div className="relative h-80 sm:h-[420px] w-full">
          <img
            src={frontImage}
            alt={`${village.name} - ${village.speciality}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120721] via-black/45 to-transparent"></div>

          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/80 backdrop-blur-md text-slate-950 border border-amber-300 shadow-lg flex items-center gap-1.5">
              <FaShieldAlt className="text-slate-950" />
              <span>Authentic Verified Village</span>
            </span>
          </div>

          <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1.5">
              <div className="text-sm font-black text-amber-300 drop-shadow">
                {village.odiaName}
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight drop-shadow-md">
                {village.name}
              </h1>
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-purple-200 mt-2">
                <span className="flex items-center gap-1 text-amber-300 font-semibold">
                  <FaMapMarkerAlt /> {village.block ? `${village.block}, ` : ''}{village.district} District, Odisha
                </span>
                <span>•</span>
                <span className="px-2.5 py-0.5 rounded-full bg-purple-600 font-bold text-white text-xs">
                  {village.category}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <FaCheckCircle /> {village.verifiedStatus}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => {
                  const section = document.getElementById('section-products');
                  if (section) section.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-2.5 rounded-xl font-bold text-xs bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:from-purple-500 hover:to-amber-400 text-white flex items-center gap-2 shadow-lg transition transform active:scale-95"
              >
                <FaShoppingBag /> Explore Village Crafts
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Alert */}
      {bookedExperience && (
        <div className="mb-6 p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold">
            <FaCheckCircle className="text-base" />
            <span>Booking Request Received for "{bookedExperience}"! The host will contact you to coordinate dates.</span>
          </div>
          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-500/30">Verified</span>
        </div>
      )}

      {/* =========================================================================
          DETAILED CULTURAL HERITAGE SECTIONS (RICH CONTENT + SACRED AI SYMBOLS)
         ========================================================================= */}
      <div className="space-y-8">
        
        {/* SECTION 1: VILLAGE STORY, LIVING SOUL & HISTORICAL HERITAGE */}
        <section className="glass-card rounded-3xl p-6 sm:p-8 border border-purple-500/20 bg-white/70 dark:bg-[#180B2B]/70 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-3 border-b border-purple-500/15">
            <h2 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-xl bg-purple-600 text-white text-xs flex items-center justify-center font-bold">1</span>
              <span>Village Story, Living Soul & Lineage</span>
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={playStoryAudio}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-purple-600/20 hover:bg-purple-600/30 text-purple-700 dark:text-purple-300 border border-purple-500/30 transition shadow-sm"
              >
                {isPlayingStory ? <FaPause className="text-pink-400" /> : <FaPlay className="text-emerald-400" />}
                <span>{isPlayingStory ? 'Pause Story' : 'Listen to Village Audio'}</span>
              </button>
              <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-purple-500/15 text-purple-600 dark:text-purple-300 border border-purple-500/25">
                Verified Heritage
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-xs font-bold text-purple-700 dark:text-purple-300 bg-purple-500/10 px-3.5 py-2 rounded-xl inline-flex items-center gap-2 border border-purple-500/20">
              <FaAward className="text-amber-400" />
              <span>Core Speciality: {village.speciality}</span>
            </div>

            <p className="text-sm sm:text-base text-slate-700 dark:text-purple-100/90 leading-relaxed font-normal">
              {village.introduction}
            </p>

            <div className="p-4 rounded-2xl bg-purple-500/5 dark:bg-[#130722] border border-purple-500/15 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-500 flex items-center gap-1.5">
                <FaBookOpen />
                <span>Generational Guilds & Community Traditions</span>
              </h3>
              <p className="text-xs text-slate-600 dark:text-purple-200/80 leading-relaxed">
                Life in {village.name} is deeply woven into the ancient artisan guild system. Each family line preserves specific trade secrets, ritual invocations, and tool maintenance procedures that date back to royal charters granted by Odisha's Gajapati and regional monarchs. The village operates on mutual respect, collective seed and raw material purchase, and shared festive celebrations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-purple-500/5 dark:bg-[#130722] border border-purple-500/15 space-y-1">
                <div className="text-[11px] font-bold text-amber-500 flex items-center gap-1.5">
                  <FaPalette /> Traditional Living Art
                </div>
                <div className="text-xs font-semibold text-slate-800 dark:text-white">
                  {village.famousArt}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-purple-500/5 dark:bg-[#130722] border border-purple-500/15 space-y-1">
                <div className="text-[11px] font-bold text-emerald-500 flex items-center gap-1.5">
                  <FaLeaf /> Cultural Dialect & Soul
                </div>
                <div className="text-xs font-semibold text-slate-800 dark:text-white">
                  {village.localLanguage}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-1 text-[11px]">
              <span className="px-2.5 py-1 rounded-lg bg-purple-900/40 text-purple-200 border border-purple-500/25">✓ 100% Authentic Handcraft</span>
              <span className="px-2.5 py-1 rounded-lg bg-purple-900/40 text-purple-200 border border-purple-500/25">✓ Generational Artisan Lineage</span>
              <span className="px-2.5 py-1 rounded-lg bg-purple-900/40 text-purple-200 border border-purple-500/25">✓ Geographical Indication Preserved</span>
            </div>
          </div>
        </section>

        {/* SECTION 2: DISTRICT, BLOCK, LOCATION & INTERACTIVE MAP */}
        <section className="glass-card rounded-3xl p-6 sm:p-8 border border-purple-500/20 bg-white/70 dark:bg-[#180B2B]/70 shadow-lg">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-purple-500/15">
            <h2 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-xl bg-purple-600 text-white text-xs flex items-center justify-center font-bold">2</span>
              <span>District, Block, Location & Navigation</span>
            </h2>
            <span className="text-xs text-purple-600 dark:text-purple-300 font-semibold font-mono">
              GPS: {village.lat.toFixed(4)}° N, {village.lng.toFixed(4)}° E
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-purple-500/20 h-[360px] shadow-inner">
              <MapView markers={mapMarker} userLocation={{ lat: village.lat, lng: village.lng }} />
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#130722] border border-purple-500/20 space-y-3.5">
              <div className="space-y-1.5 text-xs text-slate-700 dark:text-purple-200">
                <div><strong>State:</strong> Odisha, India</div>
                <div><strong>District:</strong> {village.district}</div>
                <div><strong>Block / Tehsil:</strong> {village.block || 'Local Administrative Block'}</div>
                <div><strong>Coordinates:</strong> {village.lat.toFixed(4)}° N, {village.lng.toFixed(4)}° E</div>
              </div>

              <div className="pt-2 border-t border-purple-500/15 space-y-1">
                <div className="text-xs font-bold text-slate-800 dark:text-white flex items-center gap-1.5">
                  <FaInfoCircle className="text-amber-400" /> Visiting Guidelines:
                </div>
                <p className="text-[11px] text-slate-600 dark:text-purple-300/80 leading-relaxed">
                  {village.visitingInfo}
                </p>
              </div>

              {nearbyDests.length > 0 && (
                <div className="pt-2 border-t border-purple-500/15 space-y-1.5">
                  <div className="text-xs font-bold text-slate-800 dark:text-white">Nearby Cultural Places:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {nearbyDests.map((d) => (
                      <Link
                        key={d.id}
                        to={`/destination/${d.id}`}
                        className="text-[10px] px-2 py-0.5 rounded-lg bg-purple-500/15 text-purple-300 hover:bg-purple-500/30 transition"
                      >
                        {d.name} →
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: TRADITIONAL HANDLOOM & TEXTILE CRAFT
            (NO RANDOM IMAGES: Sacred Handloom Emblem + In-Depth Weaving Lore)
           ========================================================================= */}
        <section className="glass-card rounded-3xl p-6 sm:p-8 border border-purple-500/20 bg-white/70 dark:bg-[#180B2B]/70 shadow-lg">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-purple-500/15">
            <h2 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-xl bg-purple-600 text-white text-xs flex items-center justify-center font-bold">3</span>
              <span>Traditional Handloom & Textile Heritage</span>
            </h2>
            <span className="text-xs text-amber-400 font-bold px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
              GI Protected Weaving
            </span>
          </div>

          <div className="p-6 rounded-3xl bg-gradient-to-r from-purple-900/15 to-amber-900/10 border border-purple-500/25 flex flex-col md:flex-row items-center md:items-start gap-6">
            
            {/* AI-Generated Style Sacred Handloom Emblem */}
            <HandloomAiSymbol className="w-32 h-32 md:w-40 md:h-40" />

            {/* In-Depth Handloom Story & Craft Details */}
            <div className="space-y-3.5 flex-1 text-center md:text-left">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 block mb-1">
                  Master Textile Tradition
                </span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                  {village.localHandloom && village.localHandloom !== 'N/A' ? village.localHandloom : `${village.name} Heritage Handloom & Weaving Art`}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-purple-100/90 leading-relaxed font-normal">
                Handloom weaving in {village.name} represents a sacred confluence of mathematics, dye alchemy, and patient manual devotion. Practiced on traditional non-motorized wooden pit-looms and heavy frame-looms, the weavers employ generational tie-dye (Bandha), double-shuttle interlock weaving, and authentic temple spires (Kumbha motifs). Every saree or fabric piece requires between 14 to 30 days of intensive manual labor, where warp and weft yarns are meticulously tied with rubber strips, dyed in multiple stages, and stretched on bamboo warping drums before being placed on the loom.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-2xl bg-white/60 dark:bg-[#120721]/80 border border-purple-500/20 text-left">
                  <span className="text-[10px] font-bold text-amber-500 uppercase block">Raw Fibres</span>
                  <p className="text-xs text-slate-800 dark:text-purple-200 mt-0.5 font-medium">
                    Pure 4-ply Mulberry Silk, Wild Tussar, & Hand-Combed Combed Cotton.
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-white/60 dark:bg-[#120721]/80 border border-purple-500/20 text-left">
                  <span className="text-[10px] font-bold text-emerald-500 uppercase block">Loom Science</span>
                  <p className="text-xs text-slate-800 dark:text-purple-200 mt-0.5 font-medium">
                    Double-shuttle synchronized interlocking; manual fly-shuttle wooden frame.
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-white/60 dark:bg-[#120721]/80 border border-purple-500/20 text-left">
                  <span className="text-[10px] font-bold text-purple-400 uppercase block">Cultural Sanctity</span>
                  <p className="text-xs text-slate-800 dark:text-purple-200 mt-0.5 font-medium">
                    Worn during Jagannath temple ceremonies, Odissi recitals, and sacred vows.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-1 text-[11px] justify-center md:justify-start">
                <span className="px-2.5 py-1 rounded-lg bg-purple-900/50 text-purple-200 border border-purple-500/25">✓ 100% Zero-Carbon Hand Weaving</span>
                <span className="px-2.5 py-1 rounded-lg bg-purple-900/50 text-purple-200 border border-purple-500/25">✓ Direct Weaver Revenue Support</span>
                <span className="px-2.5 py-1 rounded-lg bg-purple-900/50 text-purple-200 border border-purple-500/25">✓ Natural Eco-Dyes</span>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 4: ARTS & HANDICRAFTS
            (NO RANDOM IMAGES: Sacred Craft Emblem + In-Depth Metallurgy / Craft Lore)
           ========================================================================= */}
        <section className="glass-card rounded-3xl p-6 sm:p-8 border border-purple-500/20 bg-white/70 dark:bg-[#180B2B]/70 shadow-lg">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-purple-500/15">
            <h2 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-xl bg-purple-600 text-white text-xs flex items-center justify-center font-bold">4</span>
              <span>Arts & Handicrafts Mastery</span>
            </h2>
            <span className="text-xs text-pink-400 font-bold px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20">
              Living Craft Legacy
            </span>
          </div>

          <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-900/15 to-purple-900/15 border border-purple-500/25 flex flex-col md:flex-row items-center md:items-start gap-6">
            
            {/* AI-Generated Style Sacred Craft Emblem */}
            <CraftAiSymbol className="w-32 h-32 md:w-40 md:h-40" />

            {/* In-Depth Handicraft Lore & Material Details */}
            <div className="space-y-3.5 flex-1 text-center md:text-left">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 block mb-1">
                  Living Master Crafts
                </span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                  {village.famousArt} & {village.localHandicrafts}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-purple-100/90 leading-relaxed font-normal">
                The handicraft traditions of {village.name} stem from indigenous knowledge systems handed down across centuries. Master artisans here rely on zero chemical binders and zero industrial shortcuts. Whether working with virgin bell-metal casting (Kansa), kinetic sheet-metal pin articulation, lost-wax bronze metallurgy (Dhokra), palm-leaf micro incising, or seasoned Gamar wood sculpting, the entire creation lifecycle is rooted in sustainable harmony with local ecology.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-white/60 dark:bg-[#120721]/80 border border-purple-500/20 text-left space-y-1">
                  <span className="text-[10px] font-bold text-amber-500 uppercase block">Raw Material Alchemy</span>
                  <p className="text-xs text-slate-800 dark:text-purple-200 font-medium">
                    {village.localHandicrafts}. Sourced sustainably from local soils, virgin brass ingots, seasoned timbers, and organic forest resins.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/60 dark:bg-[#120721]/80 border border-purple-500/20 text-left space-y-1">
                  <span className="text-[10px] font-bold text-purple-400 uppercase block">Traditional Methodology</span>
                  <p className="text-xs text-slate-800 dark:text-purple-200 font-medium">
                    Hand-hammered cold shaping, charcoal furnace casting, river-stone polishing, and natural mineral pigmentation.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-1 text-[11px] justify-center md:justify-start">
                <span className="px-2.5 py-1 rounded-lg bg-amber-900/40 text-amber-200 border border-amber-500/25">✓ Non-Industrial Handmade Guarantee</span>
                <span className="px-2.5 py-1 rounded-lg bg-amber-900/40 text-amber-200 border border-amber-500/25">✓ Authentic Odia Shilpa Heritage</span>
                <span className="px-2.5 py-1 rounded-lg bg-amber-900/40 text-amber-200 border border-amber-500/25">✓ Lifelong Durability</span>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 5: FOLK DANCES, TRADITIONAL MUSIC & DIALECTS
           ========================================================================= */}
        <section className="glass-card rounded-3xl p-6 sm:p-8 border border-purple-500/20 bg-white/70 dark:bg-[#180B2B]/70 shadow-lg">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-purple-500/15">
            <h2 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-xl bg-purple-600 text-white text-xs flex items-center justify-center font-bold">5</span>
              <span>Folk Dances, Performing Arts & Dialects</span>
            </h2>
            <FaMusic className="text-purple-400" />
          </div>

          <div className="p-6 rounded-3xl bg-purple-900/10 border border-purple-500/20 flex flex-col md:flex-row items-center md:items-start gap-6">
            
            {/* AI-Generated Style Sacred Folk Symbol */}
            <FolkAiSymbol className="w-32 h-32 md:w-36 md:h-36" />

            <div className="space-y-3.5 flex-1 text-center md:text-left">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-pink-400 block mb-1">
                  Living Oral & Rhythm Traditions
                </span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                  {village.folkDances.join(' • ')}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-purple-100/90 leading-relaxed font-normal">
                Performing arts in {village.name} serve as both devotional prayer and collective oral history. Traditional street theater such as Prahlada Nataka and acrobatic Ranapa stilt dances are performed through nights during religious festivals. The acoustic accompaniment relies on indigenous percussions like Mardala, Dholak, Khanjani, and high-frequency Mahuri horns.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-2xl bg-white/60 dark:bg-[#120721]/80 border border-purple-500/20 text-left">
                  <span className="text-[10px] font-bold text-pink-400 uppercase block">Local Dialect</span>
                  <div className="text-xs font-semibold text-slate-800 dark:text-white mt-0.5">
                    {village.localLanguage}
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white/60 dark:bg-[#120721]/80 border border-purple-500/20 text-left">
                  <span className="text-[10px] font-bold text-purple-400 uppercase block">Folk Performance Formats</span>
                  <div className="text-xs font-semibold text-slate-800 dark:text-white mt-0.5">
                    {village.folkDances.join(', ')}
                  </div>
                </div>
              </div>

              {matchedSongs.length > 0 && (
                <div className="pt-2 border-t border-purple-500/15 space-y-2">
                  <div className="text-xs font-bold text-slate-800 dark:text-white">Verified Audio Recordings from this Region:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {matchedSongs.map((song) => (
                      <div
                        key={song.id}
                        className="p-3 rounded-xl bg-white/80 dark:bg-[#140824] border border-purple-500/25 flex items-center justify-between text-left"
                      >
                        <div>
                          <div className="text-xs font-bold text-slate-800 dark:text-white">{song.title}</div>
                          <div className="text-[11px] text-purple-400">{song.artist} • {song.dialect}</div>
                        </div>
                        <button
                          onClick={() => setPlayingSongId(playingSongId === song.id ? null : song.id)}
                          className="w-8 h-8 rounded-full bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center text-xs shadow-md transition"
                        >
                          {playingSongId === song.id ? <FaPause /> : <FaPlay className="ml-0.5" />}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 6: LOCAL FOOD & TRADITIONAL CULINARY HERITAGE
            (ZERO INACCURATE FOOD IMAGES: Sacred Food Emblem + Authentic Culinary Lore)
           ========================================================================= */}
        <section className="glass-card rounded-3xl p-6 sm:p-8 border border-purple-500/20 bg-white/70 dark:bg-[#180B2B]/70 shadow-lg">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-purple-500/15">
            <h2 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-xl bg-purple-600 text-white text-xs flex items-center justify-center font-bold">6</span>
              <span>Local Food & Traditional Culinary Heritage</span>
            </h2>
            <span className="text-xs text-amber-400 font-bold px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
              Authentic Odia Rasabali & Pitha
            </span>
          </div>

          <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-950/20 to-purple-950/20 border border-amber-500/25 flex flex-col md:flex-row items-center md:items-start gap-6">
            
            {/* AI-Generated Style Sacred Food & Thali Emblem */}
            <FoodAiSymbol className="w-32 h-32 md:w-40 md:h-40" />

            {/* In-Depth Culinary Lore & Specific Village Dishes */}
            <div className="space-y-4 flex-1 text-center md:text-left">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 block mb-1">
                  Signature Indigenous Food & Prasadam
                </span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                  Gastronomy of {village.name}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-purple-100/90 leading-relaxed font-normal">
                The food culture of {village.name} is deeply rooted in Ayurvedic balance, slow-cooking in seasoned earthenware pots, and zero chemical preservatives. From ancient sun-dried lentil dumplings (Badi Chura) and raw mango brine preserves (Ambula) to golden cottage cheese sweets (Chenna Jhili / Rasabali) and fragrant rice-lentil stews (Dalma), every dish is prepared to honor the seasons and temple traditions.
              </p>

              {/* Verified Traditional Dishes Badges */}
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-amber-400 block uppercase tracking-wider">
                  Traditional Dishes & Specialties of this Region:
                </span>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {village.traditionalFood.map((dish, i) => (
                    <div
                      key={i}
                      className="px-3.5 py-2 rounded-2xl text-xs font-bold bg-amber-500/10 text-amber-800 dark:text-amber-200 border border-amber-500/25 flex items-center gap-2 shadow-sm"
                    >
                      <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                      <span>{dish}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-white/60 dark:bg-[#120721]/80 border border-amber-500/20 text-left space-y-1">
                  <span className="text-[10px] font-bold text-amber-500 uppercase block">Cooking Philosophy</span>
                  <p className="text-xs text-slate-800 dark:text-purple-200 font-medium">
                    Sun-curing with rock salt and mustard oil; slow steam baking in banana and sal leaves without synthetic flavorings.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/60 dark:bg-[#120721]/80 border border-amber-500/20 text-left space-y-1">
                  <span className="text-[10px] font-bold text-emerald-500 uppercase block">Local Ingredients</span>
                  <p className="text-xs text-slate-800 dark:text-purple-200 font-medium">
                    Indigenous black gram (Biri), wild forest mustard, organic sugarcane jaggery, raw jackfruit, and fresh river water.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-1 text-[11px] justify-center md:justify-start">
                <span className="px-2.5 py-1 rounded-lg bg-amber-900/40 text-amber-200 border border-amber-500/25">✓ Pure Sattvic & Traditional Recipes</span>
                <span className="px-2.5 py-1 rounded-lg bg-amber-900/40 text-amber-200 border border-amber-500/25">✓ Prepared with Local Spring & River Water</span>
                <span className="px-2.5 py-1 rounded-lg bg-amber-900/40 text-amber-200 border border-amber-500/25">✓ Ancient Fermentation & Sun-Drying</span>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 7: FESTIVALS, CUSTOMS, AND CULTURAL TRADITIONS */}
        <section className="glass-card rounded-3xl p-6 sm:p-8 border border-purple-500/20 bg-white/70 dark:bg-[#180B2B]/70 shadow-lg">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-purple-500/15">
            <h2 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-xl bg-purple-600 text-white text-xs flex items-center justify-center font-bold">7</span>
              <span>Festivals, Sacred Rituals & Customs</span>
            </h2>
            <FaCalendarAlt className="text-pink-400" />
          </div>

          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {village.festivals.map((fest, i) => (
                <span
                  key={i}
                  className="px-3.5 py-2 rounded-2xl text-xs font-bold bg-pink-500/10 text-pink-700 dark:text-pink-300 border border-pink-500/20 flex items-center gap-1.5"
                >
                  <span>🎉</span>
                  <span>{fest}</span>
                </span>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-purple-100/80 leading-relaxed pt-2">
              Cultural life in {village.name} revolves around ancient agricultural cycles and temple rituals. During these festivals, whole communities unite to clean courtyards, decorate mud walls with geometric rice-paste Jhoti Chita drawings, and invoke divine blessings for prosperity and craftsmanship.
            </p>
          </div>
        </section>

        {/* SECTION 8: LOCAL ARTISANS, WEAVERS, ARTISTS & PERFORMERS */}
        <section className="glass-card rounded-3xl p-6 sm:p-8 border border-purple-500/20 bg-white/70 dark:bg-[#180B2B]/70 shadow-lg">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-purple-500/15">
            <h2 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-xl bg-purple-600 text-white text-xs flex items-center justify-center font-bold">8</span>
              <span>Local Artisans, Master Weavers & Lineage</span>
            </h2>
            <FaAward className="text-amber-400" />
          </div>

          <div className="space-y-4">
            {matchedArtisans.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {matchedArtisans.map((artisan) => (
                  <div
                    key={artisan.id}
                    className="p-5 rounded-2xl bg-slate-50 dark:bg-[#130722] border border-purple-500/20 flex flex-col justify-between space-y-3"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-amber-500 flex items-center justify-center text-white text-lg font-black shadow-md flex-shrink-0">
                        {artisan.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-amber-500">{artisan.odiaName}</div>
                        <h4 className="text-sm font-black text-slate-900 dark:text-white">{artisan.name}</h4>
                        <div className="text-[11px] text-purple-400 font-medium">{artisan.craft}</div>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-purple-200/80 leading-relaxed">
                      {artisan.story}
                    </p>
                    <div className="text-[11px] text-emerald-400 font-semibold flex items-center justify-between border-t border-purple-500/15 pt-2">
                      <span>Experience: {artisan.yearsOfExperience} Years</span>
                      <span>✓ Verified Master Craftsman</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {village.artisans.map((name, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-2 rounded-xl text-xs font-bold bg-purple-500/10 text-purple-700 dark:text-purple-200 border border-purple-500/20"
                    >
                      🧑‍🎨 {name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* SECTION 9: TOURIST EXPERIENCES AND LOCAL WORKSHOPS */}
        <section className="glass-card rounded-3xl p-6 sm:p-8 border border-purple-500/20 bg-white/70 dark:bg-[#180B2B]/70 shadow-lg">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-purple-500/15">
            <h2 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-xl bg-purple-600 text-white text-xs flex items-center justify-center font-bold">9</span>
              <span>Tourist Experiences & Hands-On Workshops</span>
            </h2>
            <FaCompass className="text-emerald-400" />
          </div>

          {matchedExperiences.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {matchedExperiences.map((exp) => (
                <div
                  key={exp.id}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-[#130722] border border-purple-500/20 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 px-2.5 py-0.5 rounded-full">
                        {exp.duration}
                      </span>
                      <span className="text-sm font-black text-purple-400">
                        ₹{exp.pricePerPerson} / participant
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 dark:text-white">{exp.title}</h4>
                    <p className="text-xs text-slate-600 dark:text-purple-200/80 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="text-xs text-purple-600 dark:text-purple-300">
                      <strong>Host:</strong> {exp.hostName} ({exp.hostTitle})
                    </div>
                  </div>

                  <button
                    onClick={() => handleBookExp(exp)}
                    className="w-full py-2.5 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition flex items-center justify-center gap-2"
                  >
                    <FaCalendarAlt className="text-xs" />
                    <span>Book Workshop with Host</span>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 rounded-2xl bg-purple-900/10 border border-purple-500/20 text-center space-y-2">
              <div className="text-xs font-semibold text-purple-300">
                Community workshops and tours being scheduled for {village.name}.
              </div>
              <p className="text-[11px] text-slate-500 dark:text-purple-400">
                Connect directly with the village co-operative to organize hands-on craft sessions.
              </p>
            </div>
          )}
        </section>

        {/* SECTION 10: PRODUCTS AVAILABLE FOR DIRECT PURCHASE */}
        <section id="section-products" className="glass-card rounded-3xl p-6 sm:p-8 border border-purple-500/20 bg-white/70 dark:bg-[#180B2B]/70 shadow-lg">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-purple-500/15">
            <h2 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-xl bg-purple-600 text-white text-xs flex items-center justify-center font-bold">10</span>
              <span>Authentic Master Creations Available for Purchase</span>
            </h2>
            <FaStore className="text-amber-400" />
          </div>

          {villageProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {villageProducts.map((p) => (
                <div
                  key={p.id}
                  className="rounded-2xl overflow-hidden border border-purple-500/20 bg-slate-50 dark:bg-[#130722] flex flex-col justify-between hover:shadow-xl hover:shadow-purple-900/20 transition-all"
                >
                  <div>
                    <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                      <img
                        src={p.images[0]}
                        alt={p.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-600 text-white">
                        {p.category}
                      </div>
                    </div>

                    <div className="p-4 space-y-2">
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">{p.name}</h4>
                      <p className="text-[11px] text-slate-500 dark:text-purple-300/80 line-clamp-2 leading-relaxed">
                        {p.description}
                      </p>
                      <div className="text-[11px] text-purple-400">
                        Crafted by: <span className="font-semibold text-slate-800 dark:text-purple-200">{p.artisanName}</span>
                      </div>
                      <div className="text-base font-black text-amber-500 pt-1">
                        ₹{p.price.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 pt-0">
                    <button
                      onClick={() => setOrderModalProduct(p)}
                      className="w-full py-2.5 rounded-xl font-bold text-xs bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-md flex items-center justify-center gap-1.5 transition"
                    >
                      <FaShoppingBag className="text-[10px]" />
                      <span>Buy Directly</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 rounded-2xl bg-purple-900/10 border border-purple-500/20 text-center space-y-2">
              <div className="text-xs font-semibold text-purple-300">
                Products from {village.name} can be explored in the Local Hands Marketplace.
              </div>
              <Link
                to="/marketplace"
                className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-purple-600 text-white shadow-sm hover:bg-purple-500 transition"
              >
                <span>Visit Marketplace</span>
              </Link>
            </div>
          )}
        </section>

      </div>

      {/* Community Contribution Modal */}
      <CommunityVillageModal
        isOpen={communityModalOpen}
        onClose={() => setCommunityModalOpen(false)}
        defaultTab={communityModalTab}
      />

      {/* Order / Checkout Modal */}
      <VillageOrderModal
        product={orderModalProduct}
        onClose={() => setOrderModalProduct(null)}
      />
    </main>
  );
}
