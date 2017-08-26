import * as APILoginUtil from '../util/login_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ID = "RECEIVE_USER_ID";

export const loginWithFacebook = () => dispatch => (
  APILoginUtil.fetchFBUser().then(
    fbUser => dispatch(fetchUserId(fbUser))
  )
);

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const fetchUserId = user => dispatch => (
  APILoginUtil.fetchUserId(user).then(
    apiUser => dispatch(receiveUser(apiUser))
  )
);
