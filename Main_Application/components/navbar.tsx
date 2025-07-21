import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-50  bg-white/94 backdrop-blur-md  transition-all"
      style={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2">
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
            <span
              className="text-2xl font-bold tracking-tight transition-colors duration-300 hover:opacity-90 cursor-pointer"
              style={{ color: "#ff4d00d2" }}
            >
              <span
                className="text-gray-800"
                style={{ textShadow: "-1px 1px 4px rgb(255 242 242 / 10%)" }}
              >
                Five
              </span>{" "}
              System
            </span>
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
