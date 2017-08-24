import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import Expo from 'expo';

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
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${firstResponse.token}`);
        console.log("2nd response", await response.json());
      }
    }
    return (
      <View style={styles.container}>
        <Text>This will be a map</Text>
        <Text>Will there be hot reload</Text>
        <TouchableOpacity onPress={ logIn }>
          <Text>Login with Facebook</Text>
        </TouchableOpacity>
      </View>
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
