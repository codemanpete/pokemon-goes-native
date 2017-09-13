import { RECEIVE_ENCOUNTER } from '../actions/encounter_actions';

const _initialState = {
};

// 5 encounters are the preset for this app (index 0-4). Encounters are
// stored in an object with key-value pairs where key is the encounter
// index (position) and value is the encounter object.
const EncountersReducer = (state = _initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ENCOUNTER:
      const nextState = Object.assign({}, state, {[action.pos]: action.encounter});
      return nextState;
    default:
      return state;
  }
};

export default EncountersReducer;
