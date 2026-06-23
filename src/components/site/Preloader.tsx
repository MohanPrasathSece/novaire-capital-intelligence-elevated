import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Preloader() {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(() => {
    return sessionStorage.getItem("lumiere_preloader_played") === "true";
  });

  useEffect(() => {
    if (done) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(100, ((t - start) / 1400) * 100);
      setPct(Math.floor(p));
      if (p < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        sessionStorage.setItem("lumiere_preloader_played", "true");
        setTimeout(() => setDone(true), 250);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] grid place-items-center bg-[#040404]"
        >
          <div className="relative flex flex-col items-center">
            <div className="relative h-32 w-32">
              <div className="absolute inset-0 rounded-full bg-[var(--gold)] blur-2xl opacity-60 animate-pulse-glow" />
              <div className="absolute inset-3 rounded-full bg-[var(--gold)] animate-gradient" />
              <div className="absolute inset-6 rounded-full bg-[#040404] grid place-items-center font-display text-xl text-white">L</div>
            </div>
            <div className="mt-10 font-display text-xs tracking-[0.4em] text-white/60">LUMIÈRE CAPITAL</div>
            <div className="mt-2 font-display text-3xl text-gradient tabular-nums">{pct}%</div>
            <div className="mt-4 h-px w-48 overflow-hidden bg-white/10">
              <motion.div className="h-full bg-[var(--gold)]" style={{ width: `${pct}%` }} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
