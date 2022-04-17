import React, { useState } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

require('dotenv').config();
const MapContainer = (props) => {
  const { google, height, width } = props;
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [activeMarker, setActiveMarker] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({});

  const onMarkerClick = (props, marker, e) => {
    setSelectedPlace(props);
    setActiveMarker(marker);
    setShowingInfoWindow(true);
  };

  const onClose = (props) => {
    if (this.state.showingInfoWindow) {
      setShowingInfoWindow(false);
      setActiveMarker(null);
    }
  };

  return (
    <Map
      google={google}
      zoom={15}
      initialCenter={{
        lat: '22.524027112475515',
        lng: '88.36034693111017',
      }}
      style={{
        height: height,
      }}
    >
      <Marker onClick={onMarkerClick} name={'Ariamrit Engineering Ltd'} />
      <InfoWindow
        marker={activeMarker}
        visible={showingInfoWindow}
        onClose={onClose}
      >
        <div>
          <h4>{selectedPlace.name}</h4>
        </div>
      </InfoWindow>
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.google_map_api_key,
})(MapContainer);
