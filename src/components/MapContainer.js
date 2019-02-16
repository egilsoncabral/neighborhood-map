import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
  };

  getVenueDetail(contentId) {
    let url = new URL(`https://api.foursquare.com/v2/venues/${contentId}`);
    url.search = new URLSearchParams({client_id: 'BD0OWKRXZ0K4EYTMPEMGRBRY4ZJHSIKT5OXTAMQDTL0LMBDV', 
    client_secret: 'OMP2T5YLQ32NZIXLJBNXCDZI0U1PW3O5UXNXCGVE3AYVIPXC', v: "20181025"});


    fetch(url)
    .then(response => response.json()).then(response => {
      this.createInfoWindow(response.response.venue)
    });
  } 

  onMarkerClick = (props, marker) => {
    this.setState({
      activeMarker: marker,
      showingInfoWindow: true
    });
    this.getVenueDetail(props.item.venue.id)
  }  

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

  createInfoWindow(venue){
    let infoContent = []
    infoContent.push(
      <InfoWindowContent venue={venue}/>
    )
    ReactDOM.render(infoContent, document.getElementById('info-window-content'));
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
          <div id="info-window-content">
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