import React from 'react'
import FeatureHeading from "./FeatureHeading"
import FeatureCards from "./FeatureCards"
import "./FeatureSection.css"
import UrlShortenerApp from "./UrlShotenerApp/UrlShortenerApp"


function FeatureSection() {
    return (
        <div className="feature-section">
            <div className="md:flex md:justify-between md:flex-col items-center py-6 md:px-10 px-7 max-w-screen-lg mx-auto">
                <UrlShortenerApp />
                <FeatureHeading />
                <FeatureCards />
            </div>
        </div>
    )
}

export default FeatureSection