"use client"

import { ContactForm } from "@/components/ContactForm"
import { motion } from "framer-motion"


export function Contact() {
    return (
        <section id="contact" className="py-24 relative bg-slate-950/30">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="mx-auto max-w-3xl text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                        Contáctanos
                    </h2>
                    <p className="text-lg text-slate-300">
                        ¿Tienes un proyecto en mente? Completa el formulario y conversemos sobre cómo podemos ayudarte a crecer.
                    </p>
                </div>

                <div className="mx-auto max-w-2xl">
                    <div className="relative rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm shadow-2xl overflow-hidden">
                        {/* Header bar of the 'window' - purely decorative */
                        /* <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900/80">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                        </div> */}

                        <div className="w-full relative bg-transparent">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
