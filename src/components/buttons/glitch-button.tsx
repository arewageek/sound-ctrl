import React from 'react'

interface IProps { text: string, customClasses?: string }

export const GlitchButton = ({ text, customClasses }: IProps) => {
    return (
        <button className={`px-8 py-2 rounded-full bg-accent-100 text-black uppercase font-bold shadow-glitch ${customClasses}`}>
            {text}
        </button>
    )
}

export const GlitchButtonGray = ({ text, customClasses }: IProps) => {
    return (
        <button className={`px-8 py-2 rounded-full bg-accent-100 text-black uppercase font-bold shadow-glitch-gray ${customClasses}`}>
            {text}
        </button>
    )
}

export default GlitchButton