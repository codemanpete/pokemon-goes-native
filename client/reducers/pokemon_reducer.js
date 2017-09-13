import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

const _initialState = {
  pokemon: []
};

// All of the pokemon for a certain user are stored in an array in store.
// Pokemon attributes match the names on the backend which are in
// snake_case and not camelCase.
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
