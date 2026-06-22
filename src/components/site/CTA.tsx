import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="relative z-10 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative overflow-hidden rounded-3xl shimmer-border"
        >
          <div className="relative glass-strong p-12 md:p-20 text-center">
            <div className="absolute inset-0 -z-0 aurora-bg opacity-80" />
            <div className="relative">
              <h2 className="font-display text-4xl md:text-7xl tracking-[-0.04em] leading-[0.95] font-medium">
                <span className="text-white">Ready to build your</span><br />
                <span className="text-gradient">crypto intelligence?</span>
              </h2>
              <p className="mt-6 text-white/65 max-w-xl mx-auto">
                Join thousands of investors using Novaire to trade, learn and grow with confidence.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-shadow hover:shadow-[var(--shadow-glow)]">
                  Create Account
                </button>
                <button className="glass rounded-full px-6 py-3 text-sm font-medium text-white hover:bg-white/5">
                  Explore Academy
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
