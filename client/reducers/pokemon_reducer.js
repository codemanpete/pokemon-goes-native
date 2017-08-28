import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

const _initialState = {
  pokemon: []
};

const PokemonReducer = (state = _initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALL_POKEMON:
      return {pokemon: action.pokemonArray};
    default:
      return state;
  }
};

export default PokemonReducer;
