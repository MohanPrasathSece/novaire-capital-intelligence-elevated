export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* aurora orbs */}
      <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[oklch(0.55_0.25_290/0.35)] blur-[140px] animate-float" />
      <div className="absolute top-1/3 -right-40 h-[700px] w-[700px] rounded-full bg-[oklch(0.70_0.22_255/0.30)] blur-[160px] animate-float [animation-delay:-3s]" />
      <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-[oklch(0.85_0.18_200/0.20)] blur-[140px] animate-float [animation-delay:-6s]" />
      {/* grid */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      {/* noise */}
      <div className="absolute inset-0 noise" />
    </div>
  );
}
