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
    function testAlert() {
      Alert.alert('Logged in!');
      console.log('ok');
    }
    return (
      <View style={styles.container}>
        <Text>This will be a map</Text>
        <Text>Will there be hot reload</Text>
        <TouchableOpacity onPress={ testAlert }>
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
