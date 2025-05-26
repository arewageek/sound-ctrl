import React from 'react'
import { GlitchButton } from '../buttons/glitch-button'
import Image from 'next/image'
import ArtistsCarousel from './artists-carousel'


const ArtistSection = () => {

    return (
        <div className='w-full px-5 lg:px-48 py-12 lg:py-48 bg-accent-100 text-white flex flex-col gap-y-10 relative'>
            <div>
                <h2 className='font-extrabold text-2xl lg:text-3xl text-center uppercase'>
                    Are you an Artist?
                </h2>
            </div>
            <div className='flex gap-5 flex-col lg:flex-row items-stretch min-h-full w-full lg:w-4/5 mx-auto z-10'>
                <ArtistsCarousel />
            </div>
            <div className="mt-8 flex justify-center w-full h-full z-10">
                <GlitchButton text="Claim your fandom" shadow="shadow-glitch-gray" background="bg-primary-100" />
            </div>



            <div className='flex justify-between'>
                <Image src="/attachments/artists/artists-image-1.png" alt="Footer" width={1500} height={1000} className='h-[100pt] lg:h-[400pt] w-fit p-0 absolute bottom-0 z-0 left-0' />
                <Image src="/attachments/artists/artists-image-2.png" alt="Footer" width={1500} height={1000} className='h-[100pt] lg:h-[300pt] w-fit p-0 absolute bottom-0 z-0 -right-40' />
            </div>
        </div>
    )
}

export default ArtistSection