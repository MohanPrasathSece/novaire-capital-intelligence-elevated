import { motion } from "framer-motion";

const streams = [
  { label: "News & Sentiment", value: "+0.84", tone: "emerald" },
  { label: "Whale Wallet Flow", value: "Accumulation", tone: "cyan" },
  { label: "Market Regime", value: "Risk-on", tone: "violet" },
  { label: "Technical Bias", value: "Bullish", tone: "emerald" },
  { label: "ML Confidence", value: "92.4%", tone: "blue" },
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
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">AI Trading Engine</p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-[-0.03em] leading-[1] font-medium">
            <span className="text-white">A model that</span><br />
            <span className="text-gradient">never sleeps.</span>
          </h2>
          <p className="mt-6 text-white/60 max-w-md">
            The Lumière Chain engine continuously fuses news, on-chain flows, market microstructure
            and macro signals. It then translates that intelligence into actionable, explainable
            decisions — calibrated to your risk profile.
          </p>

          <ul className="mt-8 space-y-3 text-sm">
            {[
              "Real-time news ingestion across 40+ languages",
              "Whale wallet & exchange flow detection",
              "Sentiment scoring from social and dev activity",
              "Adaptive technical indicator ensembles",
              "Reinforcement-learning execution policies",
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
                <span>v3.0 · live</span>
              </div>

              <div className="mt-5 rounded-2xl bg-black/40 p-5">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-white/40">BTC / USD</div>
                    <div className="font-display text-3xl text-white">$98,420.10</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] uppercase tracking-widest text-white/40">Signal</div>
                    <div className="font-display text-lg text-[var(--gold)]">Strong Buy · 92%</div>
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
