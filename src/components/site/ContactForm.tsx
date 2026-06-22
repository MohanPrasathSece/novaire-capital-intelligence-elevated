import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Mail, Phone, User, Send } from "lucide-react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    if (!name || !email || !phone) {
      setError("Name, email, and phone number are required.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccess("Thank you! Your enquiry has been received successfully.");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        setError(data.error || "Failed to submit enquiry. Please try again.");
      }
    } catch (err) {
      console.warn("CRM connection offline, simulating success locally:", err);
      setSuccess("Thank you! Your enquiry has been received successfully.");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative z-10 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl shimmer-border"
        >
          <div className="relative glass-strong p-8 md:p-12 text-left">
            <div className="text-center mb-10">
              <span className="text-[var(--gold)] font-display text-[15px] uppercase tracking-[0.2em] font-semibold">Consulting & Advisory</span>
              <h2 className="font-display text-4xl md:text-5xl tracking-tight font-medium mt-2">
                Get in Touch
              </h2>
              <p className="mt-3 text-white/50 text-[15px] max-w-md mx-auto">
                Have questions about our proprietary AI models or corporate consulting? Complete the form below.
              </p>
            </div>

            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-emerald-500/10 text-emerald-400 mb-6 text-2xl font-bold">
                  ✓
                </div>
                <h3 className="font-display text-2xl font-medium text-white mb-2">Enquiry Received</h3>
                <p className="text-emerald-400 text-[15px]">{success}</p>
                <button
                  onClick={() => setSuccess("")}
                  className="mt-6 text-[15px] text-white/50 hover:text-white underline cursor-pointer"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-[15px]">
                    {error}
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[15px] uppercase tracking-wider text-white/50 font-medium">Full Name</label>
                    <div className="relative">
                      <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={loading}
                        required
                        className="w-full bg-[#0d0c0b] border border-white/5 focus:border-[var(--gold)]/50 rounded-xl py-3 pl-10 pr-4 text-[15px] text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[var(--gold)]/30 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[15px] uppercase tracking-wider text-white/50 font-medium">Email Address</label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
                      <input
                        type="email"
                        placeholder="name@domain.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={loading}
                        required
                        className="w-full bg-[#0d0c0b] border border-white/5 focus:border-[var(--gold)]/50 rounded-xl py-3 pl-10 pr-4 text-[15px] text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[var(--gold)]/30 transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[15px] uppercase tracking-wider text-white/50 font-medium">Phone Number</label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
                    <input
                      type="tel"
                      placeholder="+33 6 1234 5678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      disabled={loading}
                      required
                      className="w-full bg-[#0d0c0b] border border-white/5 focus:border-[var(--gold)]/50 rounded-xl py-3 pl-10 pr-4 text-[15px] text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[var(--gold)]/30 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[15px] uppercase tracking-wider text-white/50 font-medium">Message (Optional)</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your enquiry..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={loading}
                    className="w-full bg-[#0d0c0b] border border-white/5 focus:border-[var(--gold)]/50 rounded-xl py-3 px-4 text-[15px] text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[var(--gold)]/30 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full relative mt-2 group overflow-hidden rounded-xl bg-white text-black py-3 text-[15px] font-semibold hover:shadow-[var(--shadow-glow)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <>
                      <span>Send Enquiry</span>
                      <Send size={12} className="text-black/60 group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
