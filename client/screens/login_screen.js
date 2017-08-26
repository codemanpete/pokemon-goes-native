import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Alert
} from 'react-native';

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login'
  };

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <TouchableOpacity>
          <Text onPress={ this.props.loginFB }>Login with Facebook</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default LoginScreen;
