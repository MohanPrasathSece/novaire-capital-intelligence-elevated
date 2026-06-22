import { motion } from "framer-motion";
import { ArrowLeft, FileText, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export function TermsConditions() {
  return (
    <div className="relative min-h-screen bg-[#0a0908] text-white/90 selection:bg-gold/30 selection:text-white pb-24">
      {/* Background patterns */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--gold)] opacity-[0.03] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[var(--gold)] opacity-[0.02] blur-3xl pointer-events-none" />

      {/* Header / Navigation */}
      <header className="relative z-10 max-w-4xl mx-auto px-6 pt-12 flex justify-between items-center">
        <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium">
          <ArrowLeft size={16} />
          Back to Home
        </Link>
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-[var(--gold)] grid place-items-center text-xs font-bold text-black">L</div>
          <span className="font-display text-sm tracking-[0.2em] text-white">LUMIÈRE CHAIN</span>
        </div>
      </header>

      {/* Content Container */}
      <main className="relative z-10 max-w-4xl mx-auto px-6 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <FileText size={18} className="text-gold" />
            <span className="text-gold font-display text-xs uppercase tracking-[0.2em] font-semibold">Legal Documentation</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl tracking-tight font-medium text-white mb-4">
            Terms & Conditions
          </h1>
          <div className="flex items-center gap-2 text-white/40 text-xs mb-12">
            <Clock size={14} />
            <span>Last Updated: June 22, 2026</span>
          </div>

          <div className="glass-strong p-8 md:p-12 rounded-2xl border border-white/5 space-y-8 text-sm md:text-base leading-relaxed text-white/70">
            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Lumière Chain website, you agree to be bound by these Terms & Conditions. If you do not agree to all of these terms, do not access or use this website.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">2. Eligibility</h2>
              <p>
                To be eligible to access and use our website, you must be at least 18 years of age and possess the legal authority to enter into these terms. By using the platform, you represent and warrant that you meet these eligibility requirements.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">3. Website Purpose</h2>
              <p>
                Lumière Chain provides cryptocurrency market analytics, AI insights, and an educational academy. The services provided are for educational and informational purposes only. We do not operate as an exchange, brokerage, or regulated financial institution.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">4. User Responsibilities</h2>
              <p>
                You are responsible for keeping your account information, specifically your email login, confidential. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">5. Acceptable Use</h2>
              <p>
                You agree to use our website and services only for lawful purposes. You shall comply with all applicable local, national, and international laws and regulations while utilizing our academy or tools.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">6. Prohibited Activities</h2>
              <p>
                You may not:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-white/60">
                <li>Reverse engineer, decompile, or disassemble any part of the site.</li>
                <li>Use bots, scrapers, or spiders to collect intelligence content.</li>
                <li>Interfere with or disrupt the security of the serverless backend.</li>
                <li>Attempt to bypass Vercel Blob authentication mechanisms.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">7. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, illustrations, educational slides, and code, is the property of Lumière Chain and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or modify any materials without our express written consent.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">8. Accuracy of Information</h2>
              <p>
                While we strive to ensure that the educational content and AI analysis are accurate and up-to-date, we do not warrant or guarantee the completeness, accuracy, or reliability of any information displayed on the website.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">9. No Financial Advice</h2>
              <p>
                All content, tools, charts, and analysis provided by Lumière Chain are for informational and educational purposes only. None of the information contained on this website constitutes financial advice.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">10. No Investment Advice</h2>
              <p>
                No information on this site should be interpreted as investment advice or a recommendation to buy, sell, or hold any cryptocurrency or digital asset.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">11. Cryptocurrency Risk Disclosure</h2>
              <p>
                Trading and investing in cryptocurrencies involve significant risk. The prices of digital assets are highly volatile and unpredictable. You could lose all or a substantial portion of your capital. You should conduct your own research and consult with a licensed financial advisor before making any investment decisions.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">12. No Guarantee of Returns</h2>
              <p>
                Lumière Chain does not guarantee any returns, profits, or specific outcomes from using our educational modules, market indicators, or AI analytics tools. Past performance is not indicative of future results.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">13. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, Lumière Chain and its affiliates, directors, or employees shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of or inability to use the website, including trading losses.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">14. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless Lumière Chain and its affiliates from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with your access to or use of the Website.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">15. Third-Party Links</h2>
              <p>
                Our Website may contain links to third-party web sites or services that are not owned or controlled by Lumière Chain. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">16. Privacy Policy Reference</h2>
              <p>
                Your use of our website is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we collect, use, and secure your personal information.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">17. Suspension of Access</h2>
              <p>
                We reserve the right to suspend or terminate your access to the Website or the Academy portal at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users or our business interests.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">18. Governing Law</h2>
              <p>
                These Terms & Conditions shall be governed by and construed in accordance with the laws of France, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">19. Dispute Resolution</h2>
              <p>
                Any dispute, controversy, or claim arising out of or relating to these terms, or the breach thereof, shall be settled by the competent courts of Paris, France.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">20. Severability</h2>
              <p>
                If any provision of these Terms is found to be invalid or unenforceable by a court of competent jurisdiction, the remaining provisions of these Terms will remain in full force and effect.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">21. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will indicate the date of the latest update at the top of this page. Your continued use of the site following any updates constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">22. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us:
              </p>
              <p className="text-white/60">
                Lumière Chain<br />
                Paris, France<br />
                Email: legal@lumierechain.com
              </p>
            </section>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
