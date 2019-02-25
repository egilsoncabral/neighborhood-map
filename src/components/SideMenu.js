import React from 'react'
import PropTypes from 'prop-types';
import FourSquareLogo from '../assets/img/foursquare_social.png'

const SideMenu = ({getVenues}) => {
        return(
            <div>
                <ul id="slide-out" className="sidenav">
                    <li><a href="#!" className="subheader" tabIndex="0"><h5>Natal Places</h5></a></li>
                    <li><div className="divider"></div></li>
                    <li><a className="waves-effect sidenav-close" tabIndex="0" href="#!" aria-label="restaurant" value="restaurant" onClick={() => getVenues('restaurant')}><i className="material-icons">restaurant</i>Restaurants</a></li>
                    <li><a className="waves-effect sidenav-close" tabIndex="0" href="#!" aria-label="pubs" value="pubs" onClick={() => getVenues('pubs')}><i className="material-icons">local_bar</i>Pubs</a></li>
                    <li><a className="waves-effect sidenav-close" tabIndex="0" href="#!" aria-label="shoppings" value="shoppings" onClick={() => getVenues('mall')}><i className="material-icons">local_mall</i>Malls</a></li>
                    <li><a className="waves-effect sidenav-close" tabIndex="0" href="#!" aria-label="parks" value="parks" onClick={() => getVenues('parks')}><i className="material-icons">local_florist</i>Parks</a></li>
                    <li><a className="waves-effect sidenav-close" tabIndex="0" href="#!" aria-label="hotel" value="hotel" onClick={() => getVenues('hotel')}><i className="material-icons">local_hotel</i>Hotels</a></li>
                    <li><div className="divider"></div></li>
                    <li style={{textAlign:'right'}}><a className="waves-effect sidenav-close" tabIndex="0" aria-label='Powered by foursquare' href="https://pt.foursquare.com/" value="foursquare" target="_blank" rel="noopener noreferrer">Powered by <img src={FourSquareLogo} height="25" width="25" alt="foursquare logo" style={{top:'7px', left:'5px'}}/></a></li>
                </ul>
            </div>
        )
};

SideMenu.propTypes ={
    getVenues: PropTypes.func.isRequired
};

export default SideMenu;