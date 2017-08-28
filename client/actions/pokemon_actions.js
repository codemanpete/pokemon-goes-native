import * as APIPokemonUtil from '../util/pokemon_api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";

export const fetchAllPokemon = userId => dispatch => (
  APIPokemonUtil.fetchAllPokemon().then(
    pokemonArray => dispatch(receiveAllPokemon(pokemonArray))
  )
);

export const receiveAllPokemon = pokemonArray => ({
  type: RECEIVE_ALL_POKEMON,
  pokemonArray
});
