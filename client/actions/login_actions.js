import * as APILoginUtil from '../util/login_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ID = "RECEIVE_USER_ID";

// After retrieving user data from facebook api, this function then
// retrieves the user_id from the backend. If the facebook user data is
// unsuccessful (ie. user cancelled the process), simply return the error.
export const loginWithFacebook = () => dispatch => (
  APILoginUtil.fetchFBUser().then(
    fbUser => dispatch(fetchUserId(fbUser)),
    error => ({ error })
  )
);

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

// retrieves user data from the backend and updates the store.
export const fetchUserId = user => dispatch => (
  APILoginUtil.fetchUserId(user).then(
    apiUser => dispatch(receiveUser(apiUser))
  )
);
