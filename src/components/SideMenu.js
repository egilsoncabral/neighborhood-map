import React, {Component} from 'react'

export default class SideMenu extends Component{

    render(){
        var props = this.props
        return(
            <div>
                <ul id="slide-out" className="sidenav">
                    <li><a href="#!" className="subheader"><h5>Natal Places</h5></a></li>
                    <li><div className="divider"></div></li>
                    <li><a className="waves-effect sidenav-close" href="#!" value="restaurant" onClick={() => props.getVenues('restaurant')}><i className="material-icons">restaurant</i>Restaurants</a></li>
                    <li><a className="waves-effect sidenav-close" href="#!" value="pubs" onClick={() => props.getVenues('pubs')}><i className="material-icons">local_bar</i>Pubs</a></li>
                    <li><a className="waves-effect sidenav-close" href="#!" value="shoppings" onClick={() => props.getVenues('mall')}><i className="material-icons">local_mall</i>Malls</a></li>
                    <li><a className="waves-effect sidenav-close" href="#!" value="parks" onClick={() => props.getVenues('parks')}><i className="material-icons">local_florist</i>Parks</a></li>
                    <li><a className="waves-effect sidenav-close" href="#!" value="hotel" onClick={() => props.getVenues('hotel')}><i className="material-icons">local_hotel</i>Hotels</a></li>
                </ul>
            </div>
        )
    }
}