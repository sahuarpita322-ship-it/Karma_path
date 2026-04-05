import { useStore } from '../context/store';
import { TaskCard } from '../components/TaskCard';

export function Tasks() {
  const tasks = useStore((s) => s.tasks);
  const participants = useStore((s) => s.taskParticipants);
  return (
    <main className="min-h-screen relative p-4 pt-24 md:p-8 pb-12">
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/valleyofflowers.jpg')` }}
      >
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
      </div>
      <section className="mx-auto max-w-6xl rounded-3xl border border-white/50 bg-white/80 backdrop-blur-xl p-6 shadow-2xl relative z-10 space-y-4">
        <h1 className="text-3xl font-bold text-forest">Karma Task Marketplace</h1>
        <p className="text-earth">Find nearby eco-friendly and cultural preservation tasks.</p>
        <div className="grid gap-4 md:grid-cols-2">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} participantCount={participants[task.id]?.length ?? 0} />
          ))}
        </div>
      </section>
    </main>
  );
}
