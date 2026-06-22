import { motion } from "framer-motion";
import { Lock, Key, Cpu, FileCheck, ShieldCheck, Wallet } from "lucide-react";

const items = [
  { icon: Lock, t: "Cold Wallets", d: "Majority of assets held in air-gapped, geo-distributed cold storage." },
  { icon: Key, t: "2FA + Passkeys", d: "Biometric and WebAuthn-grade authentication on every sensitive action." },
  { icon: Wallet, t: "Hardware Wallet", d: "Native Ledger and Trezor integration for self-custody flows." },
  { icon: Cpu, t: "Encrypted Architecture", d: "End-to-end encryption with HSM-managed keys and zero plaintext." },
  { icon: FileCheck, t: "Smart Contract Audits", d: "Continuous audits and on-chain monitoring across deployed contracts." },
  { icon: ShieldCheck, t: "Insurance Coverage", d: "Custodial coverage with tier-1 underwriters for qualifying assets." },
];

export function Security() {
  return (
    <section id="security" className="relative z-10 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative aspect-square max-w-md"
          >
            <div className="absolute inset-0 rounded-full bg-[var(--gold)]/10 blur-3xl" />
            <div className="absolute inset-8 rounded-full border border-white/10 animate-spin-slow" />
            <div className="absolute inset-16 rounded-full border border-dashed border-white/10 animate-spin-slow [animation-direction:reverse]" />
            <div className="absolute inset-24 rounded-full bg-[var(--gold)]/30 blur-xl" />
            <div className="absolute inset-0 grid place-items-center">
              <ShieldCheck className="h-24 w-24 text-white" strokeWidth={1} />
            </div>
          </motion.div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">Security</p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-[-0.03em] leading-[1] font-medium">
              <span className="text-white">Designed to</span><br />
              <span className="text-gradient">protect capital.</span>
            </h2>
            <div className="mt-10 grid sm:grid-cols-2 gap-3">
              {items.map((it, i) => (
                <motion.div
                  key={it.t}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="rounded-xl glass p-4"
                >
                  <it.icon className="h-5 w-5 text-[var(--gold)]" strokeWidth={1.5} />
                  <div className="mt-3 font-display text-xl text-white">{it.t}</div>
                  <div className="mt-1 text-xs text-white/55 leading-relaxed">{it.d}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
