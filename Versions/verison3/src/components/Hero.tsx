"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

const slides = [
  {
    title: "FIVE SYSTEMS",
    subtitle: "Excellence en installations techniques",
    description: "Votre partenaire de confiance pour tous vos projets d'installations techniques de qualité",
  },
  {
    title: "SÉCURITÉ INCENDIE",
    subtitle: "Protection optimale",
    description: "Systèmes de sécurité incendie conformes aux normes les plus strictes",
  },
  {
    title: "CHAUFFAGE VENTILATION",
    subtitle: "Confort thermique",
    description: "Solutions de chauffage et ventilation performantes et économiques",
  },
  {
    title: "SÉCURITÉ CIVILE",
    subtitle: "Surveillance avancée",
    description: "Systèmes de sécurité civile pour la protection de vos biens",
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">{slides[currentSlide].title}</h1>
          <h2 className="text-2xl md:text-3xl font-light mb-6 text-slate-300">{slides[currentSlide].subtitle}</h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {slides[currentSlide].description}
          </p>
        </div>

        <Button
          size="lg"
          className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
        >
          Découvrir nos services
        </Button>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-3 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-orange-600 scale-125" : "bg-slate-600 hover:bg-slate-500"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white opacity-60" />
      </div>
    </section>
  )
}
