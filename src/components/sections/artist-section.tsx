import React from 'react'
import ArtistCard, { IArtistBlock } from './artist-card'
import { GlitchButton } from '../buttons/glitch-button'


const ArtistSection = () => {

    const blocks: IArtistBlock[] = [
        { title: "Grow a loyal fanbase", description: "Turn casual listeners into active superfans who stream more, share more, and stay longer." },
        { title: "DRIVE REAL REVENUE FROM FANDOM", description: "Earn from your most loyal fans through direct experiences, exclusive drops, and 1-on-1 calls—no middlemen." },
        { title: "Own the Relationship", description: "Get direct access to your fans with data, insights, and tools to build your own artist-led economy." }
    ]

    return (
        <div className='w-full px-5 lg:px-48 py-48 bg-accent-100 text-white flex flex-col gap-y-10'>
            <div>
                <h2 className='font-extrabold text-2xl lg:text-3xl text-center uppercase'>
                    Are you an Artist?
                </h2>
            </div>
            <div className='flex justify-center gap-5 flex-col lg:flex-row'>
                {blocks.map((b, i) => <ArtistCard key={i} title={b.title} description={b.description} />)}
            </div>
            <div className="mt-8">
                <GlitchButton text="Claim your fandom" shadow="shadow-glitch-gray" background="bg-primary-100" />
            </div>
        </div>
    )
}

export default ArtistSection