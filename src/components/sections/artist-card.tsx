import React from 'react'

export interface IArtistBlock { title: string, description: string }

const ArtistCard = ({ title, description }: IArtistBlock) => {
    return (
        <div className='w-full lg:w-1/3 p-3 h-full'>
            <div className='bg-secondary-100 rounded-3xl shadow-glitch text-center p-5 h-full'>
                <h3 className="text-white font-bold text-xl lg:text-2xl">
                    {title}
                </h3>
                <p className="mt-4 text-gray-200 text-md lg: text-lg">{description}</p>
            </div>
        </div>
    )
}

export default ArtistCard