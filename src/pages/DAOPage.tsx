import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Vote, Shield, Globe, Users, ThumbsUp, ThumbsDown } from "lucide-react";
import { useState } from "react";

const proposals = [
  { id: "1", title: "Open Tribal Dance Archive to Public", description: "Allow non-registered users to view approved tribal dance recordings in the cultural archive.", votes: { for: 145, against: 23 }, status: "Active", category: "Content Access", endDate: "2026-03-20" },
  { id: "2", title: "Restrict Sacred Cave Photography", description: "Limit photography at Udayagiri caves sacred sections to preserve spiritual sanctity.", votes: { for: 198, against: 45 }, status: "Active", category: "Sacred Sites", endDate: "2026-03-18" },
  { id: "3", title: "Increase Token Threshold for Eco Trek", description: "Raise Level 3 unlock from 500 to 750 tokens to ensure serious commitment.", votes: { for: 89, against: 112 }, status: "Active", category: "Token Policy", endDate: "2026-03-25" },
  { id: "4", title: "Add Sambalpuri Music Category", description: "Create dedicated category for Sambalpuri folk music in the cultural archive.", votes: { for: 234, against: 12 }, status: "Passed", category: "Content", endDate: "2026-03-10" },
];

export default function DAOPage() {
  const [voted, setVoted] = useState<Record<string, "for" | "against">>({});

  return (
    <div className="mx-auto max-w-4xl space-y-6 p-4 pb-24 lg:pb-8">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-display text-3xl font-bold">DAO Governance</h1>
        <p className="text-muted-foreground">Community-driven decision making on Polygon</p>
      </motion.div>

      {/* Overview */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { icon: Vote, label: "Active Proposals", value: "3" },
          { icon: Users, label: "DAO Members", value: "456" },
          { icon: Shield, label: "Decisions Made", value: "127" },
        ].map((s, i) => (
          <Card key={i} className="border-0 shadow-md">
            <CardContent className="p-4 text-center">
              <s.icon className="mx-auto h-6 w-6 mb-2 text-primary" />
              <p className="text-xl font-bold">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Info */}
      <Card className="border-0 shadow-md bg-primary/5">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Globe className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-sm">How DAO Governance Works</p>
              <p className="text-sm text-muted-foreground mt-1">Each region has a community DAO that decides which cultural content is public, which sites are restricted, and token requirements for experiences. Governance is powered by Polygon smart contracts.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Proposals */}
      <div className="space-y-4">
        {proposals.map((p, i) => {
          const total = p.votes.for + p.votes.against;
          const pct = Math.round((p.votes.for / total) * 100);
          return (
            <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <Card className="border-0 shadow-md">
                <CardContent className="p-5 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant={p.status === "Active" ? "default" : "secondary"} className="rounded-full text-xs">{p.status}</Badge>
                        <Badge variant="outline" className="rounded-full text-xs">{p.category}</Badge>
                      </div>
                      <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{p.description}</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-primary font-medium">For: {p.votes.for}</span>
                      <span className="text-destructive font-medium">Against: {p.votes.against}</span>
                    </div>
                    <div className="h-3 rounded-full bg-destructive/20 overflow-hidden">
                      <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                  {p.status === "Active" && !voted[p.id] && (
                    <div className="flex gap-2">
                      <Button className="flex-1 gap-2 rounded-xl" onClick={() => setVoted((v) => ({ ...v, [p.id]: "for" }))}>
                        <ThumbsUp className="h-4 w-4" /> Vote For
                      </Button>
                      <Button variant="outline" className="flex-1 gap-2 rounded-xl" onClick={() => setVoted((v) => ({ ...v, [p.id]: "against" }))}>
                        <ThumbsDown className="h-4 w-4" /> Vote Against
                      </Button>
                    </div>
                  )}
                  {voted[p.id] && (
                    <Badge className="bg-primary/10 text-primary border-0">✓ You voted {voted[p.id]}</Badge>
                  )}
                  <p className="text-xs text-muted-foreground">Ends: {p.endDate}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
