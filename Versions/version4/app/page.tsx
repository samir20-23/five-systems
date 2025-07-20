import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Shield, Zap, Settings, Users, ArrowRight, Star } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="font-bold text-xl text-gray-900">Five Systems</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">
                Services
              </a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">
                Projets
              </a>
              <a href="#team" className="text-gray-600 hover:text-blue-600 transition-colors">
                Équipe
              </a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">Devis Gratuit</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">
              Installations Techniques de Qualité
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">FIVE SYSTEMS</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Votre partenaire de confiance pour des installations techniques professionnelles et durables
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Découvrir nos services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Voir nos projets
              </Button>
            </div>
          </div>
          <div className="absolute right-10 top-10 w-32 h-32 opacity-10">
            <div className="w-full h-full border-4 border-blue-600 rounded-full transform rotate-12"></div>
          </div>
        </div>
      </section>

      {/* Quality Installation Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Technicien travaillant sur une installation"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="font-semibold">15+ ans d'expérience</span>
                </div>
              </div>
            </div>
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800">Votre Allié de Confiance</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Installations Techniques de Qualité</h2>
              <p className="text-lg text-gray-600 mb-6">
                Les projets que nous réalisons sont le reflet de notre engagement envers l'excellence. Chaque
                installation est pensée pour durer et répondre aux plus hauts standards de qualité.
              </p>
              <p className="text-gray-600 mb-8">
                Notre équipe d'experts qualifiés met son savoir-faire au service de vos projets, qu'il s'agisse
                d'installations électriques, de systèmes de sécurité ou de solutions domotiques.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
                  <div className="text-sm text-gray-600">Années d'expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-sm text-gray-600">Projets réalisés</div>
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                En savoir plus
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Nos Services</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Solutions Complètes</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nous offrons une gamme complète de services pour répondre à tous vos besoins techniques
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Shield className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Électricité & Sécurité</h3>
                <p className="text-gray-600 mb-6">
                  Installation et maintenance de systèmes électriques et de sécurité pour garantir la protection de vos
                  biens et personnes.
                </p>
                <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                  En savoir plus →
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                  <Zap className="h-8 w-8 text-orange-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Climatisation & Traitement d'Air</h3>
                <p className="text-gray-600 mb-6">
                  Solutions de climatisation et traitement d'air pour assurer un confort optimal dans tous vos espaces.
                </p>
                <Button variant="ghost" className="text-orange-600 hover:text-orange-700 p-0">
                  En savoir plus →
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gray-900 text-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Dépannage Technique</h3>
                <p className="text-gray-300 mb-6">
                  Service de dépannage rapide et efficace pour tous vos équipements techniques. Intervention 24h/24 et
                  7j/7.
                </p>
                <Button variant="ghost" className="text-white hover:text-gray-200 p-0">
                  En savoir plus →
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Additional Services */}
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Plomberie Sanitaire</h4>
                <p className="text-sm text-gray-600">
                  Installation et réparation de systèmes de plomberie pour tous types de bâtiments.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Sécurité Incendie</h4>
                <p className="text-sm text-gray-600">
                  Systèmes de détection et protection incendie conformes aux normes en vigueur.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Dépannage Technique</h4>
                <p className="text-sm text-gray-600">
                  Intervention rapide pour tous vos problèmes techniques, 24h/24 et 7j/7.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Projects */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800">Nos Réalisations</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Derniers Projets</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez quelques-unes de nos réalisations récentes qui témoignent de notre expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&query=modern office interior project ${i}`}
                    alt={`Projet ${i}`}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Projet {i}</h3>
                  <p className="text-sm text-gray-600">Installation technique complète</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-purple-100 text-purple-800">Notre Équipe</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Des Experts à Votre Service</h2>
              <p className="text-lg text-gray-600 mb-6">
                Notre équipe est composée de professionnels qualifiés et expérimentés, passionnés par leur métier et
                dédiés à la satisfaction de nos clients.
              </p>
              <p className="text-gray-600 mb-8">
                Chaque membre de notre équipe apporte son expertise unique pour garantir la réussite de vos projets, de
                la conception à la réalisation.
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700">
                Rencontrer l'équipe
                <Users className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <Card className="p-8 shadow-xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">Équipe Five Systems</h3>
                    <p className="text-gray-600">Experts Techniques</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Notre mission est de fournir des solutions techniques innovantes et durables, adaptées aux besoins
                  spécifiques de chaque client."
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>15+ ans d'expérience</span>
                  <span>•</span>
                  <span>Certifiés professionnels</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Work Method */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800">Notre Méthode</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Méthode de Travail</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une approche structurée et professionnelle pour garantir la réussite de vos projets
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Synopsie", desc: "Analyse détaillée de vos besoins et contraintes techniques" },
              { step: "02", title: "Étudiant", desc: "Étude approfondie et conception de la solution optimale" },
              { step: "03", title: "Préparation", desc: "Planification minutieuse et préparation des ressources" },
              { step: "04", title: "Analyse", desc: "Validation technique et analyse des risques potentiels" },
              { step: "05", title: "Concrétiser", desc: "Réalisation professionnelle et mise en service" },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  {index < 4 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Badge className="mb-4 bg-blue-600 text-white">Contactez-nous</Badge>
              <h2 className="text-4xl font-bold mb-6">Prêt à Démarrer Votre Projet ?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Téléphone</h3>
                    <p className="text-gray-300">+33 1 23 45 67 89</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-300">contact@fivesystems.fr</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Adresse</h3>
                    <p className="text-gray-300">
                      123 Rue de la Technique
                      <br />
                      75001 Paris, France
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white text-gray-900">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Demande de Devis</h3>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nom</label>
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Téléphone</label>
                    <input
                      type="tel"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Votre numéro"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Décrivez votre projet..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Envoyer la demande
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="font-bold text-xl">Five Systems</span>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-white transition-colors">
                CGV
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Five Systems. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
