import React from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import LoginScreen from '../screens/login_screen';
import MapScreen from '../screens/map_screen';

export const LoginNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  Maps: { screen: MapScreen }
  // Home: { screen: HomeScreenNavigator }
});

class Login extends React.Component {
  render() {
    return (
      <LoginNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
});

export const LoginContainer = connect(mapStateToProps)(Login);
