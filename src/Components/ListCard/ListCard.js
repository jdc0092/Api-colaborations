import React from "react";
import '../css/App.css'
// import { Link } from "react-router-dom";


function ListCard(props) {

    const url = props.loadUrlConstributor;

    return (
        <React.Fragment>
            <div className='row conCardGlobal'>
                <div className='col contCard'>
                    <div className='card avatarImg'>
                        <img src={props.avatar_url} />
                        <div className='contCardBody card-body'>
                            <h4 className='card-title'>
                                <a href={props.html_url} target='_blanck'>{props.name}</a>
                            </h4>
                            <p>{props.language}</p>
                            <p>{props.description}</p>
                            <p><a href="#" onClick={url}>Top contribuitor</a></p>
                            <div className='contProces row'>
                                <div className='col-md-6'>
                                <i class="bi bi-star-fill"></i> {props.stargazers_count}
                                </div>
                                <div className='col-md-6'>
                                <i class="bi bi-exclamation-triangle-fill"></i> {props.open_issues_count}
                                </div>
                                <div>
                                    {props.userApiCont}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="contCard">
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

            </div> */}
        </React.Fragment>
    )

}

export default ListCard;