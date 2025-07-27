import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, FileText, Wrench, TestTube, Headphones } from "lucide-react";

const steps = [
  {
    number: "01",
    color: "from-orange-500 to-orange-600",
    icon: FileText,
    title: "Synergie",
    description:
      "Établir des partenariats gagnant‑gagnant avec nos clients, fondés sur la confiance et le partage d’expertises pour créer de la valeur durable.",
  },
  {
    number: "02",
    color: "from-blue-500 to-blue-600",
    icon: CheckCircle,
    title: "Continuité",
    description:
      "Assurer une transition fluide entre études, réalisation et maintenance, garantissant la pérennité et la performance de vos installations.",
  },
  {
    number: "03",
    color: "from-red-500 to-red-600",
    icon: Wrench,
    title: "Partenariat",
    description:
      "Collaborer avec les industries, cliniques, hôtels, centres commerciaux et collectivités pour devenir votre interlocuteur unique et fiable.",
  },
  {
    number: "04",
    color: "from-green-500 to-green-600",
    icon: TestTube,
    title: "Fiabilité",
    description:
      "Mettre en œuvre des processus rigoureux et des contrôles qualité pour garantir le respect des délais et la robustesse de chaque projet.",
  },
  {
    number: "05",
    color: "from-yellow-500 to-yellow-600",
    icon: Headphones,
    title: "Conformité",
    description:
      "Respecter scrupuleusement les normes locales et internationales (ISO 9001, NFPA) pour offrir des réalisations sûres et certifiées.",
  },
];

export function Methodology() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">NOTRE MÉTHODE DE TRAVAIL</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Une approche structurée et éprouvée qui couvre chaque étape, de l’analyse initiale à la maintenance continue, pour garantir la réussite de vos projets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="group relative border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-slate-50"
            >
              <CardContent className="p-6 text-center">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Icon */}
                <div className="mt-8 mb-6">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-slate-200 transition-colors">
                    <step.icon className="w-8 h-8 text-slate-600 group-hover:text-orange-600 transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>

                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-orange-300 to-orange-500 transform -translate-y-1/2"></div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Flow Visualization */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-slate-100 rounded-full px-8 py-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-700">Processus certifié ISO 9001</span>
            </div>
            <div className="w-px h-6 bg-slate-300"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-700">Suivi & support 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
