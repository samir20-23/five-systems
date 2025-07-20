import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, MapPin } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Centre Commercial Moderne",
    category: "Sécurité Incendie",
    location: "Paris, France",
    date: "2024",
    image: "/image1.jpg",
    description: "Installation complète de systèmes de sécurité incendie dans un centre commercial de 15000m²",
  },
  {
    title: "Bureaux Corporate",
    category: "Chauffage Ventilation",
    location: "Lyon, France",
    date: "2024",
    image: "/image2.jpg",
    description: "Système de climatisation et ventilation pour un immeuble de bureaux de 8 étages",
  },
  {
    title: "Résidence Haut Standing",
    category: "Sécurité Civile",
    location: "Cannes, France",
    date: "2023",
    image: "/image3.jpg",
    description: "Installation de systèmes de vidéosurveillance et contrôle d'accès pour résidence privée",
  },
  {
    title: "Hôtel 5 Étoiles",
    category: "Installation Complète",
    location: "Nice, France",
    date: "2023",
    image: "/image4.jpg",
    description: "Projet complet incluant sécurité incendie, climatisation et surveillance",
  },
  {
    title: "Campus Universitaire",
    category: "Sécurité Incendie",
    location: "Marseille, France",
    date: "2023",
    image: "/image5.jpg",
    description: "Mise aux normes sécurité incendie pour un campus de 20000 étudiants",
  },
  {
    title: "Centre Médical",
    category: "Chauffage Ventilation",
    location: "Toulouse, France",
    date: "2022",
    image: "/image6.jpg",
    description: "Système de ventilation spécialisé pour environnement médical stérilisé",
  },
]

export function Projects() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">PROJETS RÉCENTS</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Découvrez quelques-unes de nos réalisations récentes qui témoignent de notre expertise et de notre
            engagement envers l'excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <Button
                  size="sm"
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-slate-900 hover:bg-slate-100"
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex items-center justify-between text-sm text-slate-500">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full">
            Voir tous nos projets
          </Button>
        </div> */}
      </div>
    </section>
  )
}
