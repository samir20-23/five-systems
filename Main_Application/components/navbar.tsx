import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-50  bg-white backdrop-blur-md  transition-all"
      style={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="mx-auto px-24 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo1.png"
              alt="Logo"
              width={150}
              height={150}
              className="rounded-md"
              priority
            />
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#services"
              className="text-sm text-gray-700 hover:text-blue-600 transition-all duration-200 hover:underline underline-offset-4"
            >
              Services
            </a>
            <a
              href="#projects"
              className="text-sm text-gray-700 hover:text-blue-600 transition-all duration-200 hover:underline underline-offset-4"
            >
              Projets
            </a>
            <a
              href="#team"
              className="text-sm text-gray-700 hover:text-blue-600 transition-all duration-200 hover:underline underline-offset-4"
            >
              Équipe
            </a>
            <a
              href="#contact"
              className="text-sm text-gray-700 hover:text-blue-600 transition-all duration-200 hover:underline underline-offset-4"
            >
              Contact
            </a>
          </nav>

          <div className="md:hidden"></div>
        </div>
      </div>
    </header>
  );
}
