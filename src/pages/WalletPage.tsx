import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Coins, ArrowUpRight, ArrowDownLeft, Lock, Unlock, Trophy } from "lucide-react";
import { mockTransactions } from "@/data/mockData";

const levels = [
  { level: 1, name: "Virtual Museum Premium", tokens: 100, icon: "🏛️", unlocked: true },
  { level: 2, name: "Artisan Workshop Invite", tokens: 250, icon: "🎨", unlocked: true },
  { level: 3, name: "Guided Eco Trek", tokens: 500, icon: "🥾", unlocked: false },
  { level: 4, name: "Cultural Immersion Event", tokens: 1000, icon: "🎭", unlocked: false },
];

export default function WalletPage() {
  const earned = mockTransactions.filter((t) => t.type === "earned").reduce((s, t) => s + t.amount, 0);
  const spent = mockTransactions.filter((t) => t.type === "spent").reduce((s, t) => s + t.amount, 0);

  return (
    <div className="mx-auto max-w-3xl space-y-6 p-4 pb-24 lg:pb-8">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-display text-3xl font-bold">Karma Wallet</h1>
        <p className="text-muted-foreground">Your token balance and rewards</p>
      </motion.div>

      {/* Balance Card */}
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}>
        <Card className="border-0 karma-gradient text-primary-foreground shadow-xl overflow-hidden">
          <CardContent className="p-6 relative">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary-foreground/5 -translate-y-1/2 translate-x-1/2" />
            <p className="text-sm opacity-80 flex items-center gap-1"><Coins className="h-4 w-4" /> Karma Token Balance</p>
            <motion.p className="font-display text-5xl font-bold mt-2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              425
            </motion.p>
            <div className="mt-4 flex gap-6">
              <div>
                <p className="text-xs opacity-70">Earned</p>
                <p className="text-lg font-bold flex items-center gap-1"><ArrowUpRight className="h-4 w-4" />{earned}</p>
              </div>
              <div>
                <p className="text-xs opacity-70">Spent</p>
                <p className="text-lg font-bold flex items-center gap-1"><ArrowDownLeft className="h-4 w-4" />{spent}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Reward Levels */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <Card className="border-0 shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-display flex items-center gap-2"><Trophy className="h-5 w-5 text-karma-gold" /> Reward Levels</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {levels.map((l) => (
              <div key={l.level} className={`flex items-center gap-3 rounded-xl p-3 transition-colors ${l.unlocked ? "bg-primary/5" : "bg-muted/50"}`}>
                <span className="text-2xl">{l.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">{l.name}</p>
                    {l.unlocked ? <Unlock className="h-3 w-3 text-primary" /> : <Lock className="h-3 w-3 text-muted-foreground" />}
                  </div>
                  <Progress value={Math.min((425 / l.tokens) * 100, 100)} className="h-1.5 mt-1" />
                </div>
                <Badge variant={l.unlocked ? "default" : "secondary"} className="shrink-0">{l.tokens} 🪙</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      {/* Transaction History */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <Card className="border-0 shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-display">Transaction History</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {mockTransactions.map((tx) => (
              <div key={tx.id} className="flex items-center gap-3 rounded-xl p-3 hover:bg-muted/30 transition-colors">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full ${tx.type === "earned" ? "bg-primary/10" : "bg-destructive/10"}`}>
                  {tx.type === "earned" ? <ArrowUpRight className="h-4 w-4 text-primary" /> : <ArrowDownLeft className="h-4 w-4 text-destructive" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{tx.description}</p>
                  <p className="text-xs text-muted-foreground">{tx.date}</p>
                </div>
                <span className={`font-bold text-sm ${tx.type === "earned" ? "text-primary" : "text-destructive"}`}>
                  {tx.type === "earned" ? "+" : "-"}{tx.amount}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
