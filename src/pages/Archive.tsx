import { useState, useMemo, useRef } from 'react';
import { 
  FaMusic, 
  FaMicrophone, 
  FaPlay, 
  FaPause, 
  FaStop, 
  FaSearch, 
  FaFilter, 
  FaCheckCircle, 
  FaGlobeAmericas, 
  FaVolumeUp, 
  FaFileAudio, 
  FaHeart, 
  FaDownload, 
  FaTimes, 
  FaShieldAlt,
  FaUtensils,
  FaMask
} from 'react-icons/fa';
import { useStore, FolkSong } from '../context/store';
import { Link } from 'react-router-dom';

export function Archive() {
  const folkSongs = useStore((s) => s.folkSongs);
  const recordedSongs = useStore((s) => s.recordedSongs);
  const submitRecordedSong = useStore((s) => s.submitRecordedSong);
  const currentUser = useStore((s) => s.currentUser);

  const [activeTab, setActiveTab] = useState<'music' | 'record' | 'dances' | 'recipes'>('music');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDistrict, setSelectedDistrict] = useState('All');

  // Audio Player State
  const [currentSong, setCurrentSong] = useState<FolkSong | null>(folkSongs[0] || null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Audio Recorder State (Sing & Preserve Your Heritage)
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(null);
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<any>(null);

  // Recording Form Fields
  const [songTitle, setSongTitle] = useState('');
  const [recLanguage, setRecLanguage] = useState('Sambalpuri');
  const [recDialect, setRecDialect] = useState('Kosali');
  const [recVillage, setRecVillage] = useState('');
  const [recLyrics, setRecLyrics] = useState('');
  const [recBackground, setRecBackground] = useState('');
  const [recSubmitted, setRecSubmitted] = useState(false);

  // Audio Player Control
  const togglePlay = (song: FolkSong) => {
    if (currentSong?.id === song.id && isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
      }
    }
  };

  // Filter lists
  const languages = useMemo(() => ['All', 'Sambalpuri', 'Kui', 'Desia', 'Odia', 'Ho', 'Santali', 'Remo / Bonda'], []);
  const categories = useMemo(() => ['All', 'Dalkhai', 'Rasarkeli', 'Kui', 'Desia', 'Kela Keluni', 'Ho/Munda', 'Bonda', 'Regional'], []);
  const districts = useMemo(() => ['All', 'Bargarh', 'Sambalpur', 'Kandhamal', 'Koraput', 'Cuttack', 'Mayurbhanj'], []);

  const filteredSongs = useMemo(() => {
    return folkSongs.filter((song) => {
      const matchLang = selectedLanguage === 'All' || song.language === selectedLanguage;
      const matchCat = selectedCategory === 'All' || song.category === selectedCategory;
      const matchDist = selectedDistrict === 'All' || song.district === selectedDistrict;
      const matchSearch =
        song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
        song.village.toLowerCase().includes(searchQuery.toLowerCase()) ||
        song.festival.toLowerCase().includes(searchQuery.toLowerCase());
      return matchLang && matchCat && matchDist && matchSearch;
    });
  }, [folkSongs, selectedLanguage, selectedCategory, selectedDistrict, searchQuery]);

  // Web Audio Recording using browser MediaRecorder API
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const url = URL.createObjectURL(audioBlob);
        setRecordedAudioUrl(url);
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
      setRecordingSeconds(0);

      timerRef.current = setInterval(() => {
        setRecordingSeconds((prev) => prev + 1);
      }, 1000);
    } catch (err) {
      alert('Microphone access is required to sing and record your folk song. Please allow microphone permissions.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      clearInterval(timerRef.current);
      // Stop media tracks
      mediaRecorderRef.current.stream.getTracks().forEach((track) => track.stop());
    }
  };

  const handleUploadRecording = (e: React.FormEvent) => {
    e.preventDefault();
    if (!songTitle || !recordedAudioUrl) {
      alert('Please enter a song title and record an audio snippet first.');
      return;
    }

    submitRecordedSong({
      title: songTitle,
      language: recLanguage,
      dialect: recDialect,
      village: recVillage || 'Odisha Heritage Village',
      lyrics: recLyrics,
      culturalBackground: recBackground,
      audioUrl: recordedAudioUrl
    });

    setRecSubmitted(true);
    setTimeout(() => {
      setRecSubmitted(false);
      setRecordedAudioUrl(null);
      setSongTitle('');
      setRecLyrics('');
      setRecBackground('');
      setActiveTab('music');
    }, 2500);
  };

  // Traditional Dances & Rituals data
  const culturalDances = [
    {
      name: 'Gotipua Dance',
      region: 'Raghurajpur / Puri',
      desc: 'Ancient acrobatic dance by young boys in female attire praised as the precursor of classical Odissi. Performed to praise Lord Jagannath.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
      privacy: 'Public'
    },
    {
      name: 'Mayurbhanj Chhau',
      region: 'Mayurbhanj / Northern Odisha',
      desc: 'Vigorous martial dance featuring shield and sword choreography, acrobatic leaps, and nature-inspired postures without masks.',
      image: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?auto=format&fit=crop&w=800&q=80',
      privacy: 'Public'
    },
    {
      name: 'Dalkhai Folk Dance',
      region: 'Western Odisha / Sambalpur',
      desc: 'Celebrated by women during Bhaijiuntia and Dussehra to the thunderous acoustic beats of Dhol, Nishan, and Mahuri instruments.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      privacy: 'Public'
    },
    {
      name: 'Bonda Hill Sacred Invocation',
      region: 'Bonda Hills / Malkangiri',
      desc: 'Sacred mountain prayer held before seasonal foraging. Respectfully cataloged with community consent.',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
      privacy: 'Community Protected'
    }
  ];

  // Traditional Recipes data
  const traditionalRecipes = [
    {
      name: 'Chhena Poda (The Burnt Cheese Delicacy)',
      origin: 'Nayagarh / Puri',
      desc: 'World-famous caramelized fresh cottage cheese cake baked slowly wrapped in Sal leaves.',
      ingredients: 'Fresh Chhena, cardamom, sugar, semolina, ghee, sal leaves.'
    },
    {
      name: 'Dalma (Sacred Lentil & Vegetable Stew)',
      origin: 'Odisha Temple Kitchens',
      desc: 'Nutritious slow-cooked toor dal infused with raw papaya, pumpkin, drumsticks, roasted cumin, and dried red chilies in desi ghee.',
      ingredients: 'Arhar dal, pumpkin, elephant apple (Ouu), raw banana, cumin, ghee.'
    },
    {
      name: 'Pakhala Bhata with Badi Chura',
      origin: 'Rural Farming Villages across Odisha',
      desc: 'Fermented cooling water rice tempered with curry leaves, mustard seeds, green chilies, served with sun-dried lentil Badi.',
      ingredients: 'Cooked rice, curd, water, green chilies, roasted urad dal badi, mustard.'
    }
  ];

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Hidden audio element for sample playback */}
      <audio
        ref={audioRef}
        src={currentSong?.audioSampleUrl}
        onTimeUpdate={() => {
          if (audioRef.current) {
            const p = (audioRef.current.currentTime / (audioRef.current.duration || 1)) * 100;
            setAudioProgress(p);
          }
        }}
        onEnded={() => setIsPlaying(false)}
      ></audio>

      {/* Header Banner */}
      <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 mb-8 border border-purple-500/25 bg-gradient-to-r from-purple-950/40 via-amber-950/25 to-stone-900/40 backdrop-blur-xl">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/20 text-purple-400 border border-purple-500/30 mb-4">
            <FaMusic /> ODISHA CULTURAL VAULT
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            Preserve Our <span className="bg-gradient-to-r from-purple-400 via-amber-300 to-red-400 bg-clip-text text-transparent">Living Roots</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            Odisha’s definitive digital archive of folk music, indigenous languages, tribal musical dialects, classical dances, oral histories, and living traditions.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => setActiveTab('music')}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition flex items-center gap-2 ${
                activeTab === 'music'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800'
              }`}
            >
              <FaMusic /> Folk Music Archive ({folkSongs.length})
            </button>

            <button
              onClick={() => setActiveTab('record')}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition flex items-center gap-2 ${
                activeTab === 'record'
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800'
              }`}
            >
              <FaMicrophone /> Sing & Preserve Your Heritage
            </button>

            <button
              onClick={() => setActiveTab('dances')}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition flex items-center gap-2 ${
                activeTab === 'dances'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800'
              }`}
            >
              <FaMask /> Dances & Rituals
            </button>

            <button
              onClick={() => setActiveTab('recipes')}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition flex items-center gap-2 ${
                activeTab === 'recipes'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800'
              }`}
            >
              <FaUtensils /> Traditional Recipes
            </button>
          </div>
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      {/* VIEW: FOLK MUSIC ARCHIVE */}
      {activeTab === 'music' && (
        <div className="space-y-8">
          {/* Active Sticky Player & Lyrics Display */}
          {currentSong && (
            <div className="glass-card rounded-3xl p-6 border-2 border-purple-500/30 bg-gradient-to-r from-purple-950/30 to-amber-950/20 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left: Player Controls */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => togglePlay(currentSong)}
                      className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-amber-500 hover:from-purple-500 hover:to-amber-400 text-white flex items-center justify-center text-2xl shadow-xl transition transform active:scale-95"
                    >
                      {isPlaying ? <FaPause /> : <FaPlay className="ml-1" />}
                    </button>
                    <div>
                      <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                        Now Playing ({currentSong.dialect})
                      </div>
                      <h3 className="text-xl font-black text-slate-900 dark:text-white leading-tight">
                        {currentSong.title}
                      </h3>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        By {currentSong.artist} · {currentSong.village}, {currentSong.district}
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div>
                    <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-amber-400"
                        style={{ width: `${audioProgress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                      <span>Live Acoustic Playback</span>
                      <span>Category: {currentSong.category}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800/80 text-xs text-slate-600 dark:text-slate-300">
                    <strong>Cultural Significance:</strong>
                    <p className="text-[11px] mt-1 leading-relaxed">{currentSong.culturalSignificance}</p>
                  </div>
                </div>

                {/* Right: Lyrics in Original Dialect and English Translation */}
                <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                    <div className="text-xs font-bold text-purple-400 mb-2 flex items-center justify-between">
                      <span>Original Dialect Lyrics ({currentSong.language})</span>
                      <span className="text-[10px] text-amber-400">{currentSong.festival}</span>
                    </div>
                    <pre className="text-xs text-slate-700 dark:text-slate-300 font-sans whitespace-pre-wrap leading-relaxed">
                      {currentSong.lyrics}
                    </pre>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                    <div className="text-xs font-bold text-emerald-400 mb-2">
                      English Translation & Meaning
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed italic whitespace-pre-wrap">
                      {currentSong.lyricsEnglish}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Search & Filter Bar */}
          <div className="glass-card rounded-2xl p-4 flex flex-col md:flex-row gap-3 items-center justify-between border border-purple-500/20">
            <div className="relative w-full md:w-80">
              <FaSearch className="absolute left-3.5 top-3.5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Dalkhai, Kui, Sambalpuri songs..."
                className="w-full pl-10 pr-4 py-2 text-sm rounded-xl bg-slate-100 dark:bg-[#161622] border border-slate-300 dark:border-slate-800 focus:outline-none focus:border-purple-500 text-slate-900 dark:text-white"
              />
            </div>

            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="px-3 py-2 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-[#161622] border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-200"
              >
                {languages.map((l) => (
                  <option key={l} value={l}>
                    Language: {l}
                  </option>
                ))}
              </select>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-[#161622] border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-200"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    Category: {c}
                  </option>
                ))}
              </select>

              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="px-3 py-2 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-[#161622] border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-200"
              >
                {districts.map((d) => (
                  <option key={d} value={d}>
                    District: {d}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Songs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredSongs.map((song) => {
              const isSelected = currentSong?.id === song.id;
              return (
                <div
                  key={song.id}
                  onClick={() => setCurrentSong(song)}
                  className={`glass-card rounded-2xl p-4 border transition-all duration-300 flex items-center justify-between gap-4 cursor-pointer ${
                    isSelected
                      ? 'border-purple-500 bg-purple-500/10'
                      : 'border-purple-500/20 hover:border-purple-500/40'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePlay(song);
                      }}
                      className={`w-12 h-12 rounded-xl flex items-center justify-center text-white text-sm shadow-md transition ${
                        isSelected && isPlaying
                          ? 'bg-amber-500'
                          : 'bg-purple-600 hover:bg-purple-500'
                      }`}
                    >
                      {isSelected && isPlaying ? <FaPause /> : <FaPlay className="ml-0.5" />}
                    </button>
                    <div>
                      <div className="text-xs font-bold text-amber-500">
                        {song.dialect} · {song.category}
                      </div>
                      <h4 className="text-sm font-black text-slate-900 dark:text-white">
                        {song.title}
                      </h4>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        {song.artist} ({song.village}, {song.district})
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] font-bold text-emerald-500 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      Verified
                    </span>
                    <div className="text-[10px] text-slate-400 mt-1">{song.festival}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* VIEW: RECORD YOUR OWN FOLK SONG (Sing & Preserve Your Heritage) */}
      {activeTab === 'record' && (
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-red-500/30 max-w-2xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 rounded-full bg-red-600/20 text-red-500 mx-auto flex items-center justify-center text-2xl shadow-inner">
              <FaMicrophone />
            </div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              Sing & Preserve Your Heritage
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              Preserve your grandmother’s lullaby, village farming ballads, or tribal ritual chants. Record directly using your browser microphone and submit to the community vault.
            </p>
          </div>

          {recSubmitted ? (
            <div className="p-6 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-center space-y-2">
              <FaCheckCircle className="text-4xl text-emerald-400 mx-auto" />
              <h4 className="text-lg font-bold text-white">Folk Song Uploaded Successfully!</h4>
              <p className="text-xs text-slate-300">
                Your recording has entered the community verification queue. Once approved, you will earn +30 Karma Points!
              </p>
            </div>
          ) : (
            <form onSubmit={handleUploadRecording} className="space-y-4">
              {/* Audio Recorder Controls */}
              <div className="p-6 rounded-2xl bg-slate-100 dark:bg-[#161624] border border-slate-200 dark:border-slate-800 text-center space-y-4">
                <div className="text-xs font-bold text-slate-400">
                  {isRecording ? 'Recording in progress...' : recordedAudioUrl ? 'Recording Complete!' : 'Ready to Record'}
                </div>

                <div className="text-3xl font-mono font-black text-red-500">
                  00:{recordingSeconds < 10 ? `0${recordingSeconds}` : recordingSeconds}
                </div>

                <div className="flex justify-center gap-3">
                  {!isRecording ? (
                    <button
                      type="button"
                      onClick={startRecording}
                      className="px-6 py-3 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg transition transform active:scale-95"
                    >
                      <FaMicrophone /> Start Recording
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={stopRecording}
                      className="px-6 py-3 rounded-2xl bg-slate-900 text-white font-bold text-xs flex items-center gap-2 shadow-lg animate-pulse"
                    >
                      <FaStop /> Stop Recording
                    </button>
                  )}
                </div>

                {recordedAudioUrl && (
                  <div className="pt-2">
                    <div className="text-xs font-bold text-emerald-500 mb-1">Listen to your recording:</div>
                    <audio controls src={recordedAudioUrl} className="mx-auto w-full max-w-md h-10"></audio>
                  </div>
                )}
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Song Title
                  </label>
                  <input
                    required
                    placeholder="E.g. Rasarkeli Chhanda"
                    value={songTitle}
                    onChange={(e) => setSongTitle(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-[#161622] border border-slate-300 dark:border-slate-800"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Language or Dialect
                  </label>
                  <select
                    value={recLanguage}
                    onChange={(e) => setRecLanguage(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-[#161622] border border-slate-300 dark:border-slate-800"
                  >
                    <option>Sambalpuri</option>
                    <option>Kui</option>
                    <option>Desia</option>
                    <option>Odia</option>
                    <option>Ho</option>
                    <option>Santali</option>
                    <option>Bonda / Remo</option>
                    <option>Unknown / Needs Community Identification</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Village of Origin
                  </label>
                  <input
                    placeholder="E.g. Barpali, Kotpad"
                    value={recVillage}
                    onChange={(e) => setRecVillage(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-[#161622] border border-slate-300 dark:border-slate-800"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Regional Dialect / Community
                  </label>
                  <input
                    placeholder="E.g. Kosali, Mirgan community"
                    value={recDialect}
                    onChange={(e) => setRecDialect(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-[#161622] border border-slate-300 dark:border-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Lyrics (Odia or English script)
                </label>
                <textarea
                  rows={3}
                  placeholder="Enter the words or phonetic phrases..."
                  value={recLyrics}
                  onChange={(e) => setRecLyrics(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-100 dark:bg-[#161622] border border-slate-300 dark:border-slate-800"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Cultural Story / Background
                </label>
                <textarea
                  rows={2}
                  placeholder="When is this sung? Who taught you this song?"
                  value={recBackground}
                  onChange={(e) => setRecBackground(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-100 dark:bg-[#161622] border border-slate-300 dark:border-slate-800"
                ></textarea>
              </div>

              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-[10px] text-purple-700 dark:text-purple-300">
                🛡️ <strong>Cultural Privacy Notice:</strong> Sacred, secret, or restricted tribal chants must not be submitted without explicit community permission.
              </div>

              <button
                type="submit"
                disabled={!recordedAudioUrl}
                className={`w-full py-3 rounded-2xl font-bold text-xs shadow-md transition ${
                  recordedAudioUrl
                    ? 'bg-red-600 hover:bg-red-500 text-white cursor-pointer'
                    : 'bg-slate-700 text-slate-400 cursor-not-allowed'
                }`}
              >
                Submit Recording for Community Verification (+30 KT)
              </button>
            </form>
          )}
        </div>
      )}

      {/* VIEW: DANCES & RITUALS */}
      {activeTab === 'dances' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {culturalDances.map((dance, i) => (
            <div
              key={i}
              className="glass-card rounded-3xl overflow-hidden border border-purple-500/20 group hover:-translate-y-1 transition duration-300"
            >
              <div className="h-48 w-full overflow-hidden bg-slate-900 relative">
                <img
                  src={dance.image}
                  alt={dance.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-black/60 text-slate-200 backdrop-blur-md">
                  {dance.privacy}
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="text-[11px] font-bold text-amber-400">{dance.region}</div>
                  <h3 className="text-xl font-black text-white">{dance.name}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {dance.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* VIEW: TRADITIONAL RECIPES */}
      {activeTab === 'recipes' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {traditionalRecipes.map((rec, i) => (
            <div key={i} className="glass-card rounded-3xl p-6 border border-purple-500/20 space-y-3">
              <div className="text-xs font-bold text-amber-500">{rec.origin}</div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white">{rec.name}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{rec.desc}</p>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
                <strong>Key Ingredients:</strong> {rec.ingredients}
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
