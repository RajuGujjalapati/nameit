import NameCard from "../NameCard/NameCard"
import React from 'react'
import "./ResultsContainer.css"


const ResultsContainer = ({ suggestedNames }) => {
    const suggestedNamesJSX = suggestedNames.map((suggestedName) => {
        return <NameCard key={suggestedName} suggestedName={suggestedName} />
        // Extracting the names and saving into a list(which we created in APp.jsx)
    })
    return (
        <div className="results-container">
            {/* <p>These are results:</p> */}
            {suggestedNamesJSX}
        </div>
    )
}

export default ResultsContainer