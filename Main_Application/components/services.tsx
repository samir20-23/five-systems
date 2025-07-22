import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Flame, Wind, Camera, Wrench, Settings, Zap, Droplet, Building } from "lucide-react"

const services = [
  {
    icon: Zap,
    title: "Electricité CFO/CFA",
    description:
      "Nous réalisons des installations électriques fiables pour l’alimentation, l’éclairage et les systèmes de communication. Nos solutions allient performance, sécurité et conformité aux normes.",
    features: ["Alimentation électrique", "Éclairage intérieur/extérieur", "Réseaux courants faibles", "Mise en conformité électrique"],
    image: "/hover4.png",
  },
  {
    icon: Wind,
    title: "Climatisation, Ventilation & Traitement d'air",
    description:
      "Nous proposons des systèmes de climatisation, ventilation et de traitement d’air pour garantir une qualité d’air saine et durable. Nos solutions assurent confort, hygiène et respect des normes.",
    features: ["Ventilation mécanique", "Climatisation centralisée", "Traitement de l'air", "Qualité de l'air intérieur"],
    image: "/hover2.png",
  },
  {
    icon: Droplet,
    title: "Plomberie sanitaire",
    description:
      "Nous concevons et installons des réseaux de plomberie fiables et adaptés, pour l’eau potable et les eaux usées. Nos prestations allient qualité, durabilité et optimisation des consommations.",
    features: ["Distribution eau potable", "Evacuation eaux usées", "Réseaux sanitaires", "Chauffe-eau / Ballons thermodynamiques"],
    image: "/hover1.png",
  },
  {
    icon: Flame,
    title: "Sécurité incendie",
    description:
      "Nous mettons en place des systèmes de sécurité incendie complets pour protéger vos espaces. Détection, Désenfumage, alarmes et équipements sont conçus pour une réactivité maximale en cas d’urgence.",
    features: ["Détection incendie", "Désenfumage", "Extincteurs automatiques", "Signalisation d'évacuation"],
    image: "/hover5.png",
  },
  {
    icon: Building,
    title: "Charpente métallique",
    description:
      "Travaux de Charpente Métallique Clé en Main : Conception, Fabrication et Installation",
    features: ["Études et plans", "Fabrication en atelier", "Montage sur site", "Maintenance structurelle"],
    image: "/hover3.png",
  },
  {
    icon: Settings,
    title: "AUTOMATISATION",
    description:
      "Solutions d'automatisation et de domotique pour optimiser la gestion de vos installations et réduire les coûts opérationnels.",
    features: ["Domotique avancée", "Gestion centralisée", "Optimisation énergétique", "Interface intuitive"],
    image: "/hover6.png",
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
              className="group hover:shadow-2xl transition-all duration-300 border-none bg-white hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Overlay for text readability */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />

              {/* Content */}
              <div className="relative z-10">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {service.description}
                  </p>
                  {/* <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full group-hover:bg-orange-300 transition-colors duration-300"></div>
                        <span className="text-sm text-slate-700 group-hover:text-white transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div> */}
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}