import React, { useState } from 'react';
import { 
  FaTimes, 
  FaShoppingBag, 
  FaCheckCircle, 
  FaMapMarkerAlt, 
  FaTruck, 
  FaShieldAlt, 
  FaCoins,
  FaUserCheck
} from 'react-icons/fa';
import { useStore, type Product } from '../../context/store';

interface VillageOrderModalProps {
  product: Product | null;
  onClose: () => void;
}

export function VillageOrderModal({ product, onClose }: VillageOrderModalProps) {
  const currentUser = useStore((s) => s.currentUser);
  const placeOrder = useStore((s) => s.placeOrder);

  const [shippingName, setShippingName] = useState(currentUser?.name || '');
  const [shippingAddress, setShippingAddress] = useState('');
  const [shippingPhone, setShippingPhone] = useState(currentUser?.phone || '');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'upi'>('upi');
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [karmaEarned, setKarmaEarned] = useState(20);
  const [orderTrackingNum, setOrderTrackingNum] = useState('');

  if (!product) return null;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!shippingName.trim() || !shippingAddress.trim() || !shippingPhone.trim()) {
      alert('Please complete all shipping details.');
      return;
    }

    const res = placeOrder(product);
    setKarmaEarned(res.karmaAwarded || 20);
    setOrderTrackingNum(`ODISHA-VIL-${Date.now().toString().slice(-6)}`);
    setOrderConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-xl my-6 bg-white dark:bg-[#1A0E2E] rounded-3xl shadow-2xl border border-[#7955AE]/40 overflow-hidden text-[#180B2B] dark:text-white flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 px-6 border-b border-[#7955AE]/20 bg-[#FAF7FD] dark:bg-[#130724]">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-[#7955AE]/15 text-[#7955AE] dark:text-[#D9CCF2]">
              <FaShoppingBag size={16} />
            </span>
            <div>
              <h3 className="font-cinzel font-black text-base">
                Shop the Heritage of Odisha
              </h3>
              <p className="text-[11px] text-stone-500 dark:text-stone-400 font-serif">
                Direct purchase supporting rural artisans & weavers
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-stone-600 dark:hover:text-white transition"
          >
            <FaTimes size={16} />
          </button>
        </div>

        {orderConfirmed ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 border border-emerald-500/30 flex items-center justify-center mx-auto text-3xl animate-bounce">
              <FaCheckCircle />
            </div>

            <div className="space-y-1">
              <h4 className="text-xl font-cinzel font-black text-[#180B2B] dark:text-white">
                Order Placed Successfully!
              </h4>
              <p className="text-xs text-stone-600 dark:text-stone-300 font-serif">
                Your order has been directly routed to <strong>{product.artisanName}</strong> in <strong>{product.village}, {product.district}</strong>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#7955AE]/10 border border-[#7955AE]/20 text-left space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-stone-500 dark:text-stone-400">Tracking Reference:</span>
                <span className="font-mono font-bold text-[#7955AE] dark:text-amber-300">{orderTrackingNum}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-500 dark:text-stone-400">Status:</span>
                <span className="font-bold text-amber-600 dark:text-amber-300 flex items-center gap-1">
                  <FaTruck size={10} /> Artisan Packing
                </span>
              </div>
              <div className="flex items-center justify-between pt-1 border-t border-[#7955AE]/15">
                <span className="text-stone-500 dark:text-stone-400">Karma Points Earned:</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <FaCoins className="text-amber-400" /> +{karmaEarned} KT Credited
                </span>
              </div>
            </div>

            <p className="text-[11px] text-stone-500 font-serif italic">
              100% of product proceeds directly support the weaver/artisan family.
            </p>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl text-xs font-bold bg-[#7955AE] text-white shadow hover:bg-[#613A9E] transition"
            >
              Done & Return
            </button>
          </div>
        ) : (
          <form onSubmit={handlePlaceOrder} className="p-6 space-y-4 text-xs">
            
            {/* Product Summary Card */}
            <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-black/30 border border-[#7955AE]/15 flex items-start gap-3">
              <img
                src={product.images[0] || 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=200&q=80'}
                alt={product.name}
                className="w-16 h-16 rounded-xl object-cover border border-[#7955AE]/20 shrink-0"
              />
              <div className="space-y-0.5 min-w-0 flex-1">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#7955AE] dark:text-[#D9CCF2]">
                  {product.category}
                </div>
                <h4 className="font-cinzel font-bold text-sm text-[#180B2B] dark:text-white truncate">
                  {product.name}
                </h4>
                <div className="text-[11px] text-stone-500 dark:text-stone-400 flex items-center gap-1">
                  <FaMapMarkerAlt size={9} className="text-rose-500" />
                  <span>{product.village}, {product.district}</span>
                  <span>•</span>
                  <span>By {product.artisanName}</span>
                </div>
                <div className="text-sm font-black font-cinzel text-amber-600 dark:text-amber-300 pt-0.5">
                  ₹{product.price.toLocaleString('en-IN')}
                </div>
              </div>
            </div>

            {/* Direct Support Notice */}
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-200 text-[11px] flex items-center gap-2">
              <FaShieldAlt className="text-emerald-500 shrink-0" />
              <span>Verified Artisan Product: 100% of fair value reaches {product.artisanName}.</span>
            </div>

            {/* Shipping Details */}
            <div className="space-y-3">
              <div className="space-y-1">
                <label className="font-bold text-stone-700 dark:text-stone-300">Recipient Name</label>
                <input
                  type="text"
                  value={shippingName}
                  onChange={(e) => setShippingName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full px-3 py-2 rounded-xl bg-stone-100 dark:bg-black/30 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 focus:outline-none focus:ring-2 focus:ring-[#7955AE] text-[#180B2B] dark:text-white"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-stone-700 dark:text-stone-300">Delivery Address & PIN</label>
                <textarea
                  value={shippingAddress}
                  onChange={(e) => setShippingAddress(e.target.value)}
                  rows={2}
                  placeholder="Street address, city, state, postal PIN code..."
                  className="w-full px-3 py-2 rounded-xl bg-stone-100 dark:bg-black/30 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 focus:outline-none focus:ring-2 focus:ring-[#7955AE] text-[#180B2B] dark:text-white resize-none"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-stone-700 dark:text-stone-300">Contact Phone</label>
                  <input
                    type="tel"
                    value={shippingPhone}
                    onChange={(e) => setShippingPhone(e.target.value)}
                    placeholder="+91..."
                    className="w-full px-3 py-2 rounded-xl bg-stone-100 dark:bg-black/30 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 focus:outline-none focus:ring-2 focus:ring-[#7955AE] text-[#180B2B] dark:text-white"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-stone-700 dark:text-stone-300">Payment Option</label>
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl bg-stone-100 dark:bg-black/30 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 focus:outline-none focus:ring-2 focus:ring-[#7955AE] text-[#180B2B] dark:text-white"
                  >
                    <option value="upi">UPI / Online Transfer (Recommended)</option>
                    <option value="cod">Cash on Delivery</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-3 border-t border-[#7955AE]/15">
              <div className="text-xs">
                <span className="text-stone-500">Total: </span>
                <span className="font-cinzel font-black text-base text-[#180B2B] dark:text-white">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl text-stone-500 hover:text-stone-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl font-bold bg-gradient-to-r from-[#7955AE] to-[#5C3691] hover:from-[#8E6BBF] hover:to-[#6E42B0] text-white shadow-md shadow-purple-900/30 transition transform hover:-translate-y-0.5"
                >
                  Confirm & Place Order
                </button>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
