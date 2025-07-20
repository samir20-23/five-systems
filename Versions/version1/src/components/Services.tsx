import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Shield, Flame, Wind, Camera, Wrench, Settings } from "lucide-react"

const services = [
  {
    icon: Shield,
    title: "SÉCURITÉ CIVILE",
    description:
      "Systèmes de vidéosurveillance, contrôle d'accès, alarmes anti-intrusion et solutions de sécurité périmétrique pour la protection optimale de vos installations.",
    features: ["Vidéosurveillance HD", "Contrôle d'accès", "Alarmes anti-intrusion", "Sécurité périmétrique"],
  },
  {
    icon: Flame,
    title: "SÉCURITÉ INCENDIE",
    description:
      "Installation et maintenance de systèmes de détection incendie, extincteurs automatiques, désenfumage et signalisation d'évacuation conformes aux normes.",
    features: ["Détection incendie", "Extincteurs automatiques", "Désenfumage", "Signalisation d'évacuation"],
  },
  {
    icon: Wind,
    title: "CHAUFFAGE VENTILATION",
    description:
      "Solutions complètes de chauffage, ventilation et climatisation pour assurer un confort thermique optimal et une qualité d'air irréprochable.",
    features: ["Chauffage central", "Ventilation mécanique", "Climatisation", "Traitement de l'air"],
  },
  {
    icon: Camera,
    title: "SURVEILLANCE AVANCÉE",
    description:
      "Technologies de pointe pour la surveillance et le monitoring en temps réel de vos installations avec des systèmes intelligents et connectés.",
    features: ["Monitoring 24/7", "Alertes intelligentes", "Analyse vidéo", "Reporting automatique"],
  },
  {
    icon: Wrench,
    title: "MAINTENANCE PRÉVENTIVE",
    description:
      "Services de maintenance préventive et curative pour garantir le bon fonctionnement et la longévité de vos installations techniques.",
    features: ["Maintenance préventive", "Dépannage d'urgence", "Mise à jour système", "Support technique"],
  },
  {
    icon: Settings,
    title: "AUTOMATISATION",
    description:
      "Solutions d'automatisation et de domotique pour optimiser la gestion de vos installations et réduire les coûts opérationnels.",
    features: ["Domotique avancée", "Gestion centralisée", "Optimisation énergétique", "Interface intuitive"],
  },
]

export function Services() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">NOS SERVICES</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Découvrez notre gamme complète de services techniques adaptés à tous vos besoins. De la conception à la
            maintenance, nous vous accompagnons à chaque étape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-none bg-white hover:-translate-y-2"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600 leading-relaxed">{service.description}</p>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full mt-6 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white transition-colors bg-transparent"
                >
                  En savoir plus
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
