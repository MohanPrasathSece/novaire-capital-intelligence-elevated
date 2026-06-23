import { motion } from "framer-motion";

const steps = [
  { n: "01", t: "Create Account", d: "Onboard in under two minutes with bank-grade KYC." },
  { n: "02", t: "Learn Crypto", d: "Walk through the Capital Portal at your own pace, French or English." },
  { n: "03", t: "Activate AI", d: "Calibrate the engine to your goals, capital and risk band." },
  { n: "04", t: "Practice", d: "Test strategies in our simulator before deploying real capital." },
  { n: "05", t: "Trade Responsibly", d: "Run live with guardrails, alerts and continuous review." },
];

export function Steps() {
  return (
    <section className="relative z-10 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">How it works</p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-[-0.03em] leading-[1] font-medium text-white">
              Five steps. <span className="text-gradient">Zero friction.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-4 relative">
          <div aria-hidden className="hidden md:block absolute top-12 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative rounded-2xl glass p-6"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-8 w-8 place-items-center rounded-full bg-[var(--gold)] text-[11px] font-display text-white shadow-[var(--shadow-glow)]">
                  {s.n}
                </div>
              </div>
              <h3 className="mt-5 font-display text-lg text-white">{s.t}</h3>
              <p className="mt-2 text-sm text-white/55 leading-relaxed">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
