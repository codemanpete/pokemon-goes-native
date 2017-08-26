import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { MapView } from 'expo';
import {
  StackNavigator,
} from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text onPress={this._goToMaps}>Map screen</Text>
      </View>
    )
  }

  _goToMaps = () => {
    this.props.navigation.navigate('Maps');
  }
}

class MapScreen extends React.Component {
  static navigationOptions = {
    title: 'This is the map'
  };

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    )
  }
}

export default StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Maps: {
    screen: MapScreen,
  }
});
