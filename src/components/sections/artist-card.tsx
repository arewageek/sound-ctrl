import React from 'react'

export interface IArtistBlock { title: string, description: string }

const ArtistCard = ({ title, description }: IArtistBlock) => {
    return (
        <div className='w-full lg:w-1/3 p-3 min-h-full items-stretch'>
            <div className='bg-secondary-100 rounded-3xl shadow-glitch text-center p-5 min-h-full py-10'>
                <h3 className="text-white font-bold text-lg lg:text-2xl text-familjen">
                    {title}
                </h3>
                <p className="mt-4 text-gray-100 font-semibold text-sm lg:text-lg">{description}</p>
            </div>
        </div>
    )
}

export default ArtistCard