import React from 'react';
import { TabNavigator } from 'react-navigation';

import MapScreen from '../screens/map_screen_container';
import HomeScreen from '../screens/home_screen_container';

const HomeNavigator = TabNavigator({
  Home: { screen: HomeScreen },
  Maps: { screen: MapScreen }
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  }
});

export default HomeNavigator;
