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
          Retour à l'accueil
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
            <span className="text-gold font-display text-xs uppercase tracking-[0.2em] font-semibold">Documentation Légale</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl tracking-tight font-medium text-white mb-4">
            Conditions Générales
          </h1>
          <div className="flex items-center gap-2 text-white/40 text-xs mb-12">
            <Clock size={14} />
            <span>Dernière mise à jour : 22 Juin 2026</span>
          </div>

          <div className="glass-strong p-8 md:p-12 rounded-2xl border border-white/5 space-y-8 text-sm md:text-base leading-relaxed text-white/70">
            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">1. Acceptation des conditions</h2>
              <p>
                En accédant au site Lumière Chain ou en l'utilisant, vous acceptez d'être lié par ces Conditions Générales. Si vous n'acceptez pas toutes ces conditions, n'accédez pas ou n'utilisez pas ce site.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">2. Éligibilité</h2>
              <p>
                Pour pouvoir accéder et utiliser notre site Web, vous devez avoir au moins 18 ans et posséder l'autorité légale pour accepter ces conditions. En utilisant la plateforme, vous déclarez et garantissez que vous remplissez ces conditions d'éligibilité.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">3. Objectif du site Web</h2>
              <p>
                Lumière Chain fournit des analyses du marché des crypto-monnaies, des informations sur l'IA et une académie éducative. Les services fournis le sont à des fins éducatives et informatives uniquement. Nous n'opérons pas en tant que bourse, maison de courtage ou institution financière réglementée.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">4. Responsabilités de l'utilisateur</h2>
              <p>
                Vous êtes responsable de la confidentialité des informations de votre compte, en particulier de votre identifiant de connexion par e-mail. Vous acceptez de nous informer immédiatement de toute utilisation non autorisée de votre compte ou de toute autre violation de la sécurité.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">5. Utilisation acceptable</h2>
              <p>
                Vous acceptez de n'utiliser notre site Web et nos services qu'à des fins légales. Vous devez vous conformer à toutes les lois et réglementations locales, nationales et internationales applicables lors de l'utilisation de notre académie ou de nos outils.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">6. Activités interdites</h2>
              <p>
                Vous ne devez pas :
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-white/60">
                <li>Rétro-ingénierie, décompiler ou désassembler toute partie du site.</li>
                <li>Utiliser des bots, des scrapers ou des spiders pour collecter du contenu d'intelligence.</li>
                <li>Interférer avec ou perturber la sécurité du backend sans serveur.</li>
                <li>Tenter de contourner les mécanismes d'authentification Vercel Blob.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">7. Propriété intellectuelle</h2>
              <p>
                Tout le contenu de ce site Web, y compris les textes, graphiques, logos, illustrations, diapositives pédagogiques et codes, est la propriété de Lumière Chain et est protégé par le droit d'auteur et les lois sur la propriété intellectuelle. Vous ne pouvez reproduire, distribuer ou modifier aucun document sans notre consentement écrit exprès.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">8. Exactitude des informations</h2>
              <p>
                Bien que nous nous efforcions de garantir que le contenu éducatif et l'analyse de l'IA sont exacts et à jour, nous ne garantissons pas l'exhaustivité, l'exactitude ou la fiabilité des informations affichées sur le site Web.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">9. Aucun conseil financier</h2>
              <p>
                Tout le contenu, les outils, les graphiques et l'analyse fournis par Lumière Chain sont fournis à des fins d'information et d'éducation uniquement. Aucune information contenue sur ce site Web ne constitue un conseil financier.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">10. Aucun conseil en investissement</h2>
              <p>
                Aucune information sur ce site ne doit être interprétée comme un conseil en investissement ou une recommandation d'acheter, de vendre ou de conserver une crypto-monnaie ou un actif numérique.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">11. Divulgation des risques liés aux crypto-monnaies</h2>
              <p>
                Le trading et l'investissement dans les crypto-monnaies impliquent des risques importants. Les prix des actifs numériques sont très volatils et imprévisibles. Vous pourriez perdre tout ou une partie substantielle de votre capital. Vous devriez effectuer vos propres recherches et consulter un conseiller financier agréé avant de prendre toute décision d'investissement.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">12. Aucune garantie de rendement</h2>
              <p>
                Lumière Chain ne garantit aucun rendement, bénéfice ou résultat spécifique suite à l'utilisation de nos modules éducatifs, indicateurs de marché ou outils d'analyse d'IA. Les performances passées ne préjugent pas des résultats futurs.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">13. Limitation de responsabilité</h2>
              <p>
                Dans toute la mesure permise par la loi applicable, Lumière Chain et ses affiliés, directeurs ou employés ne seront pas responsables des dommages directs, indirects, accessoires, spéciaux ou consécutifs résultant de votre utilisation ou de votre incapacité à utiliser le site Web, y compris les pertes de trading.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">14. Indemnisation</h2>
              <p>
                Vous acceptez d'indemniser, de défendre et de dégager de toute responsabilité Lumière Chain et ses sociétés affiliées pour toute réclamation, responsabilité, dommages, pertes et dépenses découlant de ou liés de quelque manière que ce soit à votre accès ou à votre utilisation du site Web.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">15. Liens vers des tiers</h2>
              <p>
                Notre site Web peut contenir des liens vers des sites Web ou des services tiers qui ne sont pas détenus ou contrôlés par Lumière Chain. Nous n'avons aucun contrôle sur, et n'assumons aucune responsabilité quant au contenu, aux politiques de confidentialité ou aux pratiques des sites Web tiers.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">16. Référence à la politique de confidentialité</h2>
              <p>
                Votre utilisation de notre site Web est également régie par notre Politique de Confidentialité. Veuillez consulter notre Politique de Confidentialité pour comprendre comment nous collectons, utilisons et sécurisons vos informations personnelles.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">17. Suspension de l'accès</h2>
              <p>
                Nous nous réservons le droit de suspendre ou de résilier votre accès au site Web ou au portail de l'Académie à notre seule discrétion, sans préavis, pour toute conduite que nous estimons violer ces conditions ou nuire à d'autres utilisateurs ou à nos intérêts commerciaux.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">18. Droit applicable</h2>
              <p>
                Ces Conditions Générales seront régies et interprétées conformément aux lois de la France, sans égard à ses dispositions relatives aux conflits de lois.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">19. Résolution des litiges</h2>
              <p>
                Tout litige, controverse ou réclamation découlant de ou lié à ces conditions, ou à leur violation, sera réglé par les tribunaux compétents de Paris, France.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">20. Divisibilité</h2>
              <p>
                Si une disposition de ces Conditions est jugée invalide ou inapplicable par un tribunal compétent, les autres dispositions de ces Conditions resteront pleinement en vigueur.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">21. Modifications des conditions</h2>
              <p>
                Nous nous réservons le droit, à notre seule discrétion, de modifier ou de remplacer ces conditions à tout moment. Nous indiquerons la date de la dernière mise à jour en haut de cette page. Votre utilisation continue du site après toute mise à jour constitue une acceptation des nouvelles conditions.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">22. Informations de contact</h2>
              <p>
                Si vous avez des questions concernant ces conditions, veuillez nous contacter :
              </p>
              <p className="text-white/60">
                Lumière Chain<br />
                Paris, France<br />
                Email : legal@lumierechain.com
              </p>
            </section>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
