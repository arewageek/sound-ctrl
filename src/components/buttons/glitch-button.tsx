import React from 'react'

interface IProps { text: string, customClasses?: string, background?: string, shadow?: string }

export const GlitchButton = ({ text, shadow, background, customClasses }: IProps) => {
    return (
        <button className={`px-8 py-2 rounded-full ${background ? background : "bg-accent-100"} text-black uppercase font-bold ${shadow ? shadow : "shadow-glitch"} ${customClasses}`}>
            {text}
        </button>
    )
}

export default GlitchButton