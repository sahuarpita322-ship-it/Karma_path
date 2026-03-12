import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { MapPin, Clock, BookOpen, Sparkles, ChevronRight, Volume2 } from "lucide-react";
import { mockCulturalPlaces, CulturalPlace } from "@/data/mockData";

type Lang = "en" | "hi" | "od";
const langLabels: Record<Lang, string> = { en: "English", hi: "हिंदी", od: "ଓଡ଼ିଆ" };

export default function GuidePage() {
  const [selected, setSelected] = useState<CulturalPlace | null>(null);
  const [lang, setLang] = useState<Lang>("en");
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="mx-auto max-w-7xl space-y-6 p-4 pb-24 lg:pb-8">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-display text-3xl font-bold flex items-center gap-2">
          <Sparkles className="h-7 w-7 text-karma-gold" /> AI Cultural Guide
        </h1>
        <p className="text-muted-foreground">Explore heritage with animated storytelling</p>
      </motion.div>

      {/* Map Section */}
      <Card className="border-0 shadow-md overflow-hidden">
        <CardContent className="p-0">
          <div className="relative h-56 bg-accent/20">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/50" />
            <svg viewBox="0 0 600 250" className="w-full h-full opacity-15">
              <path d="M50,200 Q150,50 300,150 T550,100" fill="none" stroke="hsl(var(--primary))" strokeWidth="3"/>
              <path d="M0,180 Q200,100 400,180 T600,120" fill="none" stroke="hsl(var(--secondary))" strokeWidth="2"/>
            </svg>
            {mockCulturalPlaces.map((place, i) => (
              <motion.div
                key={place.id}
                className="absolute cursor-pointer"
                style={{ left: `${15 + i * 14}%`, top: `${25 + (i % 3) * 20}%` }}
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.4 }}
                onClick={() => { setSelected(place); setShowMore(false); setLang("en"); }}
              >
                <div className="flex flex-col items-center gap-1 group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-card shadow-lg border-2 border-primary/30 group-hover:border-primary transition-colors">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-[10px] font-medium text-center bg-card/80 px-1.5 py-0.5 rounded max-w-[80px] truncate">{place.name.split(",")[0]}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Place Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mockCulturalPlaces.map((place, i) => (
          <motion.div key={place.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <Card
              className="border-0 shadow-md overflow-hidden cursor-pointer group hover:shadow-xl transition-all"
              onClick={() => { setSelected(place); setShowMore(false); setLang("en"); }}
            >
              <div className="relative h-40 overflow-hidden">
                <img src={place.image} alt={place.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                  <p className="text-primary-foreground font-display text-lg font-bold leading-tight">{place.name}</p>
                  <Badge className="bg-card/80 text-foreground border-0 gap-1 shrink-0"><Sparkles className="h-3 w-3" />AI Guide</Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground line-clamp-2">{place.descriptions.en.slice(0, 100)}...</p>
                <Button variant="ghost" size="sm" className="mt-2 gap-1 text-primary p-0 h-auto">
                  Explore with AI <ChevronRight className="h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* AI Guide Modal */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          {selected && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              {/* Image with animation */}
              <div className="relative overflow-hidden rounded-lg">
                <motion.img
                  src={selected.image}
                  alt={selected.name}
                  className="w-full h-52 object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                <motion.div className="absolute bottom-3 left-3" initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                  <div className="flex items-center gap-2 bg-card/90 rounded-full px-3 py-1.5">
                    <span className="text-lg">🧑‍🏫</span>
                    <span className="text-xs font-medium">AI Guide is narrating...</span>
                    <Volume2 className="h-3 w-3 text-primary animate-pulse" />
                  </div>
                </motion.div>
              </div>

              <DialogHeader>
                <DialogTitle className="font-display text-xl">{selected.name}</DialogTitle>
              </DialogHeader>

              {/* Language Switcher */}
              <div className="flex gap-2">
                {(["en", "hi", "od"] as Lang[]).map((l) => (
                  <Button key={l} variant={lang === l ? "default" : "outline"} size="sm" className="rounded-full" onClick={() => setLang(l)}>
                    {langLabels[l]}
                  </Button>
                ))}
              </div>

              {/* Animated Story Text */}
              <motion.div key={lang} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-xl bg-muted p-4">
                <p className="text-sm leading-relaxed">{selected.descriptions[lang]}</p>
              </motion.div>

              {/* Facts */}
              <div>
                <h4 className="font-semibold text-sm mb-2 flex items-center gap-1"><Sparkles className="h-4 w-4 text-karma-gold" /> Interesting Facts</h4>
                <div className="space-y-2">
                  {selected.facts.map((fact, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.1 }} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-0.5">•</span>
                      <span>{fact}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Learn More */}
              {!showMore ? (
                <Button variant="outline" className="w-full rounded-xl gap-2" onClick={() => setShowMore(true)}>
                  <BookOpen className="h-4 w-4" /> Learn More
                </Button>
              ) : (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">📅 Timeline</h4>
                    <div className="space-y-2 border-l-2 border-primary/20 pl-4">
                      {selected.timeline.map((t, i) => (
                        <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.15 }}>
                          <p className="text-xs text-primary font-semibold">{t.year}</p>
                          <p className="text-sm text-muted-foreground">{t.event}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">🏗️ Architecture</h4>
                    <p className="text-sm text-muted-foreground">{selected.architecture}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">🎉 Festivals</h4>
                    <div className="flex gap-2 flex-wrap">
                      {selected.festivals.map((f) => <Badge key={f} variant="secondary" className="rounded-full">{f}</Badge>)}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
