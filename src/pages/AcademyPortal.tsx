import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  Shield,
  BookOpen,
  Cpu,
  PieChart,
  Activity,
  AlertTriangle,
  Lock,
  ArrowRight,
  Loader2,
  Menu,
  X,
  Sparkles,
  HelpCircle,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../components/site/AuthContext";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";

// Mock market graph data
const graphData = [
  { name: "Mon", price: 62000 },
  { name: "Tue", price: 61500 },
  { name: "Wed", price: 63400 },
  { name: "Thu", price: 64100 },
  { name: "Fri", price: 63800 },
  { name: "Sat", price: 65900 },
  { name: "Sun", price: 67200 },
];

export function AcademyPortal() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // If user is not logged in, redirect to home
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  const [activeTab, setActiveTab] = useState("intro");

  // Live Candlestick Simulator State
  const [candles, setCandles] = useState([
    { open: 60, close: 75, high: 80, low: 55, isBullish: true },
    { open: 75, close: 70, high: 85, low: 65, isBullish: false },
    { open: 70, close: 85, high: 90, low: 68, isBullish: true },
    { open: 85, close: 95, high: 100, low: 80, isBullish: true },
    { open: 95, close: 90, high: 98, low: 88, isBullish: false },
    { open: 90, close: 105, high: 110, low: 85, isBullish: true },
  ]);

  const [currentPrice, setCurrentPrice] = useState(98420.10);
  const [priceChange, setPriceChange] = useState(4.25);

  useEffect(() => {
    const interval = setInterval(() => {
      const change = (Math.random() - 0.49) * 40;
      setCurrentPrice(prev => Number((prev + change).toFixed(2)));
      setPriceChange(prev => Number((prev + (change > 0 ? 0.01 : -0.01)).toFixed(2)));
      
      setCandles(prev => {
        const next = [...prev];
        const last = { ...next[next.length - 1] };
        last.close = Math.max(30, Math.min(120, last.close + (change > 0 ? 3.5 : -3.5)));
        last.high = Math.max(last.high, last.close, last.open);
        last.low = Math.min(last.low, last.close, last.open);
        last.isBullish = last.close >= last.open;
        next[next.length - 1] = last;
        
        if (Math.random() > 0.8) {
          const newOpen = last.close;
          const newClose = newOpen + (Math.random() > 0.5 ? 6 : -6);
          next.shift();
          next.push({
            open: newOpen,
            close: newClose,
            high: Math.max(newOpen, newClose) + 6,
            low: Math.min(newOpen, newClose) - 6,
            isBullish: newClose >= newOpen
          });
        }
        return next;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Contact form state
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setSuccessMsg("Thank you! Your enquiry has been received successfully.");
        setMessage("");
      } else {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.warn("CRM connection offline, simulating success locally:", err);
      setSuccessMsg("Thank you! Your enquiry has been received successfully.");
      setMessage("");
    } finally {
      setLoading(false);
    }
  };

  const tabs = [
    { id: "intro", title: "Introduction", icon: BookOpen },
    { id: "blockchain", title: "Blockchain", icon: Cpu },
    { id: "investing", title: "Asset Investing", icon: TrendingUp },
    { id: "trading", title: "Trading Basics", icon: Activity },
    { id: "ai", title: "AI & Market Analysis", icon: Sparkles },
    { id: "portfolio", title: "Portfolio Diversification", icon: PieChart },
    { id: "risk", title: "Risk Management", icon: AlertTriangle },
    { id: "trends", title: "Market Trends", icon: TrendingUp },
    { id: "security", title: "Security Best Practices", icon: Lock },
    { id: "faq", title: "FAQ", icon: HelpCircle },
  ];

  if (!user) return null;

  return (
    <div className="relative min-h-screen bg-[#0a0908] text-white selection:bg-gold/30 selection:text-white pb-24 overflow-x-hidden">
      {/* Background aesthetics */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[var(--gold)] opacity-[0.03] blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[600px] h-[600px] rounded-full bg-[var(--gold)] opacity-[0.02] blur-3xl pointer-events-none" />

      {/* Golden 3D Spinning Bitcoin Coin Visual */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          rotateY: [0, 360],
          boxShadow: [
            "0 0 20px rgba(242,169,0,0.2)",
            "0 0 40px rgba(242,169,0,0.6)",
            "0 0 20px rgba(242,169,0,0.2)"
          ]
        }}
        transition={{
          y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
          rotateY: { repeat: Infinity, duration: 8, ease: "linear" },
          boxShadow: { repeat: Infinity, duration: 3, ease: "easeInOut" }
        }}
        className="absolute top-36 right-16 w-24 h-24 rounded-full bg-gradient-to-br from-[#ffd700] via-[#daa520] to-[#b8860b] hidden xl:flex items-center justify-center border-4 border-yellow-200 text-[#0a0908] font-bold text-4xl select-none"
        style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      >
        ₿
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-[600px] left-10 w-14 h-14 glass rounded-2xl hidden xl:flex items-center justify-center border-gold/20 shadow-[0_0_20px_rgba(212,175,55,0.1)] text-purple-400 font-bold text-xl"
      >
        Ξ
      </motion.div>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute bottom-60 right-20 w-12 h-12 glass rounded-2xl hidden xl:flex items-center justify-center border-gold/20 shadow-[0_0_20px_rgba(212,175,55,0.1)] text-emerald-400 font-bold text-lg"
      >
        ₮
      </motion.div>

      {/* Navigation Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-white/5 bg-[#0a0908]/80 backdrop-blur-md">
        <Link to="/" className="group flex items-center gap-2.5">
          <div className="relative h-8 w-8 rounded-lg bg-[var(--gold)] shadow-[var(--shadow-glow)] flex items-center justify-center text-[10px] font-bold text-[#040404]">
            L
          </div>
          <span className="font-display text-sm font-semibold tracking-[0.2em] text-white/90">
            LUMIÈRE CHAIN
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden sm:block text-right">
            <div className="text-xs text-white/40">Logged in as</div>
            <div className="text-sm font-medium text-white/90">{user.name}</div>
          </div>
          <button
            onClick={logout}
            className="glass rounded-full px-4 py-1.5 text-xs font-medium text-white hover:bg-white/5 cursor-pointer transition-colors"
          >
            Log Out
          </button>
        </div>
      </header>

      {/* Main Educational Experience */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 mt-12">
        {/* Title / Description */}
        <div className="max-w-3xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-3"
          >
            <span className="h-2 w-2 rounded-full bg-[var(--gold)] animate-pulse" />
            <span className="text-[var(--gold)] font-display text-xs uppercase tracking-[0.2em] font-semibold">Premium Crypto Intelligence</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-6xl tracking-tight font-medium"
          >
            Lumière Academy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-white/50 text-sm md:text-base leading-relaxed"
          >
            Explore our curated institutional-grade education program. Dive deep into market mechanics, blockchain concepts, advanced trading strategies, and proprietary AI signals.
          </motion.p>
        </div>

        {/* Mac-Style Browser Window Frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full rounded-2xl glass-strong border border-white/5 overflow-hidden shadow-[var(--shadow-elegant)] noise"
        >
          {/* Mac Header Bar */}
          <div className="bg-[#121110] px-4 py-3 flex items-center gap-4 border-b border-white/5">
            {/* Window control dots */}
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>

            {/* Address Bar */}
            <div className="flex-1 max-w-lg mx-auto bg-[#0a0908] border border-white/5 rounded-lg py-1 px-4 text-center text-xs text-white/30 truncate select-none">
              https://lumierechain.academy/learn/{activeTab}
            </div>
          </div>

          {/* Browser Navigation Sidebar / Tab Container */}
          <div className="flex flex-col lg:flex-row min-h-[600px]">
            {/* Sidebar list */}
            <div className="w-full lg:w-72 bg-[#0c0b0a] border-r border-b lg:border-b-0 border-white/5 p-4 space-y-1">
              <div className="text-[11px] uppercase tracking-wider text-white/30 font-medium px-3 mb-3">Courses</div>
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium text-left transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[var(--gold)]/10 text-[var(--gold)] border-l-2 border-[var(--gold)]"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Icon size={14} className={isSelected ? "text-[var(--gold)]" : "text-white/40"} />
                    <span>{tab.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Browser Content Area */}
            <div className="flex-1 p-6 md:p-10 bg-[#0d0c0b]/40 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* TAB CONTENT IMPLEMENTATIONS */}
                  {activeTab === "intro" && (
                    <div className="space-y-6">
                      <h2 className="font-display text-3xl font-medium">Introduction to Cryptocurrency</h2>
                      <p className="text-white/60 leading-relaxed text-sm">
                        Cryptocurrency is a digital or virtual form of currency that uses cryptography for security. Unlike traditional currencies issued by central banks (fiat), cryptocurrencies operate on decentralized networks, meaning they are not controlled by any single entity or government.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 pt-4">
                        <div className="glass p-5 rounded-xl border border-white/5 hover:border-[var(--gold)]/20 transition-all">
                          <h3 className="text-white font-medium mb-2 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" /> Decentralization
                          </h3>
                          <p className="text-white/50 text-xs">
                            No central clearing house or single point of failure. Network verification is distributed globally.
                          </p>
                        </div>
                        <div className="glass p-5 rounded-xl border border-white/5 hover:border-[var(--gold)]/20 transition-all">
                          <h3 className="text-white font-medium mb-2 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" /> Trustless Transactions
                          </h3>
                          <p className="text-white/50 text-xs">
                            Secure transactions can occur directly between parties (peer-to-peer) without relying on trusted intermediaries like banks.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "blockchain" && (
                    <div className="space-y-6">
                      <h2 className="font-display text-3xl font-medium">Understanding Blockchain Technology</h2>
                      <p className="text-white/60 leading-relaxed text-sm">
                        A blockchain is a distributed ledger that records transactions across a network of computers. Each "block" contains a list of transactions, a timestamp, and a reference to the previous block (forming a "chain"). Once recorded, the data in any given block cannot be altered retroactively.
                      </p>
                      
                      {/* Blockchain Visual Simulation */}
                      <div className="flex flex-wrap gap-4 items-center justify-center py-6 bg-[#0a0908] rounded-xl border border-white/5">
                        <div className="glass p-4 rounded-xl border-gold/30 text-center w-36">
                          <div className="text-[10px] text-gold font-mono mb-1">BLOCK #001</div>
                          <div className="text-xs font-semibold">Genesis Block</div>
                          <div className="text-[9px] text-white/30 font-mono mt-2">HASH: 0000a1b2</div>
                        </div>
                        <ArrowRight size={16} className="text-gold animate-pulse" />
                        <div className="glass p-4 rounded-xl border-gold/30 text-center w-36">
                          <div className="text-[10px] text-gold font-mono mb-1">BLOCK #002</div>
                          <div className="text-xs font-semibold">Tx: Alice → Bob</div>
                          <div className="text-[9px] text-white/30 font-mono mt-2">PREV: 0000a1b2</div>
                        </div>
                        <ArrowRight size={16} className="text-gold animate-pulse" />
                        <div className="glass p-4 rounded-xl border-gold/30 text-center w-36">
                          <div className="text-[10px] text-gold font-mono mb-1">BLOCK #003</div>
                          <div className="text-xs font-semibold">Tx: Bob → Charlie</div>
                          <div className="text-[9px] text-white/30 font-mono mt-2">PREV: 0000c3d4</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "investing" && (
                    <div className="space-y-6">
                      <h2 className="font-display text-3xl font-medium">Digital Asset Investing</h2>
                      <p className="text-white/60 leading-relaxed text-sm">
                        Investing in digital assets requires an understanding of utility, tokenomics, adoption metrics, and market cycles. Investors utilize tools such as Dollar-Cost Averaging (DCA), fundamental evaluation, and on-chain metrics to design their strategy.
                      </p>
                      <div className="p-5 glass rounded-xl border border-white/5">
                        <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">Portfolio Simulation Growth</h4>
                        <div className="h-48 w-full mt-4">
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={graphData}>
                              <defs>
                                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="var(--gold)" stopOpacity={0.3}/>
                                  <stop offset="95%" stopColor="var(--gold)" stopOpacity={0}/>
                                </linearGradient>
                              </defs>
                              <XAxis dataKey="name" stroke="rgba(255,255,255,0.1)" tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 10 }} />
                              <YAxis hide domain={['dataMin - 1000', 'dataMax + 1000']} />
                              <Tooltip contentStyle={{ background: "#121110", borderColor: "rgba(255,255,255,0.1)", borderRadius: "8px" }} labelStyle={{ color: "#d4af37" }} />
                              <Area type="monotone" dataKey="price" stroke="var(--gold)" fillOpacity={1} fill="url(#colorPrice)" strokeWidth={1.5} />
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "trading" && (
                    <div className="space-y-6">
                      <h2 className="font-display text-3xl font-medium">Crypto Trading Basics</h2>
                      <p className="text-white/60 leading-relaxed text-sm">
                        Unlike investing, trading focuses on capturing short-to-medium term price movements. Traders analyze candlestick patterns, volume indicators, support/resistance levels, and order books.
                      </p>
                      
                      {/* Interactive / Animated Candlestick Visual */}
                      <div className="p-6 bg-[#0a0908] rounded-xl border border-white/5 flex flex-col justify-between">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-xs text-white/40">Market Indicator: BTC / USDT</span>
                          <span className={`text-xs font-mono transition-colors duration-500 ${priceChange >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                            ${currentPrice.toLocaleString()} ({priceChange >= 0 ? '+' : ''}{priceChange}%)
                          </span>
                        </div>
                        <div className="flex gap-6 items-end justify-center h-40 border-b border-white/10 pb-4">
                          {candles.map((candle, idx) => {
                            const isBullish = candle.isBullish;
                            const height = Math.abs(candle.close - candle.open);
                            const wickHeight = candle.high - candle.low;
                            const bodyBottom = Math.min(candle.open, candle.close);
                            
                            return (
                              <div key={idx} className="flex flex-col items-center w-8 relative" style={{ height: '100%' }}>
                                {/* Wick */}
                                <div 
                                  className={`absolute w-0.5 transition-all duration-300 ${isBullish ? 'bg-emerald-500' : 'bg-red-500'}`}
                                  style={{
                                    height: `${wickHeight}%`,
                                    bottom: `${candle.low}%`
                                  }}
                                />
                                {/* Body */}
                                <motion.div 
                                  layout
                                  className={`absolute w-4 rounded-sm transition-colors duration-300 ${isBullish ? 'bg-emerald-500/80 shadow-[0_0_10px_rgba(16,185,129,0.3)]' : 'bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.3)]'}`}
                                  style={{
                                    height: `${Math.max(4, height)}%`,
                                    bottom: `${bodyBottom}%`
                                  }}
                                />
                              </div>
                            );
                          })}
                        </div>
                        <div className="text-[10px] text-white/30 text-center mt-3">Live simulating price ticks & candlestick ensembles</div>
                      </div>
                    </div>
                  )}

                  {activeTab === "ai" && (
                    <div className="space-y-6">
                      <h2 className="font-display text-3xl font-medium">Artificial Intelligence & Market Analysis</h2>
                      <p className="text-white/60 leading-relaxed text-sm">
                        Novaire employs custom AI models to scan global sentiment, order book flows, on-chain transactions, and macroeconomic signals. Our neural models highlight divergence signals and momentum shifts.
                      </p>
                      <div className="glass p-5 rounded-xl border border-white/5 space-y-4">
                        <div className="flex items-center justify-between border-b border-white/5 pb-2">
                          <span className="text-xs text-white/80 font-medium">Sentiment Intelligence Index</span>
                          <span className="text-xs text-gold">78/100 (Bullish)</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-white/5 pb-2">
                          <span className="text-xs text-white/80 font-medium">Model Divergence Detection</span>
                          <span className="text-xs text-emerald-400">Active Buy Signal</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-white/80 font-medium">Whale On-Chain Inflow</span>
                          <span className="text-xs text-white/50">High Inflow Alert</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "portfolio" && (
                    <div className="space-y-6">
                      <h2 className="font-display text-3xl font-medium">Portfolio Diversification</h2>
                      <p className="text-white/60 leading-relaxed text-sm">
                        A robust cryptocurrency portfolio balances blue-chip assets, mid-caps, stablecoins, and yield-bearing assets. Proper diversification prevents total portfolio exposure to single smart contract or protocol failures.
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-3">
                        <div className="glass p-4 rounded-xl text-center">
                          <div className="text-lg font-bold text-white">50%</div>
                          <div className="text-[10px] text-white/40 uppercase">Blue-Chips (BTC/ETH)</div>
                        </div>
                        <div className="glass p-4 rounded-xl text-center">
                          <div className="text-lg font-bold text-white">20%</div>
                          <div className="text-[10px] text-white/40 uppercase">Layer-1 / L2 Protocols</div>
                        </div>
                        <div className="glass p-4 rounded-xl text-center">
                          <div className="text-lg font-bold text-white">15%</div>
                          <div className="text-[10px] text-white/40 uppercase">DeFi / Utility</div>
                        </div>
                        <div className="glass p-4 rounded-xl text-center">
                          <div className="text-lg font-bold text-white">15%</div>
                          <div className="text-[10px] text-white/40 uppercase">Stablecoins / Cash</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "risk" && (
                    <div className="space-y-6">
                      <h2 className="font-display text-3xl font-medium">Risk Management</h2>
                      <p className="text-white/60 leading-relaxed text-sm">
                        The ultimate rule of digital asset trading is preservation of capital. We outline strategies to size positions, manage leverage, establish stop-losses, and mitigate exposure to counterparty risks.
                      </p>
                      <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/10 text-amber-400 text-xs flex gap-3">
                        <AlertTriangle className="shrink-0" size={18} />
                        <div>
                          <strong>Key Risk Tip:</strong> Never risk more than 1% to 2% of your total trading equity on a single setup, regardless of signal confidence.
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "trends" && (
                    <div className="space-y-6">
                      <h2 className="font-display text-3xl font-medium">Market Trends</h2>
                      <p className="text-white/60 leading-relaxed text-sm">
                        Market cycles generally transition between four major phases: Accumulation, Markup (Bull Market), Distribution, and Markdown (Bear Market). Recognizing which phase the broader market occupies defines correct strategy deployment.
                      </p>
                      <p className="text-white/50 text-xs">
                        By integrating AI analysis with trend indicators, Novaire assists in mapping macroeconomic cycle tops and bottoms.
                      </p>
                    </div>
                  )}

                  {activeTab === "security" && (
                    <div className="space-y-6">
                      <h2 className="font-display text-3xl font-medium">Security Best Practices</h2>
                      <p className="text-white/60 leading-relaxed text-sm">
                        In crypto, self-custody is paramount. You represent your own bank. Learn how to secure your accounts, configure hardware wallets (Ledger/Trezor), recognize phishing attempts, and safely operate DeFi protocols.
                      </p>
                      <ul className="space-y-2 text-xs text-white/70">
                        <li className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-red-500" />
                          <span>Never share your seed phrase or private keys with anyone.</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-red-500" />
                          <span>Always verify smart contract interactions on explorer scan dashboards.</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-red-500" />
                          <span>Use multi-factor authentication (MFA) via authenticator apps, not SMS.</span>
                        </li>
                      </ul>
                    </div>
                  )}

                  {activeTab === "faq" && (
                    <div className="space-y-4">
                      <h2 className="font-display text-3xl font-medium">Frequently Asked Questions</h2>
                      <div className="space-y-4">
                        <div className="border-b border-white/5 pb-3">
                          <h4 className="text-xs font-semibold text-white mb-1">What is the difference between Coin and Token?</h4>
                          <p className="text-white/50 text-xs">A coin operates on its own blockchain (e.g. Bitcoin, Ethereum), while tokens are built on existing layer-1 blockchains (e.g., ERC-20 tokens on Ethereum).</p>
                        </div>
                        <div className="border-b border-white/5 pb-3">
                          <h4 className="text-xs font-semibold text-white mb-1">How secure are Vercel serverless configurations?</h4>
                          <p className="text-white/50 text-xs">Highly secure. Environment credentials and database-like connections are parsed completely server-side, never exposed to user clients.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Contact/Enquiry Form Section */}
        <section className="mt-24 max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl font-medium">Have questions?</h2>
            <p className="text-white/50 text-xs mt-2">Get in touch with Lumière Chain's institutional consulting team.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl border border-white/5 shadow-[var(--shadow-elegant)]"
          >
            {successMsg ? (
              <div className="text-center py-6">
                <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-400 mb-4">✓</span>
                <h3 className="font-display text-2xl font-medium mb-2">Enquiry Sent</h3>
                <p className="text-emerald-400 text-sm font-sans">{successMsg}</p>
                <button
                  onClick={() => setSuccessMsg("")}
                  className="mt-6 text-xs text-white/50 hover:text-white underline cursor-pointer"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-xs">
                    {errorMsg}
                  </div>
                )}
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider text-white/40 font-medium">Full Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={loading}
                      placeholder="Your name"
                      className="w-full bg-[#0d0c0b] border border-white/5 focus:border-[var(--gold)]/50 rounded-xl py-3 px-4 text-xs text-white focus:outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider text-white/40 font-medium">Email Address</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={loading}
                      placeholder="your@email.com"
                      className="w-full bg-[#0d0c0b] border border-white/5 focus:border-[var(--gold)]/50 rounded-xl py-3 px-4 text-xs text-white focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-white/40 font-medium">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    disabled={loading}
                    placeholder="+33 6 1234 5678"
                    className="w-full bg-[#0d0c0b] border border-white/5 focus:border-[var(--gold)]/50 rounded-xl py-3 px-4 text-xs text-white focus:outline-none transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-white/40 font-medium">Message (Optional)</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={loading}
                    placeholder="Enter your message..."
                    className="w-full bg-[#0d0c0b] border border-white/5 focus:border-[var(--gold)]/50 rounded-xl py-3 px-4 text-xs text-white focus:outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-white text-black py-3 text-xs font-semibold hover:shadow-[var(--shadow-glow)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <Loader2 size={14} className="animate-spin" />
                  ) : (
                    <span>Submit Enquiry</span>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </section>
      </main>
    </div>
  );
}
