import React ,{Component} from 'react'
import {Link} from 'react-router-dom'

export default class NavBar extends Component{


    render(){
        return ( <nav>
            <div class="nav-wrapper blue darken-4">
              <Link to="#" class="brand-logo">Neighborhood Map</Link>
            </div>
          </nav>)
    }

}