import React, { Fragment} from 'react';
import { useTranslation } from "react-i18next";
import Details from '../../components/Details/Details';
import './styles.scss';

const Home = ({selected={}, pokemonDetails={}, callback = () => {}}) => {
  const {t}= useTranslation(); 
  return (
    <Fragment>
      <div className="main-container">
        {
          selected.id ?
            <Details 
              t={t}
              selected={selected}
              detail={pokemonDetails}
              getSelectedPokemon={(url, id) => callback(url, id) }
            />
            :
            null
        }
      </div>    
    </Fragment>
  );
}

export default Home;