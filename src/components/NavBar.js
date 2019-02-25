import React ,{Component} from 'react'
import M from 'materialize-css'

export default class NavBar extends Component{


    //Used to initialize the left menu
    openMenu(){
      var componente = M.Sidenav;
      var element  = componente.getInstance(
        componente.init(document.querySelector('.sidenav')).el
        )
      element.open()
    }

    //Used to initialize the search component
    openSearchList(){
      var componente = M.Sidenav;
      var element  = componente.getInstance(
        componente.init(document.querySelector('#searchlist'),{edge:'right'}).el
        )
      element.open()
      this.props.loadVenueList()
    }


    render(){
        return ( <nav>
            <div className="row nav-wrapper blue darken-4">
              <div className="col">
              <a id="nav-menu" href="#!" tabindex="0" data-target="slide-out" onClick={() => this.openMenu()}><i className="material-icons">menu</i></a>
              </div>
              <div className="col">
              <a tabindex="0" href="!#"><h5>Natal City Places Map</h5></a>
              </div>
              <div className="col right">
              <a href="#!" tabindex="0" onClick={() => this.openSearchList()}><i className="material-icons">search</i></a>
              </div>
            </div>
          </nav>)
    }

}