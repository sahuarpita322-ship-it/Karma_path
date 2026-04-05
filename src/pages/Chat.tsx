import { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../components/ChatMessage';

export function Chat() {
  const [language, setLanguage] = useState<'English' | 'Hindi' | 'Marathi' | 'Odia'>('English');
  const [messages, setMessages] = useState([{ id:'m1', user:'bot', text:'Hi! I am your Free Cultural Guide. Ask me about any historical place, and I will find information for you!' }] as Array<{id:string; user:'bot'|'user'; text:string; image?:string}>);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [voiceOn, setVoiceOn] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Cleanup voice when leaving the page
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const send = async () => {
    if (!input.trim()) return;
    const userText = input;
    
    setMessages((prev) => [...prev, { id: `u${Date.now()}`, user: 'user', text: userText }]);
    setInput('');
    setIsLoading(true);

    try {
      // Map language selection to Wikipedia language codes
      let wikiLang = 'en';
      if (language === 'Hindi') wikiLang = 'hi';
      else if (language === 'Marathi') wikiLang = 'mr';
      else if (language === 'Odia') wikiLang = 'or';

      // Clean up conversational requests like "Tell me about..."
      let query = userText.replace(/tell me about|what is|where is|who is/ig, '').trim();
      if (!query) query = userText;

      // Free Wikipedia API Endpoint (No API Key Required!)
      // Using generator=search and prop=extracts gets the full introductory paragraphs!
      const url = `https://${wikiLang}.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrlimit=1&prop=extracts&exintro=1&explaintext=1&utf8=&format=json&origin=*`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch data.");
      }

      const data = await response.json();
      let botText = "";

      if (data.query?.pages) {
        const pages = data.query.pages;
        const pageId = Object.keys(pages)[0];
        const result = pages[pageId];
        botText = `${result.title}:\n\n${result.extract || "No detailed description available."}`;
      } else {
        botText = `I'm sorry, I couldn't find any detailed information about "${query}". Try searching for a specific historical place like 'Konark Sun Temple'.`;
      }

      setMessages((prev) => [...prev, { id: `b${Date.now()}`, user: 'bot', text: botText }]);
      
      // Speak the bot's response if Voice is ON
      if (voiceOn && typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const msg = new SpeechSynthesisUtterance(botText);
        msg.lang = language === 'Hindi' ? 'hi-IN' : language === 'Marathi' ? 'mr-IN' : language === 'Odia' ? 'or-IN' : 'en-US';
        window.speechSynthesis.speak(msg);
      }
    } catch (error: any) {
      setMessages((prev) => [...prev, { id: `b${Date.now()}`, user: 'bot', text: `Sorry, an error occurred: ${error.message}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      send();
    }
  };

  return (
    <main className="min-h-screen bg-sand p-4 pt-24 md:p-8">
      <section className="mx-auto max-w-4xl rounded-2xl border border-sand bg-white p-4 shadow-lg">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-3xl font-bold text-forest">Free Cultural Guide</h1>
          <button 
            onClick={() => {
              if (voiceOn) window.speechSynthesis?.cancel(); // Stop talking immediately if turned off
              setVoiceOn(!voiceOn);
            }} 
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${voiceOn ? 'bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 shadow-inner' : 'bg-gradient-to-r from-forest to-emerald-600 text-white hover:shadow-lg transform hover:-translate-y-0.5'}`}
          >
            {voiceOn ? '🔊 Voice: On' : '🔇 Voice: Off'}
          </button>
        </div>
        <div className="mt-3 h-[60vh] overflow-y-auto rounded-xl border border-sand p-3 bg-slate-50 scroll-smooth">
          {messages.map((msg) => <ChatMessage key={msg.id} user={msg.user} text={msg.text} image={msg.image} />)}
          {isLoading && (
            <div className="mb-3 flex justify-start">
              <div className="max-w-[80%] rounded-xl p-3 bg-white border border-sand text-sm text-gray-500 animate-pulse">
                Searching database...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="mt-3 flex flex-wrap gap-2 items-center">
          <select className="rounded-lg border border-sand p-2 focus:outline-none focus:ring-2 focus:ring-forest/50" value={language} onChange={(e) => setLanguage(e.target.value as any)}>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Marathi">Marathi</option>
            <option value="Odia">Odia</option>
          </select>
          <input 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            onKeyDown={handleKeyPress}
            className="flex-1 rounded-lg border border-sand p-2 focus:outline-none focus:ring-2 focus:ring-forest/50" 
            placeholder="Ask about a historical place (e.g., 'Taj Mahal')..." 
            disabled={isLoading}
          />
          <button 
            onClick={send} 
            disabled={isLoading || !input.trim()}
            className="rounded-lg bg-forest px-4 py-2 text-white hover:bg-emerald-700 disabled:opacity-50 transition-colors"
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </section>
    </main>
  );
}
