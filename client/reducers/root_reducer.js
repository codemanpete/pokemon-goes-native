import { combineReducers } from "redux";

import NavReducer from './nav_reducer';
import LoginReducer from './login_reducer';
import EncountersReducer from './encounters_reducer';
import PokemonReducer from './pokemon_reducer';

const rootReducer = combineReducers({
  nav: NavReducer,
  login: LoginReducer,
  encounters: EncountersReducer,
  pokemon: PokemonReducer
});

export default rootReducer;
