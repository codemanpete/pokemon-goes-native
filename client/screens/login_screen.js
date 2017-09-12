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
      const response = await this.props.loginFB();
      if(!response.error) {
        this.props.navigation.navigate('Home');
      } else {
        console.log(response.error);
      }
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
