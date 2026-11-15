import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaLandmark, 
  FaSearch, 
  FaPlus, 
  FaMapMarkerAlt, 
  FaCheckCircle, 
  FaArrowRight,
  FaFilter,
  FaPalette,
  FaMusic,
  FaShoppingBag,
  FaUtensils,
  FaAward,
  FaCoins,
  FaPlay,
  FaPause,
  FaCalendarAlt,
  FaCompass,
  FaLeaf,
  FaUserTie
} from 'react-icons/fa';
import { useStore, type Product } from '../context/store';
import { MapView } from '../components/MapView';
import { 
  VERIFIED_VILLAGE_ARTISANS, 
  VERIFIED_VILLAGE_RECIPES, 
  VERIFIED_VILLAGE_EXPERIENCES,
  type VillageTourismExperience
} from '../data/villageArtisansData';
import { CommunityVillageModal } from '../components/villages/CommunityVillageModal';
import { VillageOrderModal } from '../components/villages/VillageOrderModal';
import { allOdishaVillages } from '../data/villagesData';
import type { Village } from '../context/store';

export function Villages() {
  const storeVillages = useStore((s) => s.villages);

  // Guarantee that all 14 villages ALWAYS display their latest authentic cropped photos from allOdishaVillages
  const villages = useMemo(() => {
    const verifiedMap = new Map(allOdishaVillages.map((v) => [v.id, v]));
    const list: Village[] = allOdishaVillages.map((v) => {
      const fromStore = storeVillages.find((sv) => sv.id === v.id);
      return {
        ...v,
        ...(fromStore || {}),
        verifiedMedia: v.verifiedMedia // Always prioritize latest authentic cropped pictures
      };
    });
    storeVillages.forEach((sv) => {
      if (!verifiedMap.has(sv.id)) {
        list.push(sv);
      }
    });
    return list;
  }, [storeVillages]);
  const products = useStore((s) => s.products);
  const folkSongs = useStore((s) => s.folkSongs);

  // Active Main Tab
  const [activeMainTab, setActiveMainTab] = useState<'directory' | 'map' | 'shop' | 'artisans' | 'music' | 'food' | 'experiences'>('directory');

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('All');
  const [activeVillagePin, setActiveVillagePin] = useState<Village | null>(allOdishaVillages[0] || null);

  // Modal States
  const [communityModalOpen, setCommunityModalOpen] = useState(false);
  const [communityModalTab, setCommunityModalTab] = useState<'village' | 'artisan' | 'song' | 'recipe'>('village');
  const [orderModalProduct, setOrderModalProduct] = useState<Product | null>(null);

  // Audio Playback State for Folk Songs
  const [playingSongId, setPlayingSongId] = useState<string | null>(null);

  // Experience Booking notification
  const [bookedExpTitle, setBookedExpTitle] = useState<string | null>(null);

  const filterOptions = [
    'All',
    'Handloom',
    'Handicrafts',
    'Tribal culture',
    'Traditional food',
    'Folk music',
    'Historical villages',
    'Eco-tourism'
  ];

  const districts = useMemo(() => ['All', ...new Set(villages.map((v) => v.district))], [villages]);

  const filteredVillages = useMemo(() => {
    return villages.filter((v) => {
      const matchCategory = selectedFilter === 'All' || v.category === selectedFilter || v.speciality.toLowerCase().includes(selectedFilter.toLowerCase());
      const matchDistrict = selectedDistrict === 'All' || v.district === selectedDistrict;
      const matchSearch =
        v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.speciality.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (v.block && v.block.toLowerCase().includes(searchQuery.toLowerCase())) ||
        v.famousArt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.localHandloom.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchDistrict && matchSearch;
    });
  }, [villages, selectedFilter, selectedDistrict, searchQuery]);

  // Leaflet Map Markers for filtered villages
  const villageMapMarkers = useMemo(() => {
    return filteredVillages.map((v) => ({
      id: v.id,
      lat: v.lat,
      lng: v.lng,
      label: `${v.name} (${v.speciality})`,
      type: 'Historic'
    }));
  }, [filteredVillages]);

  // Village Products
  const villageProducts = useMemo(() => {
    return products.filter((p) => p.village && p.village.trim() !== '');
  }, [products]);

  const openCommunityModal = (tab: 'village' | 'artisan' | 'song' | 'recipe') => {
    setCommunityModalTab(tab);
    setCommunityModalOpen(true);
  };

  const handleBookExperience = (exp: VillageTourismExperience) => {
    setBookedExpTitle(exp.title);
    setTimeout(() => setBookedExpTitle(null), 4000);
  };

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="relative rounded-3xl overflow-hidden p-8 sm:p-12 mb-8 border border-purple-500/25 bg-gradient-to-br from-[#180B2B] via-[#24133F] to-[#120721] text-white shadow-2xl backdrop-blur-xl">
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30 mb-5">
            <FaLandmark className="text-purple-400" /> Discover My Village • ମୋ ଗାଁର କାହାଣୀ
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
            Every Village Has a Story.{' '}
            <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-amber-300 bg-clip-text text-transparent">
              Every Craft Has a Soul.
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-xl text-purple-100/90 leading-relaxed max-w-3xl font-light">
            Discover the hidden beauty, traditional skills, local artists, folk culture, and unique stories of Odisha’s villages.
          </p>

          <p className="mt-2 text-xs sm:text-sm text-purple-300/80 leading-relaxed max-w-2xl">
            From the GI-tagged Berhampuri Patta silk pit-looms of Nuagaon and the 200-year-old brass jumping fish of Belaguntha, to the scroll painters of Raghurajpur and tribal aal-dyers of Kotpad — connect directly with rural creators and preserve Odisha’s living heritage.
          </p>

          {/* Quick Stat Counters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-purple-500/20">
            <div className="p-3 rounded-2xl bg-purple-900/40 border border-purple-500/20 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-black text-amber-300">14+</div>
              <div className="text-[11px] font-semibold text-purple-200">Verified Villages</div>
            </div>
            <div className="p-3 rounded-2xl bg-purple-900/40 border border-purple-500/20 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-black text-pink-300">60+</div>
              <div className="text-[11px] font-semibold text-purple-200">Master Craftsmen</div>
            </div>
            <div className="p-3 rounded-2xl bg-purple-900/40 border border-purple-500/20 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-black text-emerald-300">100%</div>
              <div className="text-[11px] font-semibold text-purple-200">Fair Cooperative Trade</div>
            </div>
            <div className="p-3 rounded-2xl bg-purple-900/40 border border-purple-500/20 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-black text-purple-300">30</div>
              <div className="text-[11px] font-semibold text-purple-200">Districts Scalable</div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => openCommunityModal('village')}
              className="px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm shadow-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:from-purple-500 hover:to-amber-400 text-white flex items-center gap-2 transform active:scale-95 transition"
            >
              <FaPlus /> Add Your Village to Karma-Path
            </button>
            <button
              onClick={() => openCommunityModal('artisan')}
              className="px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm bg-purple-800/60 hover:bg-purple-700/80 border border-purple-400/30 text-purple-100 flex items-center gap-2 transition"
            >
              <FaUserTie /> Register as an Artisan
            </button>
            <button
              onClick={() => setActiveMainTab('shop')}
              className="px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/40 text-amber-200 flex items-center gap-2 transition"
            >
              <FaShoppingBag /> Shop Village Heritage
            </button>
          </div>
        </div>

        {/* Ambient Glow Orbs */}
        <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-0 right-10 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none"></div>
      </section>

      {/* Special Showcase Banner: Focus on Berhampur & Ganjam District */}
      <section className="mb-10 rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-purple-950/70 via-indigo-950/60 to-purple-900/60 border border-purple-500/30 shadow-lg">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-400/30">
                Special Spotlight: Ganjam Cultural Belt
              </span>
              <span className="text-xs text-purple-200 font-bold">
                Silk City & Artisans of South Odisha
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              The Silk City & The Living Craft Hamlets of Ganjam
            </h2>
            <p className="text-xs sm:text-sm text-purple-200/90 leading-relaxed">
              Experience the profound contrast between <strong>Berhampur Municipal City</strong> (historic silk trading and market hub) and surrounding rural artisan villages: <strong>Nuagaon</strong> (GI-tagged Berhampuri Patta pit-loom weaving clusters), <strong>Belaguntha</strong> (the 200-year-old brass flexible jumping fish / <em>Pitala Machha</em> without welding), <strong>Tara Tarini & Raipur</strong> (sacred hilltop Shakti tradition), <strong>Rambha</strong> (Chilika lagoon fishermen), and <strong>Bhanjanagar</strong>.
            </p>
            <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-medium text-amber-200/90">
              <span className="bg-purple-900/60 px-2.5 py-1 rounded-lg border border-purple-500/20">🧵 Phoda Kumbha Border Silk</span>
              <span className="bg-purple-900/60 px-2.5 py-1 rounded-lg border border-purple-500/20">🐟 Flexible Brass Jumping Fish</span>
              <span className="bg-purple-900/60 px-2.5 py-1 rounded-lg border border-purple-500/20">🥭 Ganjam Mango Ambula Achar</span>
              <span className="bg-purple-900/60 px-2.5 py-1 rounded-lg border border-purple-500/20">🥢 Ranapa & Danda Nata Folk Dances</span>
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-col gap-2.5 flex-shrink-0 w-full lg:w-auto">
            <Link
              to="/village/vil-berhampur"
              className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition"
            >
              <span>Explore Berhampur City</span>
              <FaArrowRight className="text-[10px]" />
            </Link>
            <Link
              to="/village/vil-belaguntha"
              className="px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition"
            >
              <span>Belaguntha Brass Fish</span>
              <FaArrowRight className="text-[10px]" />
            </Link>
            <Link
              to="/village/vil-nuagaon-ganjam"
              className="px-4 py-2.5 rounded-xl bg-purple-900/80 hover:bg-purple-800 text-purple-200 border border-purple-500/30 font-bold text-xs flex items-center justify-center gap-2 transition"
            >
              <span>Nuagaon Pit-Looms</span>
              <FaArrowRight className="text-[10px]" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Tab Navigation */}
      <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 rounded-2xl bg-slate-100 dark:bg-purple-950/40 border border-purple-500/20 backdrop-blur-md">
        <button
          onClick={() => setActiveMainTab('directory')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
            activeMainTab === 'directory'
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
              : 'text-slate-700 dark:text-purple-200 hover:bg-purple-500/10'
          }`}
        >
          <FaLandmark /> Village Directory ({filteredVillages.length})
        </button>
        <button
          onClick={() => setActiveMainTab('map')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
            activeMainTab === 'map'
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
              : 'text-slate-700 dark:text-purple-200 hover:bg-purple-500/10'
          }`}
        >
          <FaMapMarkerAlt /> Interactive Discovery Map
        </button>
        <button
          onClick={() => setActiveMainTab('shop')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
            activeMainTab === 'shop'
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
              : 'text-slate-700 dark:text-purple-200 hover:bg-purple-500/10'
          }`}
        >
          <FaShoppingBag /> Shop Village Heritage ({villageProducts.length})
        </button>
        <button
          onClick={() => setActiveMainTab('artisans')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
            activeMainTab === 'artisans'
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
              : 'text-slate-700 dark:text-purple-200 hover:bg-purple-500/10'
          }`}
        >
          <FaAward /> Meet Our Artisans ({VERIFIED_VILLAGE_ARTISANS.length})
        </button>
        <button
          onClick={() => setActiveMainTab('music')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
            activeMainTab === 'music'
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
              : 'text-slate-700 dark:text-purple-200 hover:bg-purple-500/10'
          }`}
        >
          <FaMusic /> Hear Our Village ({folkSongs.length})
        </button>
        <button
          onClick={() => setActiveMainTab('food')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
            activeMainTab === 'food'
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
              : 'text-slate-700 dark:text-purple-200 hover:bg-purple-500/10'
          }`}
        >
          <FaUtensils /> Taste of the Village ({VERIFIED_VILLAGE_RECIPES.length})
        </button>
        <button
          onClick={() => setActiveMainTab('experiences')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
            activeMainTab === 'experiences'
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
              : 'text-slate-700 dark:text-purple-200 hover:bg-purple-500/10'
          }`}
        >
          <FaCompass /> Village Workshops & Tourism
        </button>
      </div>

      {/* Booked Experience Alert */}
      {bookedExpTitle && (
        <div className="mb-6 p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-between animate-fadeIn">
          <div className="flex items-center gap-2 text-xs font-bold">
            <FaCheckCircle className="text-base" />
            <span>Booking Request Received for "{bookedExpTitle}"! The village host will confirm your slot within 24 hours.</span>
          </div>
          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-500/30">Verified Workshop</span>
        </div>
      )}

      {/* TAB 1: VILLAGE DIRECTORY */}
      {activeMainTab === 'directory' && (
        <section className="space-y-6">
          {/* Search, District & Category Filters */}
          <div className="glass-card rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row gap-4 items-center justify-between border border-purple-500/20 bg-slate-50/70 dark:bg-[#160d26]/70 backdrop-blur-md">
            {/* Search Bar */}
            <div className="relative w-full md:w-80">
              <FaSearch className="absolute left-3.5 top-3.5 text-purple-400 text-sm" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search village, craft, district, block..."
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-white dark:bg-[#201338] border border-purple-500/20 focus:outline-none focus:border-purple-500 text-slate-900 dark:text-white"
              />
            </div>

            {/* District Dropdown */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <span className="text-xs font-bold text-slate-500 dark:text-purple-300 whitespace-nowrap">
                District:
              </span>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="px-3 py-2 text-xs rounded-xl bg-white dark:bg-[#201338] border border-purple-500/20 text-slate-800 dark:text-purple-200 focus:outline-none focus:border-purple-500"
              >
                {districts.map((d) => (
                  <option key={d} value={d}>
                    {d === 'All' ? 'All 30 Districts' : `${d} District`}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 w-full md:w-auto items-center">
              <FaFilter className="text-purple-400 text-xs mr-1" />
              {filterOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setSelectedFilter(opt)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                    selectedFilter === opt
                      ? 'bg-purple-600 text-white shadow-sm'
                      : 'bg-white dark:bg-[#201338] text-slate-700 dark:text-purple-200 hover:bg-purple-500/20 border border-purple-500/15'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Village Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVillages.map((village) => (
              <div
                key={village.id}
                className="glass-card rounded-3xl overflow-hidden border border-purple-500/20 bg-white/70 dark:bg-[#180B2B]/70 group hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Photo Banner */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                    <img
                      src={village.verifiedMedia[0] || 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'}
                      alt={village.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#120721] via-black/30 to-transparent"></div>

                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-purple-600/90 text-white shadow-md backdrop-blur-sm">
                      {village.category}
                    </div>

                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/90 text-white flex items-center gap-1 shadow-md">
                      <FaCheckCircle className="text-[9px]" /> {village.verifiedStatus}
                    </div>

                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="text-[12px] font-bold text-amber-300 drop-shadow">{village.odiaName}</div>
                      <h3 className="text-xl font-black text-white leading-tight drop-shadow-md">{village.name}</h3>
                      <div className="text-xs text-purple-200 flex items-center gap-1 mt-0.5">
                        <FaMapMarkerAlt className="text-amber-400" />
                        <span>{village.block || village.district}, {village.district}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3">
                    <div className="text-xs font-bold text-purple-600 dark:text-purple-300 bg-purple-500/10 px-2.5 py-1 rounded-lg inline-block">
                      Speciality: {village.speciality}
                    </div>

                    <p className="text-xs text-slate-600 dark:text-purple-100/80 line-clamp-3 leading-relaxed">
                      {village.introduction}
                    </p>

                    <div className="space-y-1.5 text-xs text-slate-500 dark:text-purple-300/80 pt-2 border-t border-purple-500/15">
                      <div className="flex items-center gap-1.5">
                        <FaPalette className="text-pink-400 flex-shrink-0" />
                        <span className="truncate"><strong>Traditional Art:</strong> {village.famousArt}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <FaLeaf className="text-emerald-400 flex-shrink-0" />
                        <span className="truncate"><strong>Handloom:</strong> {village.localHandloom}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <FaMusic className="text-amber-400 flex-shrink-0" />
                        <span className="truncate"><strong>Folk Dances:</strong> {village.folkDances.join(', ')}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-5 pt-0">
                  <Link
                    to={`/village/${village.id}`}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs bg-purple-700 hover:bg-purple-600 text-white transition shadow-md"
                  >
                    <span>Read Full Story & Artisans</span>
                    <FaArrowRight className="text-[10px]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredVillages.length === 0 && (
            <div className="text-center py-16 glass-card rounded-3xl border border-purple-500/20">
              <p className="text-sm font-semibold text-purple-300">
                No villages found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedFilter('All');
                  setSelectedDistrict('All');
                }}
                className="mt-3 px-4 py-2 rounded-xl text-xs font-bold bg-purple-600 text-white hover:bg-purple-500 transition"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </section>
      )}

      {/* TAB 2: INTERACTIVE ODISHA VILLAGE MAP */}
      {activeMainTab === 'map' && (
        <section className="glass-card rounded-3xl p-6 border border-purple-500/20 bg-slate-50/70 dark:bg-[#180B2B]/70">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-purple-500/20">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <FaMapMarkerAlt className="text-amber-400" /> Interactive Odisha Village Discovery Map
              </h2>
              <p className="text-xs text-slate-500 dark:text-purple-300 mt-0.5">
                Click village markers to preview living craft traditions, master weavers, local dialects, and coordinates across Odisha.
              </p>
            </div>
            <div className="text-xs font-semibold text-purple-600 dark:text-purple-300 bg-purple-500/10 px-3 py-1.5 rounded-xl">
              {filteredVillages.length} Villages Located on Map
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Map Viewer */}
            <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-purple-500/20 h-[440px] relative shadow-inner">
              <MapView
                markers={villageMapMarkers}
                userLocation={activeVillagePin ? { lat: activeVillagePin.lat, lng: activeVillagePin.lng } : undefined}
              />
            </div>

            {/* Selected Village Preview Card */}
            <div className="flex flex-col justify-between p-5 rounded-2xl bg-white dark:bg-[#130722] border border-purple-500/25 shadow-lg">
              {activeVillagePin ? (
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-amber-500 uppercase tracking-wide">
                      {activeVillagePin.district} District • {activeVillagePin.block}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold flex items-center gap-1">
                      <FaCheckCircle className="text-[9px]" /> Verified
                    </span>
                  </div>

                  <div>
                    <div className="text-xs font-bold text-purple-400">{activeVillagePin.odiaName}</div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                      {activeVillagePin.name}
                    </h3>
                  </div>

                  <div className="text-xs font-bold text-purple-600 dark:text-purple-300 bg-purple-500/10 px-2.5 py-1 rounded-lg inline-block">
                    {activeVillagePin.speciality}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-purple-100/80 line-clamp-3 leading-relaxed">
                    {activeVillagePin.introduction}
                  </p>

                  <div className="space-y-1.5 text-xs text-slate-500 dark:text-purple-300/80 pt-2 border-t border-purple-500/15">
                    <div><strong>🎨 Traditional Art:</strong> {activeVillagePin.famousArt}</div>
                    <div><strong>🧵 Handloom:</strong> {activeVillagePin.localHandloom}</div>
                    <div><strong>🗣️ Dialect:</strong> {activeVillagePin.localLanguage}</div>
                    <div><strong>🍲 Local Food:</strong> {activeVillagePin.traditionalFood.slice(0, 2).join(', ')}</div>
                  </div>

                  <div className="pt-3">
                    <Link
                      to={`/village/${activeVillagePin.id}`}
                      className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md transition"
                    >
                      <span>Open Dedicated Village Profile</span>
                      <FaArrowRight className="text-[10px]" />
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="text-center py-16 text-purple-300 text-xs">
                  Select any village from the map or list to preview details.
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* TAB 3: SHOP THE HERITAGE OF ODISHA (VILLAGE MARKETPLACE) */}
      {activeMainTab === 'shop' && (
        <section className="space-y-6">
          {/* Shop Header & Fair Trade Guarantee */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-purple-900/50 via-indigo-900/40 to-purple-950/50 border border-purple-500/30 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30">
                <FaShoppingBag /> Authentic Village Marketplace • ସିଧାସଳଖ ଶିଳ୍ପୀଙ୍କ ଠାରୁ
              </div>
              <h2 className="text-2xl font-black">Shop Directly from Odisha's Village Artisans</h2>
              <p className="text-xs sm:text-sm text-purple-200/90 leading-relaxed">
                Every rupee you spend directly empowers rural weaver cooperatives and master craftsmen. No middlemen, 100% fair trade pricing, verified GI-tagged authenticity.
              </p>
            </div>

            <div className="flex items-center gap-2 p-3 rounded-2xl bg-purple-950/70 border border-purple-500/30 flex-shrink-0">
              <FaCoins className="text-yellow-400 text-xl" />
              <div className="text-left text-xs">
                <div className="font-bold text-white">Earn +20 Karma Points</div>
                <div className="text-[10px] text-purple-200">On every verified artisan purchase</div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {villageProducts.map((product) => (
              <div
                key={product.id}
                className="glass-card rounded-3xl overflow-hidden border border-purple-500/20 bg-white/70 dark:bg-[#180B2B]/70 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Product Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <img
                      src={product.images[0] || 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80'}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-600 text-white shadow-md">
                      {product.category}
                    </div>

                    <div className="absolute bottom-2 left-2 right-2 px-2 py-1 rounded-lg bg-black/60 backdrop-blur-sm text-[11px] text-purple-200 flex items-center justify-between">
                      <span className="truncate">📍 {product.village}</span>
                      <span className="text-emerald-300 font-bold flex-shrink-0">✓ Fair Trade</span>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-4 space-y-2">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2 leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 dark:text-purple-200/80 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="text-[11px] text-purple-600 dark:text-purple-300 font-medium">
                      Crafted by: <span className="font-bold">{product.artisanName}</span>
                    </div>

                    <div className="pt-2 flex items-baseline justify-between border-t border-purple-500/15">
                      <div className="text-lg font-black text-amber-500">
                        ₹{product.price.toLocaleString()}
                      </div>
                      <div className="text-[10px] text-slate-500 dark:text-purple-300">
                        +{product.karmaReward || 20} KT Award
                      </div>
                    </div>
                  </div>
                </div>

                {/* Buy Button */}
                <div className="p-4 pt-0">
                  <button
                    onClick={() => setOrderModalProduct(product)}
                    className="w-full py-2.5 rounded-xl font-bold text-xs bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-md flex items-center justify-center gap-2 transform active:scale-95 transition"
                  >
                    <FaShoppingBag className="text-xs" />
                    <span>Buy Directly from Artisan</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* TAB 4: MEET OUR ARTISANS */}
      {activeMainTab === 'artisans' && (
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6 rounded-3xl bg-gradient-to-r from-purple-950/60 via-purple-900/40 to-slate-900/60 border border-purple-500/25">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30 mb-2">
                <FaAward /> Master Craftsmen of Odisha
              </div>
              <h2 className="text-2xl font-black text-white">Custodians of Centuries-Old Lineages</h2>
              <p className="text-xs sm:text-sm text-purple-200/80 max-w-2xl mt-1">
                Meet the master weavers, metal sculptors, and scroll painters who preserve ancient Indian craft traditions with unbroken discipline.
              </p>
            </div>

            <button
              onClick={() => openCommunityModal('artisan')}
              className="px-5 py-2.5 rounded-xl font-bold text-xs bg-purple-600 hover:bg-purple-500 text-white flex items-center gap-2 shadow-md transition flex-shrink-0"
            >
              <FaPlus /> Register Another Artisan
            </button>
          </div>

          {/* Artisans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VERIFIED_VILLAGE_ARTISANS.map((artisan) => (
              <div
                key={artisan.id}
                className="glass-card rounded-3xl p-6 border border-purple-500/20 bg-white/70 dark:bg-[#180B2B]/70 flex flex-col justify-between hover:shadow-xl hover:shadow-purple-900/20 transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Header with Photo */}
                  <div className="flex items-center gap-4">
                    <img
                      src={artisan.photo}
                      alt={artisan.name}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-purple-500/40 shadow-md"
                    />
                    <div>
                      <div className="text-xs font-bold text-amber-500">{artisan.odiaName}</div>
                      <h3 className="text-lg font-black text-slate-900 dark:text-white">{artisan.name}</h3>
                      <div className="text-xs text-purple-600 dark:text-purple-300 font-semibold flex items-center gap-1">
                        <FaMapMarkerAlt className="text-xs" />
                        <span>{artisan.village}, {artisan.district}</span>
                      </div>
                    </div>
                  </div>

                  {/* Craft & Experience */}
                  <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 space-y-1">
                    <div className="text-xs font-bold text-purple-700 dark:text-purple-200">
                      Craft: {artisan.craft}
                    </div>
                    <div className="text-[11px] text-slate-600 dark:text-purple-300 flex items-center justify-between">
                      <span>Experience: <strong>{artisan.yearsOfExperience} Years</strong></span>
                      <span className="text-emerald-500 font-bold flex items-center gap-1">
                        <FaCheckCircle className="text-[10px]" /> Verified Master
                      </span>
                    </div>
                  </div>

                  {/* Bio / Story */}
                  <p className="text-xs text-slate-600 dark:text-purple-100/80 leading-relaxed">
                    {artisan.story}
                  </p>

                  {/* Awards */}
                  {artisan.awards && artisan.awards.length > 0 && (
                    <div className="space-y-1 pt-1">
                      <div className="text-[11px] font-bold text-amber-500 flex items-center gap-1">
                        <FaAward className="text-xs" /> Honours & Recognition:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {artisan.awards.map((award, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-lg text-[10px] font-medium bg-amber-500/10 text-amber-600 dark:text-amber-300 border border-amber-500/20"
                          >
                            {award}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 mt-4 border-t border-purple-500/15">
                  <button
                    onClick={() => setActiveMainTab('shop')}
                    className="w-full py-2 rounded-xl text-xs font-bold bg-purple-900/60 hover:bg-purple-800 text-purple-200 border border-purple-500/30 transition flex items-center justify-center gap-1.5"
                  >
                    <span>View Artisan Products</span>
                    <FaArrowRight className="text-[9px]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* TAB 5: HEAR OUR VILLAGE (FOLK MUSIC & DANCE ARCHIVE) */}
      {activeMainTab === 'music' && (
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6 rounded-3xl bg-gradient-to-r from-purple-950/60 via-indigo-950/50 to-slate-900/60 border border-purple-500/25">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-pink-500/20 text-pink-300 border border-pink-400/30 mb-2">
                <FaMusic /> Audio & Oral Tradition Archive
              </div>
              <h2 className="text-2xl font-black text-white">Hear the Echoes of Village Courtyards</h2>
              <p className="text-xs sm:text-sm text-purple-200/80 max-w-2xl mt-1">
                Listen to authentic field recordings of Sambalpuri Dalkhai, Rasarkeli, Desia Dhemsa, and Kui tribal songs recorded directly in rural communities.
              </p>
            </div>

            <button
              onClick={() => openCommunityModal('song')}
              className="px-5 py-2.5 rounded-xl font-bold text-xs bg-pink-600 hover:bg-pink-500 text-white flex items-center gap-2 shadow-md transition flex-shrink-0"
            >
              <FaPlus /> Share a Folk Song
            </button>
          </div>

          {/* Songs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {folkSongs.map((song) => {
              const isPlaying = playingSongId === song.id;
              return (
                <div
                  key={song.id}
                  className="glass-card rounded-3xl p-6 border border-purple-500/20 bg-white/70 dark:bg-[#180B2B]/70 flex flex-col justify-between space-y-4 hover:shadow-xl hover:shadow-purple-900/20 transition-all"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-purple-500 bg-purple-500/10 px-2 py-0.5 rounded-md">
                          {song.category}
                        </span>
                        <h3 className="text-lg font-black text-slate-900 dark:text-white mt-1">
                          {song.title}
                        </h3>
                        {song.odiaTitle && (
                          <div className="text-xs font-bold text-amber-500">{song.odiaTitle}</div>
                        )}
                        <div className="text-xs text-purple-600 dark:text-purple-300 font-semibold flex items-center gap-1 mt-0.5">
                          <FaMapMarkerAlt className="text-xs" />
                          <span>{song.village}, {song.district}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => setPlayingSongId(isPlaying ? null : song.id)}
                        className={`w-11 h-11 rounded-2xl flex items-center justify-center text-white transition shadow-lg ${
                          isPlaying
                            ? 'bg-amber-500 scale-105'
                            : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105'
                        }`}
                        title={isPlaying ? 'Pause Song' : 'Play Song'}
                      >
                        {isPlaying ? <FaPause className="text-sm" /> : <FaPlay className="text-sm ml-0.5" />}
                      </button>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-purple-100/80 leading-relaxed">
                      {song.culturalSignificance}
                    </p>

                    <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/15 space-y-1 text-xs">
                      <div className="text-purple-700 dark:text-purple-200 font-bold">
                        Artist: {song.artist}
                      </div>
                      <div className="text-slate-500 dark:text-purple-300 text-[11px]">
                        Dialect: {song.dialect} • Recorded: {song.recordingDate}
                      </div>
                    </div>

                    {/* Lyrics Preview */}
                    <div className="p-3 rounded-2xl bg-slate-100 dark:bg-[#120721] border border-purple-500/10 text-xs italic text-slate-700 dark:text-purple-200/90 leading-relaxed">
                      "{song.lyrics}"
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-[11px] text-purple-400">
                    <span className="flex items-center gap-1">
                      <FaCheckCircle className="text-emerald-400 text-[10px]" /> Cultural Vault Verified
                    </span>
                    <span>{song.festival}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* TAB 6: TASTE OF THE VILLAGE (TRADITIONAL RECIPES) */}
      {activeMainTab === 'food' && (
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6 rounded-3xl bg-gradient-to-r from-purple-950/60 via-amber-950/40 to-slate-900/60 border border-purple-500/25">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30 mb-2">
                <FaUtensils /> Authentic Culinary Heritage
              </div>
              <h2 className="text-2xl font-black text-white">Recipes Passed Down Generations</h2>
              <p className="text-xs sm:text-sm text-purple-200/80 max-w-2xl mt-1">
                Explore timeless village recipes cooked in earthen pots over woodfire, using sundried wild ingredients, organic millets, and indigenous spices.
              </p>
            </div>

            <button
              onClick={() => openCommunityModal('recipe')}
              className="px-5 py-2.5 rounded-xl font-bold text-xs bg-amber-600 hover:bg-amber-500 text-white flex items-center gap-2 shadow-md transition flex-shrink-0"
            >
              <FaPlus /> Share a Traditional Recipe
            </button>
          </div>

          {/* Recipes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VERIFIED_VILLAGE_RECIPES.map((recipe) => (
              <div
                key={recipe.id}
                className="glass-card rounded-3xl overflow-hidden border border-purple-500/20 bg-white/70 dark:bg-[#180B2B]/70 flex flex-col justify-between hover:shadow-xl hover:shadow-purple-900/20 transition-all"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <img
                      src={recipe.photo}
                      alt={recipe.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#120721] via-black/30 to-transparent"></div>

                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-600 text-white shadow-md">
                      {recipe.category}
                    </div>

                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="text-xs font-bold text-amber-300">{recipe.odiaName}</div>
                      <h3 className="text-lg font-black text-white leading-tight">{recipe.name}</h3>
                      <div className="text-xs text-purple-200 flex items-center gap-1 mt-0.5">
                        <FaMapMarkerAlt className="text-amber-400 text-[10px]" />
                        <span>{recipe.village}, {recipe.district}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <div className="text-xs text-slate-600 dark:text-purple-100/90 leading-relaxed">
                      <strong>Method:</strong> {recipe.traditionalMethod}
                    </div>

                    <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/15 space-y-2">
                      <div className="text-[11px] font-bold text-purple-700 dark:text-purple-200">
                        Key Local Ingredients:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {recipe.ingredients.map((ing, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-lg text-[10px] bg-white dark:bg-[#201338] text-slate-700 dark:text-purple-200 border border-purple-500/20"
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-500 dark:text-purple-300/80 italic">
                      Cultural Note: {recipe.culturalImportance}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center justify-between text-[11px] text-purple-400 border-t border-purple-500/15 pt-3">
                  <span>Prep Time: <strong>{recipe.preparationTime}</strong></span>
                  <span className="truncate">Contributed by: <strong>{recipe.contributor}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* TAB 7: VILLAGE EXPERIENCES & RESPONSIBLE TOURISM */}
      {activeMainTab === 'experiences' && (
        <section className="space-y-6">
          <div className="p-6 rounded-3xl bg-gradient-to-r from-purple-950/60 via-emerald-950/40 to-slate-900/60 border border-purple-500/25">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 mb-2">
              <FaCompass /> Hands-On Cultural Immersion
            </div>
            <h2 className="text-2xl font-black text-white">Live the Village Experience</h2>
            <p className="text-xs sm:text-sm text-purple-200/80 max-w-2xl mt-1">
              Participate in authentic workshops guided by master artisans. Learn pit-loom silk weaving, traditional brass sculpting, and palm-leaf engraving while supporting ethical rural tourism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VERIFIED_VILLAGE_EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                className="glass-card rounded-3xl overflow-hidden border border-purple-500/20 bg-white/70 dark:bg-[#180B2B]/70 flex flex-col justify-between hover:shadow-xl hover:shadow-purple-900/20 transition-all"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <img
                      src={exp.photo}
                      alt={exp.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#120721] via-black/30 to-transparent"></div>

                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-600 text-white shadow-md">
                      {exp.duration}
                    </div>

                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-purple-600 text-white shadow-md">
                      ₹{exp.pricePerPerson} / person
                    </div>

                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="text-xs font-bold text-amber-300">{exp.odiaTitle}</div>
                      <h3 className="text-base font-black text-white leading-tight">{exp.title}</h3>
                      <div className="text-xs text-purple-200 flex items-center gap-1 mt-0.5">
                        <FaMapMarkerAlt className="text-amber-400 text-[10px]" />
                        <span>{exp.village}, {exp.district}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <p className="text-xs text-slate-600 dark:text-purple-100/90 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/15 space-y-1.5 text-xs">
                      <div className="font-bold text-purple-700 dark:text-purple-200">
                        Host: {exp.hostName} ({exp.hostTitle})
                      </div>
                      <div className="text-slate-500 dark:text-purple-300 text-[11px]">
                        Group Size: {exp.groupSize}
                      </div>
                    </div>

                    {/* What's Included */}
                    <div className="space-y-1">
                      <div className="text-[11px] font-bold text-slate-700 dark:text-purple-200">
                        Included in this Experience:
                      </div>
                      <ul className="text-[11px] text-slate-600 dark:text-purple-300/80 space-y-0.5 list-disc list-inside">
                        {exp.inclusions.slice(0, 3).map((inc, i) => (
                          <li key={i}>{inc}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => handleBookExperience(exp)}
                    className="w-full py-2.5 rounded-xl font-bold text-xs bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-md flex items-center justify-center gap-2 transform active:scale-95 transition"
                  >
                    <FaCalendarAlt className="text-xs" />
                    <span>Book Authentic Workshop</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Modals */}
      <CommunityVillageModal
        isOpen={communityModalOpen}
        onClose={() => setCommunityModalOpen(false)}
        defaultTab={communityModalTab}
      />

      <VillageOrderModal
        product={orderModalProduct}
        onClose={() => setOrderModalProduct(null)}
      />
    </main>
  );
}
