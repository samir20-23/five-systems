"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, MapPin, X } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Centre Commercial Anfa Mall",
    category: "Sécurité Incendie",
    location: "Casablanca, Maroc",
    date: "2024",
    image: "/image1.jpg",
    description:
      "Installation complète de systèmes de détection incendie, alarmes et désenfumage pour un centre commercial de 25 000 m², conforme aux normes NFPA et marocaines.",
  },
  {
    title: "Tour d’Affaires Rabat Tech",
    category: "Climatisation & Ventilation",
    location: "Rabat, Maroc",
    date: "2024",
    image: "/image2.jpg",
    description:
      "Mise en place d’un système CVC centralisé VRF pour un immeuble de bureaux de 12 étages, garantissant confort thermique et efficacité énergétique.",
  },
  {
    title: "Résidence Privée Majorelle",
    category: "Plomberie Sanitaire",
    location: "Marrakech, Maroc",
    date: "2023",
    image: "/image3.jpg",
    description:
      "Conception et installation de réseaux de plomberie potable et eaux usées pour une villa de 1 200 m², incluant chauffe-eau thermodynamique et robinetterie haut de gamme.",
  },
  {
    title: "Hôtel de Luxe Kasbah Merzouga",
    category: "Charpente Métallique",
    location: "Erfoud, Maroc",
    date: "2023",
    image: "/image4.jpg",
    description:
      "Fabrication et montage d’une structure métallique pour hall d’accueil et passerelles panoramiques, avec finitions traditionnelles et contrôle non destructif.",
  },
  {
    title: "Campus Universitaire Hassan II",
    category: "Automatisation & Domotique",
    location: "Mohammedia, Maroc",
    date: "2022",
    image: "/image5.jpg",
    description:
      "Déploiement d’une GTB/GTC pour superviser l’éclairage, la climatisation et la sécurisation des bâtiments universitaires, avec interface mobile dédiée.",
  },
  {
    title: "Clinique Privée El Youssoufia",
    category: "Chauffage Ventilation",
    location: "Fès, Maroc",
    date: "2022",
    image: "/image6.jpg",
    description:
      "Installation d’un système de ventilation médicale à débit contrôlé pour blocs opératoires, garantissant la qualité d’air et la stérilité des locaux.",
  },
];

export function Projects() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  return (
    <section className="py-20 bg-white">
      {/* Image Modal */}
      {expandedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <button
            onClick={() => setExpandedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-gray-300"
          >
            <X className="w-8 h-8" />
          </button>
          <Image
            src={expandedImage}
            alt="Projet agrandi"
            width={1000}
            height={700}
            className="max-w-full max-h-full rounded-lg shadow-2xl"
          />
        </div>
      )}

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            PROJETS RÉCENTS
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Quelques-unes de nos réalisations phares au Maroc, démontrant notre
            expertise et notre engagement pour l’excellence.
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
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <Button
                  size="sm"
                  onClick={() => setExpandedImage(project.image)}
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-slate-900 hover:bg-slate-100"
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

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
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
