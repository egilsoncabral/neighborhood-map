import React, {Component} from 'react'

export default class SideMenu extends Component{

    render(){
        return(
            <div>
                <ul id="slide-out" className="sidenav">
                    <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
                    <li><a href="#!">Second Link</a></li>
                    <li><div className="divider"></div></li>
                    <li><a href="#!" className="subheader">Subheader</a></li>
                    <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
                </ul>
            </div>
        )
    }
}