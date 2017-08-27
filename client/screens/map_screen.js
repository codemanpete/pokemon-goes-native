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
    this._lockDraggable = this._lockDraggable.bind(this);
  }

  componentWillMount() {
    for(var i = 1; i <= 5; i++) {
      this.props.getEncounter(i);
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log("1: ", this.props.pokemon1);
  //   console.log("2: ", this.props.pokemon2);
  //   console.log("3: ", this.props.pokemon3);
  //   console.log("4: ", this.props.pokemon4);
  //   console.log("5: ", this.props.pokemon5);
  // }

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
      />
    )
  }
}

export default MapScreen;
