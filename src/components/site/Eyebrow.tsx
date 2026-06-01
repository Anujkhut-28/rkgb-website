export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold">
      <span className="h-px w-8 bg-gold" />
      {children}
    </div>
  );
}