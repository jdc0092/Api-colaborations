import '../css/App.css'
import React from 'react';


function SearchApi(props) {
    return (
        <input className='TodoSearch form-control' id='searchApi' placeholder='Search repositories' onChange={props.search} />

    )
}

export default SearchApi;

