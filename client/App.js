import React from 'react';
import { Provider, connect } from 'react-redux';
import configureStore from './store';
import { addNavigationHelpers } from 'react-navigation';
import RootNavigator from './navigators/root_navigator';


class Root extends React.Component {
  render() {
    return (
      <RootNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
});

const RootWithNavigation = connect(mapStateToProps)(Root);

class App extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <RootWithNavigation />
      </Provider>
    );
  }
}

export default App;
