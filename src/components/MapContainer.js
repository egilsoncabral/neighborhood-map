import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import InfoWindowContent from './InfoWindowContent';
import Loader from './Loader';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {

  constructor(props) {
    
    super(props);
    this.state = {
      activeMarker: null,          //Shows the active marker upon click
      selectedVenue:null
    };
    
  }

  getVenueDetail(contentId, marker) {
    let currentContext = this;
    let url = new URL(`https://api.foursquare.com/v2/venues/${contentId}`);
    url.search = new URLSearchParams({client_id: 'BD0OWKRXZ0K4EYTMPEMGRBRY4ZJHSIKT5OXTAMQDTL0LMBDV', 
    client_secret: 'OMP2T5YLQ32NZIXLJBNXCDZI0U1PW3O5UXNXCGVE3AYVIPXC', v: "20181025"});

    fetch(url)
    .then(this.props.handleRequestErrors).then(response => {
      setTimeout(function() {
        currentContext.setState({selectedVenue: response.response.venue})
      }, 800);
      
    });
  } 

  onMarkerClick = (props, marker) => {
    this.setState({
      activeMarker: marker,
      selectedVenue:null
    });
    this.props.contexto.setState({showingInfoWindow: true})
    this.getVenueDetail(props.item.venue.id, marker)
  } 
  
  componentWillUpdate(){
    
  }

  onClose = () => {
    if (this.props.showingInfoWindow) {
      this.setState({
        activeMarker: null
      });
      this.props.contexto.setState({showingInfoWindow: false})
    }
  };

  createMarkers() {
    Loader.hideComponent()
    //create bounds for the map with the actual markers
    const bounds = new this.props.google.maps.LatLngBounds();
    var listMarkers = this.props.venues.map(item =>
        {const marker = <Marker key={item.venue.id} ref={item.venue.id}
          onClick={this.onMarkerClick}
          animation={this.state.activeMarker !== null ? (item.venue.id === this.state.activeMarker.item.venue.id ? '1' : '0') : '0'} 
          position={{
            lat: item.venue.location.lat,
            lng: item.venue.location.lng
          }}
          item={item}
        />
        bounds.extend(marker.props.position);
        return marker;
        }
    )
    var currentMap = this.refs.currentMap
    if (currentMap !== undefined && listMarkers.length > 1) {
      currentMap.map.fitBounds(bounds)
    }

    
    return listMarkers;
  }

  render() {

    return (
      <div>
        <Map
          google={this.props.google}
          zoom={13}
          ref='currentMap'
          style={mapStyles}
          initialCenter={{
            lat: -5.812757,
            lng: -35.255127
          }}
        >
          {this.createMarkers()}
          
          
          <InfoWindow
          marker={this.state.activeMarker}
          visible={this.props.showingInfoWindow}
          onClose={this.onClose}
        ><div id="info-window-content">
              <InfoWindowContent venue={this.state.selectedVenue}/>
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