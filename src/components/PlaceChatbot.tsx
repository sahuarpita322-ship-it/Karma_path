import { useState, useRef, useEffect } from 'react';
import { FaPaperPlane, FaRobot } from 'react-icons/fa';

export function PlaceChatbot({ placeName }: { placeName: string }) {
  const [messages, setMessages] = useState<{ id: string; user: 'bot' | 'user'; text: string }[]>([
    { id: '1', user: 'bot', text: `Hi! I am your AI guide for ${placeName}. What would you like to know about it?` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages(prev => [...prev, { id: Date.now().toString(), user: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    // Mock AI Response specific to the location
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        user: 'bot',
        text: `That's a great question! ${placeName} has incredible cultural significance and is famous for its intricate architecture and heritage. Is there a specific era or festival you're curious about?`
      }]);
      setIsLoading(false);
    }, 1200);
  };

  return (
    <div className="mt-8 rounded-2xl border border-white/50 bg-white/80 backdrop-blur-md shadow-xl overflow-hidden flex flex-col h-[400px]">
      <div className="bg-gradient-to-r from-forest to-emerald-600 p-4 text-white flex items-center gap-3">
        <FaRobot className="text-2xl" />
        <h3 className="font-bold text-lg">Ask AI about {placeName}</h3>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white/60">
        {messages.map(m => (
          <div key={m.id} className={`flex ${m.user === 'bot' ? 'justify-start' : 'justify-end'}`}>
            <div className={`max-w-[80%] rounded-xl p-3 text-sm ${m.user === 'bot' ? 'bg-white/95 border border-white/50 text-earth shadow-sm' : 'bg-forest text-white shadow-md'}`}>
              {m.text}
            </div>
          </div>
        ))}
        {isLoading && <div className="text-sm text-gray-500 animate-pulse pl-2">AI is typing...</div>}
        <div ref={endRef} />
      </div>
      <div className="p-3 border-t border-white/50 bg-white/70 backdrop-blur-sm flex gap-2">
        <input 
          className="flex-1 rounded-xl border border-white/50 bg-white/90 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-forest/50" 
          placeholder={`Ask about ${placeName}...`}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend} disabled={isLoading} className="bg-forest text-white px-5 py-2 rounded-xl hover:bg-emerald-700 transition disabled:opacity-50">
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
}