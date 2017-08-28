import { connect } from 'react-redux';
import { selectEncounterByIdx } from '../reducers/selectors';

import MapScreen from './map_screen';

import { fetchEncounterForPosition } from '../actions/encounter_actions';

const mapStateToProps = store => ({
  0: selectEncounterByIdx(store, 0),
  1: selectEncounterByIdx(store, 1),
  2: selectEncounterByIdx(store, 2),
  3: selectEncounterByIdx(store, 3),
  4: selectEncounterByIdx(store, 4)
});

const mapDispatchToProps = dispatch => ({
  getEncounter: pos => dispatch(fetchEncounterForPosition(pos))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapScreen);
