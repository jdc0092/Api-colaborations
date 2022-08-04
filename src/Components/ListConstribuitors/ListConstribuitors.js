import React from "react";
import '../css/App.css'




function ListConstribuitors(props) {

  return (
    <div>
      <div className="blockUser">
        <div>
          <img src={props.avatar_url} />
          <a href={props.html_url} onClick={props.butonContri} target="_blank">{props.login}</a>
        </div>
        <p>(<b>{props.contributions}</b> constributions)</p>
      </div>
    </div>
  )

}

export default ListConstribuitors;