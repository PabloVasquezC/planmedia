import { client } from "@/sanity/lib/client"
import { NewsClient } from "./NewsClient"

export async function News() {
    const news = await client.fetch(`*[_type == "news"] | order(date desc) {
        _id,
        title,
        "slug": slug.current,
        description,
        image,
        date
    }`, {}, {
        next: { revalidate: 30 }
    })

    return <NewsClient news={news} />
}
