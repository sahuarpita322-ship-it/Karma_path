import { useEffect, useState } from 'react';
import { FaRobot, FaStop } from 'react-icons/fa';

type AIGuideAssistantProps = {
  text: string;
  language: 'en' | 'hi' | 'or';
};

export function AIGuideAssistant({ text, language }: AIGuideAssistantProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const togglePlay = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      const msg = new SpeechSynthesisUtterance(text);
      msg.lang = language === 'hi' ? 'hi-IN' : language === 'or' ? 'or-IN' : 'en-US';
      msg.onend = () => setIsPlaying(false);
      window.speechSynthesis.speak(msg);
      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed bottom-24 right-4 md:bottom-12 md:right-12 z-50 flex flex-col items-end gap-3">
      {isPlaying && (
        <div className="rounded-xl border border-emerald-200 bg-white/95 p-4 shadow-xl backdrop-blur-sm max-w-[250px] text-sm text-forest animate-pulse font-medium">
          🗣️ AI Guide is currently narrating the history...
        </div>
      )}
      <button
        onClick={togglePlay}
        className={`flex h-16 w-16 items-center justify-center rounded-full text-white shadow-2xl transition-all transform hover:scale-110 ${isPlaying ? 'bg-red-500' : 'bg-gradient-to-r from-forest to-emerald-600'}`}
      >
        {isPlaying ? <FaStop className="text-2xl" /> : <FaRobot className="text-3xl" />}
      </button>
    </div>
  );
}