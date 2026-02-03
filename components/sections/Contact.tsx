"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-white">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
                    <div className="bg-slate-900 px-6 py-8 text-center sm:px-10">
                        <h2 className="text-2xl font-bold text-white">Contáctanos</h2>
                        <p className="mt-2 text-slate-300">
                            Completa el formulario y nos pondremos en contacto contigo a la brevedad.
                        </p>
                    </div>

                    <div className="px-6 py-10 sm:px-10">
                        <form className="space-y-6">
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Nombre completo</Label>
                                    <Input id="name" placeholder="Tu nombre" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Correo electrónico</Label>
                                    <Input id="email" type="email" placeholder="tu@correo.com" required />
                                </div>
                            </div>

                            <div className="grid gap-6 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Teléfono / WhatsApp</Label>
                                    <Input id="phone" type="tel" placeholder="+56 9 1234 5678" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="city">Ciudad / Región</Label>
                                    <Input id="city" placeholder="Ej: Curicó, Maule" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="type">¿Es empresa o persona sin inicio de actividades?</Label>
                                <div className="relative">
                                    <select
                                        id="type"
                                        className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
                                    >
                                        <option value="" disabled selected>Seleccione una opción</option>
                                        <option value="empresa">Empresa</option>
                                        <option value="persona">Persona sin inicio de actividades</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="service">¿Qué servicio requiere?</Label>
                                <div className="relative">
                                    <select
                                        id="service"
                                        className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
                                    >
                                        <option value="" disabled selected>Seleccione un servicio</option>
                                        <option value="creacion">Creación y formalización de empresas</option>
                                        <option value="planificacion">Planificación estratégica</option>
                                        <option value="rrpp">Relaciones públicas y comunicación corporativa</option>
                                        <option value="fondos">Fondos concursables</option>
                                        <option value="capacitacion">Capacitación y coaching</option>
                                        <option value="legal">Servicios legales y laborales</option>
                                        <option value="auditorias">Auditorías y certificaciones</option>
                                        <option value="sanitaria">Resolución sanitaria</option>
                                        <option value="marca">Inscripción de marca</option>
                                        <option value="orientacion">No lo tengo claro / necesito orientación</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">Comentario</Label>
                                <Textarea id="message" placeholder="Cuéntanos más sobre tu proyecto..." className="min-h-[100px]" />
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
