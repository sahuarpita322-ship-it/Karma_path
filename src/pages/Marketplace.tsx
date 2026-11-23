import React, { useState, useMemo } from 'react';
import { 
  FaStore, 
  FaCoins, 
  FaSearch, 
  FaHeart, 
  FaCheckCircle, 
  FaTruck, 
  FaShoppingBag, 
  FaFilter, 
  FaEye, 
  FaUserTie, 
  FaTag, 
  FaGem, 
  FaPalette, 
  FaLeaf, 
  FaHome, 
  FaStar,
  FaAward,
  FaPlus,
  FaShieldAlt,
  FaExchangeAlt,
  FaCogs,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { useStore } from '../context/store';
import { type Product } from '../data/odishaData';
import { ProductDetailModal } from '../components/marketplace/ProductDetailModal';
import { CartDrawer } from '../components/marketplace/CartDrawer';
import { WishlistDrawer } from '../components/marketplace/WishlistDrawer';
import { CheckoutModal } from '../components/marketplace/CheckoutModal';
import { BecomeSellerModal } from '../components/marketplace/BecomeSellerModal';
import { AdminMarketplaceModal } from '../components/marketplace/AdminMarketplaceModal';
import { VERIFIED_VILLAGE_ARTISANS } from '../data/villageArtisansData';
import { ALL_ODISHA_MARKETPLACE_PRODUCTS } from '../data/odishaMarketplaceData';

export function Marketplace() {
  const storeProducts = useStore((s) => s.products);

  // Guarantee all authentic handicraft and handloom products are always loaded
  const products = useMemo(() => {
    const map = new Map(ALL_ODISHA_MARKETPLACE_PRODUCTS.map((p) => [p.id, p]));
    const list = [...ALL_ODISHA_MARKETPLACE_PRODUCTS];
    storeProducts.forEach((sp) => {
      if (!map.has(sp.id)) {
        list.push(sp);
      }
    });
    return list;
  }, [storeProducts]);
  const cart = useStore((s) => s.cart);
  const addToCart = useStore((s) => s.addToCart);
  const wishlist = useStore((s) => s.wishlist);
  const toggleWishlist = useStore((s) => s.toggleWishlist);
  const orders = useStore((s) => s.orders);

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategoryPill, setActiveCategoryPill] = useState<string>('All');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'popular' | 'newest'>('featured');
  const [priceFilter, setPriceFilter] = useState<'all' | 'under1000' | 'under3000' | 'premium'>('all');

  // Modals & Drawers State
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [wishlistDrawerOpen, setWishlistDrawerOpen] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [checkoutItems, setCheckoutItems] = useState<Product[]>([]);
  const [checkoutDiscount, setCheckoutDiscount] = useState(0);
  const [becomeSellerModalOpen, setBecomeSellerModalOpen] = useState(false);
  const [adminModalOpen, setAdminModalOpen] = useState(false);

  // Active Main View Tab
  const [activeViewTab, setActiveViewTab] = useState<'catalogue' | 'artisans' | 'orders'>('catalogue');

  // Success Notification Banner
  const [notificationMsg, setNotificationMsg] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setNotificationMsg(msg);
    setTimeout(() => setNotificationMsg(null), 3000);
  };

  // Category navigation tabs
  const categoryTabs = [
    { id: 'All', label: 'All 16 Master Crafts' },
    { id: 'Handicrafts', label: 'Explore Handicrafts', icon: FaPalette },
    { id: 'Handloom', label: 'Explore Handloom', icon: FaLeaf },
    { id: 'Jewellery', label: 'Explore Jewellery', icon: FaGem },
    { id: 'Paintings', label: 'Explore Paintings', icon: FaPalette },
    { id: 'Home décor', label: 'Explore Home Décor', icon: FaHome },
    { id: 'featured', label: 'Featured Products', icon: FaStar },
    { id: 'bestseller', label: 'Best Sellers', icon: FaAward },
    { id: 'under3000', label: 'Under ₹3,000', icon: FaCoins },
    { id: 'new', label: 'New Arrivals', icon: FaCheckCircle },
    { id: 'artisans', label: 'Meet Our Artisans', icon: FaUserTie }
  ];

  const districts = useMemo(() => {
    return ['All', ...new Set(products.map((p) => p.district))];
  }, [products]);

  // Filtering & Sorting Logic
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Search matching
      const matchesSearch =
        searchQuery === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.artisanName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.village.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.materials.some((m) => m.toLowerCase().includes(searchQuery.toLowerCase()));

      // District matching
      const matchesDistrict = selectedDistrict === 'All' || product.district === selectedDistrict;

      // Category / Pill matching
      let matchesPill = true;
      if (activeCategoryPill === 'Handicrafts') {
        matchesPill = ['Handicrafts', 'Dhokra craft', 'Pipili applique', 'Wood craft', 'Palm-leaf engraving', 'Silver filigree', 'Home décor', 'Pattachitra', 'Paintings'].includes(product.category);
      } else if (activeCategoryPill === 'Handloom') {
        matchesPill = ['Handloom', 'Sambalpuri textiles', 'Ikat', 'Traditional weaving'].includes(product.category);
      } else if (activeCategoryPill === 'Jewellery') {
        matchesPill = ['Jewellery', 'Brass jewellery', 'Silver filigree', 'Handicrafts'].includes(product.category);
      } else if (activeCategoryPill === 'Paintings') {
        matchesPill = ['Paintings', 'Pattachitra', 'Palm-leaf engraving'].includes(product.category);
      } else if (activeCategoryPill === 'Home décor') {
        matchesPill = ['Home décor', 'Pipili applique', 'Wood craft', 'Handicrafts'].includes(product.category);
      } else if (activeCategoryPill === 'featured') {
        matchesPill = !!product.featured;
      } else if (activeCategoryPill === 'bestseller') {
        matchesPill = !!product.bestSeller;
      } else if (activeCategoryPill === 'under1000') {
        matchesPill = product.price <= 1000;
      } else if (activeCategoryPill === 'under3000') {
        matchesPill = product.price <= 3000;
      } else if (activeCategoryPill === 'new') {
        matchesPill = !!product.isNewArrival;
      }

      // Explicit Price Filter matching
      let matchesPrice = true;
      if (priceFilter === 'under1000') {
        matchesPrice = product.price <= 1000;
      } else if (priceFilter === 'under3000') {
        matchesPrice = product.price <= 3000;
      } else if (priceFilter === 'premium') {
        matchesPrice = product.price > 3000;
      }

      return matchesSearch && matchesDistrict && matchesPill && matchesPrice;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'popular') return (b.reviewCount || 0) - (a.reviewCount || 0);
      if (sortBy === 'newest') return b.id.localeCompare(a.id);
      return 0; // default keep mixed order
    });
  }, [products, searchQuery, selectedDistrict, activeCategoryPill, priceFilter, sortBy]);

  const handleInstantBuyNow = (product: Product) => {
    setCheckoutItems([product]);
    setCheckoutDiscount(0);
    setCheckoutModalOpen(true);
  };

  const handleProceedCartCheckout = (items: Product[], discount: number) => {
    setCartDrawerOpen(false);
    setCheckoutItems(items);
    setCheckoutDiscount(discount);
    setCheckoutModalOpen(true);
  };

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* Toast Notification */}
      {notificationMsg && (
        <div className="fixed top-20 right-6 z-50 p-4 rounded-2xl bg-emerald-600 text-white shadow-2xl flex items-center gap-2 text-xs font-bold animate-fadeIn">
          <FaCheckCircle className="text-base" />
          <span>{notificationMsg}</span>
        </div>
      )}

      {/* Floating Action Navigation (Cart, Wishlist, Sell Your Art, Admin) */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-white/70 dark:bg-purple-950/40 border border-purple-500/20 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-700 dark:text-purple-200">
            Odisha Artisan Collective
          </span>
          <span className="text-xs text-purple-400">•</span>
          <span className="text-xs font-semibold text-emerald-500 flex items-center gap-1">
            <FaCheckCircle className="text-[10px]" /> 100% Fair Trade Direct
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setBecomeSellerModalOpen(true)}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-md flex items-center gap-1.5 transition"
          >
            <FaPlus className="text-[10px]" />
            <span>Sell Your Art on Karma-Path</span>
          </button>

          <button
            onClick={() => setWishlistDrawerOpen(true)}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-purple-900/40 hover:bg-purple-500/20 border border-purple-500/20 text-slate-700 dark:text-purple-200 relative transition"
            title="Wishlist"
          >
            <FaHeart className="text-sm text-rose-500" />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-rose-500 text-white text-[10px] font-black flex items-center justify-center shadow">
                {wishlist.length}
              </span>
            )}
          </button>

          <button
            onClick={() => setCartDrawerOpen(true)}
            className="px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-2 shadow-md relative transition"
            title="Shopping Cart"
          >
            <FaShoppingBag className="text-sm" />
            <span>Cart</span>
            {cart.length > 0 && (
              <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>

          <button
            onClick={() => setAdminModalOpen(true)}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-purple-900/40 hover:bg-purple-500/20 border border-purple-500/20 text-slate-700 dark:text-purple-200 transition"
            title="Admin Dashboard"
          >
            <FaCogs className="text-sm" />
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative rounded-3xl overflow-hidden p-8 sm:p-12 border border-purple-500/25 bg-gradient-to-br from-[#180B2B] via-[#24133F] to-[#120721] text-white shadow-2xl backdrop-blur-xl">
        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30">
            <FaStore className="text-purple-400" /> LOCAL HANDS • ହାତ ତିଆରି କଳା
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
            Local Hands –{' '}
            <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-amber-300 bg-clip-text text-transparent">
              Discover the Art of Odisha
            </span>
          </h1>

          <p className="text-base sm:text-xl text-purple-100/90 leading-relaxed font-light max-w-3xl">
            From traditional handlooms to handmade treasures, explore authentic creations crafted by the hands of Odisha.
          </p>

          <p className="text-xs sm:text-sm text-purple-300/80 leading-relaxed max-w-2xl font-normal">
            Every purchase eliminates middlemen markups, delivering 100% fair-trade value directly to weavers in Barpali, brass sculptors in Belaguntha, Pattachitra masters in Raghurajpur, and silversmiths in Cuttack. Earn Karma Tokens on every verified purchase!
          </p>

          {/* Search Bar inside Hero */}
          <div className="pt-4 max-w-2xl">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 text-sm" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, crafts, artisans, and villages (e.g. Sambalpuri, Brass fish, Pattachitra)..."
                className="w-full pl-11 pr-28 py-3.5 text-xs sm:text-sm rounded-2xl bg-white/10 dark:bg-black/30 border border-purple-400/30 backdrop-blur-md text-white placeholder-purple-300/70 focus:outline-none focus:border-amber-400 shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-purple-300 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Quick Stats Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 text-xs">
            <div className="p-3 rounded-xl bg-purple-900/40 border border-purple-500/20">
              <div className="text-xl font-black text-amber-300">{products.length}+</div>
              <div className="text-[11px] text-purple-200">Authentic Creations</div>
            </div>
            <div className="p-3 rounded-xl bg-purple-900/40 border border-purple-500/20">
              <div className="text-xl font-black text-pink-300">100%</div>
              <div className="text-[11px] text-purple-200">Artisan Fair Trade</div>
            </div>
            <div className="p-3 rounded-xl bg-purple-900/40 border border-purple-500/20">
              <div className="text-xl font-black text-emerald-300">+20 KT</div>
              <div className="text-[11px] text-purple-200">Karma Award / Order</div>
            </div>
            <div className="p-3 rounded-xl bg-purple-900/40 border border-purple-500/20">
              <div className="text-xl font-black text-purple-300">30</div>
              <div className="text-[11px] text-purple-200">Districts Represented</div>
            </div>
          </div>
        </div>

        {/* Ambient Glow */}
        <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
      </section>

      {/* Main View Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-purple-500/20 pb-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveViewTab('catalogue')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
              activeViewTab === 'catalogue'
                ? 'bg-purple-600 text-white shadow-md'
                : 'text-slate-600 dark:text-purple-300 hover:bg-purple-500/10'
            }`}
          >
            Mixed Craft Catalogue ({filteredProducts.length})
          </button>
          <button
            onClick={() => setActiveViewTab('artisans')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 ${
              activeViewTab === 'artisans'
                ? 'bg-purple-600 text-white shadow-md'
                : 'text-slate-600 dark:text-purple-300 hover:bg-purple-500/10'
            }`}
          >
            <FaUserTie className="text-xs" />
            <span>Meet Our Artisans</span>
          </button>
          <button
            onClick={() => setActiveViewTab('orders')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 ${
              activeViewTab === 'orders'
                ? 'bg-purple-600 text-white shadow-md'
                : 'text-slate-600 dark:text-purple-300 hover:bg-purple-500/10'
            }`}
          >
            <FaTruck className="text-xs" />
            <span>My Orders ({orders.length})</span>
          </button>
        </div>

        {/* Sorting Dropdown */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-500 dark:text-purple-300 font-semibold whitespace-nowrap">
            Sort by:
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-3 py-1.5 rounded-xl bg-white dark:bg-[#201338] border border-purple-500/20 text-slate-800 dark:text-purple-200 text-xs focus:outline-none focus:border-purple-500"
          >
            <option value="featured">Mixed Vibrant Layout (Recommended)</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="popular">Most Popular & Reviewed</option>
            <option value="newest">New Arrivals</option>
          </select>
        </div>
      </div>

      {/* VIEW: MIXED CRAFT CATALOGUE */}
      {activeViewTab === 'catalogue' && (
        <div className="space-y-8">
          
          {/* Quick Category & Filter Pills */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {categoryTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeCategoryPill === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      if (tab.id === 'artisans') {
                        setActiveViewTab('artisans');
                      } else {
                        setActiveCategoryPill(tab.id);
                      }
                    }}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                      isActive
                        ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                        : 'bg-white/80 dark:bg-purple-950/40 text-slate-700 dark:text-purple-200 hover:bg-purple-500/20 border border-purple-500/15'
                    }`}
                  >
                    {Icon && <Icon className="text-[11px]" />}
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Sub-Filters: District & Price Band */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-purple-950/20 border border-purple-500/15 text-xs">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-bold text-slate-500 dark:text-purple-300">
                  <FaFilter className="inline mr-1 text-purple-400" /> Filter District:
                </span>
                <select
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                  className="px-3 py-1.5 rounded-xl bg-white dark:bg-[#201338] border border-purple-500/20 text-slate-800 dark:text-purple-200 text-xs"
                >
                  {districts.map((d) => (
                    <option key={d} value={d}>
                      {d === 'All' ? 'All Districts' : `${d} District`}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Band Radios */}
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-500 dark:text-purple-300">Price Band:</span>
                <button
                  onClick={() => setPriceFilter('all')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
                    priceFilter === 'all' ? 'bg-purple-600 text-white' : 'text-slate-600 dark:text-purple-300 hover:bg-purple-500/10'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setPriceFilter('under1000')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
                    priceFilter === 'under1000' ? 'bg-purple-600 text-white' : 'text-slate-600 dark:text-purple-300 hover:bg-purple-500/10'
                  }`}
                >
                  Under ₹1,000
                </button>
                <button
                  onClick={() => setPriceFilter('under3000')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
                    priceFilter === 'under3000' ? 'bg-purple-600 text-white' : 'text-slate-600 dark:text-purple-300 hover:bg-purple-500/10'
                  }`}
                >
                  Under ₹3,000
                </button>
                <button
                  onClick={() => setPriceFilter('premium')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
                    priceFilter === 'premium' ? 'bg-purple-600 text-white' : 'text-slate-600 dark:text-purple-300 hover:bg-purple-500/10'
                  }`}
                >
                  Pure Silk & Heritage
                </button>
              </div>
            </div>
          </div>

          {/* VISUALLY BALANCED MIXED PRODUCT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const isWishlisted = wishlist.includes(product.id);
              const isInCart = cart.some((p) => p.id === product.id);
              const discountPercent = product.originalPrice
                ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
                : 0;

              return (
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="glass-card rounded-3xl overflow-hidden border border-purple-500/20 bg-white/70 dark:bg-[#180B2B]/70 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-purple-900/25 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
                >
                  <div>
                    {/* Image Area with Badges & Wishlist */}
                    <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                      <img
                        src={product.images[0] || '/culture-grid.jpg'}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#120721]/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

                      {/* Craft Category Badge */}
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-purple-600/90 text-white shadow-md backdrop-blur-sm">
                        {product.category}
                      </div>

                      {/* Discount or Genuine Tag */}
                      {discountPercent > 0 && (
                        <div className="absolute top-3 right-12 px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-500 text-slate-950 shadow-md">
                          {discountPercent}% OFF
                        </div>
                      )}

                      {/* Wishlist Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleWishlist(product.id);
                          showNotification(isWishlisted ? `Removed from wishlist` : `Added "${product.name}" to wishlist`);
                        }}
                        className={`absolute top-3 right-3 p-2 rounded-full transition shadow-md ${
                          isWishlisted
                            ? 'bg-rose-500 text-white'
                            : 'bg-black/60 text-white hover:text-rose-400'
                        }`}
                        title="Save to Wishlist"
                      >
                        <FaHeart className="text-xs" />
                      </button>

                      {/* Bottom Image Overlay Bar */}
                      <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-purple-200">
                        <span className="truncate flex items-center gap-1 font-semibold">
                          <FaMapMarkerAlt className="text-amber-400 text-[10px]" />
                          <span>{product.village}, {product.district}</span>
                        </span>
                        <span className="flex items-center gap-1 text-amber-300 font-bold flex-shrink-0">
                          ★ {product.rating || 4.9}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 space-y-2.5">
                      <div className="text-[11px] text-purple-600 dark:text-purple-300 font-medium">
                        By <strong className="text-slate-800 dark:text-purple-100">{product.artisanName}</strong>
                        {product.verifiedArtisan && (
                          <span className="inline-flex items-center gap-0.5 text-emerald-500 ml-1 font-bold">
                            <FaCheckCircle className="text-[9px]" /> Verified
                          </span>
                        )}
                      </div>

                      <h3 className="text-sm font-black text-slate-900 dark:text-white leading-snug line-clamp-2">
                        {product.name}
                      </h3>

                      <p className="text-xs text-slate-600 dark:text-purple-200/80 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Price Section */}
                      <div className="pt-2 flex items-baseline justify-between border-t border-purple-500/15">
                        <div className="flex items-baseline gap-2">
                          <span className="text-lg font-black text-slate-900 dark:text-white">
                            ₹{product.price.toLocaleString('en-IN')}
                          </span>
                          {product.originalPrice && (
                            <span className="text-xs line-through text-slate-400">
                              ₹{product.originalPrice.toLocaleString('en-IN')}
                            </span>
                          )}
                        </div>

                        <div className="text-[10px] text-amber-500 font-bold flex items-center gap-1">
                          <FaCoins className="text-[9px]" /> +{product.karmaReward || 20} KT
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Actions Footer */}
                  <div className="p-5 pt-0 space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProduct(product);
                        }}
                        className="py-2 rounded-xl text-xs font-bold bg-slate-100 dark:bg-purple-900/40 hover:bg-purple-500/20 text-slate-700 dark:text-purple-200 border border-purple-500/20 transition flex items-center justify-center gap-1"
                      >
                        <FaEye className="text-[10px]" /> Details
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(product);
                          showNotification(`Added "${product.name}" to cart!`);
                        }}
                        className={`py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1 ${
                          isInCart
                            ? 'bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-500/30'
                            : 'bg-purple-600 hover:bg-purple-500 text-white shadow-sm'
                        }`}
                      >
                        <FaShoppingBag className="text-[10px]" />
                        <span>{isInCart ? 'In Cart' : 'Add to Cart'}</span>
                      </button>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleInstantBuyNow(product);
                      }}
                      className="w-full py-2 rounded-xl text-xs font-black bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:from-purple-500 hover:to-amber-400 text-white shadow-md transition flex items-center justify-center gap-1.5"
                    >
                      <span>Buy Directly from Artisan</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 glass-card rounded-3xl border border-purple-500/20 space-y-3">
              <p className="text-sm font-semibold text-purple-300">
                No products found matching your current filter criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategoryPill('All');
                  setSelectedDistrict('All');
                  setPriceFilter('all');
                }}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-purple-600 text-white hover:bg-purple-500 transition"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      )}

      {/* VIEW: MEET OUR ARTISANS */}
      {activeViewTab === 'artisans' && (
        <div className="space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-950/70 via-indigo-950/60 to-purple-900/60 border border-purple-500/30 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30">
                <FaUserTie /> Meet the Hands Behind the Art
              </div>
              <h2 className="text-2xl sm:text-3xl font-black">
                Generational Masters Preserving Odisha's Living Soul
              </h2>
              <p className="text-xs sm:text-sm text-purple-200/90 leading-relaxed">
                Connect with the weavers, sculptors, and scroll painters who transform raw organic silk, natural stone pigments, and virgin brass into sacred treasures.
              </p>
            </div>

            <button
              onClick={() => setBecomeSellerModalOpen(true)}
              className="px-5 py-3 rounded-2xl font-bold text-xs bg-purple-600 hover:bg-purple-500 text-white shadow-lg flex items-center gap-2 transition flex-shrink-0"
            >
              <FaPlus /> Apply as an Artisan Seller
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VERIFIED_VILLAGE_ARTISANS.map((artisan) => (
              <div
                key={artisan.id}
                className="glass-card rounded-3xl p-6 border border-purple-500/20 bg-white/70 dark:bg-[#180B2B]/70 flex flex-col justify-between space-y-4 hover:shadow-xl hover:shadow-purple-900/20 transition-all"
              >
                <div className="space-y-4">
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

                  <p className="text-xs text-slate-600 dark:text-purple-100/80 leading-relaxed">
                    {artisan.story}
                  </p>
                </div>

                <div className="pt-3 border-t border-purple-500/15">
                  <button
                    onClick={() => {
                      setSearchQuery(artisan.name);
                      setActiveViewTab('catalogue');
                    }}
                    className="w-full py-2.5 rounded-xl font-bold text-xs bg-purple-700 hover:bg-purple-600 text-white transition shadow-sm flex items-center justify-center gap-1.5"
                  >
                    <span>View All Products by {artisan.name}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: MY ORDERS & TRACKING */}
      {activeViewTab === 'orders' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between p-6 rounded-3xl bg-white/70 dark:bg-purple-950/40 border border-purple-500/20">
            <div>
              <h2 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                <FaTruck className="text-purple-500" /> My Purchases & Order Tracking
              </h2>
              <p className="text-xs text-slate-500 dark:text-purple-300 mt-0.5">
                Real-time dispatch updates straight from artisan village studios across Odisha.
              </p>
            </div>

            <div className="text-xs font-bold text-purple-600 dark:text-purple-300 bg-purple-500/10 px-3.5 py-1.5 rounded-xl">
              {orders.length} Verified Orders
            </div>
          </div>

          {orders.length === 0 ? (
            <div className="text-center py-20 glass-card rounded-3xl border border-purple-500/20 space-y-3">
              <FaShoppingBag className="mx-auto text-3xl text-purple-400" />
              <h4 className="text-base font-bold text-slate-900 dark:text-white">No orders placed yet</h4>
              <p className="text-xs text-slate-500 dark:text-purple-300 max-w-sm mx-auto">
                Explore authentic Sambalpuri handlooms, Belaguntha brass fish, and Raghurajpur Pattachitra scroll paintings.
              </p>
              <button
                onClick={() => setActiveViewTab('catalogue')}
                className="mt-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-purple-600 text-white hover:bg-purple-500 transition"
              >
                Browse Marketplace
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map((ord) => (
                <div
                  key={ord.id}
                  className="glass-card rounded-3xl p-6 border border-purple-500/20 bg-white/70 dark:bg-[#180B2B]/70 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={ord.productImage}
                      alt={ord.productName}
                      className="w-20 h-20 rounded-2xl object-cover bg-slate-900 flex-shrink-0 border border-purple-500/30"
                    />
                    <div className="space-y-1">
                      <div className="text-[11px] text-purple-500 font-bold uppercase tracking-wider">
                        Tracking ID: {ord.trackingNumber || ord.id}
                      </div>
                      <h4 className="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                        {ord.productName}
                      </h4>
                      <div className="text-xs text-slate-500 dark:text-purple-300">
                        Crafted by <strong>{ord.artisanName}</strong> in <strong>{ord.village}</strong>
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Order Date: {ord.orderDate}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:items-end justify-between gap-3 flex-shrink-0 w-full md:w-auto">
                    <div className="text-left md:text-right">
                      <div className="text-lg font-black text-amber-500">
                        ₹{ord.price.toLocaleString('en-IN')}
                      </div>
                      <div className="text-[10px] text-purple-400 font-bold flex items-center md:justify-end gap-1">
                        <FaCoins /> +{ord.karmaAwarded} KT Earned
                      </div>
                    </div>

                    <div className="space-y-1">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        Status: {ord.status}
                      </span>
                      <div className="text-[10px] text-slate-400">
                        Fulfillment: Direct Artisan Post
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* MODALS & DRAWERS */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onBuyNow={(prod) => handleInstantBuyNow(prod)}
        onSelectRelatedProduct={(rel) => setSelectedProduct(rel)}
      />

      <CartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        onProceedToCheckout={handleProceedCartCheckout}
      />

      <WishlistDrawer
        isOpen={wishlistDrawerOpen}
        onClose={() => setWishlistDrawerOpen(false)}
        onViewProduct={(prod) => setSelectedProduct(prod)}
      />

      <CheckoutModal
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
        items={checkoutItems}
        discountAmount={checkoutDiscount}
        onOrderCompleted={(orderId) => {
          showNotification(`Order placed successfully! Tracking ID generated.`);
        }}
      />

      <BecomeSellerModal
        isOpen={becomeSellerModalOpen}
        onClose={() => setBecomeSellerModalOpen(false)}
      />

      <AdminMarketplaceModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
      />

    </main>
  );
}
