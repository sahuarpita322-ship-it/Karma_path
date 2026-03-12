import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Mic, Bot, User } from "lucide-react";
import { chatbotResponses } from "@/data/mockData";

interface Message {
  id: number;
  role: "user" | "bot";
  text: string;
}

const suggestions = [
  "What is Rath Yatra?",
  "Tell me about Konark Sun Temple",
  "History of Dalkhai dance",
  "Tell me about Chilika Lake",
  "Tell me about Jagannath Temple",
];

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, role: "bot", text: chatbotResponses["default"] },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now(), role: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const key = Object.keys(chatbotResponses).find((k) => text.toLowerCase().includes(k));
      const response = chatbotResponses[key || "default"];
      setMessages((prev) => [...prev, { id: Date.now() + 1, role: "bot", text: response }]);
    }, 800);
  };

  return (
    <div className="mx-auto flex max-w-3xl flex-col h-[calc(100vh-8rem)] p-4 pb-24 lg:pb-8">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-4">
        <h1 className="font-display text-3xl font-bold">Cultural Guide</h1>
        <p className="text-muted-foreground">Ask about Odisha's rich heritage</p>
      </motion.div>

      {/* Suggestions */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-3">
        {suggestions.map((s) => (
          <Button key={s} variant="outline" size="sm" className="rounded-full shrink-0 text-xs" onClick={() => sendMessage(s)}>
            {s}
          </Button>
        ))}
      </div>

      {/* Chat Area */}
      <Card className="flex-1 border-0 shadow-md overflow-hidden flex flex-col">
        <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
            >
              <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${msg.role === "bot" ? "bg-primary text-primary-foreground" : "bg-accent"}`}>
                {msg.role === "bot" ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
              </div>
              <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${msg.role === "bot" ? "bg-muted" : "bg-primary text-primary-foreground"}`}>
                {msg.text.split("**").map((part, i) =>
                  i % 2 === 1 ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>
                )}
              </div>
            </motion.div>
          ))}
          <div ref={bottomRef} />
        </CardContent>

        {/* Input */}
        <div className="border-t p-4">
          <form
            onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
            className="flex gap-2"
          >
            <Button type="button" variant="ghost" size="icon" className="shrink-0">
              <Mic className="h-5 w-5" />
            </Button>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about heritage..."
              className="rounded-xl"
            />
            <Button type="submit" size="icon" className="shrink-0 rounded-xl">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
}
