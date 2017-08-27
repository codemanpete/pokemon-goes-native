import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Alert
} from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home'
  };

  render() {
    return (
      <Text>This is the home page</Text>
    )
  }
}

export default HomeScreen;
