import { motion } from "framer-motion";

const items = [
  { q: "Lumière, c'est comme avoir un bureau institutionnel dans ma poche. La qualité du signal est honnêtement déloyale.", a: "Léa M.", r: "Investisseur Privé · Paris" },
  { q: "Le Portail Capital à lui seul en vaut la peine. Je suis passé de curieux à un placement confiant en trois semaines.", a: "Hugo R.", r: "Fondateur · Lyon" },
  { q: "Le moteur de risque a détecté une position que j'aurais surdimensionnée. M'a sauvé d'un vrai drawdown.", a: "Amélie C.", r: "Gestionnaire de Portefeuille · Genève" },
  { q: "Le produit crypto le plus propre et le plus réfléchi que j'aie jamais utilisé. Il a juste l'air cher.", a: "Karim B.", r: "Quant · Londres" },
];

export function Testimonials() {
  return (
    <section className="relative z-10 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">Témoignages</p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-[-0.03em] leading-[1] font-medium text-white">
            Approuvé par des opérateurs, <span className="text-gradient">pas des influenceurs.</span>
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
                <div className="h-10 w-10 rounded-full bg-[var(--gold)]" />
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
