export const RESULT_LIMIT = 5;

/**
 * @description retorna el listado de pokemones
 * @param {Array} results 
 */
export const getPokemonList = (results = []) => {
    let pokemons = []
    results.forEach(({name, url}) => {
      pokemons.push({name, url, id: getPokemonId(url)})
    })
    return pokemons;
  }

/**
 * @description Retorna el ID de un pokemon
 * @param {String} url 
 */
const getPokemonId = (url = '') => {
    let urlSt = url.slice(0, url.length -1)
    let lastSlash = urlSt.lastIndexOf('/')
    return urlSt.substring(lastSlash, urlSt.length)
}