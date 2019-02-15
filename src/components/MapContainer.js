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

  onMarkerClick = (props, marker) =>
    this.setState({
      selectedPlace: props.item,
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

  createMarkers() {
    var listMarkers = this.props.venues.map(item =>
        <Marker key={item.venue.id}
          onClick={this.onMarkerClick}
          position={{
            lat: item.venue.location.lat,
            lng: item.venue.location.lng
          }}
          item={item}
        >
        
        </Marker>
       
    )
    return listMarkers;
  }

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
          {this.createMarkers()}
          <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <InfoWindowContent venue={this.state.selectedPlace.venue}/>
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