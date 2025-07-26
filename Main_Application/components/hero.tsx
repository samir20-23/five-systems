"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    title: "FIVE SYSTEMS",
    subtitle: "La maîtrise technique au service de votre confort",
    description:
      "Five Systems conçoit, installe et maintient des installations électriques, de climatisation, de plomberie et de sécurité incendie de haute qualité.",
  },
  {
    title: "ÉLECTRICITÉ CFO/CFA",
    subtitle: "Installations fiables et sécurisées",
    description:
      "Conception et réalisation de systèmes électriques haute et basse tension conformes aux normes en vigueur pour garantir performance et sécurité.",
  },
  {
    title: "CLIMATISATION & VENTILATION",
    subtitle: "Qualité d'air et confort optimal",
    description:
      "Solutions performantes de climatisation, ventilation mécanique et traitement d'air pour un environnement sain et agréable.",
  },
  {
    title: "SÉCURITÉ INCENDIE",
    subtitle: "Protection et prévention",
    description:
      "Mise en place de systèmes de détection, alarmes et désenfumage pour assurer la sécurité de vos locaux et la conformité règlementaire.",
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
    <section className="relative h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
      <video
        style={{ opacity: "0.2" }}
        ref={videoRef}
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover filter blur-sm"
        src="/animation2.mp4"
      />
      <div id="headercontent">
        <div
          className="mb-8"
          style={{ textShadow: "0 1px 3px rgba(0, 0, 0, 0.3)" }}
        >
          <p id="titleheader">
            <span className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              {slides[currentSlide].title}
            </span>
          </p>
          <h2 className="text-2xl md:text-3xl font-light mb-6 text-slate-300">
            {slides[currentSlide].subtitle}
          </h2>
          <p
            id="headerDescription"
            className="text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed"
          >
            {slides[currentSlide].description}
          </p>
        </div>

        <Link 
          href={"/services"}
          className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
        >
          Découvrir nos services
        </Link>
      </div>
      <div id="headerswitch" className="flex justify-center space-x-3 mt-12">
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
      <div
        id="headerIconDown"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-white opacity-60" />
      </div>
    </section>
  );
}
