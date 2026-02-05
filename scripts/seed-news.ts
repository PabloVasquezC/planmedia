
import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, token } from '../sanity/env'

const client = createClient({
    projectId,
    dataset,
    apiVersion,
    token,
    useCdn: false,
})

const newsItems = [
    {
        title: "Lanzamiento de nuevos fondos CORFO 2026",
        description: "Se han abierto las postulaciones para los programas de innovación y emprendimiento de CORFO. Descubre cómo Plan Media puede apoyarte en la formulación de tu proyecto para maximizar tus posibilidades de adjudicación.\n\nContamos con un equipo de expertos especializados en la normativa actual y en la estructuración de propuestas de alto impacto.",
        imageUrl: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop",
        date: new Date().toISOString()
    },
    {
        title: "Plan Media expande sus servicios a la región del Maule",
        description: "Estamos orgullosos de anunciar la apertura de nuestras nuevas oficinas en Talca, acercando nuestros servicios de consultoría estratégica y formalización de empresas a los emprendedores de la región del Maule.\n\nEsta expansión responde a la creciente demanda de servicios profesionales en la zona centro-sur del país.",
        imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        date: new Date(Date.now() - 86400000 * 2).toISOString() // 2 days ago
    },
    {
        title: "Alianza estratégica con incubadoras locales",
        description: "Hemos firmado un convenio de colaboración con las principales incubadoras de negocios de la región para potenciar el ecosistema emprendedor. Esta alianza permitirá a nuestros clientes acceder a redes de mentores y financiamiento exclusivo.",
        imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop",
        date: new Date(Date.now() - 86400000 * 5).toISOString() // 5 days ago
    },
    {
        title: "Taller gratuito de formalización para emprendedores",
        description: "¿Tienes una idea de negocio pero no sabes por dónde empezar? Inscríbete en nuestro próximo taller gratuito donde abordaremos los aspectos legales, tributarios y comerciales básicos para formalizar tu emprendimiento con éxito.\n\nCupos limitados.",
        imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop",
        date: new Date(Date.now() - 86400000 * 10).toISOString() // 10 days ago
    }
]

async function uploadImage(url: string) {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`Failed to fetch image: ${res.statusText}`)
    const buffer = await res.arrayBuffer()
    return client.assets.upload('image', Buffer.from(buffer))
}

async function seed() {
    console.log('🌱 Starting seed...')

    for (const item of newsItems) {
        console.log(`Processing: ${item.title}`)

        try {
            // 1. Upload Image
            console.log(`  - Uploading image...`)
            const imageAsset = await uploadImage(item.imageUrl)

            // 2. Create Document
            console.log(`  - Creating document...`)
            const doc = {
                _type: 'news',
                title: item.title,
                slug: {
                    _type: 'slug',
                    current: item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
                },
                description: item.description,
                date: item.date,
                image: {
                    _type: 'image',
                    asset: {
                        _type: 'reference',
                        _ref: imageAsset._id
                    }
                }
            }

            await client.create(doc)
            console.log(`✅ Created news item: ${item.title}`)

        } catch (error) {
            console.error(`❌ Error creating item ${item.title}:`, error)
        }
    }

    console.log('✨ Seed completed!')
}

seed().catch(console.error)
