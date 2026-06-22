export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* warm soft glows — two-tone, no blue/purple */}
      <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[oklch(0.80_0.11_78/0.10)] blur-[140px] animate-float" />
      <div className="absolute top-1/3 -right-40 h-[700px] w-[700px] rounded-full bg-[oklch(0.80_0.11_78/0.06)] blur-[160px] animate-float [animation-delay:-3s]" />
      <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-[oklch(0.30_0.01_60/0.6)] blur-[140px] animate-float [animation-delay:-6s]" />
      {/* grid */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      {/* noise */}
      <div className="absolute inset-0 noise" />
    </div>
  );
}
