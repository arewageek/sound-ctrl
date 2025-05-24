"use client";

import { useState } from 'react'
import { RxCaretDown, RxCaretUp } from "react-icons/rx"

export interface IQuestion { question: string, answer: string }

const SingleQuestion = ({ question, answer }: IQuestion) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={`w-full bg-primary-100 shadow-glitch-gray ${isOpen ? "rounded-3xl" : "rounded-[20pt]"} transition-all duration-300 ease-in-out p-5 flex flex-col`}>
            <div onClick={() => setIsOpen(!isOpen)} className='flex items-center justify-between text-black font-bold text-lg lg:text-xl cursor-pointer uppercase'>
                <span>
                    {question}
                </span>
                <span className='text-2xl'>
                    <RxCaretDown className={`${isOpen ? "rotate-180" : "rotate-0"} transition-all duration-300 ease-in-out`} />
                </span>
            </div>
            <div className={`h-0 overflow-hidden ${isOpen && "h-auto"} transition-all duration-300 ease-in-out`}>
                <p className='text-black/70 text-sm lg:text-base font-semibold mt-4'>
                    {answer}
                </p>
            </div>
        </div>
    )
}

export default SingleQuestion