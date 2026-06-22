import { motion } from "framer-motion";

const items = [
  { q: "Novaire feels like having an institutional desk in my pocket. The signal quality is honestly unfair.", a: "Léa M.", r: "Private Investor · Paris" },
  { q: "The Academy alone is worth it. I went from curious to confidently allocating in three weeks.", a: "Hugo R.", r: "Founder · Lyon" },
  { q: "Risk engine caught a position I would have over-sized. Saved me a real drawdown.", a: "Amélie C.", r: "Portfolio Manager · Geneva" },
  { q: "The cleanest, most thoughtful crypto product I have ever used. It just feels expensive.", a: "Karim B.", r: "Quant · London" },
];

export function Testimonials() {
  return (
    <section className="relative z-10 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">Testimonials</p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-[-0.03em] leading-[1] font-medium text-white">
            Trusted by operators, <span className="text-gradient">not influencers.</span>
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-4">
          {items.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-2xl glass p-8"
            >
              <blockquote className="font-display text-xl md:text-2xl text-white leading-snug tracking-[-0.01em]">
                &ldquo;{t.q}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 text-sm">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[var(--electric)] to-[var(--royal)]" />
                <div>
                  <div className="text-white">{t.a}</div>
                  <div className="text-white/45 text-xs">{t.r}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
