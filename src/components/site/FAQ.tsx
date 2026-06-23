import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  { q: "Qu'est-ce que Lumière Capital ?", a: "Lumière Capital est une plateforme d'intelligence crypto française pilotée par l'IA qui combine des modèles d'apprentissage automatique propriétaires, des analyses de marché et un portail capital complet dans une seule expérience." },
  { q: "À qui s'adresse la plateforme ?", a: "Des investisseurs débutants cherchant à apprendre de manière responsable aux traders actifs et gestionnaires de portefeuille qui souhaitent des analyses de niveau institutionnel avec la clarté d'un outil grand public." },
  { q: "Comment fonctionne le moteur d'IA ?", a: "Nous fusionnons les actualités, les flux on-chain, la microstructure du marché et le contexte macro grâce à des ensembles de modèles spécialisés. Les résultats sont explicables, classés par confiance et calibrés selon votre mandat." },
  { q: "Mon capital est-il en sécurité ?", a: "Oui. Le stockage à froid, les clés gérées par HSM, les contrats audités, la 2FA / clés d'accès et une assurance de conservation admissible protègent vos actifs à chaque niveau." },
  { q: "Lumière est-il disponible dans mon pays ?", a: "Lumière est disponible dans plus de 170 pays, avec un support en français et en anglais et une conformité spécifique à la région." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative z-10 py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">FAQ</p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-[-0.03em] leading-[1] font-medium text-white">
            Foire <span className="text-gradient">aux questions.</span>
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
