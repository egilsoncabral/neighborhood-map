import React from 'react'
import NoPicture from '../assets/img/no-image.png'
import FourSquareLogo from '../assets/img/foursquare_social.png'
import PropTypes from 'prop-types';

const InfoWindowContent = ({ venue }) => {

    let noImageText = 'There is no registered image'
    return (
        <div>
            {venue !== null &&
                <div style={{ minWidth: '300px' }}>

                    <div className="row">

                        <div className="row center-align" tabIndex="0" aria-label='Venue image'>
                            {venue !== undefined && venue.bestPhoto ?
                                <img src={venue.bestPhoto.prefix + '248x140' + venue.bestPhoto.suffix} alt={venue.name + 'provided by foursquare'} /> :
                                <img src={NoPicture} height="140" width="248" alt={noImageText} />}
                            <div className="divider"></div>
                        </div>

                        <div className="row" tabIndex="0" aria-label='Venue name'>
                            <h5>{venue.name}</h5>
                        </div>
                        <div className="row" tabIndex="0" aria-label='Venue phone'>
                            Telephone: {venue.contact.formattedPhone}
                        </div>
                        <div className="row" tabIndex="0" aria-label='Venue categorie'>
                            Categorie: {venue.categories[0].name}
                        </div>
                        <div className="row" tabIndex="0" aria-label='Venue address'>
                            Address: {venue.location.address}
                        </div>
                        <div className="row" tabIndex="0" aria-label='Venue status'>
                            {venue.popular !== undefined ? venue.popular.status : ''}
                        </div>
                        <div className="divider"></div>
                        <div className="row" tabIndex="0" aria-label='Powered by foursquare' style={{ textAlign: 'right' }}>
                            <a className="waves-effect sidenav-close" aria-label='Powered by foursquare' href="https://pt.foursquare.com/" value="foursquare" target="_blank" rel="noopener noreferrer">Informations powered by <img src={FourSquareLogo} height="25" width="25" alt="foursquare logo" style={{ top: '7px', left: '5px' }} /></a>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

InfoWindowContent.propTypes ={
    venue: PropTypes.object.isRequired
};

export default InfoWindowContent