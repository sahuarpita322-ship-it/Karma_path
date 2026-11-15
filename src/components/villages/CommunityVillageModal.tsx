import React, { useState } from 'react';
import { 
  FaTimes, 
  FaLandmark, 
  FaUserPlus, 
  FaMusic, 
  FaUtensils, 
  FaUpload, 
  FaCheckCircle, 
  FaShieldAlt,
  FaMapMarkerAlt,
  FaCamera
} from 'react-icons/fa';
import { useStore } from '../../context/store';

interface CommunityVillageModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'village' | 'artisan' | 'song' | 'recipe';
}

export function CommunityVillageModal({
  isOpen,
  onClose,
  defaultTab = 'village'
}: CommunityVillageModalProps) {
  const submitVillageStory = useStore((s) => s.submitVillageStory);
  const submitRecordedSong = useStore((s) => s.submitRecordedSong);

  const [activeTab, setActiveTab] = useState<'village' | 'artisan' | 'song' | 'recipe'>(defaultTab);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // Village Form State
  const [villageName, setVillageName] = useState('');
  const [district, setDistrict] = useState('');
  const [block, setBlock] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [mediaUrl, setMediaUrl] = useState('');

  // Artisan Form State
  const [artisanName, setArtisanName] = useState('');
  const [artisanCraft, setArtisanCraft] = useState('');
  const [artisanExp, setArtisanExp] = useState(10);
  const [artisanBio, setArtisanBio] = useState('');
  const [artisanContact, setArtisanContact] = useState('');

  // Song Form State
  const [songTitle, setSongTitle] = useState('');
  const [songLanguage, setSongLanguage] = useState('Odia');
  const [songLyrics, setSongLyrics] = useState('');
  const [songAudioUrl, setSongAudioUrl] = useState('');

  // Recipe Form State
  const [recipeName, setRecipeName] = useState('');
  const [recipeIngredients, setRecipeIngredients] = useState('');
  const [recipeMethod, setRecipeMethod] = useState('');

  if (!isOpen) return null;

  const handleVillageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!villageName.trim() || !district.trim() || !introduction.trim()) return;

    submitVillageStory({
      villageName: villageName.trim(),
      district: district.trim(),
      speciality: speciality.trim() || 'Traditional Village Craft & Culture',
      story: introduction.trim(),
      mediaUrl: mediaUrl.trim() || 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
    });

    setSuccessMsg(`Village "${villageName}" submitted successfully! An authorized moderator will verify the details before publishing.`);
    setTimeout(() => {
      setSuccessMsg(null);
      onClose();
    }, 2500);
  };

  const handleArtisanSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!artisanName.trim() || !artisanCraft.trim() || !district.trim()) return;

    submitVillageStory({
      villageName: `${artisanName} (${artisanCraft})`,
      district: district.trim(),
      speciality: `Artisan Registration: ${artisanCraft} (${artisanExp} yrs exp)`,
      story: `Artisan Bio: ${artisanBio}. Contact: ${artisanContact}.`,
      mediaUrl: mediaUrl.trim() || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    });

    setSuccessMsg(`Artisan registration for "${artisanName}" submitted! Our rural heritage team will reach out for onboarding.`);
    setTimeout(() => {
      setSuccessMsg(null);
      onClose();
    }, 2500);
  };

  const handleSongSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!songTitle.trim() || !villageName.trim() || !district.trim()) return;

    submitRecordedSong({
      title: songTitle.trim(),
      language: songLanguage,
      dialect: 'Regional Folk Dialect',
      village: villageName.trim(),
      lyrics: songLyrics.trim() || 'Oral lyrics recorded in village field study.',
      culturalBackground: `Recorded in ${villageName}, ${district}.`,
      audioUrl: songAudioUrl.trim() || 'https://cdn.freesound.org/previews/563/563810_11861866-lq.mp3'
    });

    setSuccessMsg(`Folk song "${songTitle}" submitted to the Village Archive queue for cultural review!`);
    setTimeout(() => {
      setSuccessMsg(null);
      onClose();
    }, 2500);
  };

  const handleRecipeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!recipeName.trim() || !villageName.trim() || !district.trim()) return;

    submitVillageStory({
      villageName: `${villageName} (Traditional Food: ${recipeName})`,
      district: district.trim(),
      speciality: `Recipe: ${recipeName}`,
      story: `Ingredients: ${recipeIngredients}. Preparation: ${recipeMethod}`,
      mediaUrl: mediaUrl.trim() || 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80'
    });

    setSuccessMsg(`Traditional recipe "${recipeName}" submitted! Thank you for preserving Odisha's culinary memory.`);
    setTimeout(() => {
      setSuccessMsg(null);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl my-6 bg-white dark:bg-[#1A0E2E] rounded-3xl shadow-2xl border border-[#7955AE]/40 overflow-hidden text-[#180B2B] dark:text-white flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 px-6 border-b border-[#7955AE]/20 bg-[#FAF7FD] dark:bg-[#130724] shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-[#7955AE]/15 text-[#7955AE] dark:text-[#D9CCF2]">
              <FaLandmark size={18} />
            </span>
            <div>
              <h3 className="font-cinzel font-black text-base">
                Community-Powered Village Contribution
              </h3>
              <p className="text-[11px] text-stone-500 dark:text-stone-400 font-serif">
                “Add Your Village to Karma-Path” · Celebrate your rural heritage
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

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 px-6 pt-3 border-b border-[#7955AE]/15 overflow-x-auto text-xs shrink-0 bg-stone-50/50 dark:bg-black/20">
          <button
            onClick={() => setActiveTab('village')}
            className={`pb-2.5 px-3 font-bold border-b-2 transition whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'village'
                ? 'border-[#7955AE] text-[#7955AE] dark:text-[#D9CCF2]'
                : 'border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
            }`}
          >
            <FaLandmark size={11} />
            <span>Add a Village</span>
          </button>

          <button
            onClick={() => setActiveTab('artisan')}
            className={`pb-2.5 px-3 font-bold border-b-2 transition whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'artisan'
                ? 'border-[#7955AE] text-[#7955AE] dark:text-[#D9CCF2]'
                : 'border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
            }`}
          >
            <FaUserPlus size={11} />
            <span>Register as Artisan</span>
          </button>

          <button
            onClick={() => setActiveTab('song')}
            className={`pb-2.5 px-3 font-bold border-b-2 transition whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'song'
                ? 'border-[#7955AE] text-[#7955AE] dark:text-[#D9CCF2]'
                : 'border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
            }`}
          >
            <FaMusic size={11} />
            <span>Share Folk Song/Dance</span>
          </button>

          <button
            onClick={() => setActiveTab('recipe')}
            className={`pb-2.5 px-3 font-bold border-b-2 transition whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'recipe'
                ? 'border-[#7955AE] text-[#7955AE] dark:text-[#D9CCF2]'
                : 'border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
            }`}
          >
            <FaUtensils size={11} />
            <span>Share Traditional Recipe</span>
          </button>
        </div>

        {/* Modal Form Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          
          {successMsg ? (
            <div className="p-8 text-center space-y-3">
              <FaCheckCircle className="text-4xl text-emerald-500 mx-auto animate-bounce" />
              <h4 className="font-cinzel font-black text-lg text-[#180B2B] dark:text-white">
                Submission Received!
              </h4>
              <p className="text-xs text-stone-600 dark:text-stone-300 font-serif max-w-md mx-auto leading-relaxed">
                {successMsg}
              </p>
            </div>
          ) : (
            <>
              {/* TAB 1: ADD A VILLAGE */}
              {activeTab === 'village' && (
                <form onSubmit={handleVillageSubmit} className="space-y-3.5 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="space-y-1">
                      <label className="font-bold text-stone-700 dark:text-stone-300">
                        Village Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={villageName}
                        onChange={(e) => setVillageName(e.target.value)}
                        placeholder="e.g. Hinjilicut"
                        className="w-full px-3 py-2 rounded-xl bg-stone-100 dark:bg-black/30 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 focus:outline-none focus:ring-2 focus:ring-[#7955AE] text-[#180B2B] dark:text-white"
                        required
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-bold text-stone-700 dark:text-stone-300">
                        District <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                        placeholder="e.g. Ganjam / Puri"
                        className="w-full px-3 py-2 rounded-xl bg-stone-100 dark:bg-black/30 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 focus:outline-none focus:ring-2 focus:ring-[#7955AE] text-[#180B2B] dark:text-white"
                        required
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-bold text-stone-700 dark:text-stone-300">Block / Tehsil</label>
                      <input
                        type="text"
                        value={block}
                        onChange={(e) => setBlock(e.target.value)}
                        placeholder="e.g. Hinjilicut Block"
                        className="w-full px-3 py-2 rounded-xl bg-stone-100 dark:bg-black/30 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 focus:outline-none focus:ring-2 focus:ring-[#7955AE] text-[#180B2B] dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-stone-700 dark:text-stone-300">
                      Craft, Handloom or Speciality
                    </label>
                    <input
                      type="text"
                      value={speciality}
                      onChange={(e) => setSpeciality(e.target.value)}
                      placeholder="e.g. Terracotta pottery, silk reeling, tribal brass casting"
                      className="w-full px-3 py-2 rounded-xl bg-stone-100 dark:bg-black/30 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 focus:outline-none focus:ring-2 focus:ring-[#7955AE] text-[#180B2B] dark:text-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-stone-700 dark:text-stone-300">
                      Village Introduction & Verified Story <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      value={introduction}
                      onChange={(e) => setIntroduction(e.target.value)}
                      rows={3}
                      placeholder="Share the authentic history of the village, generational families, festivals, and why it is special..."
                      className="w-full px-3 py-2 rounded-xl bg-stone-100 dark:bg-black/30 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 focus:outline-none focus:ring-2 focus:ring-[#7955AE] text-[#180B2B] dark:text-white resize-none"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-stone-700 dark:text-stone-300 flex items-center gap-1">
                      <FaCamera size={10} className="text-[#7955AE]" /> Authentic Photograph URL
                    </label>
                    <input
                      type="url"
                      value={mediaUrl}
                      onChange={(e) => setMediaUrl(e.target.value)}
                      placeholder="https://... (real village photo)"
                      className="w-full px-3 py-2 rounded-xl bg-stone-100 dark:bg-black/30 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 focus:outline-none focus:ring-2 focus:ring-[#7955AE] text-[#180B2B] dark:text-white"
                    />
                  </div>

                  <div className="p-3 rounded-xl bg-[#7955AE]/5 dark:bg-white/5 border border-[#7955AE]/15 text-[11px] text-stone-600 dark:text-stone-300 font-serif leading-relaxed">
                    <FaShieldAlt className="inline mr-1 text-[#7955AE]" />
                    All submissions enter a moderation queue. An authorized moderator will verify the content before it becomes public.
                  </div>

                  <div className="flex items-center justify-end gap-2 pt-2 border-t border-[#7955AE]/15">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2 rounded-xl text-stone-500 hover:text-stone-700"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl font-bold bg-[#7955AE] text-white hover:bg-[#613A9E] shadow-sm transition"
                    >
                      Submit Village for Review
                    </button>
                  </div>
                </form>
              )}

              {/* TAB 2: REGISTER AS AN ARTISAN */}
              {activeTab === 'artisan' && (
                <form onSubmit={handleArtisanSubmit} className="space-y-3.5 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="font-bold text-stone-700 dark:text-stone-300">
                        Artisan Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={artisanName}
                        onChange={(e) => setArtisanName(e.target.value)}
                        placeholder="e.g. Bipin Bihari Meher"
                        className="w-full px-3 py-2 rounded-xl bg-stone-100 dark:bg-black/30 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 focus:outline-none focus:ring-2 focus:ring-[#7955AE] text-[#180B2B] dark:text-white"
                        required
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-bold text-stone-700 dark:text-stone-300">
                        Craft / Handloom Skill <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={artisanCraft}
                        onChange={(e) => setArtisanCraft(e.target.value)}
                        placeholder="e.g. Berhampuri Patta / Pattachitra / Dhokra"
                        className="w-full px-3 py-2 rounded-xl bg-stone-100 dark:bg-black/30 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 focus:outline-none focus:ring-2 focus:ring-[#7955AE] text-[#180B2B] dark:text-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="space-y-1">
                      <label className="font-bold text-stone-700 dark:text-stone-300">Village & District</label>
                      <input
                        type="text"
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                        placeholder="e.g. Belaguntha, Ganjam"
                        className="w-full px-3 py-2 rounded-xl bg-stone-100 dark:bg-black/30 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 focus:outline-none focus:ring-2 focus:ring-[#7955AE] text-[#180B2B] dark:text-white"
                        required
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-bold text-stone-700 dark:text-stone-300">Years of Experience</label>
                      <input
                        type="number"
                        min="1"
                        max="70"
                        value={artisanExp}
                        onChange={(e) => setArtisanExp(parseInt(e.target.value) || 10)}
                        className="w-full px-3 py-2 rounded-xl bg-stone-100 dark:bg-black/30 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 focus:outline-none focus:ring-2 focus:ring-[#7955AE] text-[#180B2B] dark:text-white"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-bold text-stone-700 dark:text-stone-300">Phone / WhatsApp</label>
                      <input
                        type="text"
                        value={artisanContact}
                        onChange={(e) => setArtisanContact(e.target.value)}
                        placeholder="+91..."
                        className="w-full px-3 py-2 rounded-xl bg-stone-100 dark:bg-black/30 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 focus:outline-none focus:ring-2 focus:ring-[#7955AE] text-[#180B2B] dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-stone-700 dark:text-stone-300">
                      Personal Story & Traditional Technique
                    </label>
                    <textarea
                      value={artisanBio}
                      onChange={(e) => setArtisanBio(e.target.value)}
                      rows={3}
                      placeholder="Describe your family weaving/craft history, materials used, awards, and the products you create..."
                      className="w-full px-3 py-2 rounded-xl bg-stone-100 dark:bg-black/30 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 focus:outline-none focus:ring-2 focus:ring-[#7955AE] text-[#180B2B] dark:text-white resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-2 pt-2 border-t border-[#7955AE]/15">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2 rounded-xl text-stone-500 hover:text-stone-700"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl font-bold bg-[#7955AE] text-white hover:bg-[#613A9E] shadow-sm transition"
                    >
                      Register Artisan Profile
                    </button>
                  </div>
                </form>
              )}

              {/* TAB 3: SHARE A FOLK SONG OR DANCE */}
              {activeTab === 'song' && (
                <form onSubmit={handleSongSubmit} className="space-y-3.5 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="font-bold text-stone-700 dark:text-stone-300">
                        Song / Dance Title <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={songTitle}
                        onChange={(e) => setSongTitle(e.target.value)}
                        placeholder="e.g. Ranapa Geeta / Danda Nata Ballad"
                        className="w-full px-3 py-2 rounded-xl bg-stone-100 dark:bg-black/30 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 focus:outline-none focus:ring-2 focus:ring-[#7955AE] text-[#180B2B] dark:text-white"
                        required
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-bold text-stone-700 dark:text-stone-300">Language / Dialect</label>
                      <input
                        type="text"
                        value={songLanguage}
                        onChange={(e) => setSongLanguage(e.target.value)}
                        placeholder="e.g. Southern Odia (Ganjami) / Sambalpuri / Desia"
                        className="w-full px-3 py-2 rounded-xl bg-stone-100 dark:bg-black/30 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 focus:outline-none focus:ring-2 focus:ring-[#7955AE] text-[#180B2B] dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="font-bold text-stone-700 dark:text-stone-300">Village & District</label>
                      <input
                        type="text"
                        value={villageName}
                        onChange={(e) => setVillageName(e.target.value)}
                        placeholder="e.g. Nuagaon, Ganjam"
                        className="w-full px-3 py-2 rounded-xl bg-stone-100 dark:bg-black/30 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 focus:outline-none focus:ring-2 focus:ring-[#7955AE] text-[#180B2B] dark:text-white"
                        required
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-bold text-stone-700 dark:text-stone-300">Audio / Video Sample URL</label>
                      <input
                        type="url"
                        value={songAudioUrl}
                        onChange={(e) => setSongAudioUrl(e.target.value)}
                        placeholder="https://... (mp3, wav, YouTube link)"
                        className="w-full px-3 py-2 rounded-xl bg-stone-100 dark:bg-black/30 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 focus:outline-none focus:ring-2 focus:ring-[#7955AE] text-[#180B2B] dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-stone-700 dark:text-stone-300">
                      Traditional Lyrics / Meaning
                    </label>
                    <textarea
                      value={songLyrics}
                      onChange={(e) => setSongLyrics(e.target.value)}
                      rows={3}
                      placeholder="Add original lyrics in Odia or English translation, instruments played, and festival occasion..."
                      className="w-full px-3 py-2 rounded-xl bg-stone-100 dark:bg-black/30 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 focus:outline-none focus:ring-2 focus:ring-[#7955AE] text-[#180B2B] dark:text-white resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-2 pt-2 border-t border-[#7955AE]/15">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2 rounded-xl text-stone-500 hover:text-stone-700"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl font-bold bg-[#7955AE] text-white hover:bg-[#613A9E] shadow-sm transition"
                    >
                      Submit Folk Archive
                    </button>
                  </div>
                </form>
              )}

              {/* TAB 4: SHARE A VILLAGE RECIPE */}
              {activeTab === 'recipe' && (
                <form onSubmit={handleRecipeSubmit} className="space-y-3.5 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="font-bold text-stone-700 dark:text-stone-300">
                        Recipe / Dish Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={recipeName}
                        onChange={(e) => setRecipeName(e.target.value)}
                        placeholder="e.g. Ganjam Ambula Pakhala"
                        className="w-full px-3 py-2 rounded-xl bg-stone-100 dark:bg-black/30 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 focus:outline-none focus:ring-2 focus:ring-[#7955AE] text-[#180B2B] dark:text-white"
                        required
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-bold text-stone-700 dark:text-stone-300">Village & District</label>
                      <input
                        type="text"
                        value={villageName}
                        onChange={(e) => setVillageName(e.target.value)}
                        placeholder="e.g. Sanakhemundi, Ganjam"
                        className="w-full px-3 py-2 rounded-xl bg-stone-100 dark:bg-black/30 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 focus:outline-none focus:ring-2 focus:ring-[#7955AE] text-[#180B2B] dark:text-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-stone-700 dark:text-stone-300">Ingredients (Comma separated)</label>
                    <input
                      type="text"
                      value={recipeIngredients}
                      onChange={(e) => setRecipeIngredients(e.target.value)}
                      placeholder="e.g. Raw mangoes, mustard oil, badi, roasted cumin, rock salt"
                      className="w-full px-3 py-2 rounded-xl bg-stone-100 dark:bg-black/30 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 focus:outline-none focus:ring-2 focus:ring-[#7955AE] text-[#180B2B] dark:text-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-stone-700 dark:text-stone-300">Traditional Preparation Method</label>
                    <textarea
                      value={recipeMethod}
                      onChange={(e) => setRecipeMethod(e.target.value)}
                      rows={3}
                      placeholder="Describe the authentic earthen pot, woodfire, or sun-drying method..."
                      className="w-full px-3 py-2 rounded-xl bg-stone-100 dark:bg-black/30 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 focus:outline-none focus:ring-2 focus:ring-[#7955AE] text-[#180B2B] dark:text-white resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-2 pt-2 border-t border-[#7955AE]/15">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2 rounded-xl text-stone-500 hover:text-stone-700"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl font-bold bg-[#7955AE] text-white hover:bg-[#613A9E] shadow-sm transition"
                    >
                      Submit Village Recipe
                    </button>
                  </div>
                </form>
              )}
            </>
          )}

        </div>

      </div>
    </div>
  );
}
