import React from 'react';
import { MapView } from 'expo';
import { Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');
const LATITUDE_DELTA = 0.001844;
const LONGITUDE_DELTA =  LATITUDE_DELTA * width / height;

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
      }
    };
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
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        region={ this.state.region }
        zoomEnabled={false}
      />
    )
  }
}

export default MapScreen;
