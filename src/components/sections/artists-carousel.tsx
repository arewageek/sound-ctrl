"use client";

import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'
import { useEffect, useState } from 'react'
import Autoplay from "embla-carousel-autoplay"
import ArtistCard, { IArtistBlock } from './artist-card'

const ArtistsCarousel = () => {

    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    const blocks: IArtistBlock[] = [
        { title: "Grow a loyal fanbase", description: "Turn casual listeners into active superfans who stream more, share more, and stay longer." },
        { title: "DRIVE REAL REVENUE FROM FANDOM", description: "Earn from your most loyal fans through direct experiences, exclusive drops, and 1-on-1 calls—no middlemen." },
        { title: "Own the Relationship", description: "Get direct access to your fans with data, insights, and tools to build your own artist-led economy." }
    ]

    useEffect(() => {
        if (!api) return;

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on('select', () => setCurrent(api.selectedScrollSnap() + 1))
    }, [api])

    return (
        <div>
            <Carousel
                setApi={setApi}
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
                className='block lg:hidden'
            >
                <CarouselContent>
                    {blocks.map((b, key) =>
                        <CarouselItem key={key}>
                            <ArtistCard title={b.title} description={b.description} />
                        </CarouselItem>
                    )}
                </CarouselContent>
                <div className='flex justify-center mt-4 gap-x-2'>
                    {Array.from({ length: count }).map((_, i) => (
                        <div className={`h-3 w-3 rounded-full ${i == current - 1 ? "bg-white" : "bg-white/50"} hover:bg-white/80 transition-all duration-300 cursor-pointer`}
                            key={i}
                            onClick={() => api?.scrollTo(i)}
                        >

                        </div>
                    ))}
                </div>
            </Carousel>

            <div className='hidden lg:flex w-full gap-x-5'>
                {blocks.map((b, i) => <ArtistCard key={i} title={b.title} description={b.description} />)}
            </div>
        </div>
    )
}

export default ArtistsCarousel