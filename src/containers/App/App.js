import React, { Suspense, useState, useEffect  } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Menu from '../../components/Menu/Menu';
import PokemonModel from '../../models/pockemonModel';
import Loader from '../../components/Loader/Loader';
import Home from '../Home/Home';
import { getPokemonList } from '../../utils/constants';
import { useTranslation } from "react-i18next";
import './App.scss';

const App = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonSelected, setPokemonSelected] = useState({});
  const [pokemonDetails, setPokemonDetails] = useState({});
  const {t}= useTranslation();

  useEffect(() => {
    async function getPokemonsData() {
      setLoading(true);
      let data = await PokemonModel.getPokemons();
      let list = getPokemonList(data.data.results);
      setPokemonList(list);
      setLoading(false);
    }
    getPokemonsData();
  }, []);

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
  return (
    <Suspense>
      <div className="App">
        <Loader loading={loading} t={t}/>
        <header className="header">
          <Header />
        </header>
        <aside>
          <Menu 
            data={pokemonList} 
            getPokemon={(item) => setPokemonSelected(item) }
          />
        </aside>
        <section className="main">
          <section className="content">
            <Home 
              pokemonDetails={pokemonDetails}
              selected={pokemonSelected}
              callback={({url, name, id}) => setPokemonSelected({url, name, id})}
            />
          </section>
        </section>
        <footer>
          <Footer t={t}/> 
        </footer>
      </div>      
    </Suspense>
  );
}
export default App;