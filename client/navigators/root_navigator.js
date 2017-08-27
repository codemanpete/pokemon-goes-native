import React from 'react';
import { StackNavigator } from 'react-navigation';

import LoginScreen from '../screens/login_screen_container';
import HomeScreenNavigator from './home_screen_navigator';

const RootNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  Home: { screen: HomeScreenNavigator }
});

export default RootNavigator;
