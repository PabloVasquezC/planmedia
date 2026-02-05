"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"

interface NewsItem {
    _id: string
    title: string
    slug: string
    description: string
    image: any
    date: string
}

interface NewsClientProps {
    news: NewsItem[]
}

export function NewsClient({ news }: NewsClientProps) {
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
        <section id="news" className="py-24 relative overflow-hidden bg-slate-950/80">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Noticias
                    </h2>
                    <p className="mt-4 text-lg text-slate-400">
                        Mantente informado con nuestras últimas actualizaciones
                    </p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                    {news.map((n) => (
                        <motion.div key={n._id} variants={item} className="h-full">
                            <Card className="h-full bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700 transition-all hover:shadow-lg hover:shadow-accent/10 flex flex-col overflow-hidden">
                                <div className="relative w-full h-48 bg-slate-800">
                                    {n.image && (
                                        <Image
                                            src={urlFor(n.image).width(800).height(500).url()}
                                            alt={n.title}
                                            fill
                                            className="object-cover"
                                        />
                                    )}
                                </div>
                                <CardHeader className="p-4 pb-2">
                                    <div className="text-xs text-accent mb-2 font-medium uppercase tracking-wider">
                                        {new Date(n.date).toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' })}
                                    </div>
                                    <CardTitle className="text-xl font-bold text-white line-clamp-2">
                                        {n.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-4 pt-2 flex-grow">
                                    <p className="text-slate-400 line-clamp-3">
                                        {n.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {news.length === 0 && (
                    <div className="text-center text-slate-500 py-10">
                        No hay noticias disponibles en este momento.
                    </div>
                )}
            </div>
        </section>
    )
}
