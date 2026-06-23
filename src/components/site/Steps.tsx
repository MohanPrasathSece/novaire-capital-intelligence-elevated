import { motion } from "framer-motion";

const steps = [
  { n: "01", t: "Créer un Compte", d: "Inscrivez-vous en moins de deux minutes avec un KYC de niveau bancaire." },
  { n: "02", t: "Apprendre la Crypto", d: "Parcourez le Portail Capital à votre rythme, en français ou en anglais." },
  { n: "03", t: "Activer l'IA", d: "Calibrez le moteur selon vos objectifs, votre capital et votre niveau de risque." },
  { n: "04", t: "S'entraîner", d: "Testez les stratégies dans notre simulateur avant de déployer du vrai capital." },
  { n: "05", t: "Trader de Manière Responsable", d: "Opérez en direct avec des garde-fous, des alertes et une révision continue." },
];

export function Steps() {
  return (
    <section className="relative z-10 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">Comment ça marche</p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-[-0.03em] leading-[1] font-medium text-white">
              Cinq étapes. <span className="text-gradient">Zéro friction.</span>
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
