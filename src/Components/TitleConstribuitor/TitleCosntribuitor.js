import React from "react";
import '../css/App.css'



function TitleCosntribuitor(props) {
    return(
        <h1 className="titleTop">Top {props.topContribuitor} constributor for repositories</h1>
        
    )
}


export default TitleCosntribuitor;