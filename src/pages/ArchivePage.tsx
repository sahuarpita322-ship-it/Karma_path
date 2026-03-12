import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Search, Filter, Upload, Heart, MapPin, Tag } from "lucide-react";
import { mockCulturalMedia, CulturalMedia } from "@/data/mockData";

const types = ["All", "Folk Song", "Dance", "Ritual Video", "Oral History", "Craft Process"];
const regions = ["All", "Sambalpur", "Balangir", "Mayurbhanj", "Koraput", "Puri", "Baripada"];

export default function ArchivePage() {
  const [typeFilter, setTypeFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [uploadOpen, setUploadOpen] = useState(false);
  const [selected, setSelected] = useState<CulturalMedia | null>(null);

  const filtered = mockCulturalMedia.filter(
    (m) => (typeFilter === "All" || m.type === typeFilter) && m.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-7xl space-y-6 p-4 pb-24 lg:pb-8">
      <div className="flex items-center justify-between">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-3xl font-bold">Cultural Archive</h1>
          <p className="text-muted-foreground">Digital heritage library of Odisha</p>
        </motion.div>
        <Button className="gap-2 rounded-xl" onClick={() => setUploadOpen(true)}>
          <Upload className="h-4 w-4" /> Upload
        </Button>
      </div>

      {/* Search & Filters */}
      <div className="space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search cultural media..." className="rounded-xl pl-10" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {types.map((t) => (
            <Button key={t} variant={typeFilter === t ? "default" : "outline"} size="sm" className="rounded-full shrink-0" onClick={() => setTypeFilter(t)}>
              {t}
            </Button>
          ))}
        </div>
      </div>

      {/* Media Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((media, i) => (
            <motion.div key={media.id} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ delay: i * 0.05 }}>
              <Card className="border-0 shadow-md overflow-hidden cursor-pointer group hover:shadow-lg transition-shadow" onClick={() => setSelected(media)}>
                <div className="relative h-44 overflow-hidden">
                  <img src={media.thumbnail} alt={media.title} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <Badge className="absolute top-3 right-3 bg-card/90 text-foreground border-0">{media.type}</Badge>
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-primary-foreground font-bold leading-tight">{media.title}</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-1"><MapPin className="h-3 w-3" />{media.region}</span>
                    <span className="flex items-center gap-1 text-muted-foreground"><Heart className="h-3 w-3" />{media.likes}</span>
                  </div>
                  <div className="mt-2 flex gap-1 flex-wrap">
                    {media.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs rounded-full">{tag}</Badge>
                    ))}
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">By {media.contributor}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Detail Modal */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-lg">
          {selected && (
            <>
              <img src={selected.thumbnail} alt={selected.title} className="w-full h-48 object-cover rounded-lg" />
              <DialogHeader>
                <DialogTitle className="font-display">{selected.title}</DialogTitle>
                <DialogDescription>{selected.type} • {selected.region}</DialogDescription>
              </DialogHeader>
              <div className="space-y-3">
                <div className="flex gap-1 flex-wrap">
                  {selected.tags.map((t) => <Badge key={t} variant="secondary" className="rounded-full">{t}</Badge>)}
                  <Badge className="rounded-full bg-primary/10 text-primary border-0"><Tag className="h-3 w-3 mr-1" />AI Tagged</Badge>
                </div>
                <div className="rounded-xl bg-muted p-3">
                  <p className="text-xs text-muted-foreground mb-1">🤖 AI Classification</p>
                  <p className="text-sm">Category: <strong>{selected.type}</strong> | Culture: <strong>{selected.tribe}</strong> | Region: <strong>{selected.region}</strong></p>
                </div>
                <p className="text-sm text-muted-foreground">Contributed by {selected.contributor} • {selected.likes} likes</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Upload Modal */}
      <Dialog open={uploadOpen} onOpenChange={setUploadOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-display">Upload Cultural Media</DialogTitle>
            <DialogDescription>Share cultural heritage with the world</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="rounded-xl border-2 border-dashed border-border p-8 text-center">
              <Upload className="mx-auto h-10 w-10 text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground">Drag & drop media files here</p>
              <p className="text-xs text-muted-foreground mt-1">Audio, video, or images up to 50MB</p>
            </div>
            <Input placeholder="Title" className="rounded-xl" />
            <Input placeholder="Region" className="rounded-xl" />
            <Input placeholder="Tribe / Community" className="rounded-xl" />
            <div className="rounded-xl bg-muted p-3">
              <p className="text-xs text-muted-foreground">🤖 AI will automatically classify the content type, language, and location</p>
            </div>
            <Button className="w-full rounded-xl" onClick={() => setUploadOpen(false)}>Upload to IPFS</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
