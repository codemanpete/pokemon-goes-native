import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import { LoginContainer } from './navigators/login_navigator';

class Root extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <LoginContainer />
      </Provider>
    );
  }
}

export default Root;
