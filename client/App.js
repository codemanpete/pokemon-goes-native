import React from 'react';
import { Provider, connect } from 'react-redux';
import configureStore from './store';
import { addNavigationHelpers } from 'react-navigation';
import LoginNavigator from './navigators/login_navigator';


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

const LoginWithNavigation = connect(mapStateToProps)(Login);

class Root extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <LoginWithNavigation />
      </Provider>
    );
  }
}

export default Root;
