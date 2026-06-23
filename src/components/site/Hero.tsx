import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export function Hero() {
  const orbRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!orbRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      orbRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="relative z-10 pt-40 pb-24 lg:pt-52 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-8 inline-flex w-full justify-center"
        >
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-white/70">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--gold)] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
            </span>
            <span>En direct · Intelligence Crypto IA Française</span>
            <span className="text-white/30">|</span>
            <span className="text-gradient">Moteur v3.0</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(2.5rem,6.5vw,5rem)] leading-[0.95] tracking-[-0.04em] font-medium"
            >
              <span className="block text-white">Tradez Plus Intelligemment.</span>
              <span className="block text-gradient">Propulsé par</span>
              <span className="block text-white/90">l'Intelligence.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mt-8 max-w-xl text-base lg:text-lg text-white/60 leading-relaxed"
            >
              Une plateforme de trading crypto intelligente construite en France combinant des modèles d'IA propriétaires, des analyses de marché institutionnelles, des données on-chain et une académie de classe mondiale pour la prochaine génération d'investisseurs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <button className="group relative inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:shadow-[var(--shadow-glow)]">
                Commencer le Trading
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
              </button>
              <button className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/5">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-white/10">
                  <span className="ml-0.5 h-0 w-0 border-y-[4px] border-l-[6px] border-y-transparent border-l-white" />
                </span>
                Voir la Démo
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-12 flex items-center gap-8 text-xs text-white/40"
            >
              <div><span className="text-white text-xl font-display">12 Md$+</span><div>Analysé</div></div>
              <div className="h-8 w-px bg-white/10" />
              <div><span className="text-white text-xl font-display">200+</span><div>Modèles d'IA</div></div>
              <div className="h-8 w-px bg-white/10" />
              <div><span className="text-white text-xl font-display">170+</span><div>Pays</div></div>
            </motion.div>
          </div>

          {/* Orb visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative aspect-square w-full max-w-md mx-auto"
          >
            <div ref={orbRef} className="relative h-full w-full transition-transform duration-300 ease-out">
              {/* outer rotating ring */}
              <div className="absolute inset-0 rounded-full border border-white/10 animate-spin-slow" />
              <div className="absolute inset-6 rounded-full border border-white/5 animate-spin-slow [animation-direction:reverse]" />
              <div className="absolute inset-12 rounded-full border border-dashed border-white/10 animate-spin-slow" />

              {/* core orb */}
              <div className="absolute inset-16 rounded-full bg-[var(--gold)] animate-gradient blur-2xl opacity-70" />
              <div className="absolute inset-20 rounded-full bg-[var(--gold)] animate-gradient shadow-[var(--shadow-glow)]" />
              <div className="absolute inset-24 rounded-full bg-[#040404]/40 backdrop-blur-xl" />

              {/* floating tickers */}
              {[
                { sym: "BTC", price: "$98,420", up: true, pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-2" },
                { sym: "ETH", price: "$3,512", up: true, pos: "right-0 top-1/3 translate-x-4" },
                { sym: "SOL", price: "$248.10", up: false, pos: "bottom-2 right-6" },
                { sym: "Signal IA", price: "Achat Fort", up: true, pos: "left-0 bottom-1/3 -translate-x-6" },
              ].map((t) => (
                <div
                  key={t.sym}
                  className={`absolute ${t.pos} glass-strong rounded-xl px-3 py-2 text-xs animate-float`}
                  style={{ animationDelay: `${Math.random() * -8}s` }}
                >
                  <div className="text-[10px] uppercase tracking-wider text-white/50">{t.sym}</div>
                  <div className={`font-display ${t.up ? "text-[var(--gold)]" : "text-white/45"}`}>{t.price}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
