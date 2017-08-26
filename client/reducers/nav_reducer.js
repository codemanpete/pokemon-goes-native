import { NavigationActions } from 'react-navigation';
import LoginNavigator from '../navigators/login_navigator';

const initialState = LoginNavigator.router.getStateForAction(NavigationActions.init([]));

const navReducer = (state = initialState, action) => {
  const nextState = LoginNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

export default navReducer;
