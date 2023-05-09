import React from 'react'
import FeatureCard from "./FeatureCard"
import "./FeatureCards.css"
import brandRecognitionSvg from "../../assets/images/icon-brand-recognition.svg"

const cards = [
    {
        logo: brandRecognitionSvg,
        heading: "Brand Recognition",
        text: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    }
]

function FeatureCards() {
    return (
        <div className="feature__cards max-w-screen-lg mx-auto">
            {cards.map(card => {
                return (
                    <FeatureCard
                        logo={card.logo}
                        heading={card.heading}
                        text={card.text}
                    />
                )
            })}
        </div>
    )
}

export default FeatureCards