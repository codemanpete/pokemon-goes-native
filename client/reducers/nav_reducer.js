import { NavigationActions } from 'react-navigation';
import RootNavigator from '../navigators/root_navigator';

const initialState = RootNavigator.router.getStateForAction(NavigationActions.init([]));

const navReducer = (state = initialState, action) => {
  const nextState = RootNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

export default navReducer;
