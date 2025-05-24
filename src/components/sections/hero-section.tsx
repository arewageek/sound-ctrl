import React from 'react'
import GlitchButton from '../buttons/glitch-button'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center justify-between px-4 lg:px-24 py-12 h-screen'>
            <div className='flex flex-col gap-y-4 font-familjen w-full lg:w-1/3'>
                <h2 className='text-3xl lg:text-6xl font-extrabold text-black flex flex-col gap-2 uppercase'>
                    <span>Gamified</span>
                    <span>Music Fandom.</span>
                </h2>
                <p className='text-gray-500 text-lg lg:text-xl font-bold'>
                    get rewards for streaming. Yapping. and growing the community of your favorite artists
                </p>
                <div>
                    <GlitchButton text="Join The Waitlist" customClasses="py-2.5 px-10" />
                </div>
            </div>

            <div className="blue-dotted-bg w-full lg:w-2/3 h-fit flex items-end relative">
                <Image src="/attachments/music-stars.svg" alt="Music Stars" width={1200} height={1000} className="h-fit -mb-10 " />
                <div className="w-full h-10 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[100pt] after-w-full after:bg-gradient-to-t after:from-white after:to-black"></div>
            </div>
        </div>
    )
}

export default HeroSection