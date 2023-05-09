import React from 'react'

function FeatureCard(props) {
    return (
        <div>
            <img src={props.logo} alt={props.heading + "image"} />
            <h3>{props.heading}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export default FeatureCard