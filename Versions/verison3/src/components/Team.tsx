import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail, Phone } from "lucide-react"

const teamMembers = [
  {
    name: "DAVID GARCIA",
    role: "Directeur Général",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Expert en installations techniques avec plus de 20 ans d'expérience dans le secteur.",
    email: "david.garcia@fivesystems.fr",
    phone: "+33 1 23 45 67 89",
    linkedin: "#",
  },
  {
    name: "MARIE DUBOIS",
    role: "Responsable Technique",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    description: "Spécialisée en sécurité incendie et systèmes de ventilation, certifiée par les organismes officiels.",
    email: "marie.dubois@fivesystems.fr",
    phone: "+33 1 23 45 67 90",
    linkedin: "#",
  },
  {
    name: "PIERRE MARTIN",
    role: "Chef de Projet",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    description: "Coordination et gestion de projets complexes d'installations techniques multi-sites.",
    email: "pierre.martin@fivesystems.fr",
    phone: "+33 1 23 45 67 91",
    linkedin: "#",
  },
]

export function Team() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">NOTRE ÉQUIPE</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Une équipe d'experts passionnés et qualifiés, dédiée à la réussite de vos projets d'installations techniques
            les plus exigeants.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Social Links */}
                  <div className="absolute bottom-4 left-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-none">
                      <Mail className="w-4 h-4" />
                    </Button>
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-none">
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-none">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-orange-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-slate-600 leading-relaxed">{member.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-full">
            Rejoindre notre équipe
          </Button>
        </div>
      </div>
    </section>
  )
}
