import React, { useEffect, useState } from 'react';
import PokemonModel from '../models/pockemonModel';

function WithDetails (Component, selected = {}, t = () => {}) {
  const [pokemonDetails, setPokemonDetails] = useState({});
  useEffect(() => {
    async function getPokemonDetails() {
      if (selected.url) {
        let data = await PokemonModel.getPokemonDetail(selected.url);
        setPokemonDetails(data.data);
      }
    }
    getPokemonDetails();
  }, [selected]);

  return function WithDetailsComponent ({ ...props }) {
    return <Component {...props} detail={pokemonDetails} />;
  }
}
export default WithDetails;