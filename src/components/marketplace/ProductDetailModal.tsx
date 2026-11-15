import React, { useState } from 'react';
import { 
  FaTimes, 
  FaCheckCircle, 
  FaShoppingBag, 
  FaHeart, 
  FaMapMarkerAlt, 
  FaTruck, 
  FaShieldAlt, 
  FaStar, 
  FaRegStar, 
  FaLeaf, 
  FaInfoCircle, 
  FaCoins, 
  FaPhoneAlt,
  FaExpand,
  FaChevronLeft,
  FaChevronRight,
  FaPalette
} from 'react-icons/fa';
import { useStore } from '../../context/store';
import { type Product } from '../../data/odishaData';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onBuyNow: (product: Product) => void;
  onSelectRelatedProduct?: (product: Product) => void;
}

export function ProductDetailModal({
  product,
  onClose,
  onBuyNow,
  onSelectRelatedProduct
}: ProductDetailModalProps) {
  const addToCart = useStore((s) => s.addToCart);
  const cart = useStore((s) => s.cart);
  const wishlist = useStore((s) => s.wishlist);
  const toggleWishlist = useStore((s) => s.toggleWishlist);
  const allProducts = useStore((s) => s.products);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [addedToCartToast, setAddedToCartToast] = useState(false);
  const [artisanContactModal, setArtisanContactModal] = useState(false);

  if (!product) return null;

  const isInCart = cart.some((p) => p.id === product.id);
  const isWishlisted = wishlist.includes(product.id);

  // Find related products
  const relatedProducts = allProducts
    .filter((p) => p.id !== product.id && (p.category === product.category || p.district === product.district))
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product);
    setAddedToCartToast(true);
    setTimeout(() => setAddedToCartToast(false), 2500);
  };

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div 
        className="relative w-full max-w-5xl rounded-3xl bg-[#FBF9FE] dark:bg-[#180B2B] border border-purple-500/25 text-slate-900 dark:text-purple-100 shadow-2xl max-h-[92vh] flex flex-col overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-purple-500/20 bg-white/70 dark:bg-purple-950/40 backdrop-blur-md flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-500/30">
              {product.category}
            </span>
            <span className="text-xs text-purple-600 dark:text-purple-300 font-semibold flex items-center gap-1">
              <FaMapMarkerAlt className="text-amber-500" /> {product.village}, {product.district}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleWishlist(product.id)}
              className={`p-2.5 rounded-full border transition ${
                isWishlisted
                  ? 'bg-rose-500/20 border-rose-500/40 text-rose-500'
                  : 'bg-slate-100 dark:bg-purple-900/40 border-purple-500/20 text-slate-500 dark:text-purple-300 hover:text-rose-500'
              }`}
              title="Add to Wishlist"
            >
              <FaHeart className="text-sm" />
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-slate-100 dark:bg-purple-900/40 hover:bg-purple-500/20 border border-purple-500/20 text-slate-700 dark:text-purple-200 transition"
              title="Close modal"
            >
              <FaTimes className="text-sm" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT: Multi-Image Carousel / Gallery */}
            <div className="lg:col-span-6 space-y-4">
              {/* Main Display Image */}
              <div className="relative rounded-2xl overflow-hidden border border-purple-500/20 bg-slate-900 aspect-square group shadow-lg">
                <img
                  src={product.images[activeImageIndex] || product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {discountPercent > 0 && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-black bg-amber-500 text-slate-950 shadow-md">
                    {discountPercent}% OFF
                  </div>
                )}

                <button
                  onClick={() => setIsZoomed(true)}
                  className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-black/70 hover:bg-black/90 text-white text-xs font-bold flex items-center gap-1.5 backdrop-blur-sm transition"
                >
                  <FaExpand className="text-[10px]" /> Zoom Image
                </button>

                {/* Arrow Controls if multiple images */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : product.images.length - 1))}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition"
                    >
                      <FaChevronLeft className="text-xs" />
                    </button>
                    <button
                      onClick={() => setActiveImageIndex((prev) => (prev < product.images.length - 1 ? prev + 1 : 0))}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition"
                    >
                      <FaChevronRight className="text-xs" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Gallery Picker */}
              {product.images.length > 1 && (
                <div className="flex gap-2.5 overflow-x-auto pb-2">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 flex-shrink-0 transition ${
                        activeImageIndex === idx
                          ? 'border-purple-500 shadow-md scale-105'
                          : 'border-purple-500/20 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Product Trust Signals */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/15 flex items-center gap-2.5 text-xs">
                  <FaShieldAlt className="text-purple-600 dark:text-purple-400 text-lg flex-shrink-0" />
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">100% Genuine Origin</div>
                    <div className="text-[10px] text-slate-500 dark:text-purple-300">Verified Artisan Cooperative</div>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2.5 text-xs">
                  <FaTruck className="text-emerald-500 text-lg flex-shrink-0" />
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">Direct Village Shipping</div>
                    <div className="text-[10px] text-slate-500 dark:text-purple-300">No middlemen markup</div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Product Details & Purchase Actions */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                {product.odiaName && (
                  <div className="text-sm font-bold text-amber-500 dark:text-amber-400 mb-0.5">
                    {product.odiaName}
                  </div>
                )}
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight">
                  {product.name}
                </h1>
                
                {/* Rating & Reviews */}
                <div className="flex items-center gap-3 mt-2 text-xs">
                  <div className="flex items-center gap-1 text-amber-400 font-bold">
                    <FaStar />
                    <span>{product.rating || 4.9}</span>
                  </div>
                  <span className="text-slate-400">•</span>
                  <span className="text-purple-600 dark:text-purple-300 font-medium">
                    {product.reviewCount || 24} Verified Buyer Reviews
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="text-emerald-500 font-bold flex items-center gap-1">
                    <FaCheckCircle className="text-[10px]" /> Verified GI Craft
                  </span>
                </div>
              </div>

              {/* Price & KT Reward Box */}
              <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-baseline justify-between gap-4">
                <div>
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-3xl font-black text-slate-900 dark:text-white">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    {product.originalPrice && (
                      <span className="text-base line-through text-slate-400">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-purple-300 mt-0.5">
                    Taxes included. 100% of product price goes to the weaver/craftsman.
                  </div>
                </div>

                <div className="text-right flex-shrink-0">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-300 font-bold text-xs border border-amber-400/30">
                    <FaCoins className="text-yellow-500" /> +{product.karmaReward || 20} KT Reward
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">Credited upon order</div>
                </div>
              </div>

              {/* Core Description */}
              <p className="text-xs sm:text-sm text-slate-700 dark:text-purple-100/90 leading-relaxed">
                {product.description}
              </p>

              {/* Product Specifications Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-purple-950/40 border border-purple-500/15">
                  <div className="text-slate-500 dark:text-purple-300 font-medium text-[11px]">Materials Used</div>
                  <div className="font-bold text-slate-900 dark:text-white mt-0.5">
                    {product.materials.join(', ')}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-100 dark:bg-purple-950/40 border border-purple-500/15">
                  <div className="text-slate-500 dark:text-purple-300 font-medium text-[11px]">Craft Technique</div>
                  <div className="font-bold text-slate-900 dark:text-white mt-0.5">
                    {product.manufacturingProcess}
                  </div>
                </div>

                {product.size && (
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-purple-950/40 border border-purple-500/15">
                    <div className="text-slate-500 dark:text-purple-300 font-medium text-[11px]">Dimensions / Size</div>
                    <div className="font-bold text-slate-900 dark:text-white mt-0.5">
                      {product.size}
                    </div>
                  </div>
                )}

                {product.stock !== undefined && (
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-purple-950/40 border border-purple-500/15">
                    <div className="text-slate-500 dark:text-purple-300 font-medium text-[11px]">Availability</div>
                    <div className="font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
                      {product.stock > 0 ? `In Stock (${product.stock} units left)` : 'Made to Order'}
                    </div>
                  </div>
                )}
              </div>

              {/* Care Instructions & Delivery Info */}
              <div className="space-y-2 text-xs">
                {product.careInstructions && (
                  <div className="flex items-start gap-2 text-slate-600 dark:text-purple-200/90">
                    <FaInfoCircle className="text-purple-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Care Instructions:</strong> {product.careInstructions}</span>
                  </div>
                )}
                {product.deliveryTime && (
                  <div className="flex items-start gap-2 text-slate-600 dark:text-purple-200/90">
                    <FaTruck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Dispatch:</strong> {product.deliveryTime}</span>
                  </div>
                )}
              </div>

              {/* Artisan Profile Card */}
              <div className="p-4 rounded-2xl bg-purple-900/15 border border-purple-500/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-amber-500">
                    Master Craftsman
                  </div>
                  <h4 className="text-sm font-black text-slate-900 dark:text-white">{product.artisanName}</h4>
                  <p className="text-xs text-slate-600 dark:text-purple-200/80 line-clamp-2">
                    {product.artisanStory}
                  </p>
                </div>

                <button
                  onClick={() => setArtisanContactModal(true)}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-purple-800/80 hover:bg-purple-700 text-purple-200 border border-purple-500/30 flex items-center gap-1.5 flex-shrink-0 transition"
                >
                  <FaPhoneAlt className="text-[10px]" /> Contact Artisan
                </button>
              </div>

              {/* Purchase Actions */}
              <div className="space-y-3 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={handleAddToCart}
                    className={`py-3.5 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border transition ${
                      isInCart
                        ? 'bg-purple-500/20 border-purple-500/40 text-purple-700 dark:text-purple-200'
                        : 'bg-white dark:bg-purple-900/40 hover:bg-purple-50 dark:hover:bg-purple-900/60 border-purple-500/30 text-purple-700 dark:text-purple-200'
                    }`}
                  >
                    <FaShoppingBag className="text-sm" />
                    <span>{isInCart ? 'In Your Cart (Add More)' : 'Add to Shopping Cart'}</span>
                  </button>

                  <button
                    onClick={() => {
                      onClose();
                      onBuyNow(product);
                    }}
                    className="py-3.5 rounded-2xl font-bold text-xs sm:text-sm bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:from-purple-500 hover:to-amber-400 text-white shadow-xl flex items-center justify-center gap-2 transform active:scale-95 transition"
                  >
                    <span>Instant Checkout (Buy Now)</span>
                  </button>
                </div>

                {addedToCartToast && (
                  <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold text-center animate-fadeIn">
                    ✓ Added "{product.name}" to your shopping cart!
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Genuine Customer Reviews Section */}
          {product.reviews && product.reviews.length > 0 && (
            <div className="pt-6 border-t border-purple-500/15 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <FaStar className="text-amber-400" /> Verified Customer Reviews
                </h3>
                <span className="text-xs text-purple-500 font-bold">
                  {product.reviews.length} Verified Buyers
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.reviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-purple-950/40 border border-purple-500/20 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-bold text-xs text-slate-900 dark:text-white">{rev.userName}</div>
                      <span className="text-[10px] text-emerald-500 font-semibold flex items-center gap-1">
                        <FaCheckCircle className="text-[9px]" /> Verified Purchase
                      </span>
                    </div>
                    <div className="flex text-amber-400 text-xs">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-purple-200/90 leading-relaxed italic">
                      "{rev.comment}"
                    </p>
                    <div className="text-[10px] text-slate-400">{rev.date}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Products from Same Craft or Region */}
          {relatedProducts.length > 0 && (
            <div className="pt-6 border-t border-purple-500/15 space-y-4">
              <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                <FaPalette className="text-pink-400" /> More Authentic Creations from {product.district}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {relatedProducts.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => onSelectRelatedProduct && onSelectRelatedProduct(rel)}
                    className="p-3 rounded-2xl bg-white dark:bg-purple-950/30 border border-purple-500/20 hover:border-purple-400 cursor-pointer group transition"
                  >
                    <div className="relative h-28 rounded-xl overflow-hidden bg-slate-900 mb-2">
                      <img
                        src={rel.images[0]}
                        alt={rel.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      />
                    </div>
                    <h5 className="text-xs font-bold text-slate-900 dark:text-white truncate">{rel.name}</h5>
                    <div className="text-xs font-black text-amber-500 mt-0.5">₹{rel.price.toLocaleString('en-IN')}</div>
                    <div className="text-[10px] text-purple-400">{rel.village}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Image Zoom Modal */}
      {isZoomed && (
        <div
          onClick={() => setIsZoomed(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md cursor-pointer animate-fadeIn"
        >
          <div className="relative max-w-5xl max-h-[90vh] p-2" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute -top-10 right-0 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center text-sm transition"
            >
              <FaTimes />
            </button>
            <img
              src={product.images[activeImageIndex] || product.images[0]}
              alt="High resolution product view"
              className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-purple-500/30"
            />
          </div>
        </div>
      )}

      {/* Contact Artisan Mini Modal */}
      {artisanContactModal && (
        <div
          onClick={() => setArtisanContactModal(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="p-6 rounded-3xl bg-white dark:bg-[#180B2B] border border-purple-500/30 max-w-md w-full space-y-4 shadow-2xl"
          >
            <div className="flex items-center justify-between pb-2 border-b border-purple-500/20">
              <h4 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <FaPhoneAlt className="text-amber-500 text-xs" /> Artisan Direct Contact
              </h4>
              <button onClick={() => setArtisanContactModal(false)} className="text-slate-400 hover:text-white">
                <FaTimes />
              </button>
            </div>

            <div className="space-y-2 text-xs text-slate-600 dark:text-purple-200">
              <div><strong>Master Artisan:</strong> {product.artisanName}</div>
              <div><strong>Village Guild:</strong> {product.village}, {product.district}</div>
              <div><strong>Product:</strong> {product.name}</div>
              <div className="pt-2 text-[11px] text-purple-400">
                To protect rural artisans from spam and maintain fair trade, direct calls are coordinated through the Karma-Path Artisan Guild Desk.
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-xs text-center font-bold text-purple-700 dark:text-purple-300">
              📞 Dedicated Artisan Support: +91 674 243 0089 (Mon-Sat, 9 AM - 6 PM)
            </div>

            <button
              onClick={() => {
                alert(`Thank you! A message request has been sent to ${product.artisanName}'s workshop coordinator.`);
                setArtisanContactModal(false);
              }}
              className="w-full py-2.5 rounded-xl font-bold text-xs bg-purple-600 hover:bg-purple-500 text-white transition shadow-md"
            >
              Request Custom Craft Callback
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
