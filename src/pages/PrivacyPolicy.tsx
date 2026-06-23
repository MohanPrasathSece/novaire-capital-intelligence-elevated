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
            <Shield size={18} className="text-gold" />
            <span className="text-gold font-display text-xs uppercase tracking-[0.2em] font-semibold">Documentation Légale</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl tracking-tight font-medium text-white mb-4">
            Politique de Confidentialité
          </h1>
          <div className="flex items-center gap-2 text-white/40 text-xs mb-12">
            <Clock size={14} />
            <span>Dernière mise à jour : 22 Juin 2026</span>
          </div>

          <div className="glass-strong p-8 md:p-12 rounded-2xl border border-white/5 space-y-8 text-sm md:text-base leading-relaxed text-white/70">
            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">1. Introduction</h2>
              <p>
                Bienvenue sur Lumière Chain. Nous nous engageons à protéger vos informations personnelles et votre droit à la confidentialité. Si vous avez des questions ou des préoccupations concernant cette politique de confidentialité ou nos pratiques en matière de renseignements personnels, veuillez nous contacter.
              </p>
              <p>
                Lorsque vous visitez notre site Web et utilisez nos services, vous nous confiez vos informations personnelles. Nous prenons votre vie privée très au sérieux. Dans cette politique de confidentialité, nous cherchons à vous expliquer de la manière la plus claire possible quelles informations nous collectons, comment nous les utilisons et quels droits vous avez à cet égard.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">2. Définitions</h2>
              <p>
                Pour vous aider à comprendre ce document, nous utilisons des termes spécifiques :
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-white/60">
                <li><strong>Site Web :</strong> Fait référence au portail Lumière Chain accessible via notre domaine.</li>
                <li><strong>Service :</strong> Fait référence à nos analyses d'intelligence sur les actifs numériques, à notre académie de crypto-monnaie et à nos fonctionnalités d'IA.</li>
                <li><strong>Utilisateur / Vous :</strong> Une personne physique qui accède à notre site Web ou s'inscrit pour utiliser notre plateforme.</li>
                <li><strong>Nous / Notre / Nos :</strong> Lumière Chain, enregistrée et construite à Paris, France.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">3. Informations que nous collectons</h2>
              <p>
                Nous collectons les informations personnelles que vous nous fournissez volontairement lorsque vous vous inscrivez sur le site Web, exprimez un intérêt pour obtenir des informations sur nous ou nos produits, ou lorsque vous nous contactez.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">4. Informations que vous fournissez volontairement</h2>
              <p>
                Les informations personnelles que nous collectons dépendent du contexte de vos interactions avec nous et des choix que vous faites. Cela peut inclure :
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-white/60">
                <li><strong>Nom :</strong> Collecte des noms et prénoms pour la personnalisation de l'identité.</li>
                <li><strong>Adresse Email :</strong> Utilisée pour la création de compte, la recherche, l'authentification et la vérification de connexion sécurisée.</li>
                <li><strong>Numéro de Téléphone :</strong> Recueilli lors de l'inscription et dans les formulaires de demande de contact.</li>
                <li><strong>Message :</strong> Informations facultatives que vous fournissez lors du remplissage des formulaires de contact.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">5. Informations collectées automatiquement</h2>
              <p>
                Nous collectons automatiquement certaines informations lorsque vous visitez, utilisez ou naviguez sur le site Web. Ces informations ne révèlent pas votre identité spécifique, mais peuvent inclure des informations sur l'appareil et l'utilisation, telles que votre adresse IP, les caractéristiques du navigateur et de l'appareil, le système d'exploitation, les préférences linguistiques, les URL de référence, le nom de l'appareil, le pays, l'emplacement et des informations sur comment et quand vous utilisez notre site Web.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">6. Objectif de la collecte de données</h2>
              <p>
                Nous utilisons les informations personnelles collectées via notre site Web à diverses fins commerciales décrites ci-dessous :
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-white/60">
                <li>Pour faciliter la création de compte et le processus de connexion.</li>
                <li>Pour vous envoyer des informations administratives.</li>
                <li>Pour répondre aux demandes des utilisateurs et offrir une assistance.</li>
                <li>Pour gérer et soumettre des informations sur les prospects à notre CRM sécurisé à des fins de marketing et d'opérations.</li>
                <li>Pour fournir un contenu éducatif personnalisé et des fonctionnalités de plateforme.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">7. Base juridique du traitement</h2>
              <p>
                Si vous résidez dans l'Espace économique européen (EEE), notre base juridique pour la collecte et l'utilisation des informations personnelles décrites ci-dessus dépend des informations personnelles concernées et du contexte spécifique dans lequel nous les collectons. Nous traitons les informations personnelles sur la base du consentement, de l'exécution d'un contrat, du respect d'obligations légales et d'intérêts légitimes.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">8. Comment les informations personnelles sont utilisées</h2>
              <p>
                Vos informations sont utilisées pour personnaliser votre expérience, faire fonctionner la plateforme, communiquer des mises à jour et acheminer en toute sécurité les demandes de prospects vers des affiliés de notre écosystème. Nous ne vendons ni ne louons vos informations personnelles à des tiers.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">9. CRM et Prestataires de services tiers</h2>
              <p>
                Nous partageons les données d'inscription et des formulaires de demande avec notre plateforme CRM désignée (`crmcore.me`) via des API côté serveur sécurisées pour faciliter la gestion des prospects.
              </p>
              <p>
                Nous n'envoyons PAS d'informations de connexion au CRM. Le jeton CRM est stocké en toute sécurité sur notre serveur principal et n'est jamais exposé aux navigateurs des clients.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">10. Cookies</h2>
              <p>
                Nous pouvons utiliser des cookies et des technologies de suivi similaires pour accéder ou stocker des informations. La plupart des navigateurs Web sont configurés pour accepter les cookies par défaut. Si vous préférez, vous pouvez généralement choisir de configurer votre navigateur pour supprimer et refuser les cookies, bien que cela puisse affecter certaines fonctionnalités de nos services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">11. Technologies de suivi</h2>
              <p>
                Nous utilisons des outils de suivi pour analyser le trafic et les modèles de comportement sur notre site. Ces outils recueillent des statistiques sur les chargements de pages, les temps d'interaction, les séquences de navigation et les mesures de localisation à un niveau élevé.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">12. Sécurité des données</h2>
              <p>
                Nous avons mis en œuvre des mesures de sécurité techniques et organisationnelles appropriées, conçues pour protéger la sécurité de toutes les informations personnelles que nous traitons.
              </p>
              <p>
                Cependant, n'oubliez pas non plus que nous ne pouvons pas garantir que l'internet lui-même est sûr à 100 %. Bien que nous fassions de notre mieux pour protéger vos informations personnelles, la transmission d'informations personnelles vers et depuis notre site Web se fait à vos propres risques.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">13. Conservation des données</h2>
              <p>
                Nous ne conserverons vos informations personnelles que le temps nécessaire aux fins énoncées dans cette politique de confidentialité, à moins qu'une période de conservation plus longue ne soit requise ou permise par la loi.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">14. Transferts internationaux de données</h2>
              <p>
                Nos serveurs et nos bases de données sont hébergés dans le monde entier. Vos informations, y compris vos données personnelles, peuvent être transférées et conservées sur des ordinateurs situés en dehors de votre état, province, pays ou autre juridiction gouvernementale où les lois sur la protection des données peuvent différer de celles de votre juridiction.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">15. Droits des utilisateurs</h2>
              <p>
                En fonction de votre emplacement (surtout si vous êtes dans l'EEE sous le RGPD), vous avez des droits concernant vos informations personnelles, y compris le droit d'accéder, de corriger, de supprimer ou de limiter notre utilisation de vos données. Vous pouvez nous contacter à tout moment pour exercer ces droits.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">16. Communications marketing</h2>
              <p>
                Nous pouvons utiliser vos informations personnelles pour vous envoyer des e-mails marketing et promotionnels. Vous pouvez vous désinscrire de nos e-mails marketing à tout moment en cliquant sur le lien "se désinscrire" dans les e-mails que nous envoyons ou en nous contactant.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">17. Confidentialité des enfants</h2>
              <p>
                Nous ne sollicitons pas sciemment de données et ne faisons pas de marketing auprès d'enfants de moins de 18 ans. En utilisant le site Web, vous déclarez que vous avez au moins 18 ans.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">18. Sites Web tiers</h2>
              <p>
                Le site Web peut contenir des publicités de tiers qui ne sont pas affiliés à nous et qui peuvent créer des liens vers d'autres sites Web, services en ligne ou applications mobiles. Nous ne pouvons garantir la sécurité et la confidentialité des données que vous fournissez à des tiers.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">19. Mises à jour de la politique</h2>
              <p>
                Nous pouvons mettre à jour cette politique de confidentialité de temps en temps. La version mise à jour sera indiquée par une date de "Révision" mise à jour et la version mise à jour entrera en vigueur dès qu'elle sera accessible.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-medium text-white">20. Informations de contact</h2>
              <p>
                Si vous avez des questions ou des commentaires concernant cette politique, vous pouvez nous envoyer un e-mail ou nous écrire à notre siège social à Paris, France :
              </p>
              <p className="text-white/60">
                Lumière Chain<br />
                Paris, France<br />
                Email : privacy@lumierechain.com
              </p>
            </section>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
