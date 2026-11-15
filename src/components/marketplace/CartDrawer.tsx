import React, { useState } from 'react';
import { 
  FaTimes, 
  FaShoppingBag, 
  FaTrashAlt, 
  FaCoins, 
  FaArrowRight, 
  FaShieldAlt, 
  FaTruck 
} from 'react-icons/fa';
import { useStore } from '../../context/store';
import { type Product } from '../../data/odishaData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToCheckout: (items: Product[], discountAmount: number) => void;
}

export function CartDrawer({ isOpen, onClose, onProceedToCheckout }: CartDrawerProps) {
  const cart = useStore((s) => s.cart);
  const removeFromCart = useStore((s) => s.removeFromCart);
  const clearCart = useStore((s) => s.clearCart);
  const karmaBalance = useStore((s) => s.karmaBalance);

  const [useKarmaDiscount, setUseKarmaDiscount] = useState(false);

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const karmaDiscount = useKarmaDiscount ? Math.min(Math.round(subtotal * 0.1), karmaBalance) : 0;
  const finalTotal = Math.max(0, subtotal - karmaDiscount);

  const handleCheckoutClick = () => {
    if (cart.length === 0) return;
    onProceedToCheckout(cart, karmaDiscount);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-md h-full bg-[#FBF9FE] dark:bg-[#180B2B] border-l border-purple-500/25 flex flex-col justify-between shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-purple-500/20 bg-white/70 dark:bg-purple-950/40 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-purple-600/20 text-purple-600 dark:text-purple-300 flex items-center justify-center">
              <FaShoppingBag className="text-base" />
            </div>
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white leading-tight">
                Your Shopping Cart
              </h3>
              <div className="text-[11px] text-purple-600 dark:text-purple-300 font-semibold">
                {cart.length} authentic item{cart.length !== 1 ? 's' : ''}
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

        {/* Cart Items List */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {cart.length === 0 ? (
            <div className="text-center py-20 space-y-3">
              <div className="w-16 h-16 rounded-full bg-purple-500/10 text-purple-400 mx-auto flex items-center justify-center text-2xl">
                <FaShoppingBag />
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">Your cart is empty</h4>
              <p className="text-xs text-slate-500 dark:text-purple-300/80 max-w-xs mx-auto leading-relaxed">
                Support Odisha's rural craft communities by exploring handlooms, fish-motif brass jewellery, and Pattachitra artworks.
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-purple-600 text-white hover:bg-purple-500 shadow-md transition"
              >
                Discover Authentic Crafts
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-2xl bg-white dark:bg-purple-950/30 border border-purple-500/20 flex items-center gap-3.5 shadow-sm"
                >
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-16 h-16 rounded-xl object-cover bg-slate-900 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="text-xs font-bold text-slate-900 dark:text-white truncate">
                      {item.name}
                    </h5>
                    <div className="text-[11px] text-purple-600 dark:text-purple-400">
                      By {item.artisanName}
                    </div>
                    <div className="text-sm font-black text-amber-500 mt-1">
                      ₹{item.price.toLocaleString('en-IN')}
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-slate-400 hover:text-rose-500 transition"
                    title="Remove item"
                  >
                    <FaTrashAlt className="text-xs" />
                  </button>
                </div>
              ))}

              <div className="flex justify-end pt-2">
                <button
                  onClick={clearCart}
                  className="text-xs text-slate-400 hover:text-rose-500 transition underline"
                >
                  Clear all items
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Checkout Summary */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-purple-500/20 bg-white/70 dark:bg-purple-950/40 backdrop-blur-md space-y-4">
            {/* Karma Token Discount Option */}
            {karmaBalance > 0 && (
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 cursor-pointer font-bold text-slate-800 dark:text-purple-200">
                  <input
                    type="checkbox"
                    checked={useKarmaDiscount}
                    onChange={(e) => setUseKarmaDiscount(e.target.checked)}
                    className="rounded text-purple-600 focus:ring-purple-500"
                  />
                  <span>Redeem Karma Tokens (Balance: {karmaBalance} KT)</span>
                </label>
                <span className="text-amber-500 font-black">
                  -₹{Math.min(Math.round(subtotal * 0.1), karmaBalance)}
                </span>
              </div>
            )}

            {/* Price Calculations */}
            <div className="space-y-1.5 text-xs text-slate-600 dark:text-purple-300">
              <div className="flex justify-between">
                <span>Subtotal ({cart.length} items):</span>
                <span className="font-bold text-slate-900 dark:text-white">
                  ₹{subtotal.toLocaleString('en-IN')}
                </span>
              </div>

              {useKarmaDiscount && (
                <div className="flex justify-between text-emerald-500 font-bold">
                  <span>Karma Token Discount (10%):</span>
                  <span>-₹{karmaDiscount.toLocaleString('en-IN')}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Direct Artisan Shipping:</span>
                <span className="text-emerald-500 font-bold">FREE (Fair-Trade Supported)</span>
              </div>

              <div className="flex justify-between text-base font-black text-slate-900 dark:text-white pt-2 border-t border-purple-500/15">
                <span>Total Amount:</span>
                <span className="text-amber-500">₹{finalTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Checkout Action Button */}
            <button
              onClick={handleCheckoutClick}
              className="w-full py-3.5 rounded-2xl font-bold text-xs sm:text-sm bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:from-purple-500 hover:to-amber-400 text-white shadow-xl flex items-center justify-center gap-2 transform active:scale-95 transition"
            >
              <span>Proceed to Secure Checkout</span>
              <FaArrowRight className="text-xs" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400">
              <FaShieldAlt className="text-emerald-500" />
              <span>100% of proceeds sent directly to verified Odisha weavers & artisans</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
