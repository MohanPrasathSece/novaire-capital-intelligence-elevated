import { motion } from "framer-motion";
import { Brain, ChartBar, Radar, Signal, Shield, Activity, HeartPulse, Bell } from "lucide-react";

const features = [
  { icon: Brain, title: "Prédictions IA", desc: "Les modèles propriétaires prévoient les biais directionnels et les fenêtres de volatilité sur plus de 200 actifs." },
  { icon: ChartBar, title: "Intelligence de Portefeuille", desc: "Analyses de corrélation, de drawdown et d'exposition calibrées selon votre profil de risque." },
  { icon: Radar, title: "Analyses Institutionnelles", desc: "Flux d'ordres, cartes thermiques de liquidité et suivi des portefeuilles de baleines depuis une interface unique." },
  { icon: Signal, title: "Scanner de Marché", desc: "La détection continue de régime identifie les cassures dès qu'elles se forment." },
  { icon: Activity, title: "Signaux de Trading", desc: "Signaux horodatés avec scores de conviction, entrées, invalidations et objectifs." },
  { icon: Shield, title: "Moteur de Risque", desc: "Dimensionnement des positions, placement de stops et stress tests, automatisés selon votre mandat." },
  { icon: HeartPulse, title: "Santé du Portefeuille", desc: "Un score vivant qui évolue avec la macroéconomie, les flux on-chain et votre comportement." },
  { icon: Bell, title: "Alertes en Temps Réel", desc: "Alertes push, email et webhook sur les conditions qui comptent vraiment." },
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
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">Pourquoi Lumière Chain</p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-[-0.03em] leading-[1] font-medium">
            <span className="text-white">Une couche d'intelligence</span><br />
            <span className="text-gradient">pour les actifs numériques.</span>
          </h2>
          <p className="mt-6 text-white/55 max-w-xl">
            Huit moteurs, un système continu. Construit en France avec la discipline d'un bureau institutionnel et la clarté d'un logiciel grand public.
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
                <h3 className="mt-5 font-display text-2xl text-white tracking-tight">{f.title}</h3>
                <p className="mt-2 text-sm text-white/55 leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
