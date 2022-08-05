import React from "react";


function LoandMoreButton(props) {
     //  const loandMore = props.loandMore;

    return(
         <button className="btn btn-primary" onClick={props.loandMoreButon}>Loand More <b>+5</b></button>
    )
}

export default LoandMoreButton;