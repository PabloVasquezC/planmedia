"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Building2, FileText, Megaphone, Milestone, GraduationCap, Scale, ClipboardCheck, Activity, Stamp, HelpCircle } from "lucide-react"

export function Services() {
    const serviceGroups = [
        {
            title: "Desarrollo Empresarial",
            services: [
                { name: "Creación y formalización de empresas", icon: Building2 },
                { name: "Planificación estratégica", icon: Milestone },
                { name: "Fondos concursables", icon: FileText },
                { name: "Inscripción de marca", icon: Stamp },
            ],
        },
        {
            title: "Gestión Institucional y Corporativa",
            services: [
                { name: "Relaciones públicas y comunicación corporativa", icon: Megaphone },
                { name: "Auditorías y certificaciones", icon: ClipboardCheck },
                { name: "Resolución sanitaria", icon: Activity },
            ],
        },
        {
            title: "Personas y Cumplimiento",
            services: [
                { name: "Capacitación y coaching", icon: GraduationCap },
                { name: "Servicios legales y laborales", icon: Scale },
                { name: "Orientación General / No lo tengo claro", icon: HelpCircle, highlight: true },
            ],
        },
    ]

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    }

    return (
        <section id="services" className="py-24 relative overflow-hidden bg-slate-950/80">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Nuestros Servicios
                    </h2>
                    <p className="mt-4 text-lg text-slate-400">
                        Soluciones integrales para el desarrollo y fortalecimiento de tu proyecto
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {serviceGroups.map((group, groupIndex) => (
                        <div key={group.title} className="space-y-6">
                            <h3 className="text-xl font-semibold text-white text-center lg:text-left border-b border-accent/20 pb-4 inline-block w-full">
                                {group.title}
                            </h3>
                            <motion.div
                                variants={container}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: "-50px" }}
                                className="space-y-4"
                            >
                                {group.services.map((service) => (
                                    <motion.div key={service.name} variants={item}>
                                        <Card className={`transition-all hover:shadow-lg hover:shadow-accent/10 ${service.highlight
                                            ? 'border-accent/40 bg-accent/10 text-white'
                                            : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                                            }`}>
                                            <CardHeader className="p-4 flex flex-row items-center space-y-0 gap-4">
                                                <div className={`p-2 rounded-lg ${service.highlight ? 'bg-accent text-white' : 'bg-slate-800 text-accent'}`}>
                                                    <service.icon className="h-5 w-5" />
                                                </div>
                                                <CardTitle className={`text-sm font-medium leading-tight ${service.highlight ? 'text-white' : 'text-slate-200'}`}>
                                                    {service.name}
                                                </CardTitle>
                                            </CardHeader>
                                        </Card>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
