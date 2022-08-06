import React from "react";


function SearchButton(props) {

    return (
        <button className="btn btn-outline-secondary" for="searchApi" onClick={props.button}>Search</button>
    )
}

export default SearchButton;