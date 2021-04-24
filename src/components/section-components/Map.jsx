import GoogleMapReact from 'google-map-react';
import React, { Component } from 'react';

const AnyReactComponent = () => <div><img src="assets/images/map-pin.png" alt=""/></div>;
export default class Map extends Component {

    static defaultProps = {
        center: {
          lat: 41.693487998999245,
          lng: -8.846633845063163
        },
        zoom: 15
      };
     
      render() {
        return (
          // Important! Always set the container height explicitly
          <div style={{ height: '614px', width: '100%', paddingBottom: '55px' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: this.props.apiKey }}
              defaultCenter={this.props.mapLetLng}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={this.props.markerLet}
                lng={this.props.markerLng}
              />
            </GoogleMapReact>
          </div>
        );
      } 
}
