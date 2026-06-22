import { motion } from "framer-motion";
import { ArrowLeft, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export function PrivacyPolicy() {
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
            <Shield size={18} className="text-gold" />
            <span className="text-gold font-display text-xs uppercase tracking-[0.2em] font-semibold">Legal Documentation</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl tracking-tight font-medium text-white mb-4">
            Privacy Policy
          </h1>
          <div className="flex items-center gap-2 text-white/40 text-xs mb-12">
            <Clock size={14} />
            <span>Last Updated: June 22, 2026</span>
          </div>

          <div className="glass-strong p-8 md:p-12 rounded-2xl border border-white/5 space-y-8 text-sm md:text-base leading-relaxed text-white/70">
            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">1. Introduction</h2>
              <p>
                Welcome to Lumière Chain. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy policy, or our practices with regards to your personal information, please contact us.
              </p>
              <p>
                When you visit our website and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy policy, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">2. Definitions</h2>
              <p>
                To help you understand this document, we use specific terms:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-white/60">
                <li><strong>Website:</strong> Refers to the Lumière Chain portal accessible via our domain.</li>
                <li><strong>Service:</strong> Refers to our digital asset intelligence analytics, cryptocurrency academy, and AI features.</li>
                <li><strong>User/You:</strong> An individual who accesses our Website or registers to use our platform.</li>
                <li><strong>We/Us/Our:</strong> Lumière Chain, registered and built in Paris, France.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">3. Information We Collect</h2>
              <p>
                We collect personal information that you voluntarily provide to us when you register on the Website, express an interest in obtaining information about us or our products, or otherwise contact us.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">4. Information You Voluntarily Provide</h2>
              <p>
                The personal information we collect depends on the context of your interactions with us and the choices you make. This may include:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-white/60">
                <li><strong>Name:</strong> Collects first and last names for identity personalization.</li>
                <li><strong>Email Address:</strong> Used for account creation, lookup, authentication, and secure login verification.</li>
                <li><strong>Phone Number:</strong> Gathered during registration and contact enquiry forms.</li>
                <li><strong>Message:</strong> Optional information you provide when filling out contact forms.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">5. Automatically Collected Information</h2>
              <p>
                We automatically collect certain information when you visit, use or navigate the Website. This information does not reveal your specific identity but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, and info about how and when you use our Website.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">6. Purpose of Data Collection</h2>
              <p>
                We use personal information collected via our Website for a variety of business purposes described below:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-white/60">
                <li>To facilitate account creation and logon process.</li>
                <li>To send administrative information to you.</li>
                <li>To respond to user inquiries and offer support.</li>
                <li>To manage and submit lead information to our secure CRM for marketing and operations.</li>
                <li>To deliver custom educational content and platform capabilities.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">7. Legal Basis for Processing</h2>
              <p>
                If you are from the European Economic Area (EEA), our legal basis for collecting and using the personal information described above depends on the personal information concerned and the specific context in which we collect it. We process personal information based on consent, the performance of a contract, compliance with legal obligations, and legitimate interests.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">8. How Personal Information Is Used</h2>
              <p>
                Your information is used to personalize your experience, operate the platform, communicate updates, and securely route lead enquiries to affiliates in our ecosystem. We do not sell or lease your personal information to third parties.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">9. CRM & Third-Party Service Providers</h2>
              <p>
                We share signup and enquiry form data with our designated CRM platform (`crmcore.me`) via secure, server-side APIs to assist in lead management.
              </p>
              <p>
                We do NOT send login information to the CRM. The CRM token is stored securely on our backend server and is never exposed to client browsers.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">10. Cookies</h2>
              <p>
                We may use cookies and similar tracking technologies to access or store information. Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies, though this could affect certain features of our services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">11. Tracking Technologies</h2>
              <p>
                We use tracking tools to analyze traffic and behavior patterns on our site. These tools gather metrics about page loads, interaction times, navigation sequences, and location metrics at a high level.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">12. Data Security</h2>
              <p>
                We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process.
              </p>
              <p>
                However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our Website is at your own risk.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">13. Data Retention</h2>
              <p>
                We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">14. International Data Transfers</h2>
              <p>
                Our servers and databases are hosted globally. Your information, including personal data, may be transferred to and maintained on computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">15. User Rights</h2>
              <p>
                Depending on your location (especially if you are in the EEA under the GDPR), you have rights regarding your personal information, including the right to access, correct, delete, or limit our use of your data. You may contact us at any time to exercise these rights.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">16. Marketing Communications</h2>
              <p>
                We may use your personal information to send you marketing and promotional emails. You can opt-out of our marketing emails at any time by clicking the "unsubscribe" link in the emails we send or by contacting us.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">17. Children's Privacy</h2>
              <p>
                We do not knowingly solicit data from or market to children under 18 years of age. By using the Website, you represent that you are at least 18.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">18. Third-Party Websites</h2>
              <p>
                The Website may contain advertisements from third parties that are not affiliated with us and which may link to other websites, online services or mobile applications. We cannot guarantee the safety and privacy of data you provide to any third parties.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">19. Policy Updates</h2>
              <p>
                We may update this privacy policy from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">20. Contact Information</h2>
              <p>
                If you have questions or comments about this policy, you may email us or write to our head office in Paris, France:
              </p>
              <p className="text-white/60">
                Lumière Chain<br />
                Paris, France<br />
                Email: privacy@lumierechain.com
              </p>
            </section>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
