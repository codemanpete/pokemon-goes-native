import * as APILoginUtil from '../util/login_api_util';

export const RECEIVE_USER = "RECEIVE_USER";

export const loginWithFacebook = () => dispatch => (
  APILoginUtil.fetchFBUser().then(
    user => dispatch(receiveUser(user))
  )
);

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});
