import React from 'react';
import {
  Text,
  View,
} from 'react-native';

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login'
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

export default LoginScreen;
