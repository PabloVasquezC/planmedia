"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

export function About() {
    const features = [
        "Red de profesionales expertos",
        "Experiencia público-privada",
        "Enfoque técnico y estratégico",
        "Soluciones claras y oportunas",
    ]

    return (
        <section id="about" className="relative py-24 overflow-hidden bg-slate-950/30">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                            ¿Quiénes somos?
                        </h2>
                        <div className="space-y-4 text-lg text-slate-300">
                            <p>
                                <strong className="text-accent">Plan Media</strong> es una consultora que acompaña a emprendedores, empresas y organizaciones públicas y privadas en el desarrollo, formalización y fortalecimiento de sus proyectos.
                            </p>
                            <p>
                                Trabajamos con una red de profesionales partners especializados, con amplia experiencia en el ámbito público y privado. Esto nos permite abordar cada desafío con el enfoque técnico y estratégico adecuado, entregando soluciones claras, oportunas y alineadas a los objetivos de cada cliente.
                            </p>
                        </div>
                        <ul className="mt-8 space-y-3">
                            {features.map((feature) => (
                                <li key={feature} className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                                    <span className="text-slate-200 font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative w-full max-w-md mx-auto lg:max-w-none lg:mx-0"
                    >
                        <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-slate-800 shadow-xl border border-slate-700">
                            <Image
                                src="/images/corporate-about.png"
                                alt="Imagen Corporativa Plan Media"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -left-6 -z-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
