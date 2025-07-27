"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <header
      className="sticky top-0 z-50 bg-white/94 backdrop-blur-md transition-all"
      style={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}
    >
      <div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-1.5"
        style={{
          backgroundImage: "linear-gradient(45deg, #ffffffa6, #1e1c2733)",
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link prefetch={true}
              href={"/"}
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                flexWrap: "nowrap",
              }}
            >
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
            </Link> 
          </div>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center space-x-6"
            style={{ textShadow: "0 1px 3px rgba(255, 255, 255, 0.39)" }}
          >
            {navItems.map(({ href, label }) =>
              pathname !== href ? (
                <Link prefetch={true}
                  key={href}
                  href={href}
                  className="text-sm text-gray-700 hover:text-blue-600 transition-all duration-200 hover:underline underline-offset-4"
               style={{color  : "black" , fontSize : "15px"}}
               >
                  {label}
                </Link>
              ) : null
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
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
              {navItems.map(({ href, label }) => (
                <Link prefetch={true}
                  key={href}
                  href={href}
                  className="block text-base font-medium text-gray-700 hover:text-blue-600 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
