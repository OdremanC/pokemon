import React, { useState, useEffect, Fragment} from 'react';
import { useTranslation } from "react-i18next";
import Loader from '../../components/Loader/Loader';
import Paginator from '../../components/Paginator/Paginator';
import PokemonModel from '../../models/pockemonModel';
import List from '../../components/List/list';
import Details from '../../components/Details/Details';
import { getPokemonList, RESULT_LIMIT } from '../../utils/constants';
import './styles.css';

const Home = () => {
  const [offSet, setOffset] = useState(0)
  const [pokemonSelected, setPokemonSelected] = useState({})
  const [loading, setLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);
  const [totalPokemons, setTotalPokemons] = useState(0);
  const [pokemonDetails, setPokemonDetails] = useState({});
  const [modeList, setMode] = useState(true);
  const pageCount = Math.ceil(totalPokemons / RESULT_LIMIT);
  const {t}= useTranslation(); 
  
  useEffect(() => {
    async function getPokemonsData() {
      setLoading(true);
      let data = await PokemonModel.getPokemons(offSet);
      setTotalPokemons(data.data.count);
      let list = getPokemonList(data.data.results);
      setPokemonList(list);
      setLoading(false);
    }
    getPokemonsData();
  }, [offSet]);

  useEffect(() => {
    async function getPokemonDetails() {
      if (pokemonSelected.url) {
        setLoading(true);
        let data = await PokemonModel.getPokemonDetail(pokemonSelected.url);
        setPokemonDetails(data.data);
        setMode(false);
        setLoading(false);
      } else {
        setMode(true);
      }
      
    }
    getPokemonDetails();
  }, [pokemonSelected]);

  return (
    <Fragment>
      <Loader loading={loading} t={t}/>
      <div className="main-container">
        {
          modeList ?
          <List 
            data={pokemonList}
            selected={pokemonSelected}
            getSelectedPokemon={(url, id) => setPokemonSelected(url, id) }
          />
          :
          <Details 
            t={t}
            selected={pokemonSelected}
            detail={pokemonDetails}
            getSelectedPokemon={(url, id) => setPokemonSelected(url, id) }
          />

        }
      </div>    
      <Paginator 
        pageCount={pageCount} 
        limit={RESULT_LIMIT}
        t={t}
        callback={(value) => setOffset(value)}
      />
    </Fragment>
  );
}

export default Home;