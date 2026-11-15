import React, { useState } from 'react';
import { 
  FaTimes, 
  FaStore, 
  FaCheckCircle, 
  FaTimesCircle, 
  FaPlus, 
  FaTrashAlt, 
  FaTruck, 
  FaBoxes, 
  FaUserCheck,
  FaCoins
} from 'react-icons/fa';
import { useStore } from '../../context/store';
import { type Product } from '../../data/odishaData';

interface AdminMarketplaceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AdminMarketplaceModal({ isOpen, onClose }: AdminMarketplaceModalProps) {
  const products = useStore((s) => s.products);
  const addProduct = useStore((s) => s.addProduct);
  const deleteProduct = useStore((s) => s.deleteProduct);
  const updateProduct = useStore((s) => s.updateProduct);
  const orders = useStore((s) => s.orders);
  const sellerApplications = useStore((s) => s.sellerApplications);
  const reviewSellerApplication = useStore((s) => s.reviewSellerApplication);

  const [activeTab, setActiveTab] = useState<'products' | 'applications' | 'orders'>('products');

  // Add Product Form State
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProdName, setNewProdName] = useState('');
  const [newProdCategory, setNewProdCategory] = useState<any>('Handloom');
  const [newProdPrice, setNewProdPrice] = useState(1200);
  const [newProdOriginalPrice, setNewProdOriginalPrice] = useState(1500);
  const [newProdArtisan, setNewProdArtisan] = useState('');
  const [newProdVillage, setNewProdVillage] = useState('');
  const [newProdDistrict, setNewProdDistrict] = useState('Puri');
  const [newProdDesc, setNewProdDesc] = useState('');
  const [newProdImage, setNewProdImage] = useState('');
  const [newProdStock, setNewProdStock] = useState(10);

  if (!isOpen) return null;

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProdName || !newProdArtisan || !newProdPrice) return;

    const prod: Product = {
      id: `p-${Date.now()}`,
      artisanId: `art-${Date.now()}`,
      artisanName: newProdArtisan,
      name: newProdName,
      description: newProdDesc || 'Authentic handmade creation from Odisha artisan guild.',
      village: newProdVillage || 'Raghurajpur',
      district: newProdDistrict,
      category: newProdCategory,
      materials: ['Pure traditional materials'],
      manufacturingProcess: 'Handcrafted by rural artisan cooperative',
      price: newProdPrice,
      originalPrice: newProdOriginalPrice,
      available: true,
      stock: newProdStock,
      images: [newProdImage || 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'],
      artisanStory: `Handmade by ${newProdArtisan} preserving ancient village lineages.`,
      karmaReward: 20,
      verifiedArtisan: true,
      rating: 5.0,
      reviewCount: 1
    };

    addProduct(prod);
    setShowAddForm(false);
    setNewProdName('');
    setNewProdArtisan('');
    setNewProdImage('');
  };

  const handleToggleStock = (product: Product) => {
    updateProduct({
      ...product,
      available: !product.available,
      stock: product.available ? 0 : 5
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl rounded-3xl bg-[#FBF9FE] dark:bg-[#180B2B] border border-purple-500/25 text-slate-900 dark:text-purple-100 shadow-2xl p-6 sm:p-8 max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-purple-500/20 flex-shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-purple-600 text-white flex items-center justify-center">
              <FaStore />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white">
                Marketplace Admin & Guild Operations
              </h3>
              <p className="text-[11px] text-purple-600 dark:text-purple-300">
                Manage inventory, seller applications, and customer order fulfillment
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

        {/* Tab Selector */}
        <div className="flex gap-2 pt-4 pb-2 border-b border-purple-500/15 flex-shrink-0">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              activeTab === 'products'
                ? 'bg-purple-600 text-white shadow-md'
                : 'text-slate-600 dark:text-purple-300 hover:bg-purple-500/10'
            }`}
          >
            Products ({products.length})
          </button>
          <button
            onClick={() => setActiveTab('applications')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeTab === 'applications'
                ? 'bg-purple-600 text-white shadow-md'
                : 'text-slate-600 dark:text-purple-300 hover:bg-purple-500/10'
            }`}
          >
            <span>Seller Applications</span>
            <span className="px-1.5 py-0.2 rounded-full bg-amber-500 text-slate-950 text-[10px] font-black">
              {sellerApplications.filter((a) => a.status === 'Pending').length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              activeTab === 'orders'
                ? 'bg-purple-600 text-white shadow-md'
                : 'text-slate-600 dark:text-purple-300 hover:bg-purple-500/10'
            }`}
          >
            Orders ({orders.length})
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto py-4 space-y-4 flex-1">
          {/* TAB 1: PRODUCTS MANAGEMENT */}
          {activeTab === 'products' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-600 dark:text-purple-300">
                  Total Active Listings: {products.length}
                </span>
                <button
                  onClick={() => setShowAddForm(!showAddForm)}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-500 text-white flex items-center gap-1.5 transition"
                >
                  <FaPlus className="text-[10px]" /> Add New Product
                </button>
              </div>

              {/* Add Product Drawer */}
              {showAddForm && (
                <form onSubmit={handleAddProduct} className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 space-y-3">
                  <div className="font-bold text-xs text-purple-700 dark:text-purple-200">New Product Form</div>
                  <div className="grid grid-cols-2 gap-2.5">
                    <input
                      type="text"
                      required
                      placeholder="Product Name"
                      value={newProdName}
                      onChange={(e) => setNewProdName(e.target.value)}
                      className="px-3 py-1.5 text-xs rounded-xl bg-white dark:bg-[#201338] border border-purple-500/20"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Artisan Name"
                      value={newProdArtisan}
                      onChange={(e) => setNewProdArtisan(e.target.value)}
                      className="px-3 py-1.5 text-xs rounded-xl bg-white dark:bg-[#201338] border border-purple-500/20"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-2.5">
                    <input
                      type="number"
                      placeholder="Price (₹)"
                      value={newProdPrice}
                      onChange={(e) => setNewProdPrice(Number(e.target.value))}
                      className="px-3 py-1.5 text-xs rounded-xl bg-white dark:bg-[#201338] border border-purple-500/20"
                    />
                    <input
                      type="text"
                      placeholder="Village"
                      value={newProdVillage}
                      onChange={(e) => setNewProdVillage(e.target.value)}
                      className="px-3 py-1.5 text-xs rounded-xl bg-white dark:bg-[#201338] border border-purple-500/20"
                    />
                    <input
                      type="text"
                      placeholder="District"
                      value={newProdDistrict}
                      onChange={(e) => setNewProdDistrict(e.target.value)}
                      className="px-3 py-1.5 text-xs rounded-xl bg-white dark:bg-[#201338] border border-purple-500/20"
                    />
                  </div>

                  <input
                    type="url"
                    placeholder="Image URL (https://...)"
                    value={newProdImage}
                    onChange={(e) => setNewProdImage(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-xl bg-white dark:bg-[#201338] border border-purple-500/20"
                  />

                  <div className="flex justify-end gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setShowAddForm(false)}
                      className="px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-500"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-1.5 rounded-xl text-xs font-bold bg-purple-600 text-white hover:bg-purple-500"
                    >
                      Publish Listing
                    </button>
                  </div>
                </form>
              )}

              {/* Products List Table */}
              <div className="space-y-2">
                {products.map((p) => (
                  <div
                    key={p.id}
                    className="p-3 rounded-xl bg-white dark:bg-purple-950/30 border border-purple-500/20 flex items-center justify-between gap-3 text-xs"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <img src={p.images[0]} alt={p.name} className="w-12 h-12 rounded-lg object-cover bg-slate-900 flex-shrink-0" />
                      <div className="truncate">
                        <div className="font-bold text-slate-900 dark:text-white truncate">{p.name}</div>
                        <div className="text-[11px] text-purple-600 dark:text-purple-400">
                          By {p.artisanName} • {p.village}, {p.district}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 flex-shrink-0">
                      <div className="text-right">
                        <div className="font-bold text-amber-500">₹{p.price.toLocaleString('en-IN')}</div>
                        <div className={`text-[10px] font-bold ${p.available ? 'text-emerald-500' : 'text-rose-500'}`}>
                          {p.available ? `In Stock (${p.stock ?? 5})` : 'Sold Out'}
                        </div>
                      </div>

                      <button
                        onClick={() => handleToggleStock(p)}
                        className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border transition ${
                          p.available ? 'bg-amber-500/20 text-amber-600 border-amber-500/30' : 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                        }`}
                      >
                        {p.available ? 'Mark Out of Stock' : 'Restock'}
                      </button>

                      <button
                        onClick={() => deleteProduct(p.id)}
                        className="p-2 text-slate-400 hover:text-rose-500 transition"
                        title="Delete product"
                      >
                        <FaTrashAlt className="text-xs" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: SELLER APPLICATIONS */}
          {activeTab === 'applications' && (
            <div className="space-y-3">
              {sellerApplications.length === 0 ? (
                <div className="text-center py-12 text-slate-400 text-xs">
                  No seller applications received yet.
                </div>
              ) : (
                sellerApplications.map((app) => (
                  <div
                    key={app.id}
                    className="p-4 rounded-2xl bg-white dark:bg-purple-950/30 border border-purple-500/20 space-y-3 text-xs"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="font-bold text-sm text-slate-900 dark:text-white">{app.name}</div>
                        <div className="text-purple-600 dark:text-purple-400 font-medium">
                          Craft: {app.craftType} • {app.village}, {app.district}
                        </div>
                        <div className="text-slate-400 text-[11px]">Contact: {app.contact}</div>
                      </div>

                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                        app.status === 'Approved' ? 'bg-emerald-500/20 text-emerald-400' :
                        app.status === 'Rejected' ? 'bg-rose-500/20 text-rose-400' :
                        'bg-amber-500/20 text-amber-500'
                      }`}>
                        {app.status}
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-purple-500/10 space-y-1">
                      <div className="font-bold text-slate-800 dark:text-white">Product: {app.productName} (₹{app.price})</div>
                      <p className="text-slate-600 dark:text-purple-200 text-[11px]">{app.productDescription}</p>
                      <div className="text-slate-400 text-[10px]">Stock: {app.availableStock} | Materials: {app.materialsUsed}</div>
                    </div>

                    {app.status === 'Pending' && (
                      <div className="flex justify-end gap-2 pt-1">
                        <button
                          onClick={() => reviewSellerApplication(app.id, 'Rejected')}
                          className="px-3 py-1.5 rounded-xl text-xs font-bold text-rose-500 hover:bg-rose-500/10 transition"
                        >
                          Reject
                        </button>
                        <button
                          onClick={() => {
                            reviewSellerApplication(app.id, 'Approved');
                            addProduct({
                              id: `p-app-${Date.now()}`,
                              artisanId: `art-app-${Date.now()}`,
                              artisanName: app.name,
                              name: app.productName,
                              description: app.productDescription,
                              village: app.village,
                              district: app.district,
                              category: 'Handicrafts',
                              materials: [app.materialsUsed || 'Traditional materials'],
                              manufacturingProcess: 'Handcrafted village product',
                              price: app.price,
                              available: true,
                              stock: app.availableStock,
                              images: app.productPhotos,
                              artisanStory: `Artisan ${app.name} from ${app.village}, ${app.district}.`,
                              karmaReward: 20,
                              verifiedArtisan: true,
                              rating: 5.0,
                              reviewCount: 1
                            });
                          }}
                          className="px-4 py-1.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition shadow-sm"
                        >
                          Approve & Publish to Marketplace
                        </button>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          )}

          {/* TAB 3: CUSTOMER ORDERS */}
          {activeTab === 'orders' && (
            <div className="space-y-3">
              {orders.length === 0 ? (
                <div className="text-center py-12 text-slate-400 text-xs">
                  No orders placed yet.
                </div>
              ) : (
                orders.map((ord) => (
                  <div
                    key={ord.id}
                    className="p-4 rounded-2xl bg-white dark:bg-purple-950/30 border border-purple-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs"
                  >
                    <div className="flex items-center gap-3">
                      <img src={ord.productImage} alt={ord.productName} className="w-12 h-12 rounded-xl object-cover bg-slate-900" />
                      <div>
                        <div className="font-bold text-slate-900 dark:text-white">{ord.productName}</div>
                        <div className="text-purple-600 dark:text-purple-400">By {ord.artisanName} • {ord.village}</div>
                        <div className="text-slate-400 text-[10px]">Date: {ord.orderDate} | Tracking: {ord.trackingNumber || ord.id}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="font-black text-amber-500">₹{ord.price.toLocaleString('en-IN')}</div>
                        <div className="text-[10px] text-purple-400">+{ord.karmaAwarded} KT Awarded</div>
                      </div>

                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400">
                        {ord.status}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
