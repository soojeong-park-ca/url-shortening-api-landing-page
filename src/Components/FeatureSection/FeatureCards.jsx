import React from 'react'
import FeatureCard from "./FeatureCard"
import "./FeatureCards.css"
import brandRecognitionSvg from "../../assets/images/icon-brand-recognition.svg"
import detailedRecordsSvg from "../../assets/images/icon-detailed-records.svg"
import fullyCustomizableSvg from "../../assets/images/icon-fully-customizable.svg"

const cards = [
    {
        logo: brandRecognitionSvg,
        heading: "Brand Recognition",
        text: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    },
    {
        logo: detailedRecordsSvg,
        heading: "Detailed Records",
        text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
        logo: fullyCustomizableSvg,
        heading: "Fully Customizable",
        text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
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