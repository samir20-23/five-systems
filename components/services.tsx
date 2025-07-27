import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Flame, Wind, Camera, Wrench, Settings, Zap, Droplet, Building } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Électricité CFO/CFA",
    description:
      "Conception et réalisation d’installations électriques haute et basse tension pour bâtiments résidentiels, commerciaux et industriels au Maroc. Sécurisé, performant et conforme aux normes en vigueur.",
    features: [
      "Alimentation haute et basse tension",
      "Éclairage intérieur & extérieur",
      "Réseaux courants faibles (télécom, sécurité)",
      "Mise en conformité électrique"
    ],
    image: "/hover4.png",
  },
  {
    icon: Wind,
    title: "Climatisation & Ventilation",
    description:
      "Installation de systèmes de climatisation centralisée, de ventilation mécanique contrôlée (VMC) et de traitement d’air pour garantir un confort optimal et une qualité d’air saine.",
    features: [
      "Climatisation réversible & VRV",
      "VMC double flux",
      "Filtres HEPA & UV",
      "Entretien & maintenance"
    ],
    image: "/hover2.png",
  },
  {
    icon: Droplet,
    title: "Plomberie Sanitaire",
    description:
      "Réseaux de plomberie pour eau potable et eaux usées, installation de sanitaires, chauffe-eau et systèmes thermodynamiques, avec optimisation de la consommation d’eau.",
    features: [
      "Distribution eau potable",
      "Évacuation eaux usées",
      "Installation de sanitaires",
      "Chauffe-eau thermodynamique"
    ],
    image: "/hover1.png",
  },
  {
    icon: Flame,
    title: "Sécurité Incendie",
    description:
      "Systèmes complets de détection incendie, alarmes, désenfumage et extincteurs automatiques pour la protection des bâtiments selon la réglementation marocaine et européenne.",
    features: [
      "Détection & alarmes",
      "Désenfumage",
      "Extincteurs automatiques",
      "Signalisation d’évacuation"
    ],
    image: "/hover5.png",
  },
  {
    icon: Building,
    title: "Charpente Métallique",
    description:
      "Conception, fabrication et montage de structures métalliques sur mesure — hall industriels, passerelles, supports techniques — avec études techniques et contrôle qualité rigoureux.",
    features: [
      "Études & plans 3D",
      "Fabrication en atelier",
      "Montage & soudure sur site",
      "Contrôle non destructif"
    ],
    image: "/hover3.png",
  },
  {
    icon: Settings,
    title: "Automatisation & Domotique",
    description:
      "Solutions de pilotage et supervision (GTB/GTC) pour optimiser l’énergie, la sécurité et le confort : gestion centralisée, programmations sur mesure et interfaces intuitives.",
    features: [
      "GTB/GTC centralisée",
      "Scénarios domotiques",
      "Optimisation énergétique",
      "Interface mobile & web"
    ],
    image: "/hover6.png",
  },
];

export function Services() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">NOS SERVICES</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Five Systems propose une gamme complète de solutions techniques : de l’étude à la maintenance, nous vous accompagnons dans tous vos projets d’installation au Maroc.
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
                  {/* Uncomment to show features list */}
                  {/* <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
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
  );
}
