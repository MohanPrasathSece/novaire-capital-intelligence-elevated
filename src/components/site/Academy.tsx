import { motion } from "framer-motion";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const lessons = [
  "Introduction à la Crypto-monnaie",
  "Comprendre la Blockchain",
  "Investissement en Actifs Numériques",
  "Bases du Trading Crypto",
  "Analyse Technique",
  "Analyse Fondamentale",
  "IA & Analyse de Marché",
  "Diversification de Portefeuille",
  "Gestion des Risques",
  "Psychologie du Marché",
  "Stablecoins",
  "Couche 1 & Couche 2",
  "DeFi",
  "NFTs & Tokenomics",
  "Portefeuilles & Sécurité",
  "Avenir de l'IA dans la Crypto",
];

export function Academy() {
  const { user, setActiveModal } = useAuth();
  const navigate = useNavigate();

  const handleLessonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (user) {
      navigate("/academy");
    } else {
      setActiveModal("login");
    }
  };

  return (
    <section id="academy" className="relative z-10 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">Académie</p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-[-0.03em] leading-[1] font-medium text-white">
            Apprenez le nouveau <span className="text-gradient">langage financier.</span>
          </h2>
          <p className="mt-6 text-white/55">
            Un programme élaboré, rédigé par des traders et des ingénieurs. Seize modules — de votre premier portefeuille au déploiement de stratégies d'IA — conçus pour vous rendre véritablement fluide.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {lessons.map((l, i) => (
            <motion.a
              key={l}
              href="#"
              onClick={handleLessonClick}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              whileHover={{ y: -3 }}
              className="group relative block rounded-2xl glass p-5 transition-colors hover:bg-white/[0.04]"
            >
              <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-white/40">
                <span>Leçon {String(i + 1).padStart(2, "0")}</span>
                <span>{4 + (i % 6)} min</span>
              </div>
              <div className="mt-4 font-display text-base text-white leading-tight">{l}</div>
              <div className="mt-6 flex items-center gap-2 text-xs text-[var(--gold)]">
                Lire la leçon
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
