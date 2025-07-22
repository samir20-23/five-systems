"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";

const slides = [
  {
    title: "FIVE SYSTEMS",
    subtitle: "Excellence en installations techniques",
    description:
      "Votre partenaire de confiance pour tous vos projets d'installations techniques de qualité",
  },
  {
    title: "SÉCURITÉ INCENDIE",
    subtitle: "Protection optimale",
    description:
      "Systèmes de sécurité incendie conformes aux normes les plus strictes",
  },
  {
    title: "CHAUFFAGE VENTILATION",
    subtitle: "Confort thermique",
    description:
      "Solutions de chauffage et ventilation performantes et économiques",
  },
  {
    title: "SÉCURITÉ CIVILE",
    subtitle: "Surveillance avancée",
    description: "Systèmes de sécurité civile pour la protection de vos biens",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden   from-slate-900 via-slate-800 to-slate-900">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover filter blur-sm"
        src="/animation2.mp4"
      />
      <div
        className="absolute inset-0   opacity-50 z-0"
        style={{
          filter: " blur(8px)",
          background: "#0000008c",
          color: "#0000008c",
        }}
      />
        <div id="headercontent" className="">
      {/* <div id="headercontent" className="relative z-10 text-left text-white max-w-4xl px-6 lg:px-8 lg:pl-72 mx-auto"> */}
        <div
          className="mb-8"
          style={{ textShadow: "0 1px 3px rgba(0, 0, 0, 0.3)" }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight"></h1>
          {/* <h1 id="titleheader" className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              {slides[currentSlide].title} */}
          {/* title  */}
          <p id="titleheader">
            <span className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              {slides[currentSlide].title}
            </span>
          </p>
          {/* title  */}

          <h2 className="text-2xl md:text-3xl font-light mb-6 text-slate-300">
            {slides[currentSlide].subtitle}
          </h2>
          <p id="headerDescription" className="text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed">
            {slides[currentSlide].description}
          </p>
        </div>
        <Button
          className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
          size="lg"
        >
          Découvrir nos services
        </Button>
      
      </div>  <div id="headerswitch" className="flex justify-center space-x-3 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-orange-600 scale-125"
                  : "bg-slate-600 hover:bg-slate-500"
              }`}
            />
          ))}
        </div>
      <div id="headerIconDown" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white opacity-60" />
      </div>
    </section>
  );
}
