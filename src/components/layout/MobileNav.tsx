import { Link, useLocation } from "react-router-dom";
import { Home, ListChecks, Wallet, BookOpen, MessageCircle } from "lucide-react";

const items = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/tasks", icon: ListChecks, label: "Tasks" },
  { to: "/wallet", icon: Wallet, label: "Wallet" },
  { to: "/archive", icon: BookOpen, label: "Archive" },
  { to: "/chatbot", icon: MessageCircle, label: "Chat" },
];

export default function MobileNav() {
  const location = useLocation();
  if (location.pathname === "/login") return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-card/95 backdrop-blur-md lg:hidden">
      <div className="flex items-center justify-around py-2">
        {items.map((item) => {
          const active = location.pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex flex-col items-center gap-0.5 px-3 py-1 text-xs transition-colors ${
                active ? "text-primary font-semibold" : "text-muted-foreground"
              }`}
            >
              <item.icon className={`h-5 w-5 ${active ? "text-primary" : ""}`} />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
