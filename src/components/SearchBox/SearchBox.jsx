import React from 'react';
import "./SearchBox.css"
const SearchBox = ({onInputchange}) => {
    return (
    <div className="search-container">
            <input 
            onChange={(event) => onInputchange(event.target.value)}
            placeholder="Type Keywords" 
            className="search-input"/>
    </div>
    );
};
export default SearchBox;