import React from 'react';
import { FaTimes, FaHeart, FaShoppingBag, FaTrashAlt } from 'react-icons/fa';
import { useStore } from '../../context/store';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onViewProduct: (product: any) => void;
}

export function WishlistDrawer({ isOpen, onClose, onViewProduct }: WishlistDrawerProps) {
  const wishlist = useStore((s) => s.wishlist);
  const toggleWishlist = useStore((s) => s.toggleWishlist);
  const products = useStore((s) => s.products);
  const addToCart = useStore((s) => s.addToCart);

  if (!isOpen) return null;

  const wishlistedProducts = products.filter((p) => wishlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-md h-full bg-[#FBF9FE] dark:bg-[#180B2B] border-l border-purple-500/25 flex flex-col justify-between shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-purple-500/20 bg-white/70 dark:bg-purple-950/40 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-rose-500/20 text-rose-500 flex items-center justify-center">
              <FaHeart className="text-base" />
            </div>
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white leading-tight">
                Your Saved Wishlist
              </h3>
              <div className="text-[11px] text-purple-600 dark:text-purple-300 font-semibold">
                {wishlistedProducts.length} saved creation{wishlistedProducts.length !== 1 ? 's' : ''}
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-purple-500/10 text-slate-500 dark:text-purple-300 transition"
          >
            <FaTimes />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {wishlistedProducts.length === 0 ? (
            <div className="text-center py-20 space-y-3">
              <div className="w-16 h-16 rounded-full bg-rose-500/10 text-rose-400 mx-auto flex items-center justify-center text-2xl">
                <FaHeart />
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">Your wishlist is empty</h4>
              <p className="text-xs text-slate-500 dark:text-purple-300/80 max-w-xs mx-auto leading-relaxed">
                Save your favorite handlooms, brass items, and Pattachitra artworks to revisit them anytime.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {wishlistedProducts.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-2xl bg-white dark:bg-purple-950/30 border border-purple-500/20 flex items-center gap-3.5 shadow-sm"
                >
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-16 h-16 rounded-xl object-cover bg-slate-900 flex-shrink-0 cursor-pointer"
                    onClick={() => {
                      onClose();
                      onViewProduct(item);
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <h5 
                      onClick={() => {
                        onClose();
                        onViewProduct(item);
                      }}
                      className="text-xs font-bold text-slate-900 dark:text-white truncate cursor-pointer hover:text-purple-600"
                    >
                      {item.name}
                    </h5>
                    <div className="text-[11px] text-purple-600 dark:text-purple-400">
                      ₹{item.price.toLocaleString('en-IN')}
                    </div>
                    <button
                      onClick={() => {
                        addToCart(item);
                        toggleWishlist(item.id);
                      }}
                      className="mt-1.5 px-3 py-1 rounded-lg text-[10px] font-bold bg-purple-600 hover:bg-purple-500 text-white flex items-center gap-1 transition"
                    >
                      <FaShoppingBag className="text-[9px]" /> Move to Cart
                    </button>
                  </div>

                  <button
                    onClick={() => toggleWishlist(item.id)}
                    className="p-2 text-slate-400 hover:text-rose-500 transition"
                    title="Remove from wishlist"
                  >
                    <FaTrashAlt className="text-xs" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
