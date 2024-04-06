import React, {useEffect, useState} from 'react';
import {DirectionsRenderer, GoogleMap, withGoogleMap} from 'react-google-maps';
import {StyledCrEmbedResponsive21by9} from '../map.styled';

const google = window.google;

const DirectionsExampleGoogleMap = withGoogleMap((props) => (
  <GoogleMap defaultZoom={7} defaultCenter={props.center}>
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
));

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
const MapDirections = () => {
  const [state, setState] = useState({
    origin: new google.maps.LatLng(41.85073, -87.65126),
    destination: new google.maps.LatLng(41.85258, -87.65141),
    directions: null,
  });

  useEffect(() => {
    const DirectionsService = new google.maps.DirectionsService();

    DirectionsService.route(
      {
        origin: state.origin,
        destination: state.destination,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          setState({
            directions: result,
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      },
    );
  }, []);

  return (
    <DirectionsExampleGoogleMap
      containerElement={<StyledCrEmbedResponsive21by9 />}
      mapElement={<div className='cr-embed-responsive-item' />}
      center={state.origin}
      directions={state.directions}
    />
  );
};
export default MapDirections;
