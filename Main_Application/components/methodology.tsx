import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, FileText, Wrench, TestTube, Headphones } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "ANALYSE",
    description: "Étude approfondie de vos besoins et contraintes techniques pour définir la solution optimale.",
  },
  {
    number: "02",
    icon: CheckCircle,
    title: "CONCEPTION",
    description: "Élaboration des plans et spécifications techniques détaillées selon les normes en vigueur.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "INSTALLATION",
    description: "Mise en œuvre par nos équipes certifiées avec respect des délais et de la qualité.",
  },
  {
    number: "04",
    icon: TestTube,
    title: "CONTRÔLE",
    description: "Tests et vérifications complètes pour garantir le bon fonctionnement des installations.",
  },
  {
    number: "05",
    icon: Headphones,
    title: "MAINTENANCE",
    description: "Suivi et maintenance préventive pour assurer la pérennité de vos équipements.",
  },
]

export function Methodology() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">NOTRE MÉTHODE DE TRAVAIL</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Une approche structurée et éprouvée pour garantir la réussite de chaque projet, de l'analyse initiale à la
            maintenance continue.
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
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Icon */}
                <div className="mt-8 mb-6">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-orange-100 transition-colors">
                    <step.icon className="w-8 h-8 text-slate-600 group-hover:text-orange-600 transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>

                {/* Connection Line (except for last item) */}
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
              <span className="text-sm font-medium text-slate-700">Processus certifié ISO 9001</span>
            </div>
            <div className="w-px h-6 bg-slate-300"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-700">Suivi en temps réel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
