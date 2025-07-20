import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail, Phone } from "lucide-react"
import Image from "next/image"

const teamMembers = [
  {
    name: "RIADI ZAKARIA",
    role: "General Manager",
    image: "/placeholder.svg?height=300&width=300",
    description: "State engineer with 10+ years of experience...",
    email: "random.email@gmail.com",
    phone: "+212 6 35 59 78 45",
  },
]

export function Team() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">NOTRE ÉQUIPE</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Notre équipe est composée de professionnels passionnés et experts, chacun apportant une contribution unique. Ensemble, nous partageons une vision commune : offrir un service exceptionnel et dépasser les attentes de nos clients. Dans un environnement de travail collaboratif et innovant, nous encourageons la créativité et l’engagement. Découvrez les visages et les talents qui font de notre équipe un pilier de notre succès !
          </p>
        </div>

        <div className="flex justify-center">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
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
      </div>
    </section>
  )
}
