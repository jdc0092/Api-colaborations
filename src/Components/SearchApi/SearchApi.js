import '../css/App.css'
import React from 'react';


function SearchApi(props) {
    return (
        <input className='TodoSearch' placeholder='Texto' onChange={props.search} />

    )
}

export default SearchApi;

