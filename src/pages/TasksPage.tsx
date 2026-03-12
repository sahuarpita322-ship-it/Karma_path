import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { MapPin, Clock, Coins, Upload, Camera, QrCode, CheckCircle2, Search, Filter } from "lucide-react";
import { mockTasks, KarmaTask } from "@/data/mockData";

const categories = ["All", "Environment", "Wildlife", "Education", "Culture"];

export default function TasksPage() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedTask, setSelectedTask] = useState<KarmaTask | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const filtered = mockTasks.filter(
    (t) => (filter === "All" || t.category === filter) && t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-7xl space-y-6 p-4 pb-24 lg:pb-8">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-display text-3xl font-bold">Karma Tasks</h1>
        <p className="text-muted-foreground">Complete eco-friendly tasks to earn Karma Tokens</p>
      </motion.div>

      {/* Search & Filter */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search tasks..." className="rounded-xl pl-10" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {categories.map((c) => (
            <Button key={c} variant={filter === c ? "default" : "outline"} size="sm" className="rounded-full shrink-0" onClick={() => setFilter(c)}>
              {c}
            </Button>
          ))}
        </div>
      </div>

      {/* Task Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((task, i) => (
            <motion.div
              key={task.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="border-0 shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow group" onClick={() => { setSelectedTask(task); setSubmitted(false); }}>
                <div className="relative h-40 overflow-hidden">
                  <img src={task.image} alt={task.title} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <Badge className="absolute top-3 right-3 bg-card/90 text-foreground border-0">{task.category}</Badge>
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-primary-foreground font-bold text-lg leading-tight">{task.icon} {task.title}</p>
                  </div>
                </div>
                <CardContent className="p-4 space-y-3">
                  <p className="text-sm text-muted-foreground line-clamp-2">{task.description}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{task.location.split(",")[0]}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{task.timeEstimate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant={task.difficulty === "Easy" ? "secondary" : task.difficulty === "Medium" ? "outline" : "destructive"} className="rounded-full text-xs">
                      {task.difficulty}
                    </Badge>
                    <span className="flex items-center gap-1 font-bold text-primary"><Coins className="h-4 w-4" />+{task.reward}</span>
                  </div>
                  <Progress value={task.progress} className="h-1.5" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Task Detail Modal */}
      <Dialog open={!!selectedTask} onOpenChange={() => setSelectedTask(null)}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          {selectedTask && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-xl">{selectedTask.icon} {selectedTask.title}</DialogTitle>
                <DialogDescription>{selectedTask.description}</DialogDescription>
              </DialogHeader>
              {!submitted ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-muted p-3 text-center">
                      <MapPin className="mx-auto h-5 w-5 mb-1 text-primary" />
                      <p className="text-xs text-muted-foreground">Location</p>
                      <p className="text-sm font-medium">{selectedTask.location.split(",")[0]}</p>
                    </div>
                    <div className="rounded-xl bg-muted p-3 text-center">
                      <Coins className="mx-auto h-5 w-5 mb-1 text-karma-gold" />
                      <p className="text-xs text-muted-foreground">Reward</p>
                      <p className="text-sm font-bold text-primary">+{selectedTask.reward} Tokens</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-semibold">Submit Proof</h3>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1 gap-2 rounded-xl py-6">
                        <Camera className="h-5 w-5" /> Upload Photo
                      </Button>
                      <Button variant="outline" className="flex-1 gap-2 rounded-xl py-6">
                        <QrCode className="h-5 w-5" /> QR Verify
                      </Button>
                    </div>
                    <div className="rounded-xl border border-dashed border-border p-6 text-center">
                      <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground">Drag & drop photo proof here</p>
                    </div>
                    <div className="rounded-xl bg-muted p-3">
                      <p className="text-xs text-muted-foreground mb-1">📍 GPS Location</p>
                      <p className="text-sm font-mono">Lat: {selectedTask.lat.toFixed(4)}, Lng: {selectedTask.lng.toFixed(4)}</p>
                    </div>
                    <div className="rounded-xl bg-muted p-3">
                      <p className="text-xs text-muted-foreground mb-1">🕐 Timestamp</p>
                      <p className="text-sm font-mono">{new Date().toISOString().replace("T", " ").slice(0, 19)}</p>
                    </div>
                    <Button className="w-full rounded-xl py-6" onClick={() => setSubmitted(true)}>Submit for Review</Button>
                  </div>
                </div>
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8 space-y-4">
                  <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.5 }}>
                    <CheckCircle2 className="mx-auto h-16 w-16 text-primary" />
                  </motion.div>
                  <h3 className="font-display text-xl font-bold">Task Submitted!</h3>
                  <p className="text-muted-foreground">Your task is under community review. You'll be notified when it's approved.</p>
                  <Badge className="text-lg py-2 px-4">+{selectedTask.reward} Karma Tokens (Pending)</Badge>
                </motion.div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
