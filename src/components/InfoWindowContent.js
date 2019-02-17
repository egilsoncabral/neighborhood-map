import React, {Component} from 'react'
import NoPicture from '../assets/img/no-image.png'

export default class InfoWindowContent extends Component{

    render(){
        let venue = this.props.venue

        return(
            <div style={{minWidth:'300px'}}>
                <div className="row">
                    
                    <div className="row center-align">
                        {venue !== undefined && venue.bestPhoto ? 
                            <img src={venue.bestPhoto.prefix + '248x140' + venue.bestPhoto.suffix} alt={venue.name + 'provided by foursquare'}/> : 
                            <img src={NoPicture} height="140" width="248"/> }
                       <div class="divider"></div>   
                    </div>
                    
                    <div className="row">
                        <h5>{venue.name}</h5>
                    </div>
                    <div className="row">
                        Telephone: {venue.contact.formattedPhone}
                    </div>
                    <div className="row">
                        Categorie: {venue.categories[0].name}
                    </div>
                    <div className="row">
                        Address: {venue.location.address}
                    </div>
                    <div className="row">
                        {venue.popular !== undefined ? venue.popular.status : ''}
                    </div>
                </div>
            </div>
        )
    }

}