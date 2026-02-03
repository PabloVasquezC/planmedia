"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
    const [isOpen, setIsOpen] = React.useState(false)

    const navLinks = [
        { name: "Inicio", href: "/" },
        { name: "Quiénes Somos", href: "#about" },
        { name: "Servicios", href: "#services" },
        { name: "Contacto", href: "#contact" },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/95 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2">
                    {/* Logo representation based on image: Plan[media] Consultores */}
                    <Link href="/" className="flex flex-col leading-none">
                        <div className="flex items-center text-2xl font-bold tracking-tight text-white">
                            Plan<span className="text-accent">media</span>
                            <span className="text-accent text-3xl font-light ml-0.5">]</span>
                        </div>
                        <span className="text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase font-medium ml-0.5">
                            Consultores
                        </span>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-400 transition-colors hover:text-white hover:underline underline-offset-4"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button asChild size="sm" className="ml-4">
                        <Link href="#contact">Solicitar Asesoría</Link>
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden border-t bg-background">
                    <div className="container flex flex-col gap-4 p-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-base font-medium text-foreground hover:text-accent"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button asChild className="w-full mt-2">
                            <Link href="#contact" onClick={() => setIsOpen(false)}>
                                Solicitar Asesoría
                            </Link>
                        </Button>
                    </div>
                </div>
            )}
        </header>
    )
}
