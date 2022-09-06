import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { T as Translate } from "react-translator-component";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 5.915263,
      lng: -74.776528
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className='row mb-5' style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDZCAumvtAQpcecxYNsMn0HRle26QNMIWc' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={5.91501}
            lng={-74.77375}
            text={Translate("Madeira Hotel")}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;