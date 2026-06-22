const coins = [
  { sym: "BTC", name: "Bitcoin", price: "98,420.10", chg: "+2.41%", up: true },
  { sym: "ETH", name: "Ethereum", price: "3,512.88", chg: "+1.87%", up: true },
  { sym: "SOL", name: "Solana", price: "248.10", chg: "-0.92%", up: false },
  { sym: "BNB", name: "BNB", price: "712.40", chg: "+0.54%", up: true },
  { sym: "AVAX", name: "Avalanche", price: "48.21", chg: "+3.12%", up: true },
  { sym: "LINK", name: "Chainlink", price: "22.95", chg: "-1.10%", up: false },
  { sym: "ADA", name: "Cardano", price: "1.08", chg: "+0.77%", up: true },
  { sym: "DOT", name: "Polkadot", price: "9.42", chg: "+2.04%", up: true },
];

export function Marquee() {
  const items = [...coins, ...coins];
  return (
    <section className="relative z-10 border-y border-white/5 bg-[#070708]/60 backdrop-blur-md">
      <div className="overflow-hidden py-4">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {items.map((c, i) => (
            <div key={i} className="flex items-center gap-3 text-sm">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-white/10 to-white/0 text-[10px] font-bold text-white/80">
                {c.sym}
              </div>
              <span className="text-white/80">{c.name}</span>
              <span className="font-display text-white">${c.price}</span>
              <span className={c.up ? "text-[var(--gold)]" : "text-white/45"}>{c.chg}</span>
              <span className="text-white/20">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
