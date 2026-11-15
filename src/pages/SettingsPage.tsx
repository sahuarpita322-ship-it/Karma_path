import { useState, useRef } from 'react';
import { useStore } from '../context/store';
import { Link } from 'react-router-dom';
import { VscEdit } from 'react-icons/vsc';

export function SettingsPage() {
  const { currentUser, updateUserProfile, isDarkMode, toggleDarkMode } = useStore();
  
  const [name, setName] = useState(currentUser?.name || '');
  const [avatar, setAvatar] = useState(currentUser?.avatar || '');
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!currentUser) {
    return (
      <main className="min-h-screen relative p-8 pt-32 text-center pb-12">
        <div 
          className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/sundarbans.jpg')` }}
        >
          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-forest">Please Log In</h1>
          <p className="text-earth mt-4 font-semibold">You need to be logged in to view your settings.</p>
          <Link to="/signup" className="mt-6 inline-block bg-forest text-white px-6 py-2 rounded-lg font-bold hover:bg-emerald-700 transition shadow-lg">
            Login / Register
          </Link>
        </div>
      </main>
    );
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    updateUserProfile({ name, avatar });
    alert('Settings saved successfully!');
  };

  return (
    <main className="min-h-screen relative p-4 pt-24 md:p-8 pb-12">
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/sundarbans.jpg')` }}
      >
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
      </div>
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/50 bg-white/80 backdrop-blur-xl p-6 md:p-10 shadow-2xl relative z-10">
        <h1 className="text-3xl font-bold text-forest mb-8">Account Settings</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-forest border-b border-white/50 pb-2 mb-4">Profile Information</h2>
            
            <div className="flex items-center gap-6 mb-6">
              <div className="relative">
                <img src={avatar || '/icon.svg.jpeg'} alt="Profile" className="h-24 w-24 rounded-full border-4 border-white object-cover shadow-xl" />
                <button onClick={() => fileInputRef.current?.click()} className="absolute bottom-0 right-0 bg-forest text-white p-2 rounded-full hover:bg-emerald-700 transition shadow-md border border-white">
                  <VscEdit size={14} />
                </button>
                <input type="file" ref={fileInputRef} onChange={handleImageChange} accept="image/*" className="hidden" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Profile Picture</p>
                <p className="text-xs text-gray-400">Click the camera icon to upload a new image.</p>
              </div>
            </div>

            <div className="space-y-4 text-earth">
              <div>
                <label className="block text-sm font-medium text-earth mb-1">Display Name</label>
                <input type="text" className="w-full md:w-1/2 rounded-xl border border-white/50 bg-white/60 backdrop-blur-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-forest/50 font-medium" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-medium text-earth mb-1">Email Address</label>
                <input type="email" className="w-full md:w-1/2 rounded-xl border border-white/50 bg-white/40 backdrop-blur-sm px-4 py-2 text-gray-600 cursor-not-allowed font-medium" defaultValue={currentUser.email} disabled />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-forest border-b border-white/50 pb-2 mb-4">Preferences</h2>
            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 accent-forest rounded border-gray-300" defaultChecked />
                <span className="text-earth font-medium">Enable Email Notifications</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} className="w-5 h-5 accent-forest rounded border-gray-300" />
                <span className="text-earth font-medium">Enable Dark Theme</span>
              </label>
            </div>
          </section>

          <div className="pt-4 border-t border-white/50">
            <button onClick={handleSave} className="bg-forest text-white px-6 py-2 rounded-xl font-semibold hover:bg-emerald-700 transition shadow-lg">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}