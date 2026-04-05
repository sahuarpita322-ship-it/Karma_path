import { useStore } from '../context/store';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, PieChart, Pie, Cell, Legend } from 'recharts';

export function Admin() {
  const tasks = useStore((s) => s.tasks);
  const activities = useStore((s) => s.activities);

  const completed = tasks.filter((t) => t.completed).length;
  const active = tasks.length;
  const plastic = 1250;
  const cultural = activities.length;

  const trendData = [
    { name: 'Week 1', active, completed: completed + 3 },
    { name: 'Week 2', active: active + 1, completed: completed + 8 },
    { name: 'Week 3', active: active + 2, completed: completed + 12 },
    { name: 'Week 4', active: active + 3, completed: completed + 16 }
  ];

  const pieData = [{ name: 'Plastic Waste', value: plastic }, { name: 'Cultural Content', value: cultural }];

  return (
    <main className="min-h-screen bg-sand p-4 pt-24 md:p-8">
      <section className="mx-auto max-w-7xl space-y-4">
        <div className="rounded-2xl border border-sand bg-white p-4 shadow-lg">
          <h1 className="text-3xl font-bold text-forest">Admin Panel</h1>
          <p className="text-earth">Approve task submissions, monitor token distribution and uploads.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-sand bg-white p-4">Active users<br/><strong>{20 + tasks.length}</strong></div>
          <div className="rounded-xl border border-sand bg-white p-4">Tasks completed<br/><strong>{completed}</strong></div>
          <div className="rounded-xl border border-sand bg-white p-4">Plastic waste collected<br/><strong>{plastic} kg</strong></div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-xl border border-sand bg-white p-4">
            <h3 className="text-lg font-semibold text-forest mb-2">Active users & tasks trend</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="active" stroke="#1B5E20" />
                <Line type="monotone" dataKey="completed" stroke="#6D4C41" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="rounded-xl border border-sand bg-white p-4">
            <h3 className="text-lg font-semibold text-forest mb-2">Content distribution</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                  <Cell fill="#1B5E20" />
                  <Cell fill="#6D4C41" />
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </main>
  );
}
