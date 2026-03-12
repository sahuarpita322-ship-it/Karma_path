import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RotateCw, MapPin, Clock } from "lucide-react";
import { mockArtifacts, Artifact } from "@/data/mockData";

export default function MuseumPage() {
  const [selected, setSelected] = useState<Artifact | null>(null);

  return (
    <div className="mx-auto max-w-7xl space-y-6 p-4 pb-24 lg:pb-8">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-display text-3xl font-bold">Virtual Museum</h1>
        <p className="text-muted-foreground">Explore Odisha's cultural artifacts</p>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mockArtifacts.map((artifact, i) => (
          <motion.div key={artifact.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <Card
              className="border-0 shadow-md overflow-hidden cursor-pointer group hover:shadow-xl transition-all"
              onClick={() => setSelected(artifact)}
            >
              <div className="relative h-52 overflow-hidden">
                <img src={artifact.image} alt={artifact.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-primary-foreground font-display text-lg font-bold">{artifact.name}</p>
                  <p className="text-primary-foreground/80 text-xs flex items-center gap-1"><MapPin className="h-3 w-3" />{artifact.region}</p>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="rounded-full">{artifact.culture}</Badge>
                  <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" />{artifact.period}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Artifact Detail Modal */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          {selected && (
            <>
              <div className="relative">
                <img src={selected.image} alt={selected.name} className="w-full h-56 object-cover rounded-lg" />
                <Button variant="outline" size="sm" className="absolute bottom-3 right-3 gap-1 bg-card/90">
                  <RotateCw className="h-3 w-3" /> 360° View
                </Button>
              </div>
              <DialogHeader>
                <DialogTitle className="font-display text-xl">{selected.name}</DialogTitle>
                <DialogDescription>{selected.culture} • {selected.period}</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-1">Cultural Story</h4>
                  <p className="text-sm text-muted-foreground">{selected.story}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Historical Significance</h4>
                  <p className="text-sm text-muted-foreground">{selected.significance}</p>
                </div>
                <div className="rounded-xl bg-muted p-3">
                  <p className="text-xs text-muted-foreground flex items-center gap-1"><MapPin className="h-3 w-3" /> Region: {selected.region}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
