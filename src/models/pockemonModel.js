import { RESULT_LIMIT as limit } from '../utils/constants';
import axios from 'axios';

class PockemonModel {

  /**
   * @description Obtiene el listado de pokemones del servicio
   * @param {Number} offset 
   */
  static async getPokemons(offset) {
    try {
      return await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  /**
   * @description Obtenemos el detalle del pokemon
   * @param {Number} id 
   */
  static async getPokemonDetail(url) {
    try {
      return await axios.get(url);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

export default PockemonModel;