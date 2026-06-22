import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, prefix = "", suffix = "", decimals = 0 }: { to: number; prefix?: string; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const display = useTransform(mv, (v) => `${prefix}${v.toFixed(decimals)}${suffix}`);
  useEffect(() => {
    if (inView) animate(mv, to, { duration: 2.2, ease: [0.22, 1, 0.36, 1] });
  }, [inView, mv, to]);
  return <motion.span ref={ref}>{display}</motion.span>;
}

const stats = [
  { v: 12, prefix: "$", suffix: "B+", label: "Assets Analyzed" },
  { v: 200, suffix: "+", label: "AI Models" },
  { v: 99.92, suffix: "%", label: "Engine Uptime", decimals: 2 },
  { v: 170, suffix: "+", label: "Countries" },
];

export function Stats() {
  return (
    <section className="relative z-10 py-24">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl glass p-8 text-center">
            <div className="font-display text-4xl md:text-5xl tracking-[-0.04em] text-gradient">
              <Counter to={s.v} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals} />
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/45">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
