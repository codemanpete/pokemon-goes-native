import { NavigationActions } from 'react-navigation';
import RootNavigator from '../navigators/root_navigator';

// "Ceremony" functionality for integrating React Navigation with
// redux. Updates the navigator's state based on each action.

const initialState = RootNavigator.router.getStateForAction(NavigationActions.init([]));

const navReducer = (state = initialState, action) => {
  const nextState = RootNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

export default navReducer;
