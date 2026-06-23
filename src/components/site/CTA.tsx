import { motion } from "framer-motion";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export function CTA() {
  const { user, setActiveModal } = useAuth();
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    if (user) {
      navigate("/capital");
    } else {
      setActiveModal("signup");
    }
  };

  const handleExploreCapital = () => {
    if (user) {
      navigate("/capital");
    } else {
      setActiveModal("login");
    }
  };

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
                <span className="text-white">Prêt à construire votre</span><br />
                <span className="text-gradient">intelligence crypto ?</span>
              </h2>
              <p className="mt-6 text-white/65 max-w-xl mx-auto">
                Rejoignez des milliers d'investisseurs utilisant Novaire pour trader, apprendre et croître en toute confiance.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <button
                  onClick={handleCreateAccount}
                  className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-shadow hover:shadow-[var(--shadow-glow)] cursor-pointer"
                >
                  {user ? "Aller sur Capital" : "Créer un Compte"}
                </button>
                <button
                  onClick={handleExploreCapital}
                  className="glass rounded-full px-6 py-3 text-sm font-medium text-white hover:bg-white/5 cursor-pointer"
                >
                  Explorer Capital
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
