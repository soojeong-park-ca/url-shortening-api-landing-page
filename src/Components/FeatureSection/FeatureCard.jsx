import React from 'react'
import "./FeatureCard.css"

function FeatureCard(props) {
    return (
        <div className="feature__card">
            <div className="feature__card__image-container">
                <img className="feature__card__image" src={props.logo} alt={props.heading + "image"} />
            </div>
            <h3 className="feature__card__heading">{props.heading}</h3>
            <p className="feature__card__text">{props.text}</p>
        </div>
    )
}

export default FeatureCard