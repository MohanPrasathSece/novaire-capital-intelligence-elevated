import { motion } from "framer-motion";
import { Brain, ChartBar, Radar, Signal, Shield, Activity, HeartPulse, Bell } from "lucide-react";

const features = [
  { icon: Brain, title: "AI Predictions", desc: "Proprietary models forecast directional bias and volatility windows across 200+ assets." },
  { icon: ChartBar, title: "Portfolio Intelligence", desc: "Correlation, drawdown, and exposure analytics calibrated to your risk profile." },
  { icon: Radar, title: "Institutional Analytics", desc: "Order flow, liquidity heatmaps and whale wallet tracking from a single surface." },
  { icon: Signal, title: "Market Scanner", desc: "Continuous regime detection surfaces breakouts the moment they form." },
  { icon: Activity, title: "Trading Signals", desc: "Time-stamped signals with conviction scores, entries, invalidations and targets." },
  { icon: Shield, title: "Risk Engine", desc: "Position sizing, stop placement and stress tests, automated to your mandate." },
  { icon: HeartPulse, title: "Portfolio Health", desc: "A living score that evolves with macro, on-chain flows and your behavior." },
  { icon: Bell, title: "Real-time Alerts", desc: "Push, email and webhook alerts on the conditions that actually matter." },
];

export function Features() {
  return (
    <section id="technology" className="relative z-10 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">Why Novaire</p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-[-0.03em] leading-[1] font-medium">
            <span className="text-white">An intelligence layer</span><br />
            <span className="text-gradient">for digital assets.</span>
          </h2>
          <p className="mt-6 text-white/55 max-w-xl">
            Eight engines, one continuous system. Built in France with the discipline of an
            institutional desk and the clarity of consumer software.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 transition-all hover:bg-white/[0.04]"
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[var(--gold)]/0 blur-3xl transition-all duration-500 group-hover:bg-[var(--gold)]/15" />
              <div className="relative">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/[0.02] text-white">
                  <f.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-display text-lg text-white tracking-tight">{f.title}</h3>
                <p className="mt-2 text-sm text-white/55 leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
