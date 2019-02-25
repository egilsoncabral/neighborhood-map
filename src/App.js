import React, { Component } from 'react';
import './App.css';
import './assets/css/toast.css'
import NavBar from './components/NavBar'
import MapContainer from './components/MapContainer'
import SideMenu from './components/SideMenu';
import SearchList from './components/SearchList';
import M from 'materialize-css'

const NEAR = 'Natal';
const RADIUS = '3000';
class App extends Component {
  

  constructor() {
    
    
    super();

    this.state = {
      venues: [],
      showVenues:[],
      query: '',
      showingInfoWindow: false
    };

    this.getVenues = this.getVenues.bind(this)
    this.searchByName = this.searchByName.bind(this)
    this.searchById = this.searchById.bind(this)
    this.loadVenueList = this.loadVenueList.bind(this)
    this.handleRequestErrors = this.handleRequestErrors.bind(this)
    this.handleToasts = this.handleToasts.bind(this)
  }

  // Handle fetch request erros
  handleRequestErrors(response) {
    if (!response.ok) {
      console.log(response);
        throw Error(response.status);
    }
    return response.json();
  }

  // different Toast message depending on the error 
  handleToasts(error) {
    if (error.toString().includes('403')) {
      this.showToast('Unable to responde! Daily Limit Reached!');
    } else if (error.toString().includes('500')) {
      this.showToast('Unable to connect with Server! Please try again.');
    } else if (error.toString().includes('Failed to fetch')) {
      this.showToast('Please check your Internet Connection.');
    } else {
      this.showToast('Error! Please try again.');
    }
  }

  //Show the message
  showToast (msg) {
      M.toast({html: msg})
  }

  componentDidMount() {
    this.getVenues()
  }

  //Retrieve the venues to create its respectives markers
  getVenues(categorie) {
    let setVenueState = this.setState.bind(this);

    const venuesEndpoint = 'https://api.foursquare.com/v2/venues/explore?';

    const params = {
      client_id: 'BD0OWKRXZ0K4EYTMPEMGRBRY4ZJHSIKT5OXTAMQDTL0LMBDV', //Client ID obtained by getting developer access
      client_secret: 'OMP2T5YLQ32NZIXLJBNXCDZI0U1PW3O5UXNXCGVE3AYVIPXC', //Client Secret obtained by getting developer access
      limit: 100, //The max number of venues to load
      query: categorie ? categorie :'Restaurants', //The default type case the categorie is not filled
      v: '20181025', //The version of the API.
      near: NEAR,
      radius: RADIUS //The latitude and longitude of Natal - RN
    };

    fetch(venuesEndpoint + new URLSearchParams(params), {
      method: 'GET'
    }).then(this.handleRequestErrors).then(response => {
      setVenueState({venues: response.response.groups[0].items, showVenues: response.response.groups[0].items}); //Set the components state
    }).catch((error) =>{
      const externalContext=this;
      setTimeout(function() {
        externalContext.handleToasts(error);
      }, 1200);
    });
  }

  //Used to filter the venues by text input search
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

  //Show a venues list in side search bar
  loadVenueList(){
    this.setState({showVenues:this.state.venues, query:'', showingInfoWindow:false})
  }
  
  render() {
    return (
      <div>
          <div className="row">
            <NavBar loadVenueList={this.loadVenueList}/>
            <SideMenu getVenues={this.getVenues}/>
            <MapContainer venues={this.state.showVenues} contexto={this} showingInfoWindow={this.state.showingInfoWindow} handleRequestErrors={this.handleRequestErrors} handleToasts={this.handleToasts}/>
            <SearchList venues={this.state.showVenues} searchByName={this.searchByName} searchById={this.searchById} query={this.state.query}/>
          </div>
          
      </div>
    );
  }
}

export default App;
