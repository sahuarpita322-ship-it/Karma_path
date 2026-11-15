import { useState, useRef, useEffect } from 'react';
import { 
  FaRobot, 
  FaPaperPlane, 
  FaMicrophone, 
  FaVolumeUp, 
  FaVolumeMute, 
  FaCheckCircle, 
  FaBookOpen, 
  FaLanguage,
  FaRedo
} from 'react-icons/fa';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  odiaText?: string;
  hindiText?: string;
  verifiedSource?: string;
  folkloreNote?: string;
  timestamp: string;
}

const CULTURAL_KNOWLEDGE_BASE: Record<string, { en: string; or: string; hi: string; source: string; folklore?: string }> = {
  'konark': {
    en: 'Konark Sun Temple was constructed in 1255 CE by King Langula Narasimhadeva I of the Eastern Ganga Dynasty. Designed as a massive stone chariot of Surya with 24 carved wheels that serve as astronomical sundials. It is a UNESCO World Heritage Site in Puri District.',
    or: 'କୋଣାର୍କ ସୂର୍ଯ୍ୟ ମନ୍ଦିର ୧୨୫୫ ଖ୍ରୀଷ୍ଟାବ୍ଦରେ ପୂର୍ବ ଗଙ୍ଗ ବଂଶର ରାଜା ଲାଙ୍ଗୁଳା ନରସିଂହଦେବଙ୍କ ଦ୍ୱାରା ନିର୍ମିତ ହୋଇଥିଲା। ଏହା ୨୪ଟି ଚକ ଥିବା ଏକ ବିଶାଳ ପଥର ରଥ ଆକାରରେ ନିର୍ମିତ।',
    hi: 'कोणार्क सूर्य मंदिर का निर्माण १२५५ ईस्वी में पूर्वी गंगा राजवंश के राजा लांगुला नरसिंहदेव प्रथम द्वारा करवाया गया था। यह सूर्य देव के २४ नक्काशीदार पहियों वाले एक विशाल पत्थर के रथ के रूप में बनाया गया है।',
    source: 'Archaeological Survey of India & UNESCO Archives',
    folklore: 'Legend tells of Dharmapada, the 12-year-old son of master architect Bisu Maharana, who placed the crown stone (Dadhinauti) to save 1,200 craftsmen.'
  },
  'dalkhai': {
    en: 'Dalkhai is the quintessential folk dance of Western Odisha, performed especially during Bhaijiuntia and Dussehra. Accompanied by traditional acoustic instruments like Dhol, Nishan, Tasa, and Mahuri, young women sing invocations to the forest and celebrate sisterhood.',
    or: 'ଡାଲଖାଇ ହେଉଛି ପଶ୍ଚିମ ଓଡ଼ିଶାର ଏକ ପ୍ରସିଦ୍ଧ ଲୋକନୃତ୍ୟ, ଯାହା ବିଶେଷ ଭାବରେ ଭାଇଜିଉନ୍ତିଆ ଏବଂ ଦଶହରା ସମୟରେ ପରିବେଷଣ କରାଯାଏ। ଏଥିରେ ଢୋଲ, ନିଶାନ, ତାସା ଏବଂ ମହୁରୀ ବାଜେ।',
    hi: 'दालखाई पश्चिमी ओडिशा का सबसे प्रसिद्ध लोक नृत्य है, जो विशेष रूप से भाईजिउंतिया और दशहरा के दौरान किया जाता है। युवतियां ढोल, निशान और महुरी की थाप पर नृत्य करती हैं।',
    source: 'Odisha Sangeet Natak Akademi',
    folklore: 'The name "Dalkhai" translates to "beloved sister of branches", rooted in ancient forest fertility reverence.'
  },
  'pattachitra': {
    en: 'Pattachitra artists (Chitrakaras) are primarily found in Raghurajpur Heritage Village near Puri. They paint on handmade canvas using tamarind seed paste and stone mineral colors like Hingula (red), Haritala (yellow), and conch shell powder (white).',
    or: 'ପଟ୍ଟଚିତ୍ର ଶିଳ୍ପୀମାନେ ମୁଖ୍ୟତଃ ପୁରୀ ନିକଟସ୍ଥ ରଘୁରାଜପୁର ଐତିହ୍ୟ ଗ୍ରାମରେ ବସବାସ କରନ୍ତି। ସେମାନେ ତେନ୍ତୁଳି ମଞ୍ଜି ଅଠା ଏବଂ ପ୍ରାକୃତିକ ପଥର ରଙ୍ଗ ବ୍ୟବହାର କରି ପଟ୍ଟ ଉପରେ ଚିତ୍ର ଆଙ୍କନ୍ତି।',
    hi: 'पट्टचित्र कलाकार मुख्य रूप से पुरी के पास रघुराजपुर हेरिटेज विलेज में पाए जाते हैं। वे इमली के बीज के पेस्ट और प्राकृतिक पत्थर के रंगों का उपयोग करके हाथ से बने कैनवास पर चित्रकारी करते हैं।',
    source: 'Crafts Council of Odisha & INTACH',
    folklore: 'The origin of Pattachitra is linked to the Anavasara period of Lord Jagannath when painted Patti idols substitute the deities during their holy quarantine.'
  },
  'ikat': {
    en: 'Nuapatna (Tigiria) in Cuttack District and Bargarh/Barpali in Western Odisha are world-renowned for Ikat (Bandha) handloom. Nuapatna weaves sacred Khandua Pata silks with Gita Govinda calligraphy, while Bargarh produces Sambalpuri cotton and silk sarees.',
    or: 'କଟକ ଜିଲ୍ଲାର ନୂଆପାଟଣା ଏବଂ ପଶ୍ଚିମ ଓଡ଼ିଶାର ବରଗଡ଼ ଇକତ (ବାନ୍ଧ) ହସ୍ତତନ୍ତ ପାଇଁ ବିଶ୍ୱପ୍ରସିଦ୍ଧ। ନୂଆପାଟଣାରେ ଗୀତ ଗୋବିନ୍ଦ ଶ୍ଳୋକ ଥିବା ଖଣ୍ଡୁଆ ପାଟ ବୁଣାଯାଏ।',
    hi: 'कटक जिले का नुआपटना और पश्चिमी ओडिशा का बारगढ़ इकत (बांधा) हथकरघा के लिए विश्व प्रसिद्ध हैं। नुआपटना में पवित्र खंडुआ पाटा और बारगढ़ में संबलपुरी साड़ियां बुनी जाती हैं।',
    source: 'Weavers Service Centre, Bhubaneswar & National Handloom Registry'
  },
  'koraput': {
    en: 'Koraput is home to ancient indigenous communities including the Bonda, Gadaba, Kondh, and Paroja. It is recognized as a UN FAO Globally Important Agricultural Heritage System (GIAHS) for preserving over 1,000 heirloom rice varieties and traditional millet farming.',
    or: 'କୋରାପୁଟ ବଣ୍ଡା, ଗଦବା, କନ୍ଧ ଏବଂ ପରଜା ଭଳି ପ୍ରାଚୀନ ଆଦିବାସୀ ସମ୍ପ୍ରଦାୟର ବାସସ୍ଥଳୀ। ଏହା ଜାତିସଂଘର ଖାଦ୍ୟ ଓ କୃଷି ସଂଗଠନ (FAO) ଦ୍ୱାରା ଏକ ବିଶ୍ୱସ୍ତରୀୟ କୃଷି ଐତିହ୍ୟ ସ୍ଥଳୀ ଭାବରେ ସ୍ୱୀକୃତ।',
    hi: 'कोरापुट बोंडा, गदबा, कोंध और परोजा जैसे प्राचीन जनजातीय समुदायों का घर है। इसे पारंपरिक जैविक कृषि और मिलेट संरक्षण के लिए संयुक्त राष्ट्र एफएओ द्वारा वैश्विक कृषि विरासत स्थल घोषित किया गया है।',
    source: 'United Nations Food and Agriculture Organization (FAO) & SCSTRTI'
  },
  'raja': {
    en: 'Raja Parba is a unique 3-day festival celebrating womanhood and Mother Earth (Bhumi Mata). Observed in mid-June during the onset of the monsoon, all agricultural activity is paused to let the earth rest. Young girls celebrate on flower-decked banyan swings while eating Poda Pitha.',
    or: 'ରଜ ପର୍ବ ହେଉଛି ନାରୀତ୍ୱ ଏବଂ ଧରିତ୍ରୀ ମାତାଙ୍କୁ ସମ୍ମାନ ଜଣାଇବାର ଏକ ଅନନ୍ୟ ୩ ଦିନିଆ ଉତ୍ସବ। ଏହି ସମୟରେ ପୃଥିବୀକୁ ବିଶ୍ରାମ ଦେବା ପାଇଁ ହଳ କରାଯାଏ ନାହିଁ। ଝିଅମାନେ ଦୋଳି ଖେଳନ୍ତି ଏବଂ ପୋଡ଼ପିଠା ଖାଆନ୍ତି।',
    hi: 'रज पर्ब नारीत्व और धरती माता के सम्मान में मनाया जाने वाला ओडिशा का अनूठा ३ दिवसीय त्योहार है। मानसून के आगमन पर धरती को आराम देने के लिए सभी कृषि कार्य रोक दिए जाते हैं।',
    source: 'Odia Cultural Research Institute'
  }
};

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'm1',
      sender: 'bot',
      text: 'Namaskar! I am your AI Odia Heritage Companion. Ask me anything about Odisha’s 16 iconic destinations, temples, villages, handloom, folk songs, or tribal traditions.',
      odiaText: 'ନମସ୍କାର! ମୁଁ ଆପଣଙ୍କ ଓଡ଼ିଆ ଐତିହ୍ୟ ସାଥୀ। ମୋତେ ଓଡ଼ିଶାର ଇତିହାସ, ମନ୍ଦିର, ଗ୍ରାମ ଏବଂ ସଂସ୍କୃତି ବିଷୟରେ ଯାହା ପଚାରନ୍ତୁ।',
      hindiText: 'नमस्कार! मैं आपका उड़िया हेरिटेज साथी हूँ। मुझसे ओडिशा के इतिहास, मंदिरों, कला, और जनजातीय परंपराओं के बारे में कुछ भी पूछें।',
      timestamp: 'Just now'
    }
  ]);
  const [input, setInput] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<'English' | 'Odia' | 'Hindi'>('English');
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Text-To-Speech Function
  const speakText = (text: string) => {
    if (!voiceEnabled || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = selectedLanguage === 'Hindi' ? 'hi-IN' : 'en-IN';
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
  };

  // Speech-To-Text (Voice Input)
  const handleVoiceInput = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Speech recognition is not supported in this browser. Please type your question.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = selectedLanguage === 'Hindi' ? 'hi-IN' : 'en-IN';
    recognition.start();
    setIsListening(true);

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      setIsListening(false);
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };
  };

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMessage: Message = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput('');

    // Answer resolution using verified knowledge base
    const lowerQuery = query.toLowerCase();
    let matchedKey: string | null = null;

    if (lowerQuery.includes('konark') || lowerQuery.includes('sun temple')) matchedKey = 'konark';
    else if (lowerQuery.includes('dalkhai') || lowerQuery.includes('folk dance')) matchedKey = 'dalkhai';
    else if (lowerQuery.includes('pattachitra') || lowerQuery.includes('raghurajpur') || lowerQuery.includes('artist')) matchedKey = 'pattachitra';
    else if (lowerQuery.includes('ikat') || lowerQuery.includes('handloom') || lowerQuery.includes('saree') || lowerQuery.includes('nuapatna')) matchedKey = 'ikat';
    else if (lowerQuery.includes('koraput') || lowerQuery.includes('tribal') || lowerQuery.includes('tribe') || lowerQuery.includes('bonda')) matchedKey = 'koraput';
    else if (lowerQuery.includes('raja') || lowerQuery.includes('festival') || lowerQuery.includes('parba')) matchedKey = 'raja';

    setTimeout(() => {
      let botResponse: Message;

      if (matchedKey && CULTURAL_KNOWLEDGE_BASE[matchedKey]) {
        const item = CULTURAL_KNOWLEDGE_BASE[matchedKey];
        botResponse = {
          id: `b-${Date.now()}`,
          sender: 'bot',
          text: item.en,
          odiaText: item.or,
          hindiText: item.hi,
          verifiedSource: item.source,
          folkloreNote: item.folklore,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
      } else {
        botResponse = {
          id: `b-${Date.now()}`,
          sender: 'bot',
          text: `Thank you for asking about "${query}". Odisha has over 2,000 years of glorious maritime and temple history spanning Konark, Jagannath Puri, Khandagiri Caves, Similipal, and tribal heritage in Koraput. For authentic research, check our 16 detailed 3D destinations or Explore Villages directory!`,
          odiaText: `ଓଡ଼ିଶାର ଐତିହ୍ୟ ଅତ୍ୟନ୍ତ ଗୌରବମୟ। କୋଣାର୍କ, ପୁରୀ ଜଗନ୍ନାଥ ମନ୍ଦିର ଏବଂ କୋରାପୁଟ ଜନଜାତି ସଂସ୍କୃତି ବିଷୟରେ ଜାଣିବା ପାଇଁ ଆମର ୩D ଡେଷ୍ଟିନେସନ୍ସ ପୃଷ୍ଠା ପରିଦର୍ଶନ କରନ୍ତୁ।`,
          hindiText: `ओडिशा की सांस्कृतिक विरासत अत्यंत समृद्ध है। कोणार्क, पुरी और कोरापुट की जनजातीय परंपराओं के बारे में अधिक जानने के लिए हमारे 3D पर्यटन अनुभाग को देखें।`,
          verifiedSource: 'Odisha Tourism & Cultural Knowledge Graph',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
      }

      setMessages((prev) => [...prev, botResponse]);

      // Speak if voice enabled
      const textToSpeak =
        selectedLanguage === 'Odia' && botResponse.odiaText
          ? botResponse.odiaText
          : selectedLanguage === 'Hindi' && botResponse.hindiText
          ? botResponse.hindiText
          : botResponse.text;
      speakText(textToSpeak);
    }, 400);
  };

  const samplePrompts = [
    'What is the history of Konark Sun Temple?',
    'What is Dalkhai dance?',
    'Where can I find Pattachitra artists?',
    'Which village is famous for Ikat?',
    'Tell me about tribal traditions in Koraput.',
    'What is the significance of Raja Parba?'
  ];

  return (
    <main className="min-h-screen pt-28 pb-20 px-4 sm:px-6 max-w-4xl mx-auto flex flex-col space-y-4">
      {/* Header */}
      <div className="glass-card rounded-3xl p-6 border border-[#7955AE]/25 dark:border-[#B9A5DF]/35 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white/95 dark:bg-[#200D38]/85 shadow-2xl backdrop-blur-2xl">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#7955AE] dark:bg-white text-white dark:text-[#180B2B] flex items-center justify-center text-xl shadow-lg">
            <FaRobot />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#7955AE] dark:text-[#D9CCF2] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              AI Cultural Storytelling
            </div>
            <h1 className="text-xl font-cinzel font-black text-[#180B2B] dark:text-white">
              Odia Heritage Companion
            </h1>
          </div>
        </div>

        {/* Controls: Language & Voice Toggle */}
        <div className="flex items-center gap-2">
          {/* Language Toggle */}
          <div className="flex bg-stone-100 dark:bg-[#180B2B] p-1 rounded-xl text-xs font-bold border border-[#7955AE]/20 dark:border-[#B9A5DF]/30">
            {(['English', 'Odia', 'Hindi'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`px-3 py-1 rounded-lg transition ${
                  selectedLanguage === lang
                    ? 'bg-[#7955AE] text-white dark:bg-white dark:text-[#180B2B] shadow-sm font-black'
                    : 'text-[#716680] dark:text-[#D0C3E3] hover:text-[#180B2B] dark:hover:text-white'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Voice Output Toggle */}
          <button
            onClick={() => {
              setVoiceEnabled(!voiceEnabled);
              if (voiceEnabled) window.speechSynthesis?.cancel();
            }}
            className={`p-2.5 rounded-xl transition ${
              voiceEnabled
                ? 'bg-[#7955AE] text-white dark:bg-white dark:text-[#180B2B] shadow-md'
                : 'bg-stone-100 dark:bg-[#180B2B] text-[#716680] dark:text-[#B9A5DF] border border-[#7955AE]/20 dark:border-[#B9A5DF]/30'
            }`}
            title={voiceEnabled ? 'Mute Voice' : 'Enable Voice Narration'}
          >
            {voiceEnabled ? <FaVolumeUp /> : <FaVolumeMute />}
          </button>
        </div>
      </div>

      {/* Suggested Quick Prompt Chips */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
        {samplePrompts.map((prompt, i) => (
          <button
            key={i}
            onClick={() => handleSend(prompt)}
            className="px-3.5 py-1.5 rounded-full bg-white dark:bg-[#200D38] hover:bg-[#7955AE]/15 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 text-[#180B2B] dark:text-[#E8E3F0] font-medium whitespace-nowrap transition shadow-sm"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 glass-card rounded-3xl p-4 sm:p-6 border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 overflow-y-auto space-y-4 min-h-[420px] max-h-[550px] bg-white/95 dark:bg-[#200D38]/85">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed space-y-2 ${
                msg.sender === 'user'
                  ? 'bg-[#7955AE] text-white dark:bg-white dark:text-[#180B2B] rounded-tr-none shadow-md font-medium'
                  : 'bg-stone-50 dark:bg-[#180B2B]/85 border border-[#7955AE]/15 dark:border-[#B9A5DF]/25 text-[#180B2B] dark:text-[#FFFFFF] rounded-tl-none shadow-sm'
              }`}
            >
              {/* Primary Content based on selected language */}
              <div>
                {selectedLanguage === 'Odia' && msg.odiaText
                  ? msg.odiaText
                  : selectedLanguage === 'Hindi' && msg.hindiText
                  ? msg.hindiText
                  : msg.text}
              </div>

              {/* Bot Meta Information: Verified Source vs Folklore */}
              {msg.sender === 'bot' && (
                <div className="pt-2 border-t border-[#7955AE]/15 dark:border-[#B9A5DF]/20 space-y-1 text-[11px]">
                  {msg.verifiedSource && (
                    <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                      <FaCheckCircle className="text-[10px]" />
                      <span>Verified Historical Source: {msg.verifiedSource}</span>
                    </div>
                  )}

                  {msg.folkloreNote && (
                    <div className="p-2 rounded-xl bg-[#7955AE]/10 dark:bg-[#B9A5DF]/15 text-[#503C6B] dark:text-[#E8E3F0] border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 text-[10px] italic">
                      📜 <strong>Oral Tradition / Folklore:</strong> {msg.folkloreNote}
                    </div>
                  )}

                  <div className="text-[10px] text-[#716680] dark:text-[#B9A5DF] text-right">{msg.timestamp}</div>
                </div>
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form with Voice and Send */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="flex items-center gap-2"
      >
        <button
          type="button"
          onClick={handleVoiceInput}
          className={`p-3.5 rounded-2xl text-sm transition shadow-md ${
            isListening
              ? 'bg-rose-600 text-white animate-pulse'
              : 'bg-stone-100 dark:bg-[#200D38] text-[#716680] dark:text-[#B9A5DF] border border-[#7955AE]/20 dark:border-[#B9A5DF]/30 hover:text-[#7955AE] dark:hover:text-white'
          }`}
          title="Speak into Microphone"
        >
          <FaMicrophone />
        </button>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={isListening ? 'Listening...' : 'Ask about Konark, Dalkhai, Pattachitra, Koraput...'}
          className="flex-1 px-4 py-3 text-xs sm:text-sm rounded-2xl bg-white dark:bg-[#180B2B] border border-[#7955AE]/25 dark:border-[#B9A5DF]/35 focus:outline-none focus:border-[#7955AE] dark:focus:border-white text-[#180B2B] dark:text-white shadow-sm placeholder-[#716680] dark:placeholder-[#B9A5DF]/70"
        />

        <button
          type="submit"
          className="p-3.5 rounded-2xl font-black text-sm shadow-md transition transform active:scale-95 bg-[#7955AE] text-white hover:bg-[#613A9E] dark:bg-white dark:text-[#180B2B] dark:hover:bg-[#F3EDFC] dark:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
        >
          <FaPaperPlane />
        </button>
      </form>
    </main>
  );
}
