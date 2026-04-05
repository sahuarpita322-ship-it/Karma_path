type ChatMessageProps = { user: 'bot' | 'user'; text: string; image?: string };
export function ChatMessage({ user, text, image }: ChatMessageProps) {
  const isBot = user === 'bot';
  return (
    <div className={`mb-3 flex ${isBot ? 'justify-start' : 'justify-end'}`}>
      <div className={`max-w-[80%] rounded-xl p-3 ${isBot ? 'bg-white border border-sand' : 'bg-forest text-white'}`}>
        <p className="text-sm">{text}</p>
        {image && <img src={image} alt="Advice" className="mt-2 h-28 w-full rounded-lg object-cover" />}
      </div>
    </div>
  );
}
