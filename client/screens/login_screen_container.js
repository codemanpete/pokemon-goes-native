import { connect } from 'react-redux';
import LoginScreen from './login_screen';

import { loginWithFacebook, fetchUserId } from '../actions/login_actions';

const mapStateToProps = store => ({
});

const mapDispatchToProps = dispatch => ({
  loginFB: () => dispatch(loginWithFacebook()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
