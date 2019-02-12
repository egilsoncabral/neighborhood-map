import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import MapContainer from './components/MapContainer'

class App extends Component {
  render() {
    return (
      <div>
          <div className="row">
            <NavBar />
            <MapContainer />
          </div>
          
      </div>
    );
  }
}

export default App;
