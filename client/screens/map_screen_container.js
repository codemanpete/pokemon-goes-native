import { connect } from 'react-redux';
import { selectEncounterByIdx } from '../reducers/selectors';

import MapScreen from './map_screen';

import { fetchEncounterForPosition } from '../actions/encounter_actions';
import { catchPokemon } from '../actions/pokemon_actions';

const mapStateToProps = store => ({
  0: selectEncounterByIdx(store, 0),
  1: selectEncounterByIdx(store, 1),
  2: selectEncounterByIdx(store, 2),
  3: selectEncounterByIdx(store, 3),
  4: selectEncounterByIdx(store, 4),
  userId: store.login.id
});

const mapDispatchToProps = dispatch => ({
  getEncounter: pos => dispatch(fetchEncounterForPosition(pos)),
  catchPokemon: (pokemon, userId) => dispatch(catchPokemon(pokemon, userId))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapScreen);
