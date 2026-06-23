import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

const links = ["Technologie", "Bot IA", "Capital", "Sécurité", "FAQ", "Contact"];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { user, setActiveModal, logout } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4"
    >
      <nav
        className={`mt-4 flex w-full max-w-7xl items-center justify-between rounded-2xl px-5 transition-all duration-500 ${
          scrolled ? "glass-strong py-2.5" : "py-4"
        }`}
      >
        <Link to="/" className="group flex items-center gap-2.5">
          <div className="relative h-8 w-8 rounded-lg bg-[var(--gold)] shadow-[var(--shadow-glow)]">
            <div className="absolute inset-[2px] rounded-md bg-[#040404] flex items-center justify-center text-[10px] font-bold text-gold">
              L
            </div>
          </div>
          <span className="font-display text-sm font-semibold tracking-[0.2em] text-white/90">
            LUMIÈRE CHAIN
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1 text-[15px] text-white/70">
          {links.map((l) => {
            const isCapital = l === "Capital";
            if (isCapital && !user) {
              return (
                <li key={l}>
                  <button
                    onClick={() => setActiveModal("login")}
                    className="relative inline-block rounded-full px-3.5 py-1.5 transition-colors hover:text-white cursor-pointer bg-transparent border-none font-sans text-[15px]"
                  >
                    {l}
                  </button>
                </li>
              );
            }
            return (
              <li key={l}>
                <Link
                  to={isCapital ? "/capital" : `/#${l.toLowerCase().replace(/\s+/g, "-")}`}
                  className="relative inline-block rounded-full px-3.5 py-1.5 transition-colors hover:text-white"
                >
                  {l}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          {user ? (
            <>
              <Link
                to="/capital"
                className="group relative inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-[15px] font-medium transition-all hover:shadow-[var(--shadow-glow)]"
              >
                Portail Capital
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
              <button
                onClick={logout}
                className="hidden md:inline-flex items-center rounded-full px-4 py-2 text-[15px] text-white/80 transition-colors hover:text-white cursor-pointer"
              >
                Déconnexion
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setActiveModal("login")}
                className="hidden md:inline-flex items-center rounded-full px-4 py-2 text-[15px] text-white/80 transition-colors hover:text-white cursor-pointer"
              >
                Connexion
              </button>
              <button
                onClick={() => setActiveModal("signup")}
                className="group relative inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-[15px] font-medium transition-all hover:shadow-[var(--shadow-glow)] cursor-pointer"
              >
                Commencer
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
              </button>
            </>
          )}
        </div>
      </nav>
    </motion.header>
  );
}
