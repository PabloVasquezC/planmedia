import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-200 border-t border-slate-800">
            <div className="container px-4 py-12 md:py-16 lg:px-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex flex-col leading-none">
                            <div className="flex items-center text-2xl font-bold tracking-tight text-white">
                                Plan<span className="text-accent">media</span>
                                <span className="text-accent text-3xl font-light ml-0.5">]</span>
                            </div>
                            <span className="text-[0.65rem] tracking-[0.2em] text-slate-400 uppercase font-medium ml-0.5">
                                Consultores
                            </span>
                        </div>
                        <p className="text-sm text-slate-400 max-w-xs">
                            Acompañamos a emprendedores y empresas en el desarrollo, formalización y fortalecimiento de sus proyectos.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="hover:text-accent transition-colors">Inicio</Link></li>
                            <li><Link href="#about" className="hover:text-accent transition-colors">Quiénes Somos</Link></li>
                            <li><Link href="#services" className="hover:text-accent transition-colors">Servicios</Link></li>
                            <li><Link href="#contact" className="hover:text-accent transition-colors">Contacto</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-accent" />
                                <a href="mailto:contacto@planmedia.cl" className="hover:text-accent transition-colors">
                                    contacto@planmedia.cl
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-accent" />
                                <a href="tel:+56981435127" className="hover:text-accent transition-colors">
                                    +56 981435127
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                                <span>
                                    Curicó, Región del Maule, Chile
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Social / Legal */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Siguenos</h3>
                        <div className="flex gap-4 mb-6">
                            <Link href="#" className="p-2 bg-slate-800 rounded-full hover:bg-accent hover:text-white transition-colors">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="p-2 bg-slate-800 rounded-full hover:bg-accent hover:text-white transition-colors">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="p-2 bg-slate-800 rounded-full hover:bg-accent hover:text-white transition-colors">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Plan Media Consultores. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}
