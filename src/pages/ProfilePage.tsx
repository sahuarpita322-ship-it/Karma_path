import { useState, useRef } from 'react';
import { useStore } from '../context/store';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FaUserCircle,
  FaCoins, 
  FaTrophy, 
  FaLandmark, 
  FaHandsHelping, 
  FaStore, 
  FaSignOutAlt, 
  FaPlus,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaUserPlus,
  FaSignInAlt,
  FaAward,
  FaCamera,
  FaExpand,
  FaTimes,
  FaCheck,
  FaUpload,
  FaImage,
  FaPalette,
  FaHeart
} from 'react-icons/fa';

// Curated Odia Cultural Guardian Avatars
const PRESET_AVATARS = [
  { name: 'Pattachitra Master', url: '/villages/raghurajpur.jpg', category: 'Artisan' },
  { name: 'Sambalpuri Weaver', url: '/villages/barpali.jpg', category: 'Handloom' },
  { name: 'Odissi Dancer', url: '/dances/odissi.jpg', category: 'Classical Dance' },
  { name: 'Gotipua Performer', url: '/dances/gotipua.jpg', category: 'Temple Dance' },
  { name: 'Brass Craftsman', url: '/villages/belaguntha.jpg', category: 'Bell Metal' },
  { name: 'Chandua Artisan', url: '/villages/pipili.jpg', category: 'Applique' },
  { name: 'Folk Mask Artist', url: '/villages/bhanjanagar.jpg', category: 'Folk Art' },
  { name: 'Heritage Guardian', url: '/villages/berhampur.jpg', category: 'Silk City' }
];

