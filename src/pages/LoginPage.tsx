import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const interests = ["🌿 Nature", "🦜 Wildlife", "🏛️ Culture", "🤝 Volunteering", "📸 Photography", "🎨 Art"];

export default function LoginPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState<"login" | "profile">("login");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleInterest = (i: string) =>
    setSelectedInterests((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background p-4">
      {/* Background pattern */}
      <div className="absolute inset-0 tribal-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10 w-full max-w-md">
        {step === "login" ? (
          <Card className="border-0 shadow-2xl">
            <CardHeader className="text-center pb-2">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring" }} className="mx-auto mb-4 text-6xl">
                🍃
              </motion.div>
              <CardTitle className="font-display text-3xl">Karma-Path</CardTitle>
              <p className="mt-2 text-muted-foreground">Earn karma through responsible tourism</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full gap-2 rounded-xl py-6 text-base" onClick={() => setStep("profile")}>
                <svg className="h-5 w-5" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                Continue with Google
              </Button>
              <Button variant="outline" className="w-full gap-2 rounded-xl py-6 text-base" onClick={() => setStep("profile")}>
                🔗 Connect Web3 Wallet
              </Button>
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center"><span className="w-full border-t" /></div>
                <div className="relative flex justify-center text-xs uppercase"><span className="bg-card px-2 text-muted-foreground">or</span></div>
              </div>
              <Button variant="secondary" className="w-full rounded-xl py-6 text-base" onClick={() => setStep("profile")}>
                🌱 Create New Wallet
              </Button>
              <p className="text-center text-xs text-muted-foreground">By continuing, you agree to promote responsible and sustainable tourism</p>
            </CardContent>
          </Card>
        ) : (
          <Card className="border-0 shadow-2xl">
            <CardHeader className="text-center pb-2">
              <CardTitle className="font-display text-2xl">Set Up Your Profile</CardTitle>
              <p className="text-muted-foreground">Tell us about your journey</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                <Input placeholder="Your name" className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Country</label>
                <Input placeholder="Where are you from?" className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Interests</label>
                <div className="flex flex-wrap gap-2">
                  {interests.map((i) => (
                    <Badge
                      key={i}
                      variant={selectedInterests.includes(i) ? "default" : "outline"}
                      className="cursor-pointer rounded-full px-3 py-1.5 text-sm transition-all hover:scale-105"
                      onClick={() => toggleInterest(i)}
                    >
                      {i}
                    </Badge>
                  ))}
                </div>
              </div>
              <Button className="w-full rounded-xl py-6 text-base mt-4" onClick={() => navigate("/")}>
                🌿 Start Your Karma Journey
              </Button>
            </CardContent>
          </Card>
        )}
      </motion.div>
    </div>
  );
}
