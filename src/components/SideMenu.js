import React, {Component} from 'react'

export default class SideMenu extends Component{

    render(){
        return(
            <div>
                <ul id="slide-out" class="sidenav">
                    <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
                    <li><a href="#!">Second Link</a></li>
                    <li><div class="divider"></div></li>
                    <li><a class="subheader">Subheader</a></li>
                    <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
                </ul>
            </div>
        )
    }
}