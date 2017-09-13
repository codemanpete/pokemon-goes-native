import React from 'react';
import { MapView } from 'expo';
import { Dimensions, View, Text, Image } from 'react-native';
import { values } from 'lodash';

const {width, height} = Dimensions.get('window');
const LATITUDE_DELTA = 0.001844;
const LONGITUDE_DELTA =  LATITUDE_DELTA * width / height;

// generates a random point within an innerbox within the bounds of the map.
const randPoint = (lat, long, index) => {
  return {
    coordinates: {
      latitude: lat - LATITUDE_DELTA * 0.3 + Math.random() * LATITUDE_DELTA * 0.6,
      longitude: long - LONGITUDE_DELTA * 0.3 + Math.random() * LONGITUDE_DELTA * 0.6
    },
    index
  };
};

class MapScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Map'
  };

  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
      },
      markers: {},
      hidden: new Set()
    };
    this._lockDraggable = this._lockDraggable.bind(this);
    this.renderMarker = this.renderMarker.bind(this);
  }

// fetches information on 5 pokemon as the map screen is mounting.
  componentWillMount() {
    for(var i = 0; i < 5; i++) {
      this.props.getEncounter(i);
    }
  }

  watchID: ?number = null;

  // Gets the current geolocation for the device and sets the state to
  // that location. Also randomly generates 5 markers within an innerbox
  // for that given location.
  // TODO: combine repeated code.
  componentDidMount() {
    navigator.geolocation.getCurrentPosition( position => {
      var latitude = parseFloat(position.coords.latitude);
      var longitude = parseFloat(position.coords.longitude);
      var initialRegion = {
        latitude,
        longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      };
      this.setState({ region: initialRegion });
      var markers = {};
      for (var i = 0; i < 5; i++) {
        Object.assign(markers, { [i]: randPoint(latitude, longitude, i) });
      }
      this.setState({ markers });
    }, error => alert(JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000});

    this.watchID = navigator.geolocation.watchPosition( position => {
      var latitude = parseFloat(position.coords.latitude);
      var longitude = parseFloat(position.coords.longitude);
      var nextRegion = {
        latitude,
        longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      };
      this.setState({ region: nextRegion });
      var markers = {};
      for (var i = 0; i < 5; i++) {
        Object.assign(markers, { [i]: randPoint(latitude, longitude, i) });
      }
      this.setState({ markers });
    }, error => alert(JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000});
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

// will trigger re-render function to recenter the map on original
// position from geolocation when user drags the map.
  _lockDraggable () {
    this.setState(this.state);
  }

  _hideAtIndex (index) {
    const newHidden = new Set(this.state.hidden);
    newHidden.add(index);
    this.setState({ hidden: newHidden });
  }

  _updateMarkerPos (index) {
    const newHidden = new Set(this.state.hidden);
    newHidden.delete(index);

    const newPos = randPoint(this.state.region.latitude, this.state.region.longitude, index);
    const newMarkers = Object.assign({}, this.state.markers, { [index]: newPos });

    this.setState({ hidden: newHidden, markers: newMarkers });
  }

// First, hides the marker so the same pokemon will not render as
// the app is storing the info to the backend. Stores the pokemon to
// the backend and calls for another random encounter from poke API.
// Upon success, _updateMarkerPos will first unhide the marker and then
// generate another random location for the marker with a new encounter.
  _catchPokemon (pokemon, index) {
    return async () => {
      this._hideAtIndex(index);
      this.props.catchPokemon(pokemon, this.props.userId);
      await this.props.getEncounter(index);
      this._updateMarkerPos(index);
    };
  }

// renders the marker on the map
// The 5 pokemon (index of 0 to 4) that are stored in state correlates
// to 5 marker positions (also 0-4). The markers are randomly generated
// when the map updates on geolocation.
  renderMarker (marker) {
    const pokemon = this.props[marker.index];
    const typesString = pokemon.type1 + (pokemon.type2 ? '/' + pokemon.type2 : '');
    if (this.state.hidden.has(marker.index)) {
      return;
    }
    return(
      <MapView.Marker
        key={marker.index}
        coordinate={marker.coordinates}
        image={{uri: pokemon.image_url}}
        >
        <MapView.Callout onPress={ this._catchPokemon(pokemon, marker.index) }>
          <View>
            <Text>{`Click to catch ${pokemon.name} (lv: ${pokemon.level})`}</Text>
            <Text>{`Type: ${typesString}`}</Text>
            <Text>{`Moves: ${pokemon.move1}/${pokemon.move2}`}</Text>
          </View>
        </MapView.Callout>
      </MapView.Marker>
    );
  }

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        region={ this.state.region }
        zoomEnabled={false}
        onRegionChange={ this._lockDraggable }
      >
        {values(this.state.markers).map( this.renderMarker )}
      </MapView>
    )
  }
}

export default MapScreen;
