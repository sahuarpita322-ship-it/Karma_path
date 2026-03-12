import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, XCircle, Users, ListChecks, Coins, Image, TrendingUp } from "lucide-react";
import { impactStats } from "@/data/mockData";

const pendingTasks = [
  { id: "1", user: "Priya M.", task: "Beach Cleanup", proof: "📸 3 photos uploaded", time: "2h ago", tokens: 50 },
  { id: "2", user: "Marco S.", task: "Bird Documentation", proof: "📸 5 photos, GPS verified", time: "4h ago", tokens: 75 },
  { id: "3", user: "Yuki T.", task: "Artisan Digitization", proof: "📸 8 product photos", time: "6h ago", tokens: 60 },
];

const pendingMedia = [
  { id: "1", user: "Rahul D.", title: "Dalkhai Dance Video", type: "Dance", time: "1h ago" },
  { id: "2", user: "Anita P.", title: "Chhau Performance", type: "Dance", time: "3h ago" },
];

export default function AdminPage() {
  const [approvedTasks, setApprovedTasks] = useState<string[]>([]);
  const [rejectedTasks, setRejectedTasks] = useState<string[]>([]);

  return (
    <div className="mx-auto max-w-7xl space-y-6 p-4 pb-24 lg:pb-8">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-display text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">Community governance panel</p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { icon: Users, label: "Active Users", value: impactStats.activeVolunteers, color: "text-primary" },
          { icon: ListChecks, label: "Tasks Done", value: impactStats.tasksCompleted.toLocaleString(), color: "text-secondary" },
          { icon: Coins, label: "Tokens Given", value: "18.5K", color: "text-karma-gold" },
          { icon: Image, label: "Media Uploads", value: impactStats.culturalMediaPreserved.toLocaleString(), color: "text-primary" },
        ].map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <Card className="border-0 shadow-md">
              <CardContent className="p-4 text-center">
                <s.icon className={`mx-auto h-6 w-6 mb-2 ${s.color}`} />
                <p className="text-2xl font-bold">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Admin Roles */}
      <div className="flex gap-2 flex-wrap">
        <Badge variant="outline" className="rounded-full py-1.5 px-3">👑 Tribal Leaders</Badge>
        <Badge variant="outline" className="rounded-full py-1.5 px-3">📚 Cultural Scholars</Badge>
        <Badge variant="outline" className="rounded-full py-1.5 px-3">🏘️ Community Reps</Badge>
      </div>

      <Tabs defaultValue="tasks">
        <TabsList className="w-full justify-start rounded-xl">
          <TabsTrigger value="tasks" className="rounded-lg">Task Approvals</TabsTrigger>
          <TabsTrigger value="media" className="rounded-lg">Media Approvals</TabsTrigger>
          <TabsTrigger value="analytics" className="rounded-lg">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="tasks" className="space-y-3 mt-4">
          {pendingTasks.map((t) => {
            const approved = approvedTasks.includes(t.id);
            const rejected = rejectedTasks.includes(t.id);
            return (
              <Card key={t.id} className={`border-0 shadow-sm ${approved ? "bg-primary/5" : rejected ? "bg-destructive/5" : ""}`}>
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex-1">
                    <p className="font-medium">{t.user} — {t.task}</p>
                    <p className="text-sm text-muted-foreground">{t.proof} • {t.time}</p>
                  </div>
                  <Badge variant="outline">+{t.tokens} 🪙</Badge>
                  {!approved && !rejected ? (
                    <div className="flex gap-2">
                      <Button size="sm" className="gap-1 rounded-lg" onClick={() => setApprovedTasks((p) => [...p, t.id])}>
                        <CheckCircle2 className="h-4 w-4" /> Approve
                      </Button>
                      <Button size="sm" variant="outline" className="gap-1 rounded-lg" onClick={() => setRejectedTasks((p) => [...p, t.id])}>
                        <XCircle className="h-4 w-4" /> Reject
                      </Button>
                    </div>
                  ) : (
                    <Badge variant={approved ? "default" : "destructive"}>{approved ? "Approved" : "Rejected"}</Badge>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </TabsContent>

        <TabsContent value="media" className="space-y-3 mt-4">
          {pendingMedia.map((m) => (
            <Card key={m.id} className="border-0 shadow-sm">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="flex-1">
                  <p className="font-medium">{m.user} — {m.title}</p>
                  <p className="text-sm text-muted-foreground">{m.type} • {m.time}</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="gap-1 rounded-lg"><CheckCircle2 className="h-4 w-4" /> Approve</Button>
                  <Button size="sm" variant="outline" className="gap-1 rounded-lg"><XCircle className="h-4 w-4" /> Reject</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="analytics" className="mt-4">
          <Card className="border-0 shadow-md">
            <CardContent className="p-6">
              <div className="space-y-6">
                {[
                  { label: "Task Completion Rate", value: 87, color: "bg-primary" },
                  { label: "Cultural Media Quality", value: 92, color: "bg-secondary" },
                  { label: "User Retention", value: 78, color: "bg-karma-gold" },
                  { label: "Community Engagement", value: 95, color: "bg-primary" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">{stat.label}</span>
                      <span className="text-muted-foreground">{stat.value}%</span>
                    </div>
                    <div className="h-3 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${stat.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${stat.value}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
