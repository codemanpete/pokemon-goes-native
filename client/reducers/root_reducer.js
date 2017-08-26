import { combineReducers } from "redux";
import NavReducer from './nav_reducer';

const rootReducer = combineReducers({
  nav: NavReducer
});

export default rootReducer;
