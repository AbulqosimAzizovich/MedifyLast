import React, {Component} from 'react';
import {GoogleMap, TrafficLayer, withGoogleMap} from 'react-google-maps';
import {StyledCrEmbedResponsive21by9} from '../map.styled';

const TrafficLayerExampleGoogleMap = withGoogleMap(() => (
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{lat: 47.646935, lng: -122.303763}}
  >
    <TrafficLayer autoUpdate />
  </GoogleMap>
));

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class TrafficLayerEx extends Component {
  render() {
    return (
      <TrafficLayerExampleGoogleMap
        containerElement={<StyledCrEmbedResponsive21by9 />}
        mapElement={<div className='cr-embed-responsive-item' />}
      />
    );
  }
}
