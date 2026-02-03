import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Squares from "@/components/ui/squares";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Plan Media - Consultoría y Gestión Corporativa",
  description: "Consultora especializada en desarrollo, formalización y fortalecimiento de proyectos públicos y privados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={cn("min-h-screen bg-black font-sans text-foreground antialiased selection:bg-accent selection:text-white relative", inter.variable)}>
        <div className="fixed inset-0 z-0">
          <Squares
            direction="diagonal"
            speed={0.2}
            squareSize={40}
            borderColor="#333"
            hoverFillColor="#ac4719ff"
            radialGradientColor="#f56726ff"
            className="bg-black"
          />
        </div>
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
