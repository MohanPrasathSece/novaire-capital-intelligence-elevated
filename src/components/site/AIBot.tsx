import { motion } from "framer-motion";

const streams = [
  { label: "Actualités & Sentiment", value: "+0.84", tone: "emerald" },
  { label: "Flux Portefeuille Baleine", value: "Accumulation", tone: "cyan" },
  { label: "Régime de Marché", value: "Risk-on", tone: "violet" },
  { label: "Biais Technique", value: "Haussier", tone: "emerald" },
  { label: "Confiance ML", value: "92.4%", tone: "blue" },
];

export function AIBot() {
  return (
    <section id="ai-bot" className="relative z-10 py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">Moteur de Trading IA</p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-[-0.03em] leading-[1] font-medium">
            <span className="text-white">Un modèle qui</span><br />
            <span className="text-gradient">ne dort jamais.</span>
          </h2>
          <p className="mt-6 text-white/60 max-w-md">
            Le moteur Lumière Chain fusionne en permanence les actualités, les flux on-chain, la microstructure du marché et les signaux macro. Il traduit ensuite cette intelligence en décisions actionnables et explicables — calibrées selon votre profil de risque.
          </p>

          <ul className="mt-8 space-y-3 text-sm">
            {[
              "Ingestion d'actualités en temps réel dans plus de 40 langues",
              "Détection des flux de portefeuilles de baleines et d'échanges",
              "Évaluation du sentiment à partir de l'activité sociale et des développeurs",
              "Ensembles d'indicateurs techniques adaptatifs",
              "Politiques d'exécution par apprentissage par renforcement",
            ].map((line) => (
              <li key={line} className="flex items-start gap-3 text-white/70">
                <span className="mt-1.5 h-1 w-1 rounded-full bg-[var(--gold)] shadow-[0_0_8px_var(--gold)]" />
                {line}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Mock UI */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-10 bg-[var(--gold)]/10 blur-3xl rounded-full" />
          <div className="relative shimmer-border rounded-3xl">
            <div className="rounded-3xl glass-strong p-6">
              <div className="flex items-center justify-between text-xs text-white/50">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--gold)] animate-pulse" />
                  lumiere.engine
                </div>
                <span>v3.0 · en direct</span>
              </div>

              <div className="mt-5 rounded-2xl bg-black/40 p-5">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-white/40">BTC / USD</div>
                    <div className="font-display text-3xl text-white">$98,420.10</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] uppercase tracking-widest text-white/40">Signal</div>
                    <div className="font-display text-lg text-[var(--gold)]">Achat Fort · 92%</div>
                  </div>
                </div>

                {/* Sparkline */}
                <svg viewBox="0 0 400 100" className="mt-4 w-full h-24">
                  <defs>
                    <linearGradient id="ln" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="oklch(0.85 0.18 200)" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="oklch(0.85 0.18 200)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,70 C40,60 60,80 100,55 C140,30 180,65 220,40 C260,18 300,38 340,25 C370,15 390,20 400,12 L400,100 L0,100 Z"
                    fill="url(#ln)"
                  />
                  <path
                    d="M0,70 C40,60 60,80 100,55 C140,30 180,65 220,40 C260,18 300,38 340,25 C370,15 390,20 400,12"
                    fill="none"
                    stroke="oklch(0.85 0.18 200)"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2">
                {streams.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="flex items-center justify-between rounded-xl bg-white/[0.03] px-4 py-2.5 text-xs"
                  >
                    <span className="text-white/60">{s.label}</span>
                    <span className="font-display text-white">{s.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
