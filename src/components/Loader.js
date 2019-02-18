import React, {Component} from 'react'
import M from 'materialize-css'
import $ from 'jquery'
import '../assets/css/modal.css'


export default class Loader extends Component{
    
    componentDidMount(){
        var componente = M.Modal;
      var element  = componente.getInstance(
        componente.init(document.querySelector('#modalPreloader')).el
        )
      element.open()
    }

    static hideComponent(){
        $('#modalPreloader').hide()
        $('.modal-overlay').hide()
    }

    static showComponent(){
        $('#modalPreloader').show()
    }

    render(){
        return (
                <div id="modalPreloader" className="modal modalLoader">
                    <div className="preloader-wrapper big active">
                        <div className="spinner-layer spinner-blue-only">
                                <div className="circle-clipper left">
                                    <div className="circle"></div>
                                </div><div className="gap-patch">
                                    <div className="circle"></div>
                                </div><div className="circle-clipper right">
                                <div className="circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}