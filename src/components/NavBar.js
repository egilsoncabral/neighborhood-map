import React ,{Component} from 'react'
import M from 'materialize-css'
import $ from 'jquery'

export default class NavBar extends Component{

    openMenu(){
      var componente = M.Sidenav;
      var element  = componente.getInstance(
        componente.init(document.querySelector('.sidenav')).el
        )
      element.open()
    }

    openSearchList(){
      var componente = M.Sidenav;
      var element  = componente.getInstance(
        componente.init(document.querySelector('#searchlist'),{edge:'right'}).el
        )
      element.open()
      $('#input-search').removeAttr('value');
      this.props.loadVenueList()
    }


    render(){
        return ( <nav>
            <div className="row nav-wrapper blue darken-4">
              <div className="col">
              <a id="nav-menu" href="#" data-target="slide-out" onClick={() => this.openMenu()}><i className="material-icons">menu</i></a>
              </div>
              <div className="col">
              <a href="!#"><h5>Natal City Places Map</h5></a>
              </div>
              <div className="col right">
              <a href="#" onClick={() => this.openSearchList()}><i className="material-icons">search</i></a>
              </div>
            </div>
          </nav>)
    }

}