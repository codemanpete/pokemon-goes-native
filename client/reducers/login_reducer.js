import { RECEIVE_USER } from '../actions/login_actions';

const _nullUser = {
  facebook_id: '',
  id: null,
  name: ''
};

const LoginReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_USER:
      const user = {
        facebook_id: action.user.id,
        name: action.user.name,
        id: null
      };
      console.log(user);
      return user;
    default:
      return state;
  }
};

export default LoginReducer;
