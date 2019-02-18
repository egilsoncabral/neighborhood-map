import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import MapContainer from './components/MapContainer'
import SideMenu from './components/SideMenu';

const NEAR = 'Natal';
const RADIUS = '3000';
class App extends Component {
  

  constructor() {
    
    
    super();

    this.state = {
      venues: []
    };

    this.getVenues = this.getVenues.bind(this)
  }

  componentDidMount() {
    this.getVenues()
  }

  getVenues(categorie) {
    let setVenueState = this.setState.bind(this);

    const venuesEndpoint = 'https://api.foursquare.com/v2/venues/explore?';

    const params = {
      client_id: 'BD0OWKRXZ0K4EYTMPEMGRBRY4ZJHSIKT5OXTAMQDTL0LMBDV', //Client ID obtained by getting developer access
      client_secret: 'OMP2T5YLQ32NZIXLJBNXCDZI0U1PW3O5UXNXCGVE3AYVIPXC', //Client Secret obtained by getting developer access
      limit: 100, //The max number of venues to load
      query: categorie ? categorie :'Restaurants', //The type of venues we want to query
      v: '20181025', //The version of the API.
      near: NEAR,
      radius: RADIUS //The latitude and longitude of Natal - RN
    };

    fetch(venuesEndpoint + new URLSearchParams(params), {
      method: 'GET'
    }).then(response => response.json()).then(response => {
      setVenueState({venues: response.response.groups[0].items}); //Set the components state
    });
  }
  
  render() {
    return (
      <div>
          <div className="row">
            <NavBar />
            <SideMenu getVenues={this.getVenues}/>
            <MapContainer venues={this.state.venues}/>
          </div>
          
      </div>
    );
  }
}

export default App;
