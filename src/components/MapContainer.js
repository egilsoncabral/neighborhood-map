import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import InfoWindowContent from './InfoWindowContent';
import Loader from './Loader';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {

  constructor() {
    
    
    super();

    this.state = {
      showingInfoWindow: false,  //Hides or the shows the infoWindow
      activeMarker: {},          //Shows the active marker upon click
    };

    this.createInfoWindow = this.createInfoWindow.bind(this)
  }



  getVenueDetail(contentId, marker) {
    let infoWindow = this.createInfoWindow;
    let url = new URL(`https://api.foursquare.com/v2/venues/${contentId}`);
    url.search = new URLSearchParams({client_id: 'BD0OWKRXZ0K4EYTMPEMGRBRY4ZJHSIKT5OXTAMQDTL0LMBDV', 
    client_secret: 'OMP2T5YLQ32NZIXLJBNXCDZI0U1PW3O5UXNXCGVE3AYVIPXC', v: "20181025"});

    Loader.showComponent()
    fetch(url)
    .then(response => response.json()).then(response => {
      setTimeout(function() {
        infoWindow(response.response.venue)
      }, 800);
      
    });
  } 

  onMarkerClick = (props, marker) => {
    this.setState({
      activeMarker: marker,
      showingInfoWindow: true
    });
    this.getVenueDetail(props.item.venue.id, marker)
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
    Loader.hideComponent()
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
    Loader.hideComponent()
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
        <Loader/>
       </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCBFP2R5y7iwZG2T3lh2xdIhV0EC77iDFk'
})(MapContainer);