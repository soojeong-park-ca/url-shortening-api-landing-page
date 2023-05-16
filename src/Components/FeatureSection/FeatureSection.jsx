import React from 'react'
import FeatureHeading from "./FeatureHeading"
import FeatureCards from "./FeatureCards"
import "./FeatureSection.css"


function FeatureSection() {
    return (
        <div className="feature-section md:flex md:justify-between items-center py-6 md:px-10 px-7 max-w-screen-lg mx-auto">
            <FeatureHeading />
            <FeatureCards />
        </div>
    )
}

export default FeatureSection