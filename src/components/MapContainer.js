import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import InfoWindowContent from './InfoWindowContent';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {

  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <div>
      <Map
        google={this.props.google}
        zoom={13}
        style={mapStyles}
        initialCenter={{
         lat: -5.812757,
         lng: -35.255127
        }}
      >
      <Marker
          onClick={this.onMarkerClick}
          position={{
          lat: -5.8663,
          lng: -35.1855
          }}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <InfoWindowContent />
          </div>
        </InfoWindow>
        <Marker
          onClick={this.onMarkerClick}
          position={{
          lat: -5.8127,
          lng: -35.2055
          }}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <InfoWindowContent />
          </div>
        </InfoWindow>
        
        </Map>
       </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCBFP2R5y7iwZG2T3lh2xdIhV0EC77iDFk'
})(MapContainer);