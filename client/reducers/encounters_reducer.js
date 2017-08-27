import { RECEIVE_ENCOUNTER } from '../actions/encounter_actions';

const _initialState = {
  1: {},
  2: {},
  3: {},
  4: {},
  5: {}
};

const EncountersReducer = (state = _initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ENCOUNTER:
      const nextState = Object.assign({}, {[action.pos]: action.encounter});
      return nextState;
    default:
      return state;
  }
};

export default EncountersReducer;
