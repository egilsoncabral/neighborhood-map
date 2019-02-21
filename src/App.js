import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import MapContainer from './components/MapContainer'
import SideMenu from './components/SideMenu';
import SearchList from './components/SearchList';

const NEAR = 'Natal';
const RADIUS = '3000';
class App extends Component {
  

  constructor() {
    
    
    super();

    this.state = {
      venues: [],
      showVenues:[],
      query: ''
    };

    this.getVenues = this.getVenues.bind(this)
    this.searchByName = this.searchByName.bind(this)
    this.searchById = this.searchById.bind(this)
    this.loadVenueList = this.loadVenueList.bind(this)
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
      setVenueState({venues: response.response.groups[0].items, showVenues: response.response.groups[0].items}); //Set the components state
    });
  }

  searchByName(query){
    if(query !== ''){   
      //only show the venues that pass the query filter
      let showVenues = this.state.venues.slice();
      showVenues = showVenues.filter(value => {
        const name = value.venue.name.toUpperCase().trim();
        const searchName = query.toUpperCase().trim();
        return name.includes(searchName);
      });
      this.setState({showVenues: showVenues, query:query});
    }
  }

  //Used to show a single venue
  searchById(venueId){
    if(venueId !== ''){ 
       let showVenues = this.state.venues.slice();
       showVenues = showVenues.filter(value => {
         const name = value.venue.id;
         const searchName = venueId;
         return name.includes(searchName);
       });
       this.setState({showVenues: showVenues});
    }
  }

  loadVenueList(){
    this.setState({showVenues:this.state.venues, query:''})
  }
  
  render() {
    return (
      <div>
          <div className="row">
            <NavBar loadVenueList={this.loadVenueList}/>
            <SideMenu getVenues={this.getVenues}/>
            <MapContainer venues={this.state.showVenues}/>
            <SearchList venues={this.state.showVenues} searchByName={this.searchByName} searchById={this.searchById} query={this.state.query}/>
          </div>
          
      </div>
    );
  }
}

export default App;
