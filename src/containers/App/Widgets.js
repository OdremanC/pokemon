import React, { useState, useEffect } from 'react';
import { getPokemonList, RESULT_LIMIT } from '../../utils/constants';
import { useTranslation } from "react-i18next";
import i18n from '../../utils/i18n'
import PokemonModel from '../../models/pockemonModel';
import logo from "../../assets/images/logo.png"
import esflag from "../../assets/images/esflag.jpg"
import enflag from "../../assets/images/enflag.jpg"
import Home from '../Home/Home';
import Paginator from '../../components/Paginator/Paginator';
import Menu from '../../components/Menu/Menu';
import Loader from '../../components/Loader/Loader';

export const Widgets = (props) => {
  const [loading, setLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonSelected, setPokemonSelected] = useState({});
  const [pokemonDetails, setPokemonDetails] = useState({});
  const [totalPOkemons, setTotalPokemons] = useState(0);
  const [offset, setOffset] = useState(0);
  const pageCount = Math.ceil(totalPOkemons / RESULT_LIMIT);


  const { t } = useTranslation();

  useEffect(() => {
    async function getPokemonsData() {
      setLoading(true);
      let data = await PokemonModel.getPokemons(offset);
      let list = getPokemonList(data.data.results);
      setTotalPokemons(data.data.count);
      setPokemonList(list);
      setLoading(false);
    }
    getPokemonsData();
  }, [offset]);

  useEffect(() => {
    async function getPokemonDetails() {
      if (pokemonSelected.url) {
        setLoading(true);
        let data = await PokemonModel.getPokemonDetail(pokemonSelected.url);
        setPokemonDetails(data.data);
        setLoading(false);
      }
    }
    getPokemonDetails();
  }, [pokemonSelected]);

  const changeLanguage = (e) => {
    e.preventDefault();
    if (i18n.language === 'en')
      i18n.changeLanguage('es');
    else
      i18n.changeLanguage('en');
  }

  return (
    <div className='widgets-container'>
      <Loader loading={loading} t={t}/>
      <img className='logo' src={logo} alt="Logo" />
      <button className='btnLang' onClick={(e) => { changeLanguage(e) }}>
        <img src={i18n.language === 'en' ? esflag : enflag} alt="language" />
      </button>
      <div className="main widget">
        <section className="content">
          <Home
            pokemonDetails={pokemonDetails}
            selected={pokemonSelected}
            callback={({ url, name, id }) => setPokemonSelected({ url, name, id })}
          />
        </section>
      </div>
      <div className='search-container widget'>
        <Menu
          data={pokemonList}
          getPokemon={(item) => setPokemonSelected(item)}
        />
        <div className="container-paginator">
          <Paginator
            pageCount={pageCount}
            limit={RESULT_LIMIT}
            t={t}
            callback={(value) => setOffset(value)}
          />
        </div>
      </div>
    </div>
  )
}

export default Widgets;
