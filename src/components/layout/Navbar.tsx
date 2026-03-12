import { Link, useLocation } from "react-router-dom";
import { Bell, Coins, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/tasks", label: "Tasks" },
  { to: "/wallet", label: "Wallet" },
  { to: "/archive", label: "Archive" },
  { to: "/museum", label: "Museum" },
  { to: "/chatbot", label: "Chatbot" },
  { to: "/guide", label: "AI Guide" },
  { to: "/dao", label: "DAO" },
  { to: "/admin", label: "Admin" },
];

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  if (location.pathname === "/login") return null;

  return (
    <header className="sticky top-0 z-50 border-b bg-card/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">🍃</span>
          <span className="font-display text-xl font-bold text-primary">Karma-Path</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent ${
                location.pathname === l.to ? "bg-accent text-primary font-semibold" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5">
            <Coins className="h-4 w-4 text-karma-gold" />
            <span className="text-sm font-bold">425</span>
          </div>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-destructive" />
          </Button>
          <Link to="/login" className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-lg text-primary-foreground">
            🧑
          </Link>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="flex flex-col gap-1 border-t bg-card p-4 lg:hidden animate-fade-in">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setMobileOpen(false)}
              className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-accent ${
                location.pathname === l.to ? "bg-accent text-primary font-semibold" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
