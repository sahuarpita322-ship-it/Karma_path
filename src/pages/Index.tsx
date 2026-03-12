import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Coins, MapPin, Trophy, Leaf, BookOpen, MessageCircle, Landmark, Users, ArrowRight, TrendingUp } from "lucide-react";
import { mockTasks, mockLeaderboard, impactStats } from "@/data/mockData";

const quickActions = [
  { to: "/tasks", icon: Leaf, label: "View Tasks", color: "bg-primary/10 text-primary" },
  { to: "/archive", icon: BookOpen, label: "Cultural Archive", color: "bg-secondary/10 text-secondary" },
  { to: "/museum", icon: Landmark, label: "Virtual Museum", color: "bg-karma-gold/20 text-karma-brown" },
  { to: "/chatbot", icon: MessageCircle, label: "Chatbot Guide", color: "bg-accent text-accent-foreground" },
  { to: "/wallet", icon: Coins, label: "My Wallet", color: "bg-primary/10 text-primary" },
];

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }) };

export default function Dashboard() {
  return (
    <div className="mx-auto max-w-7xl space-y-6 p-4 pb-24 lg:pb-8">
      {/* Hero Balance Card */}
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
        <Card className="overflow-hidden border-0 karma-gradient text-primary-foreground shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-80">Welcome back, Explorer!</p>
                <h1 className="font-display text-3xl font-bold mt-1">425 <span className="text-lg font-normal opacity-80">Karma Tokens</span></h1>
                <div className="mt-3 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm">+75 tokens this week</span>
                </div>
              </div>
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="text-6xl">
                🍃
              </motion.div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Level 2 - Nature Guardian</span>
                <span>425/500</span>
              </div>
              <Progress value={85} className="h-2 bg-primary-foreground/20" />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Daily Eco Impact */}
      <motion.div custom={1} initial="hidden" animate="visible" variants={fadeUp}>
        <Card className="border-0 shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-display">Today's Eco Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="rounded-xl bg-primary/5 p-3">
                <p className="text-2xl font-bold text-primary">{impactStats.plasticRemoved}</p>
                <p className="text-xs text-muted-foreground">Plastic Removed</p>
              </div>
              <div className="rounded-xl bg-secondary/5 p-3">
                <p className="text-2xl font-bold text-secondary">{impactStats.speciesDocumented}</p>
                <p className="text-xs text-muted-foreground">Species Documented</p>
              </div>
              <div className="rounded-xl bg-accent p-3">
                <p className="text-2xl font-bold text-accent-foreground">{impactStats.culturalMediaPreserved}</p>
                <p className="text-xs text-muted-foreground">Media Preserved</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Quick Actions */}
      <motion.div custom={2} initial="hidden" animate="visible" variants={fadeUp}>
        <div className="grid grid-cols-5 gap-2 sm:gap-3">
          {quickActions.map((a) => (
            <Link key={a.to} to={a.to} className="group">
              <div className={`flex flex-col items-center gap-2 rounded-2xl p-3 transition-all hover:scale-105 ${a.color}`}>
                <a.icon className="h-6 w-6" />
                <span className="text-[10px] sm:text-xs font-medium text-center leading-tight">{a.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Map Section */}
      <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp}>
        <Card className="border-0 shadow-md overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-display">Nearby Eco Tasks</CardTitle>
              <Link to="/tasks"><Button variant="ghost" size="sm" className="gap-1">View All <ArrowRight className="h-3 w-3" /></Button></Link>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative h-48 bg-accent/30 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/10" />
              {/* Mock map with task markers */}
              <div className="relative w-full h-full">
                <svg viewBox="0 0 400 200" className="w-full h-full opacity-20">
                  <path d="M0,100 Q100,20 200,100 T400,100" fill="none" stroke="hsl(var(--primary))" strokeWidth="2"/>
                  <path d="M0,120 Q150,60 250,120 T400,80" fill="none" stroke="hsl(var(--secondary))" strokeWidth="1.5"/>
                </svg>
                {[
                  { x: "20%", y: "40%", label: "🏖️" },
                  { x: "45%", y: "25%", label: "🦜" },
                  { x: "65%", y: "55%", label: "📚" },
                  { x: "80%", y: "35%", label: "🎨" },
                  { x: "35%", y: "65%", label: "🌱" },
                ].map((m, i) => (
                  <motion.div
                    key={i}
                    className="absolute cursor-pointer"
                    style={{ left: m.x, top: m.y }}
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-card shadow-lg text-sm border border-border">
                      {m.label}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="absolute bottom-2 left-2">
                <Badge variant="secondary" className="gap-1 text-xs">
                  <MapPin className="h-3 w-3" /> Odisha, India
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Nearby Tasks */}
        <motion.div custom={4} initial="hidden" animate="visible" variants={fadeUp}>
          <Card className="border-0 shadow-md h-full">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-display">Featured Tasks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {mockTasks.slice(0, 3).map((task) => (
                <Link to="/tasks" key={task.id} className="flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-accent/50">
                  <span className="text-2xl">{task.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{task.title}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1"><MapPin className="h-3 w-3" />{task.location.split(",")[0]}</p>
                  </div>
                  <Badge variant="outline" className="text-primary font-bold shrink-0">+{task.reward} 🪙</Badge>
                </Link>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Leaderboard */}
        <motion.div custom={5} initial="hidden" animate="visible" variants={fadeUp}>
          <Card className="border-0 shadow-md h-full">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-display flex items-center gap-2"><Trophy className="h-5 w-5 text-karma-gold" /> Leaderboard</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              {mockLeaderboard.slice(0, 5).map((user) => (
                <div key={user.rank} className={`flex items-center gap-3 rounded-xl p-2.5 ${user.name === "You" ? "bg-primary/5 border border-primary/20" : ""}`}>
                  <span className={`flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold ${user.rank <= 3 ? "gold-gradient text-foreground" : "bg-muted text-muted-foreground"}`}>
                    {user.rank}
                  </span>
                  <span className="text-lg">{user.avatar}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.tasks} tasks</p>
                  </div>
                  <span className="text-sm font-bold text-primary">{user.tokens} 🪙</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Recent Activity */}
      <motion.div custom={6} initial="hidden" animate="visible" variants={fadeUp}>
        <Card className="border-0 shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-display">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { icon: "🏖️", text: "Completed Beach Plastic Cleanup", time: "2 hours ago", tokens: "+50" },
              { icon: "🦜", text: "Documented 3 bird species at Chilika", time: "Yesterday", tokens: "+75" },
              { icon: "🎨", text: "Helped artisan digitize 5 products", time: "2 days ago", tokens: "+60" },
            ].map((a, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl p-3 bg-muted/30">
                <span className="text-xl">{a.icon}</span>
                <div className="flex-1">
                  <p className="text-sm font-medium">{a.text}</p>
                  <p className="text-xs text-muted-foreground">{a.time}</p>
                </div>
                <Badge className="bg-primary/10 text-primary border-0">{a.tokens}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      {/* FAB */}
      <Link to="/tasks" className="fixed bottom-20 right-4 lg:bottom-8 z-40">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="flex h-14 w-14 items-center justify-center rounded-full karma-gradient shadow-xl text-primary-foreground text-xl">
          ✨
        </motion.div>
      </Link>
    </div>
  );
}
