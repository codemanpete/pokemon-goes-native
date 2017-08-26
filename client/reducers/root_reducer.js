import { combineReducers } from "redux";

import NavReducer from './nav_reducer';
import LoginReducer from './login_reducer';

const rootReducer = combineReducers({
  nav: NavReducer,
  login: LoginReducer,
});

export default rootReducer;
