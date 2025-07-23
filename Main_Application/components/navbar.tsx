"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return ( 
  <header
      className="sticky top-0 z-50  bg-white/94 backdrop-blur-md  transition-all"
      style={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-1.5" style={{ backgroundImage : "linear-gradient(45deg, #ffffffa6, #1e1c2733)" }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo1Png.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-md"
              priority
            />
            <Image
              src="/logo1part3.png"
              alt="Logo"
              width={94}
              height={90}
              className="rounded-md"
              priority
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6" style={{textShadow: "0 1px 3px rgba(255, 255, 255, 0.39)"  }}>
            {[
              { href: "#services", label: "Services" },
              { href: "#projects", label: "Projets" },
              { href: "#team", label: "Équipe" },
              { href: "#contact", label: "Contact" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm text-gray-700 hover:text-blue-600 transition-all duration-200 hover:underline underline-offset-4"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Animated Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-2 rounded-xl bg-white shadow-md px-4 py-4 space-y-3"
            >
              {[
                { href: "#services", label: "Services" },
                { href: "#projects", label: "Projets" },
                { href: "#team", label: "Équipe" },
                { href: "#contact", label: "Contact" },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="block text-base font-medium text-gray-700 hover:text-blue-600 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
