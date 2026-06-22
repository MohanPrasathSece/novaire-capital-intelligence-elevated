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
      setError("Email address is required.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    const res = await login(email);
    setLoading(false);

    if (res.success) {
      setSuccess("Logged in successfully!");
      setTimeout(() => {
        handleClose();
        navigate("/academy");
      }, 1000);
    } else {
      setError(res.error || "Login failed. Check your email or sign up.");
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name || !email || !phone) {
      setError("All fields (Name, Email, Phone Number) are required.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (phone.length < 8) {
      setError("Please enter a valid phone number.");
      return;
    }

    setLoading(true);
    const res = await signup(name, email, phone);
    setLoading(false);

    if (res.success) {
      setSuccess("Account created successfully!");
      setTimeout(() => {
        handleClose();
        navigate("/academy");
      }, 1000);
    } else {
      setError(res.error || "Signup failed.");
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
                  <span className="font-display text-xs font-semibold tracking-[0.2em] text-gold uppercase">Lumière Chain Access</span>
                </div>
                <h3 className="font-display text-3xl font-medium tracking-tight text-white mb-1">Welcome Back</h3>
                <p className="text-white/50 text-xs mb-6">Enter your email to access your premium educational portal.</p>

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
                    <label className="text-[11px] uppercase tracking-wider text-white/50 font-medium">Email Address</label>
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
                        <span>Continue</span>
                        <Sparkles size={14} className="text-black/60 group-hover:scale-110 transition-transform" />
                      </>
                    )}
                  </button>

                  <div className="mt-6 text-center text-xs text-white/40">
                    Don't have an account?{" "}
                    <button
                      type="button"
                      onClick={() => {
                        setError("");
                        setSuccess("");
                        setActiveModal("signup");
                      }}
                      className="text-gold hover:underline font-medium"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              // SIGNUP FORM
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-6 w-6 rounded-md bg-[var(--gold)]/10 flex items-center justify-center text-[10px] font-bold text-gold">L</div>
                  <span className="font-display text-xs font-semibold tracking-[0.2em] text-gold uppercase">Lumière Chain Registry</span>
                </div>
                <h3 className="font-display text-3xl font-medium tracking-tight text-white mb-1">Create Account</h3>
                <p className="text-white/50 text-xs mb-6 font-sans">Start your premium digital asset educational journey.</p>

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
                    <label className="text-[11px] uppercase tracking-wider text-white/50 font-medium">Full Name</label>
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
                    <label className="text-[11px] uppercase tracking-wider text-white/50 font-medium">Email Address</label>
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
                    <label className="text-[11px] uppercase tracking-wider text-white/50 font-medium">Phone Number</label>
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
                        <span>Get Started</span>
                        <Sparkles size={14} className="text-black/60 group-hover:scale-110 transition-transform" />
                      </>
                    )}
                  </button>

                  <div className="mt-6 text-center text-xs text-white/40">
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => {
                        setError("");
                        setSuccess("");
                        setActiveModal("login");
                      }}
                      className="text-gold hover:underline font-medium"
                    >
                      Log In
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
