import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">FIVE SYSTEMS</h3>
              <p className="text-slate-300 leading-relaxed">
                Votre partenaire de confiance pour tous vos projets d'installations techniques depuis plus de 19 ans.
              </p>
            </div>

            <div className="flex space-x-4">
              <Button
                size="sm"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-orange-600 hover:border-orange-600 bg-transparent"
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-orange-600 hover:border-orange-600 bg-transparent"
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-orange-600 hover:border-orange-600 bg-transparent"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-orange-600 hover:border-orange-600 bg-transparent"
              >
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nos Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-300 hover:text-orange-400 transition-colors">
                  Sécurité Incendie
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-orange-400 transition-colors">
                  Sécurité Civile
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-orange-400 transition-colors">
                  Chauffage Ventilation
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-orange-400 transition-colors">
                  Maintenance
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-orange-400 transition-colors">
                  Automatisation
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-300 hover:text-orange-400 transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-orange-400 transition-colors">
                  Projets
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-orange-400 transition-colors">
                  Équipe
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-orange-400 transition-colors">
                  Carrières
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-orange-400 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-slate-300 text-sm">123 Avenue des Technologies, 75001 Paris</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-slate-300 text-sm">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-slate-300 text-sm">contact@fivesystems.fr</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">© 2024 Five Systems. Tous droits réservés.</p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
