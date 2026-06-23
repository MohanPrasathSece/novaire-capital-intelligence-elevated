import { motion } from "framer-motion";

const logos = ["CoinMarketCap", "Binance", "Ethereum", "Polygon", "Chainlink", "OpenAI", "NVIDIA", "AWS"];

export function Trust() {
  return (
    <section className="relative z-10 py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-white/40">Écosystème et infrastructure de confiance</p>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-x-6 gap-y-8">
          {logos.map((l, i) => (
            <motion.div
              key={l}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="font-display text-sm tracking-wide text-white/45 hover:text-white transition-colors"
            >
              {l}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
