import React from 'react'
import GlitchButton from '../buttons/glitch-button'

const CallToAction = () => {
    return (
        <div className='w-full py-48 px-4 lg:px-24 flex flex-col items-center justify-center bg-primary-100 mt-48'>
            <div className='text-center flex items-center justify-center flex-col gap-y-4 w-full lg:w-1/3'>
                <h2 className='text-xl lg:text-3xl font-bold text-black uppercase font-familjen'>
                    SIGN UP AND GET REWARDED FOR DOING WHAT YOU ALREADY DO
                </h2>
                <div className="flex items-center justify-center">
                    <GlitchButton text='Join The Waitlist' shadow="shadow-glitch-gray" />
                </div>
            </div>
        </div>
    )
}

export default CallToAction