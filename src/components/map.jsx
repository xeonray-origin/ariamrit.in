import React, { useState, useEffect } from 'react';
import Home from '@mui/icons-material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
require('dotenv').config();
const MapContainer = (props) => {
  const { google, height } = props;
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
        width: '100%',
        position: 'relative',
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
