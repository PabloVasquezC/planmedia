"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"

export function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/30">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="mx-auto max-w-2xl bg-slate-800/50 backdrop-blur rounded-2xl shadow-xl overflow-hidden border border-slate-700">
                    <div className="bg-slate-950 px-6 py-8 text-center sm:px-10 border-b border-slate-800">
                        <h2 className="text-2xl font-bold text-white">Contáctanos</h2>
                        <p className="mt-2 text-slate-400">
                            Completa el formulario y nos pondremos en contacto contigo a la brevedad.
                        </p>
                    </div>

                    <div className="px-6 py-10 sm:px-10">
                        <form className="space-y-6">
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="text-slate-200">Nombre completo</Label>
                                    <Input id="name" placeholder="Tu nombre" required className="bg-slate-900/50 border-slate-700 text-slate-100 placeholder:text-slate-500 focus-visible:ring-accent" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-slate-200">Correo electrónico</Label>
                                    <Input id="email" type="email" placeholder="tu@correo.com" required className="bg-slate-900/50 border-slate-700 text-slate-100 placeholder:text-slate-500 focus-visible:ring-accent" />
                                </div>
                            </div>

                            <div className="grid gap-6 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="phone" className="text-slate-200">Teléfono / WhatsApp</Label>
                                    <Input id="phone" type="tel" placeholder="+56 9 1234 5678" className="bg-slate-900/50 border-slate-700 text-slate-100 placeholder:text-slate-500 focus-visible:ring-accent" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="city" className="text-slate-200">Ciudad / Región</Label>
                                    <Input id="city" placeholder="Ej: Curicó, Maule" className="bg-slate-900/50 border-slate-700 text-slate-100 placeholder:text-slate-500 focus-visible:ring-accent" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="type" className="text-slate-200">¿Es empresa o persona sin inicio de actividades?</Label>
                                <div className="relative">
                                    <select
                                        id="type"
                                        defaultValue=""
                                        className="flex h-10 w-full items-center justify-between rounded-md border border-slate-700 bg-slate-900/50 px-3 py-2 text-sm text-slate-100 ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
                                    >
                                        <option value="" disabled className="bg-slate-900 text-slate-300">Seleccione una opción</option>
                                        <option value="empresa" className="bg-slate-900 text-slate-100">Empresa</option>
                                        <option value="persona" className="bg-slate-900 text-slate-100">Persona sin inicio de actividades</option>
                                        <option value="otro" className="bg-slate-900 text-slate-100">Otro</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="service" className="text-slate-200">¿Qué servicio requiere?</Label>
                                <div className="relative">
                                    <select
                                        id="service"
                                        defaultValue=""
                                        className="flex h-10 w-full items-center justify-between rounded-md border border-slate-700 bg-slate-900/50 px-3 py-2 text-sm text-slate-100 ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
                                    >
                                        <option value="" disabled className="bg-slate-900 text-slate-300">Seleccione un servicio</option>
                                        <option value="creacion" className="bg-slate-900 text-slate-100">Creación y formalización de empresas</option>
                                        <option value="planificacion" className="bg-slate-900 text-slate-100">Planificación estratégica</option>
                                        <option value="rrpp" className="bg-slate-900 text-slate-100">Relaciones públicas y comunicación corporativa</option>
                                        <option value="fondos" className="bg-slate-900 text-slate-100">Fondos concursables</option>
                                        <option value="capacitacion" className="bg-slate-900 text-slate-100">Capacitación y coaching</option>
                                        <option value="legal" className="bg-slate-900 text-slate-100">Servicios legales y laborales</option>
                                        <option value="auditorias" className="bg-slate-900 text-slate-100">Auditorías y certificaciones</option>
                                        <option value="sanitaria" className="bg-slate-900 text-slate-100">Resolución sanitaria</option>
                                        <option value="marca" className="bg-slate-900 text-slate-100">Inscripción de marca</option>
                                        <option value="orientacion" className="bg-slate-900 text-slate-100">No lo tengo claro / necesito orientación</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message" className="text-slate-200">Comentario</Label>
                                <Textarea id="message" placeholder="Cuéntanos más sobre tu proyecto..." className="min-h-[100px] bg-slate-900/50 border-slate-700 text-slate-100 placeholder:text-slate-500 focus-visible:ring-accent" />
                            </div>

                            <Button type="submit" className="w-full h-12 text-base bg-accent hover:bg-accent/90">
                                Enviar Mensaje
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
