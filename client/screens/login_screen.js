import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login'
  };

  loginAndRedirect () {
    return async () => {
      await this.props.loginFB();
      this.props.navigation.navigate('Home');
    }
  }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Image source={require('../pikachu.png')}/>
        <TouchableOpacity>
          <Text onPress={ this.loginAndRedirect() }>Login with Facebook</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default LoginScreen;
