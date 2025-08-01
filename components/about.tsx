import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Award } from "lucide-react";
import Image from "next/image";

export function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/image3.jpg"
                alt="Technicien Five Systems au travail à Tanger"
                width={600}
                height={400}
                className="object-cover w-full h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 border">
              <div className="flex space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">7+</div>
                  <div className="text-sm text-slate-600">Ans d'expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">30+</div>
                  <div className="text-sm text-slate-600">Projets achevés</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                VOTRE ALLIÉ EN INSTALLATIONS TECHNIQUES DE QUALITÉ
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Depuis plus de 7 ans, Five Systems, basée à Tanger, accompagne
                les entreprises et collectivités marocaines dans la conception,
                l’installation et la maintenance de leurs systèmes techniques.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Spécialistes en électricité CFO/CFA, climatisation &
                ventilation, plomberie sanitaire, sécurité incendie et charpente
                métallique, nous veillons à l’innovation, la durabilité et la
                conformité à toutes les réglementations en vigueur.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Qualité certifiée
                  </h3>
                  <p className="text-sm text-slate-600">
                    Conformité aux normes ISO et NFPA
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Équipe experte
                  </h3>
                  <p className="text-sm text-slate-600">
                    Ingénieurs et techniciens certifiés
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Award className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Excellence reconnue
                  </h3>
                  <p className="text-sm text-slate-600">
                    Plus de 30 projets livrés avec succès
                  </p>
                </CardContent>
              </Card>
            </div>

            <Link
              href={"/projects"}
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-full"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
