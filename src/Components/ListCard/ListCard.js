import React from "react";
import '../css/App.css'
// import { Link } from "react-router-dom";


function ListCard(props) {

    const url = props.loadUrlConstributor;

    return (
        <React.Fragment>
            <div className="contCard">
                <div className="contCardInfo">
                    <div className="contInfo">
                        <div className="avatarImg">
                            <img src={props.avatar_url} alt={props.name} />
                        </div>
                        <a className="titleTarje" href={props.html_url} target='_blank'>{props.name}</a>
                        <p>{props.language}</p>
                        <h4>{props.description}</h4>
                        <p><a href='#' onClick={url}>Top constributor</a></p>
                        <div className="conTarjBotom">
                            <p>{props.stargazers_count}</p>
                            <p>{props.open_issues_count}</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </React.Fragment>
    )

}

export default ListCard;