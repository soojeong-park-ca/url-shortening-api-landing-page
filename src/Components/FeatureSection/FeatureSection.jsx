import React from 'react'
import FeatureHeading from "./FeatureHeading"
import FeatureCards from "./FeatureCards"
import "./FeatureSection.css"


function FeatureSection() {
    return (
        <div className="feature-section">
            <FeatureHeading />
            <FeatureCards />
        </div>
    )
}

export default FeatureSection