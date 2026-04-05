type StatCardProps = { label: string; value: number; unit?: string; icon?: React.ReactNode };
export function StatCard({ label, value, unit, icon }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-sand bg-white/70 p-4 shadow-sm">
      <div className="flex items-center gap-2 text-xs text-earth font-medium">{icon} {label}</div>
      <div className="mt-2 text-3xl font-bold text-forest">{value}{unit || ''}</div>
    </div>
  );
}
