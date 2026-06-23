import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  { q: "What is Lumière Capital?", a: "Lumière Capital is a French AI-driven crypto intelligence platform that combines proprietary machine-learning models, market analytics and a complete capital portal in one experience." },
  { q: "Who is the platform for?", a: "From first-time investors looking to learn responsibly to active traders and portfolio managers who want institutional-grade analytics with consumer-grade clarity." },
  { q: "How does the AI engine work?", a: "We fuse news, on-chain flows, market microstructure and macro context through ensembles of specialized models. Outputs are explainable, ranked by confidence and calibrated to your mandate." },
  { q: "Is my capital secure?", a: "Yes. Cold storage, HSM-managed keys, audited contracts, 2FA / passkeys and qualifying custodial insurance protect your assets at every layer." },
  { q: "Is Lumière available in my country?", a: "Lumière is available in 170+ countries, with French- and English-language support and region-specific compliance." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative z-10 py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">FAQ</p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-[-0.03em] leading-[1] font-medium text-white">
            Frequently <span className="text-gradient">asked.</span>
          </h2>
        </div>

        <div className="mt-14 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="rounded-2xl glass overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base md:text-lg text-white">{f.q}</span>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="text-white/60">
                    <Plus className="h-5 w-5" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-sm text-white/60 leading-relaxed">{f.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
