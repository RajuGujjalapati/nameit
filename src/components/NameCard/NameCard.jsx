import React from 'react'
import "./NameCard.css"

const nameCheapurl = "https://www.namecheap.com/domains/registration/results/?domain="
// Name card with prop
const NameCard = ({ suggestedName })=>{
    return(
        <a 
        target="_blank"
        rel="noreferrer"
        className="card-link" href={`${nameCheapurl}${suggestedName}`}>
            <div className="result-name-card">
            <p className="result-name">{ suggestedName }</p>
        </div>
        </a>
    )
}

export default NameCard