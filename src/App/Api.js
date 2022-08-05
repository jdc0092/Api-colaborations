import React from "react";
import SearchApi from '../Components/SearchApi/SearchApi';
import TitleCosntribuitor from '../Components/TitleConstribuitor/TitleCosntribuitor';
import ListConstribuitors from '../Components/ListConstribuitors/ListConstribuitors';
import ListCard from '../Components/ListCard/ListCard';
import ButtonSearch from "../Components/SearchButton/SearchButton";
import LoandMoreButton from "../Components/LoandMoreButton/LoandMoreButton";
import LoandMoreRepositories from '../Components/LoandMoreRepositories/LoandMoreRepositories';


function Api({
    selectApi,
    searchIput,
    butSearch,
    loandMoreRepoButon,
    topContribuitor,
    constributions,
    loandMoreButon,
    setUrlConstributions,
    maxConstr

}) {
    return (
        <React.Fragment>
            <div className="container contSearch mt-5">
                <SearchApi
                    search={searchIput}
                />
                <ButtonSearch
                    button={butSearch}
                />
            </div>
            <div className="contaniner contGlobal mb-5">
                <div>
                    <div className="conCardGlobal">
                        {selectApi.items ? selectApi.items.map((items) => (
                            <ListCard
                                Key={items.id}
                                avatar_url={items.owner.avatar_url}
                                html_url={items.html_url}
                                name={items.name}
                                description={items.description}
                                language={items.language}
                                stargazers_count={items.stargazers_count}
                                open_issues_count={items.open_issues_count}
                                loadUrlConstributor={() => setUrlConstributions(items.contributors_url + maxConstr)}
                            />
                        )) : <p>Cargando ...</p>}
                    </div>
                    <div className="contButtonBot mt-5">
                        <LoandMoreRepositories
                            loandMoreRepoButon={loandMoreRepoButon}
                        />
                    </div>
                </div>

                <div className="conTbloques">
                    <TitleCosntribuitor
                        topContribuitor={topContribuitor}
                    />

                    {constributions ? constributions.map((items) => (
                        <ListConstribuitors
                            Key={items.id}
                            avatar_url={items.avatar_url}
                            html_url={items.html_url}
                            login={items.login}
                            contributions={items.contributions}
                        />
                    )) : <p>Cargando constributor...</p>}

                    <LoandMoreButton
                        loandMoreButon={loandMoreButon}
                    />
                </div>

            </div>
            {/* <pre>{JSON.stringify(constributions, true, 5)}</pre> */}

        </React.Fragment >
    )
}

export default Api;