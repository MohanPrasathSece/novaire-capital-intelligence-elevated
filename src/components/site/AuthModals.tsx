import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, Sparkles, User, Mail, Phone } from "lucide-react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export function AuthModals() {
  const { activeModal, setActiveModal, login, signup } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleClose = () => {
    setError("");
    setSuccess("");
    setEmail("");
    setName("");
    setPhone("");
    setActiveModal(null);
  };

  const validateEmail = (emailStr: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email) {
      setError("L'adresse email est requise.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Veuillez entrer une adresse email valide.");
      return;
    }

    setLoading(true);
    const res = await login(email);

    if (res.success) {
      setSuccess("Connecté avec succès !");
      // Short delay to show success message before navigating
      setTimeout(() => {
        handleClose();
        navigate("/capital");
        setLoading(false);
      }, 600);
    } else {
      setLoading(false);
      setError(res.error || "Échec de la connexion. Vérifiez votre email ou inscrivez-vous.");
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name || !email) {
      setError("Le nom et l'email sont requis.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Veuillez entrer une adresse email valide.");
      return;
    }

    const cleanNum = phone.replace(/\s+/g, "");
    if (!cleanNum) {
      setError("Veuillez entrer un numéro de téléphone");
      return;
    } else if (!/^(\+41|0041|0)?[1-9]\d{8}$/.test(cleanNum)) {
      setError("Veuillez entrer un numéro suisse valide (ex: 079 123 45 67)");
      return;
    }

    setLoading(true);
    const res = await signup(name, email, cleanNum);

    if (res.success) {
      setSuccess("Compte créé avec succès !");
      // Short delay to show success message before navigating
      setTimeout(() => {
        handleClose();
        navigate("/capital");
        setLoading(false);
      }, 600);
    } else {
      setLoading(false);
      setError(res.error || "Échec de l'inscription.");
    }
  };

  return (
    <AnimatePresence>
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl glass-strong shimmer-border p-8 text-left shadow-[var(--shadow-elegant)] noise"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/5"
            >
              <X size={18} />
            </button>

            {/* Glowing Aura Effect */}
            <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-[var(--gold)] opacity-10 blur-3xl pointer-events-none" />

            {activeModal === "login" ? (
              // LOGIN FORM
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-6 w-6 rounded-md bg-[var(--gold)]/10 flex items-center justify-center text-[10px] font-bold text-gold">L</div>
                  <span className="font-display text-xs font-semibold tracking-[0.2em] text-gold uppercase">Accès Lumière Chain</span>
                </div>
                <h3 className="font-display text-3xl font-medium tracking-tight text-white mb-1">De Retour</h3>
                <p className="text-white/50 text-xs mb-6">Entrez votre email pour accéder à votre portail éducatif premium.</p>

                {error && (
                  <div className="mb-4 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-xs">
                    {error}
                  </div>
                )}
                {success && (
                  <div className="mb-4 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
                    {success}
                  </div>
                )}

                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase tracking-wider text-white/50 font-medium">Adresse Email</label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
                      <input
                        type="email"
                        placeholder="name@domain.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={loading}
                        className="w-full bg-[#0d0c0b] border border-white/5 focus:border-[var(--gold)]/50 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[var(--gold)]/30 transition-all"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full relative mt-2 group overflow-hidden rounded-xl bg-white text-black py-3 text-sm font-medium hover:shadow-[var(--shadow-glow)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {loading ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : (
                      <>
                        <span>Continuer</span>
                        <Sparkles size={14} className="text-black/60 group-hover:scale-110 transition-transform" />
                      </>
                    )}
                  </button>

                  <div className="mt-6 text-center text-xs text-white/40">
                    Vous n'avez pas de compte ?{" "}
                    <button
                      type="button"
                      onClick={() => {
                        setError("");
                        setSuccess("");
                        setActiveModal("signup");
                      }}
                      className="text-gold hover:underline font-medium"
                    >
                      S'inscrire
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              // SIGNUP FORM
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-6 w-6 rounded-md bg-[var(--gold)]/10 flex items-center justify-center text-[10px] font-bold text-gold">L</div>
                  <span className="font-display text-xs font-semibold tracking-[0.2em] text-gold uppercase">Registre Lumière Chain</span>
                </div>
                <h3 className="font-display text-3xl font-medium tracking-tight text-white mb-1">Créer un Compte</h3>
                <p className="text-white/50 text-xs mb-6 font-sans">Commencez votre voyage éducatif premium sur les actifs numériques.</p>

                {error && (
                  <div className="mb-4 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-xs">
                    {error}
                  </div>
                )}
                {success && (
                  <div className="mb-4 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
                    {success}
                  </div>
                )}

                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase tracking-wider text-white/50 font-medium">Nom Complet</label>
                    <div className="relative">
                      <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={loading}
                        className="w-full bg-[#0d0c0b] border border-white/5 focus:border-[var(--gold)]/50 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[var(--gold)]/30 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase tracking-wider text-white/50 font-medium">Adresse Email</label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
                      <input
                        type="email"
                        placeholder="name@domain.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={loading}
                        className="w-full bg-[#0d0c0b] border border-white/5 focus:border-[var(--gold)]/50 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[var(--gold)]/30 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase tracking-wider text-white/50 font-medium">Numéro de Téléphone</label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
                      <input
                        type="tel"
                        placeholder="+33 6 1234 5678"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        disabled={loading}
                        className="w-full bg-[#0d0c0b] border border-white/5 focus:border-[var(--gold)]/50 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[var(--gold)]/30 transition-all"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full relative mt-2 group overflow-hidden rounded-xl bg-white text-black py-3 text-sm font-medium hover:shadow-[var(--shadow-glow)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {loading ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : (
                      <>
                        <span>Commencer</span>
                        <Sparkles size={14} className="text-black/60 group-hover:scale-110 transition-transform" />
                      </>
                    )}
                  </button>

                  <div className="mt-6 text-center text-xs text-white/40">
                    Vous avez déjà un compte ?{" "}
                    <button
                      type="button"
                      onClick={() => {
                        setError("");
                        setSuccess("");
                        setActiveModal("login");
                      }}
                      className="text-gold hover:underline font-medium"
                    >
                      Se Connecter
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
