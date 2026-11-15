type TokenBadgeProps = { amount: number; label?: string };
export function TokenBadge({ amount, label }: TokenBadgeProps) {
  return (
    <div className="rounded-xl border border-forest bg-white/70 p-3 shadow-lg">
      <div className="text-xs text-earth">{label || 'Karma Balance'}</div>
      <div className="text-3xl font-bold text-forest">{amount}</div>
      <div className="text-xs text-gray-500">Karma Tokens</div>
    </div>
  );
}
