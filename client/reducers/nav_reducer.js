import { NavigationActions } from 'react-navigation';
import { LoginNavigator } from '../navigators/login_navigator';

const initialState = LoginNavigator.router.getStateForAction(NavigationActions.init([]));

const navReducer = (state = initialState, action) => {
  const nextState = LoginNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

export default navReducer;
