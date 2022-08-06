import '../css/App.css'
import React from 'react';


function SearchApi(props) {

    

    return (
        <div className="App">
        <input className='TodoSearch form-control' onKeyPress={props.enterKye} placeholder='Search repositories' onChange={props.search} />
    </div>
        
    )
}

export default SearchApi;

