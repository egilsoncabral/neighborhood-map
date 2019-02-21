import React, {Component} from 'react'
import {DebounceInput} from 'react-debounce-input';
import '../assets/css/searchList.css'

export default class SearchList extends Component{

    render(){
        let searchInputClass = 'toolbar-search-input';
        return (
            <div>
               <ul id="searchlist" className="sidenav">
                    <li className="blue darken-4" style={{padding:'10px'}}><DebounceInput
                    id='input-search'
                    className={searchInputClass}
                    placeholder='Search'
                    autoFocus
                    minLength={2}
                    debounceTimeout={300}
                    onChange={event => this.props.searchByName(event.target.value)}
                    aria-label='Search by name'
                    value={this.props.query}
                    /></li>
                    {this.props.venues.map(value => {
					return(<li role="button" key={value.venue.id}><a className="waves-effect sidenav-close" href="#!" onClick={() => this.props.searchById(value.venue.id)}>{value.venue.name}</a></li>);
				})}
                </ul>
            </div>
        )
    }
}