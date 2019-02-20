import React, {Component} from 'react'
import {DebounceInput} from 'react-debounce-input';
import '../assets/css/searchList.css'

export default class SearchList extends Component{

    

    render(){
        let searchInputClass = 'toolbar-search-input';
        return (
            <div>
               <ul id="searchlist" className="sidenav">
                    <li style={{padding:'10px'}}><DebounceInput
                    className={searchInputClass}
                    placeholder='Search'
                    autoFocus
                    minLength={2}
                    debounceTimeout={300}
                    aria-label='Search by name'
                    /></li>
                    <li><div className="divider"></div></li>
                </ul>
            </div>
        )
    }
}