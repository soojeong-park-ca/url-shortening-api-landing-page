import React from 'react'
import FeatureCard from "./FeatureCard"
import "./FeatureCards.css"
import brandRecognitionSvg from "../../assets/images/icon-brand-recognition.svg"
import detailedRecordsSvg from "../../assets/images/icon-detailed-records.svg"
import fullyCustomizableSvg from "../../assets/images/icon-fully-customizable.svg"

const cards = [
    {
        id: 0,
        logo: brandRecognitionSvg,
        heading: "Brand Recognition",
        text: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    },
    {
        id: 4,
        logo: detailedRecordsSvg,
        heading: "Detailed Records",
        text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
        id: 6,
        logo: fullyCustomizableSvg,
        heading: "Fully Customizable",
        text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    }
]

function FeatureCards() {
    return (
        <div className="features__card-container">
            <div className="feature__cards max-w-screen-lg mx-auto">
                {cards.map(card => {
                    return (
                        <FeatureCard
                            logo={card.logo}
                            heading={card.heading}
                            text={card.text}
                            id={card.id}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default FeatureCards