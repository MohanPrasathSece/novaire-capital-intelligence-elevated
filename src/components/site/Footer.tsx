import { Link } from "react-router-dom";

const cols = [
  { t: "Company", l: ["About", "Careers", "Press", "Contact"] },
  { t: "Products", l: ["AI Engine", "Markets", "Signals", "Portfolio"] },
  { t: "Academy", l: ["Lessons", "Glossary", "Research", "Videos"] },
  { t: "Security", l: ["Overview", "Audits", "Compliance", "Insurance"] },
  { t: "Legal", l: ["Terms", "Privacy", "Risk", "Cookies"] },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 mt-20">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid lg:grid-cols-[1.4fr_repeat(5,1fr)] gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-lg bg-[var(--gold)] grid place-items-center text-xs font-bold text-white">L</div>
              <span className="font-display text-sm tracking-[0.2em] text-white">LUMIÈRE CHAIN</span>
            </div>
            <p className="mt-5 max-w-xs text-sm text-white/50 leading-relaxed">
              Intelligence for the next generation of digital assets. Built in France.
            </p>
            <form className="mt-6 flex max-w-xs items-center rounded-full glass p-1">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none"
              />
              <button className="rounded-full bg-white px-4 py-2 text-xs font-medium text-black">Join</button>
            </form>
          </div>
          {cols.map((c) => (
            <div key={c.t}>
              <div className="text-xs uppercase tracking-[0.2em] text-white/40">{c.t}</div>
              <ul className="mt-5 space-y-2.5 text-sm">
                {c.l.map((i) => {
                  if (c.t === "Legal" && i === "Terms") {
                    return (
                      <li key={i}>
                        <Link to="/terms-and-conditions" className="text-white/65 transition-colors hover:text-white">
                          Terms & Conditions
                        </Link>
                      </li>
                    );
                  }
                  if (c.t === "Legal" && i === "Privacy") {
                    return (
                      <li key={i}>
                        <Link to="/privacy-policy" className="text-white/65 transition-colors hover:text-white">
                          Privacy Policy
                        </Link>
                      </li>
                    );
                  }
                  return (
                    <li key={i}>
                      <a href="#" className="text-white/65 transition-colors hover:text-white">{i}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-white/40">
          <div>© {new Date().getFullYear()} Novaire Capital · Paris, France</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Discord</a>
            <a href="#" className="hover:text-white">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
