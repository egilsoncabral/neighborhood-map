import React, {Component} from 'react'

export default class InfoWindowContent extends Component{

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col s3 m3 l3">
                        {this.props.venue.photos.count > 0 ? this.props.venue.photos.groups[0] : 'No Picture'}
                    </div>
                    <div className="col s9 m9 l9">
                        {this.props.venue.name}
                    </div>
                </div>
            </div>
        )
    }

}