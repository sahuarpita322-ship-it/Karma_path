import { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useStore } from '../context/store';
import { motion } from 'framer-motion';

export function TaskDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const tasks = useStore((s) => s.tasks);
  const completeTaskWithSubmission = useStore((s) => s.completeTaskWithSubmission);
  const taskParticipants = useStore((s) => s.taskParticipants);

  const task = useMemo(() => tasks.find((t) => t.id === id), [id, tasks]);

  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [status, setStatus] = useState<'idle' | 'verifying' | 'success'>('idle');

  useEffect(() => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const handleSubmit = async () => {
    if (!task || !file) return;
    setStatus('verifying');
    setTimeout(() => {
      setStatus('success');
      completeTaskWithSubmission(task.id, preview);
      setTimeout(() => {
        navigate('/dashboard');
      }, 1600);
    }, 2200);
  };

  if (!task) return <div className="p-6">Task not found.</div>;

  return (
    <main className="min-h-screen bg-sand p-4 pt-24 md:p-8">
      <section className="mx-auto max-w-4xl rounded-2xl border border-sand bg-white p-6 shadow-lg">
        <h1 className="text-3xl font-bold text-forest">{task.title}</h1>
        <p className="mt-2 text-earth">{task.description}</p>
        <p className="mt-2 text-sm text-gray-600">Location: {task.location} · Time: {task.time} · Reward: {task.reward} KT</p>

        <div className="mt-5 rounded-xl border border-sand bg-sand/50 p-4">
          <h3 className="font-semibold text-forest">Upload proof</h3>
          <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] ?? null)} className="mt-2" />
          {preview && <img src={preview} alt="proof" className="mt-3 h-44 w-full rounded-md object-cover" />}

          <button onClick={handleSubmit} disabled={!file || status !== 'idle'} className="mt-4 rounded-lg bg-forest px-4 py-2 text-white hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-50">
            Submit Proof
          </button>
        </div>

        <div className="mt-4 text-sm text-gray-700">
          <p>Automatic timestamp: {new Date().toLocaleString()}</p>
          <p>Simulated GPS location: {task.location}</p>
          <p>Joined participants: {taskParticipants[task.id]?.length ?? 0}</p>
          <ul className="text-xs text-earth list-disc ml-6">
            {(taskParticipants[task.id] ?? []).map((p) => (
              <li key={`${p.userId}-${p.date}`}>{p.name} ({p.status}) on {p.date}</li>
            ))}
          </ul>
        </div>

        {status === 'verifying' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 rounded-xl border border-blue-300 bg-blue-50 p-3">
            AI verification in progress...
          </motion.div>
        )}

        {status === 'success' && (
          <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="mt-4 rounded-xl border border-green-300 bg-green-50 p-3">
            <p className="font-semibold text-forest">Congratulations! You earned {task.reward} Karma Tokens for protecting the environment.</p>
          </motion.div>
        )}
      </section>
    </main>
  );
}
