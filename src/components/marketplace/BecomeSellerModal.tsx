import React, { useState } from 'react';
import { 
  FaTimes, 
  FaStore, 
  FaCheckCircle, 
  FaUpload, 
  FaShieldAlt, 
  FaMapMarkerAlt,
  FaPalette,
  FaCoins
} from 'react-icons/fa';
import { useStore } from '../../context/store';

interface BecomeSellerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BecomeSellerModal({ isOpen, onClose }: BecomeSellerModalProps) {
  const submitSellerApplication = useStore((s) => s.submitSellerApplication);

  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [village, setVillage] = useState('');
  const [district, setDistrict] = useState('Puri');
  const [craftType, setCraftType] = useState('Handloom');
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [price, setPrice] = useState<number>(1200);
  const [availableStock, setAvailableStock] = useState<number>(10);
  const [materialsUsed, setMaterialsUsed] = useState('');
  const [shippingDetails, setShippingDetails] = useState('');

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !contact || !productName) return;

    submitSellerApplication({
      name,
      contact,
      village,
      district,
      craftType,
      productName,
      productDescription,
      productPhotos: [photoUrl || 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'],
      price,
      availableStock,
      materialsUsed,
      shippingDetails: shippingDetails || 'Dispatched directly from artisan workshop in 3 business days.'
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  const craftOptions = [
    'Handloom & Textiles',
    'Brass & Fish-Motif Jewellery',
    'Pattachitra Painting',
    'Pipili Applique & Mirror Work',
    'Dhokra Metal Craft',
    'Palm-Leaf Engraving (Talapatra)',
    'Cuttack Silver Filigree (Tarakasi)',
    'Terracotta & Pottery',
    'Bamboo & Cane Craft',
    'Wood Craft & Toys',
    'Stone Carving',
    'Tribal Handmade Accessories'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div 
        className="relative w-full max-w-xl rounded-3xl bg-[#FBF9FE] dark:bg-[#180B2B] border border-purple-500/25 text-slate-900 dark:text-purple-100 shadow-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-purple-500/20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-purple-600/20 text-purple-600 dark:text-purple-300 flex items-center justify-center">
              <FaStore />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white leading-tight">
                Sell Your Art on Karma-Path
              </h3>
              <p className="text-[11px] text-purple-600 dark:text-purple-300 font-semibold">
                Direct artisan empowerment • Zero commission fair trade
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-purple-500/10 text-slate-400 hover:text-white transition"
          >
            <FaTimes />
          </button>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center text-3xl">
              <FaCheckCircle />
            </div>
            <h4 className="text-xl font-black text-slate-900 dark:text-white">
              Application Submitted for Review!
            </h4>
            <p className="text-xs text-slate-500 dark:text-purple-200/90 max-w-md mx-auto leading-relaxed">
              Our Community DAO and artisan verifiers will review your craft details and photographs. Once approved, your products will be published on the Karma-Path Local Hands Marketplace!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-xs text-purple-700 dark:text-purple-200 flex items-center gap-2.5">
              <FaShieldAlt className="text-purple-500 text-lg flex-shrink-0" />
              <span>
                All seller applications and product listings must be reviewed by the Karma-Path moderation panel before appearing publicly.
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 dark:text-purple-200 mb-1">
                  Artisan or Business Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="E.g. Kailash Maharana"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-white dark:bg-[#201338] border border-purple-500/20 text-slate-900 dark:text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 dark:text-purple-200 mb-1">
                  Phone Number or Email *
                </label>
                <input
                  type="text"
                  required
                  placeholder="+91 94371 XXXXX"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-white dark:bg-[#201338] border border-purple-500/20 text-slate-900 dark:text-white focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 dark:text-purple-200 mb-1">
                  Village or Town
                </label>
                <input
                  type="text"
                  required
                  placeholder="E.g. Nuagaon, Belaguntha, Raghurajpur"
                  value={village}
                  onChange={(e) => setVillage(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-white dark:bg-[#201338] border border-purple-500/20 text-slate-900 dark:text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 dark:text-purple-200 mb-1">
                  District in Odisha
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ganjam, Puri, Bargarh, Cuttack..."
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-white dark:bg-[#201338] border border-purple-500/20 text-slate-900 dark:text-white focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 dark:text-purple-200 mb-1">
                Craft Category *
              </label>
              <select
                value={craftType}
                onChange={(e) => setCraftType(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl bg-white dark:bg-[#201338] border border-purple-500/20 text-slate-900 dark:text-white focus:outline-none focus:border-purple-500"
              >
                {craftOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div className="pt-2 border-t border-purple-500/15 space-y-3">
              <div className="text-xs font-bold text-purple-600 dark:text-purple-300">First Product Listing:</div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 dark:text-purple-200 mb-1">
                  Product Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="E.g. Handwoven Sambalpuri Dupatta with Floral Bandha"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-white dark:bg-[#201338] border border-purple-500/20 text-slate-900 dark:text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 dark:text-purple-200 mb-1">
                  Product Description & Technique
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="Describe your craft technique, history, and specifications..."
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-white dark:bg-[#201338] border border-purple-500/20 text-slate-900 dark:text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 dark:text-purple-200 mb-1">
                    Selling Price (₹ INR) *
                  </label>
                  <input
                    type="number"
                    required
                    min={50}
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-white dark:bg-[#201338] border border-purple-500/20 text-slate-900 dark:text-white focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 dark:text-purple-200 mb-1">
                    Available Stock (Quantity)
                  </label>
                  <input
                    type="number"
                    required
                    min={1}
                    value={availableStock}
                    onChange={(e) => setAvailableStock(Number(e.target.value))}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-white dark:bg-[#201338] border border-purple-500/20 text-slate-900 dark:text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 dark:text-purple-200 mb-1">
                  Materials Used & Dimensions
                </label>
                <input
                  type="text"
                  placeholder="E.g. 100% Cotton yarn, natural dyes, 2.4 meters length"
                  value={materialsUsed}
                  onChange={(e) => setMaterialsUsed(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-white dark:bg-[#201338] border border-purple-500/20 text-slate-900 dark:text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 dark:text-purple-200 mb-1">
                  Product Photograph URL *
                </label>
                <input
                  type="url"
                  placeholder="https://... (Provide direct image link or photo host)"
                  value={photoUrl}
                  onChange={(e) => setPhotoUrl(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-white dark:bg-[#201338] border border-purple-500/20 text-slate-900 dark:text-white focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            <div className="pt-3">
              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl font-bold text-xs sm:text-sm bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:from-purple-500 hover:to-amber-400 text-white shadow-xl flex items-center justify-center gap-2 transform active:scale-95 transition"
              >
                <FaUpload className="text-xs" />
                <span>Submit Artisan Application for Review</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
