import { RECEIVE_USER, RECEIVE_USER_ID } from '../actions/login_actions';

const _nullUser = {
  facebook_id: '',
  id: null,
  name: ''
};

// stores the name, user id, and facebook_id for each user.
const LoginReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_USER:
      return action.user;
    default:
      return state;
  }
};

export default LoginReducer;
