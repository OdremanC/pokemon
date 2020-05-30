import React, { useState, useEffect } from 'react';
import { getPokemonList, RESULT_LIMIT } from '../../utils/constants';
import { useTranslation } from "react-i18next";
import i18n from '../../utils/i18n'
import PokemonModel from '../../models/pockemonModel';
import logo from "../../assets/images/logo.png"
import esflag from "../../assets/images/esflag.jpg"
import enflag from "../../assets/images/enflag.jpg"
import Details from '../../components/Details/Details';
import Paginator from '../../components/Paginator/Paginator';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';
import Loading from '../../components/Loader/Loader';
import './App.scss';

const App = () => {
  const [loadingState, setLoading] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonSelected, setPokemonSelected] = useState({});
  const [pokemonDetails, setPokemonDetails] = useState({});
  const [totalPOkemons, setTotalPokemons] = useState(0);
  const [offset, setOffset] = useState(0);
  const pageCount = Math.ceil(totalPOkemons / RESULT_LIMIT);
  const { t } = useTranslation();

  useEffect(() => {
    setLoading(true);
    async function getPokemonsData() {
      let data = await PokemonModel.getPokemons(offset);
      let list = getPokemonList(data.data.results);
      setTotalPokemons(data.data.count);
      setPokemonList(list);
      setLoading(false);
    }
    getPokemonsData();
  }, [offset]);

  useEffect(() => {
    setLoading(true);
    async function getPokemonDetails() {
      if (pokemonSelected.url) {
        let data = await PokemonModel.getPokemonDetail(pokemonSelected.url);
        setPokemonDetails(data.data);
      }
      setLoading(false);
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
    <div className="App">
      <div className='widgets-container'>
        <img className='logo' src={logo} alt="Logo" />
        <button className='btnLang' onClick={(e) => { changeLanguage(e) }}>
          <img src={i18n.language === 'en' ? esflag : enflag} alt="language" />
        </button>
        <div className="main widget">
        {
          loadingState && <Loading />
        }
          <section className="content">
            {
              pokemonSelected.id ?
                <Details 
                  t={t}
                  selected={pokemonSelected}
                  detail={pokemonDetails}
                  getSelectedPokemon={(url, name, id) => setPokemonSelected(url, name, id) }
                />
                :
                <div className="no-search">
                 <h3>{`${t('Bienvenido')}`}</h3>
                </div>
            }
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
      <div className="footer">
          <Footer t={t}/>
      </div>
    </div>
  )
}
export default App;