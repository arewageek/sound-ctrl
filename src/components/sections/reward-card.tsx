import { div } from 'framer-motion/client'
import Image from 'next/image'
import React from 'react'

export interface IRewardSteps { color: string, shadowColor: string, isLight: boolean, title: string, description: string, image: string }

const RewardCard = ({ color, shadowColor, isLight, title, description, image }: IRewardSteps) => {
    return (
        <div className='px-2 lg:px-5 w-full lg:w-1/3'>
            `<div className={`h-full flex flex-col items-center justify-center p-6 rounded-3xl shadow-glitch-custom transition-all duration-300 pb-5 ${color} ${shadowColor} ${isLight ? 'text-white' : 'text-black'} `}>
                <div className='w-full flex flex-col items-center '>
                    <Image src={image} alt={title} height={700} width={800} className="w-full mb-4" />
                </div>
                <div className='mt-4 w-3/4'>
                    <h3 className='text-2xl lg:text-2xl'>{title}</h3>
                    <p className='text-sm tracking-wider font-semibold mt-4'>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RewardCard