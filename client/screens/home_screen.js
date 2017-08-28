import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet
} from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home'
  };

  componentWillMount() {
    this.props.fetchAllPokemon(this.props.userId)
  }

  render() {
    return (
      <ScrollView>
        <Text>{`Hello ${this.props.name}`}</Text>
        <Text>Your Pokemon: </Text>
        {this.props.pokemonArray.map( pokemon => (
          <View style={styles.entry} key={pokemon.id}>
            <Image
              source={{uri: pokemon.image_url}}
              style={styles.picture}
            />
            <View>
              <Text>{`${pokemon.name} level: ${pokemon.level}`}</Text>
              <Text>{`Type: ${pokemon.type1}`}</Text>
              <Text>{`Moves: ${pokemon.move1}`}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    )
  }
}

var styles = StyleSheet.create({
  picture: {
    width: 70,
    height: 70
  },
  entry: {
    flex: 1,
    flexDirection: 'row'
  }
});

export default HomeScreen;
