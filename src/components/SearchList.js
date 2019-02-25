import React from 'react'
import {DebounceInput} from 'react-debounce-input';
import '../assets/css/searchList.css'
import PropTypes from 'prop-types';

//Show the list of venues in right side bar
const SearchList = ({searchByName, searchById, venues, query}) => {
        let searchInputClass = 'toolbar-search-input';
        return (
            <div>
                <ul id="searchlist" className="sidenav">
                    <li className="blue darken-4" style={{ padding: '10px' }} tabIndex="0">
                        <DebounceInput
                        id='input-search'
                        className={searchInputClass}
                        placeholder='Search'
                        autoFocus
                        minLength={2}
                        debounceTimeout={300}
                        onChange={event => searchByName(event.target.value)}
                        aria-label='Search by name'
                        value={query}
                        />
                    </li>
                    {venues.map(value => {
                        return (<li role="button" key={value.venue.id}><a className="waves-effect sidenav-close" tabIndex="0" href="#!" aria-label={value.venue.name} onClick={() => searchById(value.venue.id)}>{value.venue.name}</a></li>);
                    })}
                </ul>
            </div>
        )
    };

    SearchList.propTypes ={
        searchByName: PropTypes.func.isRequired,
        searchById: PropTypes.func.isRequired,
        venues: PropTypes.array.isRequired,
        query: PropTypes.string.isRequired,
    };

    export default SearchList;