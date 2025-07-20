import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function Navbar() {
    return (
        <>
            <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                        <Image src="/logo1.png" alt="Logo 1" width={150} height={150} />
                        </div>
                        <nav className="hidden md:flex items-center space-x-8">
                            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">
                                Services
                            </a>
                            <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">
                                Projets
                            </a>
                            <a href="#team" className="text-gray-600 hover:text-blue-600 transition-colors">
                                Équipe
                            </a>
                            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                                Contact
                            </a>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}