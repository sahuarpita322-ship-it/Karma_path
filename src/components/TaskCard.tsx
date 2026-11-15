import { Link } from 'react-router-dom';
import type { Task } from '../context/store';

type TaskCardProps = { task: Task; participantCount?: number };
export function TaskCard({ task, participantCount }: TaskCardProps) {
  return (
    <div className="rounded-2xl border border-sand bg-white/70 p-4 shadow hover:shadow-xl transition">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-forest">{task.title}</h3>
        <span className="rounded-full bg-forest text-white px-2 py-1 text-xs">{task.difficulty}</span>
      </div>
      <p className="text-sm text-earth">{task.description}</p>
      <p className="mt-1 text-xs text-gray-600">Location: {task.location} · Time: {task.time}</p>
      <p className="text-xs text-gray-600">Participants: {participantCount ?? 0}</p>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-sm font-bold text-forest">{task.reward} KT</span>
        <Link to={`/task/${task.id}`} className="rounded-lg bg-earth text-white px-3 py-1 text-sm hover:bg-forest transition">
          Join Task
        </Link>
      </div>
      <div className="mt-3 h-2 w-full rounded-full bg-sand">
        <div className="h-full rounded-full bg-forest" style={{ width: `${task.progress}%` }}></div>
      </div>
    </div>
  );
}
