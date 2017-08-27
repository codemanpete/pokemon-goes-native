import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import Expo, { MapView } from 'expo';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this._fbLogin = this._fbLogin.bind(this);
  }

  _fbLogin() {

  }

  render() {
    async function logIn() {
      const firstResponse = await Expo.Facebook.logInWithReadPermissionsAsync('169279863643642', {
          permissions: ['public_profile'],
        });
      console.log("1st response: ", firstResponse);
      if (firstResponse.type === 'success') {
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${firstResponse.token}`);
        console.log("2nd response", await response.json());
      }
    }
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
