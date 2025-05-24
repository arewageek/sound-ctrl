import React from 'react'
import RewardCard, { IRewardSteps } from './reward-card'

const Reward = () => {

    const steps: IRewardSteps[] = [
        {
            color: "bg-accent-100",
            isLight: true,
            title: 'Get Points',
            description: 'Earn points for what you already do—streaming music, posting about your favorite artists, and hyping them online.',
            shadowColor: 'shadow-glitch-gray',
            image: '/attachments/timeline.svg'
        },
        {
            color: "bg-primary-100",
            isLight: false,
            title: 'Collect Rewards',
            description: 'Turn your points into real perks: exclusive merch, early ticket access, fan drops, and more.',
            shadowColor: 'shadow-glitch-pink',
            image: '/attachments/timeline.svg'
        },
        {
            color: "bg-[#373636]",
            isLight: true,
            title: 'Book Video Calls',
            description: 'Use your points to unlock 1-on-1 video calls with the artists you love—no gatekeepers, no BS.',
            shadowColor: 'shadow-glitch-sky',
        image: '/attachments/phone-in-hand.png'
        }
    ]

    return (
        <div className='mt-24 px-4 py-12 flex flex-col items-center justify-center gap-y-8 w-full'>
            <h2 className='text-2xl lg:text-4xl font-extrabold text-black uppercase font-familjen'>
                Rewarding fans for being fans
            </h2>
            <div className='mt-5 text-lg lg:text-xl font-bold text-gray-500 text-center flex justify-center gap-x-5 flex-col lg:flex-row w-full lg:w-5/6 px-5 lg:px-24'>
                {
                    steps.map((step, index) => (
                        <RewardCard color={step.color} isLight={step.isLight} title={step.title} description={step.description} shadowColor={step.shadowColor} image={step.image} key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default Reward