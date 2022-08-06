import React, { useEffect, useState } from "react";
import Api from '../App/Api';



const UrlGlobal = 'https://api.github.com';

function App() {

  const [search, setSearch] = useState();
  const [searchBut, setSearchBut] = useState('python');

  const [urlConstributions, setUrlConstributions] = useState('');
  const [constributions, setConstributions] = useState([]);

  const [selectApi, actualizApi] = useState({});

  const [loandMoreRepositories, setLoandMoreRepositories] = useState(6);
  const [loandMore, setLoandMore] = useState(10);


  const searchIput = (e) => {
    setSearch(e.target.value);

  }

  const enterKye = (e) => {
    if (e.key === "Enter") {
      setSearchBut(search);
    }
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

  useEffect(() => {
    const fechtApi = async () => {
      const response = await fetch(Url);
      const responseJSON = await response.json();
      actualizApi(responseJSON)
    }

    fechtApi();
  }, [Url]);


  const topContribuitor = constributions.length
  const maxConstr = `?per_page=${loandMore}&q=`;
  // console.log(loandMore)

  // Importando constributors de los Repositorios de Githut..
  useEffect(() => {
    const fechtApi2 = async () => {
      const response = await fetch(urlConstributions);
      const responseJSON = await response.json();
      setConstributions(responseJSON);
    }

    fechtApi2()
  }, [urlConstributions])




  return (

    <Api
      selectApi={selectApi}
      searchIput={searchIput}
      enterKye={enterKye}
      butSearch={butSearch}
      loandMoreRepoButon={loandMoreRepoButon}
      topContribuitor={topContribuitor}
      constributions={constributions}
      loandMoreButon={loandMoreButon}
      setUrlConstributions={setUrlConstributions}
      maxConstr={maxConstr}
    />

  );
}


export default App;
