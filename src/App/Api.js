import React from "react";
import SearchApi from '../Components/SearchApi/SearchApi';
import TitleCosntribuitor from '../Components/TitleConstribuitor/TitleCosntribuitor';
import ListConstribuitors from '../Components/ListConstribuitors/ListConstribuitors';
import ListCard from '../Components/ListCard/ListCard';
import ButtonSearch from "../Components/SearchButton/SearchButton";
import LoandMoreButton from "../Components/LoandMoreButton/LoandMoreButton";
import LoandMoreRepositories from '../Components/LoandMoreRepositories/LoandMoreRepositories';


function Api({
    selectApi, // LLamando la url de la Api.
    searchIput, // Input para filtrando informacion para buscar los respositorios.
    enterKye, // Precional enter para buscar
    butSearch, // Button que se encarga de ejecural la funcion para filtral la informacion.
    loandMoreRepoButon, // Mostral mas vista de los repositorios cargados.
    topContribuitor, // Titulo del los contribuidores con #10 constribuidores en listado.
    constributions, // Mostrando informacion de los construbuidores en listado.
    loandMoreButon, // Mostrar mas constribuidores con el boton mas.
    setUrlConstributions, // Actualizando el estado para traer los contribuidores.
    maxConstr // Agregando a la url de contribuidores el total para mortal que es 10.

}) {
    return (
        <React.Fragment>
            <div className="container contSearch mt-5">
                <SearchApi
                    search={searchIput}
                    enterKye={enterKye}
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