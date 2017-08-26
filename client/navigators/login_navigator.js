import React from 'react';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import LoginScreen from '../screens/login_screen';
import MapScreen from '../screens/map_screen';

const LoginNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  Maps: { screen: MapScreen }
  // Home: { screen: HomeScreenNavigator }
});

export default LoginNavigator;
