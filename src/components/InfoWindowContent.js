import React, {Component} from 'react'

export default class InfoWindowContent extends Component{

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col s3 m3 l3">
                        Fotos aqui
                    </div>
                    <div className="col s9 m9 l9">
                        Texto teste
                    </div>
                </div>
            </div>
        )
    }

}