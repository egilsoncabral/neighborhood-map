import React ,{Component} from 'react'
import M from 'materialize-css'

export default class NavBar extends Component{

    openMenu(){
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems);
      instances.open()
    }

    render(){
        return ( <nav>
            <div className="row nav-wrapper blue darken-4">
              <div className="col">
              <a href="!#" data-target="slide-out" onClick={() => this.openMenu()}><i class="material-icons">menu</i></a>
              </div>
              <div className="col">
              <a href="!#"><h5>Neighborhood Map</h5></a>
              </div>
            </div>
          </nav>)
    }

}