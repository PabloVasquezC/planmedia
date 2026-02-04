"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

export default function SuccessPage() {
    const router = useRouter()
    const [countdown, setCountdown] = useState(5)

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer)
                    router.push("/")
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        // Cleanup interval on unmount
        return () => clearInterval(timer)
    }, [router])

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8 relative"
            >
                <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full" />
                <CheckCircle2 className="relative w-24 h-24 text-green-500" />
            </motion.div>

            <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4"
            >
                ¡Mensaje Enviado!
            </motion.h1>

            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-slate-400 max-w-md mb-8"
            >
                Gracias por contactarnos. Hemos recibido tu mensaje correctamente y te responderemos a la brevedad.
            </motion.p>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="space-y-4"
            >
                <p className="text-slate-500 text-sm">
                    Serás redirigido al inicio en <span className="font-bold text-accent">{countdown}</span> segundos...
                </p>

                <Button asChild size="lg" className="bg-slate-800 hover:bg-slate-700 text-white gap-2 border border-slate-700">
                    <Link href="/">
                        <ArrowLeft className="w-4 h-4" />
                        Volver al inicio ahora
                    </Link>
                </Button>
            </motion.div>
        </div>
    )
}
