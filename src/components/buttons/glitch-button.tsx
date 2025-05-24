import React from 'react'

const GlitchButton = ({ text, customClasses }: { text: string, customClasses?: string }) => {
    return (
        <button className={`px-8 py-2 rounded-full bg-accent-100 text-black uppercase font-bold shadow-glitch ${customClasses}`}>
            {text}
        </button>
    )
}

export default GlitchButton