export function ProfilePage() {
  const currentUser = useStore((s) => s.currentUser);
  const karmaBalance = useStore((s) => s.karmaBalance);
  const logoutUser = useStore((s) => s.logoutUser);
  const karmaDeeds = useStore((s) => s.karmaDeeds);
  const updateUserProfile = useStore((s) => s.updateUserProfile);
  const addUserPhoto = useStore((s) => s.addUserPhoto);
  const addKarma = useStore((s) => s.addKarma);
  const switchUser = useStore((s) => s.switchUser);
  const navigate = useNavigate();

  // Modals & States
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(currentUser?.name || '');
  const [phone, setPhone] = useState(currentUser?.phone || '');
  const [district, setDistrict] = useState(currentUser?.homeDistrict || '');
  const [inlineAvatar, setInlineAvatar] = useState(currentUser?.avatar || '');

  // Add Profile Photo Modal States
  const [photoModalOpen, setPhotoModalOpen] = useState(false);
  const [photoTab, setPhotoTab] = useState<'upload' | 'presets' | 'url'>('upload');
  const [previewAvatar, setPreviewAvatar] = useState(currentUser?.avatar || '');
  const [customUrl, setCustomUrl] = useState('');
  const [successToast, setSuccessToast] = useState<string | null>(null);

  // Add Gallery Photo Modal States
  const [galleryModalOpen, setGalleryModalOpen] = useState(false);
  const [galleryPhotoUrl, setGalleryPhotoUrl] = useState('');
  const [galleryCaption, setGalleryCaption] = useState('');
  const [galleryLocation, setGalleryLocation] = useState('');

  // Lightbox Zoom Modal
  const [activeZoomImage, setActiveZoomImage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const galleryFileInputRef = useRef<HTMLInputElement>(null);

  // If not logged in, prompt to Sign Up or Continue as Demo Guardian
  if (!currentUser) {
    return (
      <main className="min-h-screen pt-32 pb-20 px-4 sm:px-6 flex items-center justify-center max-w-xl mx-auto">
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-[#7955AE]/25 dark:border-[#B9A5DF]/35 w-full text-center space-y-6 shadow-2xl bg-white/95 dark:bg-[#200D38]/90 backdrop-blur-2xl">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#7955AE] to-[#39205C] dark:from-white dark:to-[#D9CCF2] flex items-center justify-center text-white dark:text-[#180B2B] text-3xl mx-auto shadow-xl shadow-[#7955AE]/30 dark:shadow-[0_0_25px_rgba(255,255,255,0.4)]">
            <FaUserCircle />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-cinzel font-black text-[#180B2B] dark:text-[#FFFFFF]">
              Cultural Guardian Profile
            </h1>
            <p className="text-xs sm:text-sm text-[#503C6B] dark:text-[#E8E3F0] mt-2 max-w-md mx-auto leading-relaxed">
              Sign in or create an account to customize your profile, add photos, document village stories, and earn Karma Points across Odisha.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#7955AE]/10 dark:bg-[#B9A5DF]/15 border border-[#7955AE]/25 dark:border-[#B9A5DF]/35 text-left flex items-center gap-3">
            <FaCoins className="text-[#7955AE] dark:text-[#D9CCF2] text-2xl flex-shrink-0 animate-bounce" />
            <div className="text-xs text-[#180B2B] dark:text-[#E8E3F0]">
              <span className="font-bold text-[#7955AE] dark:text-white">50 Welcome Karma Tokens:</span> New explorers receive 50 KT instantly upon registering!
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              to="/signup?mode=signup"
              className="flex-1 py-3 rounded-2xl font-black text-xs shadow-lg transition flex items-center justify-center gap-2 bg-[#7955AE] text-white hover:bg-[#613A9E] dark:bg-white dark:text-[#180B2B] dark:hover:bg-[#F3EDFC]"
            >
              <FaUserPlus /> Create Account (+50 KT)
            </Link>
            <button
              onClick={() => switchUser('arpita.sahu@karmapath.in')}
              className="flex-1 py-3 rounded-2xl border border-[#7955AE]/40 dark:border-[#B9A5DF]/50 bg-purple-600/10 hover:bg-purple-600/20 text-[#7955AE] dark:text-white font-bold text-xs transition flex items-center justify-center gap-2"
            >
              <FaTrophy className="text-amber-400" /> Enter as Cultural Guardian
            </button>
          </div>
        </div>
      </main>
    );
  }

  // Handle Local Device File Upload for Profile Photo
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreviewAvatar(result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Save Profile Photo from Modal
  const handleSaveProfilePhoto = () => {
    if (!previewAvatar) return;
    updateUserProfile({ avatar: previewAvatar });
    addKarma(5, 'Updated Profile Photo (+5 KT)');
    setPhotoModalOpen(false);
    showToast('🎉 Profile photo updated successfully! (+5 KT)');
  };

  // Handle Gallery Photo File Upload
  const handleGalleryFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setGalleryPhotoUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Submit New Photo to Cultural Gallery
  const handleAddGalleryPhoto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!galleryPhotoUrl) {
      alert('Please upload a photo or enter a photo URL.');
      return;
    }
    addUserPhoto({
      url: galleryPhotoUrl,
      caption: galleryCaption || 'Cultural Heritage Memory',
      location: galleryLocation || 'Odisha'
    });
    setGalleryModalOpen(false);
    setGalleryPhotoUrl('');
    setGalleryCaption('');
    setGalleryLocation('');
    showToast('📸 New photo added to your cultural gallery! (+10 KT)');
  };

  const showToast = (msg: string) => {
    setSuccessToast(msg);
    setTimeout(() => setSuccessToast(null), 4000);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateUserProfile({ 
      name, 
      phone, 
      homeDistrict: district,
      avatar: inlineAvatar || currentUser.avatar 
    });
    setEditing(false);
    showToast('✓ Profile updated successfully!');
  };

  const userDeeds = karmaDeeds.filter((d) => d.userId === currentUser.id);
  const userPhotos = currentUser.photos || [];

  return (
    <main className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8">
      
      {/* Success Notification Toast */}
      {successToast && (
        <div className="fixed top-24 right-6 z-50 p-4 rounded-2xl bg-emerald-600 text-white font-bold text-xs shadow-2xl flex items-center gap-2 border border-white/30 animate-fadeIn">
          <FaCheck className="text-sm" />
          <span>{successToast}</span>
        </div>
      )}

      {/* Header Profile Card */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-[#7955AE]/25 dark:border-[#B9A5DF]/35 relative overflow-hidden shadow-2xl bg-white/95 dark:bg-[#200D38]/85 backdrop-blur-2xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
          
          <div className="flex items-center gap-4 sm:gap-6">
            
            {/* AVATAR WITH DIRECT "ADD PHOTO" OVERLAY & BUTTON */}
            <div 
              className="relative group cursor-pointer"
              onClick={() => {
                setPreviewAvatar(currentUser.avatar);
                setPhotoModalOpen(true);
              }}
              title="Click to Add or Change Profile Photo"
            >
              <img 
                src={currentUser.avatar} 
                alt={currentUser.name} 
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-[#7955AE] dark:border-[#B9A5DF] shadow-xl group-hover:scale-105 transition-transform"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-[10px] font-bold gap-1 backdrop-blur-xs">
                <FaCamera className="text-sm" />
                <span>Add Photo</span>
              </div>

              {/* Mobile / Always visible camera badge */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setPreviewAvatar(currentUser.avatar);
                  setPhotoModalOpen(true);
                }}
                className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-[9px] font-bold shadow-lg flex items-center gap-1 border-2 border-white dark:border-[#200D38] transition"
              >
                <FaCamera className="text-[8px]" />
                <span>Add Photo</span>
              </button>
            </div>

            {/* Profile Info */}
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#7955AE]/15 text-[#7955AE] dark:bg-white/20 dark:text-[#FFFFFF] border border-[#7955AE]/30 dark:border-[#B9A5DF]/40">
                <FaTrophy className="text-[#7955AE] dark:text-[#D9CCF2]" /> Cultural Guardian
              </div>
              <h1 className="text-2xl sm:text-3xl font-cinzel font-black text-[#180B2B] dark:text-[#FFFFFF]">
                {currentUser.name}
              </h1>
              <div className="flex flex-wrap items-center gap-3 text-xs text-[#503C6B] dark:text-[#D0C3E3]">
                <span className="flex items-center gap-1"><FaEnvelope className="text-[#7955AE] dark:text-[#B9A5DF]" /> {currentUser.email}</span>
                <span className="flex items-center gap-1"><FaMapMarkerAlt className="text-[#7955AE] dark:text-[#B9A5DF]" /> {currentUser.homeDistrict || 'Odisha'}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons: Explicit "Add Photo" Option */}
          <div className="flex flex-wrap items-center gap-2 self-stretch sm:self-center">
            
            {/* PROMINENT "ADD PHOTO" BUTTON */}
            <button
              onClick={() => {
                setPreviewAvatar(currentUser.avatar);
                setPhotoModalOpen(true);
              }}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 hover:from-purple-500 hover:to-pink-500 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-md shadow-purple-900/30"
            >
              <FaCamera className="text-xs" />
              <span>Add Photo</span>
            </button>

            <button
              onClick={() => setEditing(!editing)}
              className="px-4 py-2 rounded-xl border border-[#7955AE]/30 dark:border-[#B9A5DF]/40 hover:bg-[#7955AE]/10 dark:hover:bg-[#B9A5DF]/20 text-xs font-bold transition text-[#180B2B] dark:text-[#FFFFFF]"
            >
              {editing ? 'Cancel' : 'Edit Profile'}
            </button>

            <button
              onClick={() => {
                logoutUser();
                navigate('/');
              }}
              className="px-4 py-2 rounded-xl bg-rose-600/15 hover:bg-rose-600/25 text-rose-500 text-xs font-bold transition flex items-center gap-1.5 border border-rose-500/20"
            >
              <FaSignOutAlt /> Sign Out
            </button>
          </div>
        </div>

        {/* Profile Edit Inline Form */}
        {editing && (
          <form onSubmit={handleSave} className="mt-6 pt-6 border-t border-[#7955AE]/15 dark:border-[#B9A5DF]/20 grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fadeIn">
            <div>
              <label className="text-[10px] font-bold text-[#503C6B] dark:text-[#B9A5DF] uppercase">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-1 p-2 rounded-xl border border-[#7955AE]/30 dark:border-[#B9A5DF]/40 bg-white dark:bg-[#180B2B] text-xs text-[#180B2B] dark:text-white"
              />
            </div>
            <div>
              <label className="text-[10px] font-bold text-[#503C6B] dark:text-[#B9A5DF] uppercase">Home District</label>
              <input
                type="text"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full mt-1 p-2 rounded-xl border border-[#7955AE]/30 dark:border-[#B9A5DF]/40 bg-white dark:bg-[#180B2B] text-xs text-[#180B2B] dark:text-white"
              />
            </div>
            <div>
              <label className="text-[10px] font-bold text-[#503C6B] dark:text-[#B9A5DF] uppercase">Phone Number</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98xxx xxxxx"
                className="w-full mt-1 p-2 rounded-xl border border-[#7955AE]/30 dark:border-[#B9A5DF]/40 bg-white dark:bg-[#180B2B] text-xs text-[#180B2B] dark:text-white"
              />
            </div>

            {/* Direct Photo Change in Edit Form */}
            <div className="sm:col-span-3 pt-2 border-t border-[#7955AE]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <img 
                  src={inlineAvatar || currentUser.avatar} 
                  alt="Avatar preview" 
                  className="w-10 h-10 rounded-xl object-cover border border-purple-500/40"
                />
                <button
                  type="button"
                  onClick={() => {
                    setPreviewAvatar(currentUser.avatar);
                    setPhotoModalOpen(true);
                  }}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-purple-600/20 text-purple-700 dark:text-purple-300 hover:bg-purple-600/30 flex items-center gap-1.5 transition border border-purple-500/30"
                >
                  <FaCamera /> Add Photo from Device / Avatars
                </button>
              </div>

              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-[#7955AE] text-white hover:bg-[#613A9E] dark:bg-white dark:text-[#180B2B] dark:hover:bg-[#F3EDFC] text-xs font-bold shadow-md transition"
              >
                Save Profile
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Stats Counter Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="glass-card rounded-2xl p-4 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 text-center bg-white/90 dark:bg-[#200D38]/80">
          <FaCoins className="text-[#7955AE] dark:text-[#D9CCF2] text-2xl mx-auto mb-1.5" />
          <div className="text-2xl font-black text-[#180B2B] dark:text-white">{karmaBalance} KT</div>
          <div className="text-[11px] text-[#503C6B] dark:text-[#B9A5DF] font-medium">Karma Token Balance</div>
        </div>

        <div className="glass-card rounded-2xl p-4 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 text-center bg-white/90 dark:bg-[#200D38]/80">
          <FaLandmark className="text-[#7955AE] dark:text-[#B9A5DF] text-2xl mx-auto mb-1.5" />
          <div className="text-2xl font-black text-[#180B2B] dark:text-white">{currentUser.destinationsVisited || 6}</div>
          <div className="text-[11px] text-[#503C6B] dark:text-[#B9A5DF] font-medium">Destinations Visited</div>
        </div>

        <div className="glass-card rounded-2xl p-4 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 text-center bg-white/90 dark:bg-[#200D38]/80">
          <FaStore className="text-[#7955AE] dark:text-[#B9A5DF] text-2xl mx-auto mb-1.5" />
          <div className="text-2xl font-black text-[#180B2B] dark:text-white">{currentUser.localPurchases || 2}</div>
          <div className="text-[11px] text-[#503C6B] dark:text-[#B9A5DF] font-medium">Artisans Supported</div>
        </div>

        <div className="glass-card rounded-2xl p-4 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 text-center bg-white/90 dark:bg-[#200D38]/80">
          <FaHandsHelping className="text-[#7955AE] dark:text-[#B9A5DF] text-2xl mx-auto mb-1.5" />
          <div className="text-2xl font-black text-[#180B2B] dark:text-white">{userDeeds.length || 3}</div>
          <div className="text-[11px] text-[#503C6B] dark:text-[#B9A5DF] font-medium">Verified Good Deeds</div>
        </div>
      </div>

      {/* MY CULTURAL PHOTO GALLERY & MEMORIES (WITH "ADD PHOTO" BUTTON) */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 space-y-5 shadow-xl bg-white/95 dark:bg-[#200D38]/85">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#7955AE]/15 dark:border-[#B9A5DF]/20">
          <div>
            <h2 className="text-lg font-bold text-[#180B2B] dark:text-white flex items-center gap-2">
              <FaCamera className="text-purple-600 dark:text-purple-400" />
              <span>My Cultural Photos & Memories</span>
            </h2>
            <p className="text-xs text-[#503C6B] dark:text-[#D0C3E3]">
              Share authentic photographs from your visits to Odisha villages, temples, and social deeds. Earn +10 KT per contribution!
            </p>
          </div>

          <button
            onClick={() => setGalleryModalOpen(true)}
            className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-md flex-shrink-0"
          >
            <FaPlus /> Add Photo (+10 KT)
          </button>
        </div>

        {userPhotos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {userPhotos.map((photo) => (
              <div
                key={photo.id}
                className="group relative rounded-2xl overflow-hidden border border-purple-500/25 bg-slate-900 shadow-md aspect-[4/3] cursor-pointer"
                onClick={() => setActiveZoomImage(photo.url)}
              >
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3.5">
                  <div className="self-end px-2 py-0.5 rounded-lg bg-black/60 backdrop-blur-md text-white text-[10px] font-bold flex items-center gap-1">
                    <FaExpand className="text-[9px]" /> Zoom
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white line-clamp-1 drop-shadow">
                      {photo.caption}
                    </div>
                    <div className="text-[10px] text-purple-200 flex items-center justify-between mt-1">
                      <span>{photo.location}</span>
                      <span>{photo.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center rounded-2xl bg-purple-500/5 border border-purple-500/15 space-y-3">
            <FaCamera className="text-3xl text-purple-400 mx-auto" />
            <div className="text-sm font-bold text-slate-800 dark:text-white">
              No photos added to your gallery yet
            </div>
            <p className="text-xs text-slate-500 dark:text-purple-300 max-w-md mx-auto">
              Click "Add Photo" to document your first heritage village discovery, artisan visit, or temple memory and earn +10 Karma Tokens!
            </p>
            <button
              onClick={() => setGalleryModalOpen(true)}
              className="px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-bold hover:bg-purple-500 transition shadow-md inline-flex items-center gap-1.5"
            >
              <FaPlus /> Add Photo (+10 KT)
            </button>
          </div>
        )}
      </div>

      {/* User Deeds & Cultural Activity History */}
      <div className="glass-card rounded-3xl p-6 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 space-y-4 shadow-xl bg-white/95 dark:bg-[#200D38]/85">
        <div className="flex items-center justify-between pb-3 border-b border-[#7955AE]/15 dark:border-[#B9A5DF]/20">
          <div>
            <h2 className="text-lg font-bold text-[#180B2B] dark:text-white">
              My Karma Journey & Good Deeds
            </h2>
            <p className="text-xs text-[#503C6B] dark:text-[#D0C3E3]">
              Community-verified contributions, volunteer activities, and artisan support.
            </p>
          </div>
          <Link
            to="/dashboard"
            className="px-3.5 py-1.5 rounded-xl font-bold text-xs transition flex items-center gap-1 shadow-sm bg-[#7955AE] text-white hover:bg-[#613A9E] dark:bg-white dark:text-[#180B2B] dark:hover:bg-[#F3EDFC]"
          >
            <FaPlus /> Submit New Deed
          </Link>
        </div>

        {currentUser.history && currentUser.history.length > 0 ? (
          <div className="space-y-3">
            {currentUser.history.map((h) => (
              <div
                key={h.id}
                className="p-3.5 rounded-2xl bg-stone-50 dark:bg-[#180B2B]/70 border border-[#7955AE]/15 dark:border-[#B9A5DF]/20 flex items-center justify-between text-xs"
              >
                <div className="space-y-0.5">
                  <div className="font-bold text-[#180B2B] dark:text-white">{h.taskTitle}</div>
                  <div className="text-[10px] text-[#716680] dark:text-[#D0C3E3] flex items-center gap-2">
                    <span className="flex items-center gap-1"><FaCalendarAlt /> {h.date}</span>
                    <span>·</span>
                    <span className="text-[#7955AE] dark:text-[#B9A5DF] font-semibold">{h.category || 'Contribution'}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-[#7955AE] dark:text-white">+{h.tokens} KT</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#7955AE]/15 text-[#7955AE] dark:bg-[#B9A5DF]/20 dark:text-white border border-[#7955AE]/20 dark:border-[#B9A5DF]/30">
                    {h.status || 'Completed'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-[#716680] dark:text-[#B9A5DF] text-xs">
            No good deeds submitted yet. Visit <Link to="/dashboard" className="text-[#7955AE] dark:text-white underline">Dashboard</Link> to submit your first environmental or cultural deed and earn Karma Tokens!
          </div>
        )}
      </div>

      {/* Badges & Achievements */}
      <div className="glass-card rounded-3xl p-6 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 space-y-4 shadow-xl bg-white/95 dark:bg-[#200D38]/85">
        <h2 className="text-lg font-bold text-[#180B2B] dark:text-white flex items-center gap-2">
          <FaAward className="text-[#7955AE] dark:text-[#D9CCF2]" /> Unlocked Cultural Badges
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {(currentUser.achievements || ['Heritage Explorer', 'Eco Pioneer', 'Handloom Patron', 'Master Guardian']).map((ach, i) => (
            <div key={i} className="p-3 rounded-2xl bg-[#7955AE]/10 dark:bg-[#B9A5DF]/15 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 text-center space-y-1">
              <FaTrophy className="text-[#7955AE] dark:text-[#D9CCF2] text-xl mx-auto" />
              <div className="text-xs font-bold text-[#180B2B] dark:text-white">{ach}</div>
              <div className="text-[10px] text-[#7955AE] dark:text-[#B9A5DF] font-semibold">Verified Badge</div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL 1: ADD / CHANGE PROFILE PHOTO MODAL */}
      {photoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg rounded-3xl p-6 sm:p-8 bg-white dark:bg-[#1f0d38] border border-purple-500/30 shadow-2xl space-y-6">
            
            <div className="flex items-center justify-between pb-3 border-b border-purple-500/20">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center text-sm font-bold shadow-md">
                  <FaCamera />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white">
                    Add Profile Photo
                  </h3>
                  <p className="text-[11px] text-purple-700 dark:text-purple-300">
                    Upload from your device, choose an Odia Cultural avatar, or paste a URL.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setPhotoModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-purple-900/40 text-slate-500 dark:text-purple-200 hover:text-white flex items-center justify-center transition"
              >
                <FaTimes />
              </button>
            </div>

            {/* Preview Current / Selected Photo */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20">
              <img
                src={previewAvatar || currentUser.avatar}
                alt="Selected Preview"
                className="w-20 h-20 rounded-2xl object-cover border-2 border-purple-500 shadow-md"
              />
              <div className="space-y-1">
                <div className="text-xs font-bold text-slate-900 dark:text-white">Photo Preview</div>
                <p className="text-[11px] text-slate-600 dark:text-purple-200">
                  This image will represent your Cultural Guardian profile across Karma-Path.
                </p>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                  +5 Karma Reward upon Saving
                </span>
              </div>
            </div>

            {/* Photo Option Tabs */}
            <div className="flex items-center rounded-xl p-1 bg-slate-100 dark:bg-purple-950/60 border border-purple-500/20">
              <button
                onClick={() => setPhotoTab('upload')}
                className={`flex-1 py-2 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                  photoTab === 'upload'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-slate-600 dark:text-purple-300 hover:text-white'
                }`}
              >
                <FaUpload /> From Device
              </button>
              <button
                onClick={() => setPhotoTab('presets')}
                className={`flex-1 py-2 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                  photoTab === 'presets'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-slate-600 dark:text-purple-300 hover:text-white'
                }`}
              >
                <FaPalette /> Cultural Avatars
              </button>
              <button
                onClick={() => setPhotoTab('url')}
                className={`flex-1 py-2 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                  photoTab === 'url'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-slate-600 dark:text-purple-300 hover:text-white'
                }`}
              >
                <FaImage /> Image Link
              </button>
            </div>

            {/* TAB 1: UPLOAD FROM DEVICE */}
            {photoTab === 'upload' && (
              <div className="space-y-3">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept="image/*"
                  className="hidden"
                />
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="p-8 rounded-2xl border-2 border-dashed border-purple-500/40 hover:border-purple-500 bg-purple-500/5 hover:bg-purple-500/10 cursor-pointer text-center space-y-2 transition"
                >
                  <FaUpload className="text-2xl text-purple-600 dark:text-purple-400 mx-auto" />
                  <div className="text-xs font-bold text-slate-800 dark:text-white">
                    Click to choose a photo from your computer or phone
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-purple-300">
                    Supports JPG, PNG, WEBP (Max 5MB)
                  </p>
                </div>
              </div>
            )}

            {/* TAB 2: CULTURAL AVATARS */}
            {photoTab === 'presets' && (
              <div className="space-y-2">
                <div className="text-[11px] font-bold text-slate-600 dark:text-purple-300">
                  Select an authentic Odia Cultural Guardian persona:
                </div>
                <div className="grid grid-cols-4 gap-2.5 max-h-56 overflow-y-auto p-1">
                  {PRESET_AVATARS.map((av, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setPreviewAvatar(av.url)}
                      className={`relative rounded-xl overflow-hidden border-2 aspect-square group transition ${
                        previewAvatar === av.url
                          ? 'border-purple-500 ring-2 ring-purple-400 shadow-md'
                          : 'border-purple-500/30 hover:border-purple-400'
                      }`}
                    >
                      <img src={av.url} alt={av.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-1 text-center">
                        <span className="text-[9px] font-bold text-white leading-tight">{av.name}</span>
                      </div>
                      {previewAvatar === av.url && (
                        <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[9px]">
                          ✓
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: IMAGE LINK */}
            {photoTab === 'url' && (
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-800 dark:text-white">
                  Paste Image URL:
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={customUrl}
                    onChange={(e) => setCustomUrl(e.target.value)}
                    placeholder="https://example.com/photo.jpg"
                    className="flex-1 p-2.5 rounded-xl border border-purple-500/30 bg-white dark:bg-[#180B2B] text-xs text-slate-900 dark:text-white focus:outline-none focus:border-purple-500"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (customUrl) setPreviewAvatar(customUrl);
                    }}
                    className="px-3.5 py-2 rounded-xl bg-purple-600 text-white text-xs font-bold hover:bg-purple-500 transition"
                  >
                    Preview
                  </button>
                </div>
              </div>
            )}

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-3 border-t border-purple-500/20">
              <button
                type="button"
                onClick={() => setPhotoModalOpen(false)}
                className="px-4 py-2 rounded-xl border border-purple-500/30 text-xs font-bold text-slate-700 dark:text-purple-200 hover:bg-purple-500/10 transition"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveProfilePhoto}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xs font-black shadow-lg shadow-purple-900/30 transition flex items-center gap-1.5"
              >
                <FaCheck />
                <span>Save Profile Photo (+5 KT)</span>
              </button>
            </div>

          </div>
        </div>
      )}

      {/* MODAL 2: ADD PHOTO TO CULTURAL GALLERY MODAL */}
      {galleryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg rounded-3xl p-6 sm:p-8 bg-white dark:bg-[#1f0d38] border border-purple-500/30 shadow-2xl space-y-5">
            
            <div className="flex items-center justify-between pb-3 border-b border-purple-500/20">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center text-sm font-bold shadow-md">
                  <FaCamera />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white">
                    Add Photo to Cultural Memories
                  </h3>
                  <p className="text-[11px] text-purple-700 dark:text-purple-300">
                    Document your heritage journeys & earn +10 Karma Tokens!
                  </p>
                </div>
              </div>
              <button
                onClick={() => setGalleryModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-purple-900/40 text-slate-500 dark:text-purple-200 hover:text-white flex items-center justify-center transition"
              >
                <FaTimes />
              </button>
            </div>

            <form onSubmit={handleAddGalleryPhoto} className="space-y-4">
              
              {/* Photo Source */}
              <div>
                <label className="text-xs font-bold text-slate-800 dark:text-white block mb-1.5">
                  Select Photo:
                </label>
                <input
                  type="file"
                  ref={galleryFileInputRef}
                  onChange={handleGalleryFileUpload}
                  accept="image/*"
                  className="hidden"
                />
                
                {galleryPhotoUrl ? (
                  <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 h-44 bg-slate-900 group">
                    <img src={galleryPhotoUrl} alt="Preview" className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => setGalleryPhotoUrl('')}
                      className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-black/70 text-white text-[10px] font-bold flex items-center gap-1 hover:bg-black"
                    >
                      <FaTimes /> Change Photo
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => galleryFileInputRef.current?.click()}
                      className="p-4 rounded-2xl border-2 border-dashed border-purple-500/40 hover:border-purple-500 bg-purple-500/5 hover:bg-purple-500/10 text-center space-y-1 transition"
                    >
                      <FaUpload className="text-lg text-purple-600 dark:text-purple-400 mx-auto" />
                      <div className="text-xs font-bold text-slate-800 dark:text-white">Upload from Device</div>
                    </button>
                    <div className="space-y-1">
                      <input
                        type="url"
                        placeholder="Or paste photo URL..."
                        onBlur={(e) => {
                          if (e.target.value) setGalleryPhotoUrl(e.target.value);
                        }}
                        className="w-full h-full p-3 rounded-2xl border border-purple-500/30 bg-white dark:bg-[#180B2B] text-xs text-slate-900 dark:text-white focus:outline-none focus:border-purple-500"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Title / Caption */}
              <div>
                <label className="text-xs font-bold text-slate-800 dark:text-white block mb-1">
                  Photo Caption / Title:
                </label>
                <input
                  type="text"
                  required
                  value={galleryCaption}
                  onChange={(e) => setGalleryCaption(e.target.value)}
                  placeholder="e.g. Traditional Weaving at Nuapatna Village"
                  className="w-full p-2.5 rounded-xl border border-purple-500/30 bg-white dark:bg-[#180B2B] text-xs text-slate-900 dark:text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              {/* Location */}
              <div>
                <label className="text-xs font-bold text-slate-800 dark:text-white block mb-1">
                  Location / Village / Temple:
                </label>
                <input
                  type="text"
                  value={galleryLocation}
                  onChange={(e) => setGalleryLocation(e.target.value)}
                  placeholder="e.g. Nuapatna, Cuttack District"
                  className="w-full p-2.5 rounded-xl border border-purple-500/30 bg-white dark:bg-[#180B2B] text-xs text-slate-900 dark:text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-purple-500/20">
                <button
                  type="button"
                  onClick={() => setGalleryModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-purple-500/30 text-xs font-bold text-slate-700 dark:text-purple-200 hover:bg-purple-500/10 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xs font-black shadow-lg shadow-purple-900/30 transition flex items-center gap-1.5"
                >
                  <FaPlus />
                  <span>Add Photo (+10 KT)</span>
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* LIGHTBOX ZOOM MODAL */}
      {activeZoomImage && (
        <div
          onClick={() => setActiveZoomImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn cursor-pointer"
        >
          <div className="relative max-w-4xl max-h-[90vh] p-2" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActiveZoomImage(null)}
              className="absolute -top-10 right-0 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center text-sm transition"
            >
              <FaTimes />
            </button>
            <img
              src={activeZoomImage}
              alt="Zoomed cultural photo"
              className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-purple-500/30"
            />
          </div>
        </div>
      )}

    </main>
  );
}
