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
        <section id="about" className="py-24 bg-white">
            <div className="container px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
                            ¿Quiénes somos?
                        </h2>
                        <div className="space-y-4 text-lg text-slate-600">
                            <p>
                                <strong className="text-slate-900">Plan Media</strong> es una consultora que acompaña a emprendedores, empresas y organizaciones públicas y privadas en el desarrollo, formalización y fortalecimiento de sus proyectos.
                            </p>
                            <p>
                                Trabajamos con una red de profesionales partners especializados, con amplia experiencia en el ámbito público y privado. Esto nos permite abordar cada desafío con el enfoque técnico y estratégico adecuado, entregando soluciones claras, oportunas y alineadas a los objetivos de cada cliente.
                            </p>
                        </div>
                        <ul className="mt-8 space-y-3">
                            {features.map((feature) => (
                                <li key={feature} className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                                    <span className="text-slate-700 font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative lg:ml-auto"
                    >
                        <div className="relative aspect-square w-full max-w-md mx-auto lg:max-w-none overflow-hidden rounded-2xl bg-slate-100 shadow-xl">
                            {/* Placeholder for an office image or team image */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-50 flex items-center justify-center text-slate-400">
                                <span className="text-lg">Imagen Corporativa</span>
                            </div>
                            {/* 
                 TODO: Replace with actual image
                 <Image src="/path/to/image.jpg" alt="Equipo Plan Media" fill className="object-cover" /> 
               */}
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -left-6 -z-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
