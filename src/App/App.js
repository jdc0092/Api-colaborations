


import React, { useEffect, useState } from "react";
import SearchApi from '../Components/SearchApi/SearchApi';
import TitleCosntribuitor from '../Components/TitleConstribuitor/TitleCosntribuitor';
import ListConstribuitors from '../Components/ListConstribuitors/ListConstribuitors';
import ListCard from '../Components/ListCard/ListCard';
import ButtonSearch from "../Components/SearchButton/SearchButton";
import LoandMoreButton from "../Components/LoandMoreButton/LoandMoreButton";
import LoandMoreRepositories from '../Components/LoandMoreRepositories/LoandMoreRepositories';


const UrlGlobal = 'https://api.github.com';

function App() {

  const [search, setSearch] = useState();
  const [searchBut, setSearchBut] = useState('java');

  const [urlConstributions, setUrlConstributions] = useState('');
  const [constributions, setConstributions] = useState([]);

  const [selectApi, actualizApi] = useState({});
  
  const [loandMoreRepositories, setLoandMoreRepositories] = useState(6);
  const [loandMore, setLoandMore] = useState(10);
  



  const searchIput = (e) => {
    setSearch(e.target.value);

  }

  const butSearch = () => {
    setSearchBut(search);
  }

  const loandMoreRepoButon = () => {
    const max = (loandMoreRepositories + 3)
    setLoandMoreRepositories(max)
  }

  const loandMoreButon = () => {
    const max = (loandMore + 5)
    setLoandMore(max)
  }


  // Importando API de los Repositorios de Githut..
  const Url = `${UrlGlobal}/search/repositories?per_page=${loandMoreRepositories}&q=${searchBut}`
  console.log(loandMoreRepositories)

  useEffect(() => {
    const fechtApi = async () => {
      const response = await fetch(Url);
      const responseJSON = await response.json();
      actualizApi(responseJSON)
    }

    fechtApi();
  }, [Url]);



  // Importando constributors de los Repositorios de Githut..
  useEffect(() => {
    const fechtApi2 = async () => {
      const response = await fetch(urlConstributions);
      const responseJSON = await response.json();
      setConstributions(responseJSON);
    }

    fechtApi2()
  }, [urlConstributions])



  const topContribuitor = constributions.length
  const maxConstr = `?per_page=${loandMore}&q=`;
  console.log(loandMore)


  return (
    <React.Fragment>
      <div className="contSearch">
        <SearchApi
          search={searchIput}
        />
        <ButtonSearch
          button={butSearch}
        />
      </div>
      <div className="contGlobal">

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
        <LoandMoreRepositories
            loandMoreRepoButon={loandMoreRepoButon}
          />
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
  );
}


export default App;
