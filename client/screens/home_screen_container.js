import { connect } from 'react-redux';
import HomeScreen from './home_screen';

import { fetchAllPokemon } from '../actions/pokemon_actions';

const mapStateToProps = store => ({
  pokemonArray: store.pokemon.pokemon,
  userId: store.login.id,
  name: store.login.name
});

const mapDispatchToProps = dispatch => ({
  fetchAllPokemon: (userId) => dispatch(fetchAllPokemon(userId)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
