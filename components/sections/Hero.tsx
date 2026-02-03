"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-slate-900 py-20 sm:py-32 lg:pb-32 xl:pb-36">
            {/* Background gradients */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            <div className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]">
                <div
                    className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-accent/40 to-primary/40 opacity-20"
                    style={{
                        clipPath:
                            "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
                    }}
                ></div>
            </div>

            <div className="container px-4 text-center md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="mx-auto mb-6 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-slate-700 bg-slate-800/50 px-7 py-2 backdrop-blur hover:bg-slate-800/70 transition-colors cursor-default">
                        <span className="text-sm font-semibold text-slate-200">
                            Consultoría Estratégica Integral
                        </span>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl max-w-4xl mx-auto">
                        Impulsamos el <span className="text-accent">futuro</span> de tu proyecto
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl">
                        Acompañamos a emprendedores y organizaciones en el desarrollo, formalización y fortalecimiento de sus objetivos con un enfoque técnico y estratégico.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Button asChild size="lg" className="h-12 px-8 text-base">
                            <Link href="#contact">
                                Comenzar ahora
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base text-white border-slate-700 bg-transparent hover:bg-slate-800/50 hover:text-white backdrop-blur-sm">
                            <Link href="#services">
                                Nuestros Servicios
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
