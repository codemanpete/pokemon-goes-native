import React from 'react';
import { MapView } from 'expo';
import { Dimensions, View, Text, Image } from 'react-native';
import { values } from 'lodash';

const {width, height} = Dimensions.get('window');
const LATITUDE_DELTA = 0.001844;
const LONGITUDE_DELTA =  LATITUDE_DELTA * width / height;

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
      markers: {}
    };
    this._lockDraggable = this._lockDraggable.bind(this);
  }

  componentWillMount() {
    for(var i = 0; i < 5; i++) {
      this.props.getEncounter(i);
    }
  }

  watchID: ?number = null;

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
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  _lockDraggable() {
    this.setState(this.state);
  }

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        region={ this.state.region }
        zoomEnabled={false}
        onRegionChange={ this._lockDraggable }
      >
        {values(this.state.markers).map( marker => {
          const pokemon = this.props[marker.index];
          const typesString = pokemon.type1 + (pokemon.type2 ? '/' + pokemon.type2 : '');
          return(
            <MapView.Marker
              key={marker.index}
              coordinate={marker.coordinates}
              image={{uri: pokemon.image_url}}
              >
              <MapView.Callout>
                <View>
                  <Text>{`Click to catch ${pokemon.name} (lv: ${pokemon.level})`}</Text>
                  <Text>{`Type: ${typesString}`}</Text>
                  <Text>{`Moves: ${pokemon.move1}/${pokemon.move2}`}</Text>
                </View>
              </MapView.Callout>
            </MapView.Marker>
          );
        }
      )}
      </MapView>
    )
  }
}

export default MapScreen;
