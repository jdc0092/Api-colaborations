import React from "react";
import '../css/App.css'


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
        </React.Fragment>
    )

}

export default ListCard;