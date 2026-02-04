import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
            <div className="relative mb-8">
                <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full" />
                <h1 className="relative text-9xl font-bold text-white tracking-tighter">
                    404
                </h1>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                Página no encontrada
            </h2>

            <p className="text-lg text-slate-400 max-w-md mb-8">
                Lo sentimos, la página que estás buscando no existe o ha sido movida.
            </p>

            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white gap-2">
                <Link href="/">
                    <ArrowLeft className="w-4 h-4" />
                    Volver al inicio
                </Link>
            </Button>
        </div>
    )
}
