import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Services } from "@/components/sections/Services"
import { Contact } from "@/components/sections/Contact"
import { N8nChat } from "@/components/N8n"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Services />
      <Contact />
      <N8nChat />
    </div>
  )
}
