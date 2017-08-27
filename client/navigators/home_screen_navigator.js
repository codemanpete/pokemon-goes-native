import React from 'react';
import { TabNavigator } from 'react-navigation';

import MapScreen from '../screens/map_screen';
import HomeScreen from '../screens/home_screen';

const HomeNavigator = TabNavigator({
  Home: { screen: HomeScreen },
  Maps: { screen: MapScreen }
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  }
});

export default HomeNavigator;
