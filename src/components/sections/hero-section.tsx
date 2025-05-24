import React from 'react'
import GlitchButton from '../buttons/glitch-button'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center justify-between px-4 lg:px-24 py-12 lg:h-screen gap-20'>
            <div className='flex flex-col text-center lg:text-left gap-y-6 font-familjen w-full lg:w-1/3'>
                <h2 className='text-5xl lg:text-6xl font-extrabold text-black flex flex-col gap-2 uppercase'>
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

            <div className="lg:blue-dotted-bg w-full lg:w-2/3 h-fit flex items-end relative ">

                <Image src="/attachments/music-stars-mobile.png" alt="Music Stars" width={2000} height={2000} className="h-full -mb-10 " />

                {/* <Image src="/attachments/music-stars.svg" alt="Music Stars" width={1200} height={1000} className="h-full -m b-10 w-full " /> */}
                <div className="w-full h-10 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[100pt] after-w-full after:bg-gradient-to-t after:from-white after:to-black"></div>
            </div>
        </div>
    )
}

export default HeroSection