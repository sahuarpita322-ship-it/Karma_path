import React, { useState } from 'react';
import { 
  FaTimes, 
  FaShoppingBag, 
  FaCheckCircle, 
  FaMapMarkerAlt, 
  FaTruck, 
  FaShieldAlt, 
  FaCoins, 
  FaCreditCard, 
  FaMoneyBillWave,
  FaQrcode
} from 'react-icons/fa';
import { useStore } from '../../context/store';
import { type Product } from '../../data/odishaData';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: Product[];
  discountAmount?: number;
  onOrderCompleted?: (orderId: string) => void;
}

export function CheckoutModal({
  isOpen,
  onClose,
  items,
  discountAmount = 0,
  onOrderCompleted
}: CheckoutModalProps) {
  const currentUser = useStore((s) => s.currentUser);
  const placeOrder = useStore((s) => s.placeOrder);
  const clearCart = useStore((s) => s.clearCart);

  // Form State
  const [recipientName, setRecipientName] = useState(currentUser?.name || '');
  const [phone, setPhone] = useState(currentUser?.phone || '');
  const [streetAddress, setStreetAddress] = useState('');
  const [cityVillage, setCityVillage] = useState('');
  const [district, setDistrict] = useState('Puri');
  const [pincode, setPincode] = useState('752012');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'cod' | 'card'>('upi');

  // Confirmation State
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [placedOrderId, setPlacedOrderId] = useState<string>('');
  const [placedTrackingId, setPlacedTrackingId] = useState<string>('');
  const [totalKarmaAwarded, setTotalKarmaAwarded] = useState<number>(0);

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const totalPayable = Math.max(0, subtotal - discountAmount);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!recipientName || !phone || !streetAddress) return;

    let karmaTotal = 0;
    let lastOrderId = '';
    const tracking = `OD-KP-${Math.floor(10000 + Math.random() * 90000)}`;

    items.forEach((item) => {
      const res = placeOrder(item, {
        deliveryAddress: `${recipientName}, ${streetAddress}, ${cityVillage}, ${district} - ${pincode} (Ph: ${phone})`,
        paymentMethod: paymentMethod === 'upi' ? 'UPI / Online Transfer' : paymentMethod === 'cod' ? 'Cash on Delivery' : 'Debit/Credit Card'
      });
      if (res.success) {
        karmaTotal += res.karmaAwarded;
        lastOrderId = res.orderId;
      }
    });

    clearCart();
    setPlacedOrderId(lastOrderId);
    setPlacedTrackingId(tracking);
    setTotalKarmaAwarded(karmaTotal);
    setIsSubmitted(true);

    if (onOrderCompleted) {
      onOrderCompleted(lastOrderId);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div 
        className="relative w-full max-w-xl rounded-3xl bg-[#FBF9FE] dark:bg-[#180B2B] border border-purple-500/25 text-slate-900 dark:text-purple-100 shadow-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-purple-500/20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-purple-600/20 text-purple-600 dark:text-purple-300 flex items-center justify-center">
              <FaShoppingBag />
            </div>
            <h3 className="text-lg font-black text-slate-900 dark:text-white">
              {isSubmitted ? 'Order Confirmed!' : 'Secure Artisan Checkout'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-purple-500/10 text-slate-400 hover:text-white transition"
          >
            <FaTimes />
          </button>
        </div>

        {isSubmitted ? (
          <div className="space-y-6 text-center py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center text-3xl">
              <FaCheckCircle />
            </div>

            <div>
              <h4 className="text-xl font-black text-slate-900 dark:text-white">
                Thank You for Supporting Odisha's Artisans!
              </h4>
              <p className="text-xs text-slate-500 dark:text-purple-300/80 mt-1">
                Your purchase directly empowers rural weaver and artisan families.
              </p>
            </div>

            {/* Tracking Card */}
            <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-left space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-purple-300 font-semibold">Tracking Number:</span>
                <span className="font-mono font-bold text-amber-500">{placedTrackingId}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-purple-300 font-semibold">Estimated Dispatch:</span>
                <span className="font-bold text-slate-900 dark:text-white">Within 48 Hours from Village</span>
              </div>

              {/* Status progression bar */}
              <div className="pt-2 border-t border-purple-500/15">
                <div className="text-[11px] font-bold text-slate-700 dark:text-purple-200 mb-2">Live Order Status:</div>
                <div className="grid grid-cols-4 gap-1 text-center text-[10px]">
                  <div className="p-1 rounded bg-purple-600 text-white font-bold">Ordered ✓</div>
                  <div className="p-1 rounded bg-purple-500/20 text-purple-300">Packing</div>
                  <div className="p-1 rounded bg-purple-500/20 text-purple-300">Dispatched</div>
                  <div className="p-1 rounded bg-purple-500/20 text-purple-300">Delivered</div>
                </div>
              </div>
            </div>

            {/* Karma Token Credit Badge */}
            <div className="p-4 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-800 dark:text-amber-300 flex items-center justify-center gap-2 text-xs font-bold">
              <FaCoins className="text-yellow-500 text-lg" />
              <span>+{totalKarmaAwarded} Karma Tokens credited to your wallet!</span>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 rounded-2xl font-bold text-xs bg-purple-600 hover:bg-purple-500 text-white shadow-lg transition"
            >
              Continue Exploring Local Hands
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmitOrder} className="space-y-4">
            {/* Order Items Preview */}
            <div className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/15 space-y-2">
              <div className="text-xs font-bold text-purple-700 dark:text-purple-300">Order Summary ({items.length} item{items.length !== 1 ? 's' : ''}):</div>
              <div className="max-h-28 overflow-y-auto space-y-1.5 pr-1">
                {items.map((it) => (
                  <div key={it.id} className="flex items-center justify-between text-xs text-slate-700 dark:text-purple-200">
                    <span className="truncate max-w-[240px]">{it.name}</span>
                    <span className="font-bold text-amber-500">₹{it.price.toLocaleString('en-IN')}</span>
                  </div>
                ))}
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between text-xs text-emerald-500 font-bold pt-1 border-t border-purple-500/15">
                  <span>Karma Discount:</span>
                  <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                </div>
              )}

              <div className="flex justify-between text-sm font-black text-slate-900 dark:text-white pt-1 border-t border-purple-500/15">
                <span>Total Amount:</span>
                <span className="text-amber-500">₹{totalPayable.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Delivery Details */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-700 dark:text-purple-200 flex items-center gap-1.5">
                <FaMapMarkerAlt className="text-amber-500" /> Delivery Address
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 dark:text-purple-300 mb-1">
                    Recipient Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    placeholder="E.g. Arpita Sahu"
                    className="w-full px-3 py-2 text-xs rounded-xl bg-white dark:bg-[#201338] border border-purple-500/20 text-slate-900 dark:text-white focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 dark:text-purple-300 mb-1">
                    Mobile Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 text-xs rounded-xl bg-white dark:bg-[#201338] border border-purple-500/20 text-slate-900 dark:text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 dark:text-purple-300 mb-1">
                  Street Address / Village / Locality
                </label>
                <input
                  type="text"
                  required
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                  placeholder="House/Plot No., Street, Landmark"
                  className="w-full px-3 py-2 text-xs rounded-xl bg-white dark:bg-[#201338] border border-purple-500/20 text-slate-900 dark:text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 dark:text-purple-300 mb-1">
                    City / Town
                  </label>
                  <input
                    type="text"
                    required
                    value={cityVillage}
                    onChange={(e) => setCityVillage(e.target.value)}
                    placeholder="Bhubaneswar"
                    className="w-full px-3 py-2 text-xs rounded-xl bg-white dark:bg-[#201338] border border-purple-500/20 text-slate-900 dark:text-white focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 dark:text-purple-300 mb-1">
                    District
                  </label>
                  <input
                    type="text"
                    required
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    placeholder="Khordha / Puri"
                    className="w-full px-3 py-2 text-xs rounded-xl bg-white dark:bg-[#201338] border border-purple-500/20 text-slate-900 dark:text-white focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 dark:text-purple-300 mb-1">
                    PIN Code
                  </label>
                  <input
                    type="text"
                    required
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="751001"
                    className="w-full px-3 py-2 text-xs rounded-xl bg-white dark:bg-[#201338] border border-purple-500/20 text-slate-900 dark:text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold text-slate-700 dark:text-purple-200">Payment Option</div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-3 rounded-2xl border text-center transition ${
                    paymentMethod === 'upi'
                      ? 'bg-purple-600 text-white border-purple-600 shadow-md'
                      : 'bg-white dark:bg-[#201338] border-purple-500/20 text-slate-700 dark:text-purple-200'
                  }`}
                >
                  <FaQrcode className="mx-auto mb-1 text-sm" />
                  <div className="font-bold text-[11px]">UPI / QR</div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-3 rounded-2xl border text-center transition ${
                    paymentMethod === 'cod'
                      ? 'bg-purple-600 text-white border-purple-600 shadow-md'
                      : 'bg-white dark:bg-[#201338] border-purple-500/20 text-slate-700 dark:text-purple-200'
                  }`}
                >
                  <FaMoneyBillWave className="mx-auto mb-1 text-sm" />
                  <div className="font-bold text-[11px]">Cash on Delivery</div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-2xl border text-center transition ${
                    paymentMethod === 'card'
                      ? 'bg-purple-600 text-white border-purple-600 shadow-md'
                      : 'bg-white dark:bg-[#201338] border-purple-500/20 text-slate-700 dark:text-purple-200'
                  }`}
                >
                  <FaCreditCard className="mx-auto mb-1 text-sm" />
                  <div className="font-bold text-[11px]">Card / Net Banking</div>
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-3">
              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl font-bold text-xs sm:text-sm bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:from-purple-500 hover:to-amber-400 text-white shadow-xl flex items-center justify-center gap-2 transform active:scale-95 transition"
              >
                <span>Confirm Order & Support Artisan (₹{totalPayable.toLocaleString('en-IN')})</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
