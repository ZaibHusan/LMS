import React from 'react'
import "./Section.css"
function Section({h2,p}) {
    return (
        <div className="Section">
            <h2>{h2}</h2>
            <p>{p}</p>
        </div>
    )
}

export default Section