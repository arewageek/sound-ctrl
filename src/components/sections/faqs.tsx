import React from 'react'
import SingleQuestion, { IQuestion } from './single-question'

const FAQs = () => {

    const questions: IQuestion[] = [
        { question: "What fandom can I Join", answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus commodi, unde reprehenderit quos natus, minus itaque eligendi numquam consectetur recusandae magnam repellendus enim rerum praesentium debitis! Delectus placeat dolores ea!" },
        { question: "What happens after I join a fandom?", answer: "Figma ipsum component variant main layer. Arrange background line rotate rectangle reesizing. Arrange link pixel comment edit opacity community share union vector. Device duplicate scale main link polygon. Hand union ellipse layer connection. Scrolling inspect group horizontal fill draft connection polygon text. Variant reesizing mask pixel union list variant overflow." },
        { question: "Are SoundCTRL Fandom Official", answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus commodi, unde reprehenderit quos natus, minus itaque eligendi numquam consectetur recusandae magnam repellendus enim rerum praesentium debitis! Delectus placeat dolores ea!" },
        { question: "Can i get kicked out of a fandom?", answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus commodi, unde reprehenderit quos natus, minus itaque eligendi numquam consectetur recusandae magnam repellendus enim rerum praesentium debitis! Delectus placeat dolores ea!" },
        { question: "What are Fan Experience Points?", answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus commodi, unde reprehenderit quos natus, minus itaque eligendi numquam consectetur recusandae magnam repellendus enim rerum praesentium debitis! Delectus placeat dolores ea!" }
    ]

    return (
        <div className='my-48 w-full p-5 flex flex-col lg:flex-row items-center justify-center'>
            <div className='w-full lg:w-2/3 px-4 flex flex-col lg:flex-row gap-4 justify-center'>
                <div className='w-full lg:w-1/3'>
                    <h2 className='text-2xl lg:text-4xl font-bold uppercase'>
                        Got Questions?
                    </h2>
                </div>
                <div className='w-full lg:w-2/3 flex flex-col gap-y-6'>
                    {
                        questions.map((q, index) => (
                            <SingleQuestion key={index} question={q.question} answer={q.answer} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FAQs