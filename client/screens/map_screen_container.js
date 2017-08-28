import { connect } from 'react-redux';
import { selectEncounterByIdx } from '../reducers/selectors';

import MapScreen from './map_screen';

import { fetchEncounterForPosition } from '../actions/encounter_actions';

const mapStateToProps = store => ({
  pokemon0: selectEncounterByIdx(store, 0),
  pokemon1: selectEncounterByIdx(store, 1),
  pokemon2: selectEncounterByIdx(store, 2),
  pokemon3: selectEncounterByIdx(store, 3),
  pokemon4: selectEncounterByIdx(store, 4)
});

const mapDispatchToProps = dispatch => ({
  getEncounter: pos => dispatch(fetchEncounterForPosition(pos))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapScreen);
