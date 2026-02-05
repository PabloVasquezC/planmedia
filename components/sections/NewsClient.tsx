"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"
import { useState, useEffect } from "react"
import { X, Calendar } from "lucide-react"

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
    const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null)

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedNews) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [selectedNews])

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

                {/* Masonry Layout using CSS Columns */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
                >
                    {news.map((n) => (
                        <motion.div
                            key={n._id}
                            variants={item}
                            className="break-inside-avoid"
                            layoutId={`card-${n._id}`}
                            onClick={() => setSelectedNews(n)}
                        >
                            <Card className="bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700 transition-all hover:shadow-lg hover:shadow-accent/10 flex flex-col overflow-hidden cursor-pointer group h-full">
                                <div className="relative w-full">
                                    {n.image && (
                                        <div className="relative">
                                            <Image
                                                src={urlFor(n.image).width(800).url()}
                                                alt={n.title}
                                                width={800}
                                                height={500}
                                                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                                        </div>
                                    )}
                                </div>
                                <CardHeader className="p-5 pb-2 relative z-10">
                                    <div className="flex items-center gap-2 text-xs text-accent mb-2 font-medium uppercase tracking-wider">
                                        <Calendar className="w-3 h-3" />
                                        {new Date(n.date).toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' })}
                                    </div>
                                    <CardTitle className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                                        {n.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-5 pt-2 relative z-10">
                                    <p className="text-slate-400 line-clamp-3 text-sm leading-relaxed">
                                        {n.description}
                                    </p>
                                    <div className="mt-4 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                        Leer más →
                                    </div>
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

            {/* Modal */}
            <AnimatePresence>
                {selectedNews && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
                        onClick={() => setSelectedNews(null)}
                    >
                        <motion.div
                            layoutId={`card-${selectedNews._id}`}
                            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedNews(null)}
                                className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/50 hover:bg-slate-800 text-white z-20 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="relative w-full h-auto min-h-[300px]">
                                {selectedNews.image && (
                                    <Image
                                        src={urlFor(selectedNews.image).width(1200).url()}
                                        alt={selectedNews.title}
                                        width={1200}
                                        height={800}
                                        className="w-full h-auto object-contain bg-slate-950"
                                    />
                                )}
                                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
                            </div>

                            <div className="p-8 space-y-6">
                                <div>
                                    <div className="flex items-center gap-2 text-sm text-accent mb-3 font-medium uppercase tracking-wider">
                                        <Calendar className="w-4 h-4" />
                                        {new Date(selectedNews.date).toLocaleDateString('es-CL', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                                        {selectedNews.title}
                                    </h2>
                                </div>

                                <div className="prose prose-invert prose-lg max-w-none text-slate-300">
                                    <p className="whitespace-pre-line leading-relaxed">
                                        {selectedNews.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
