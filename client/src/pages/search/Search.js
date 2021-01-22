import React from 'react'
import SearchInput from './components/SearchInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "./Search.css"

function Search() {
    return (
        <div className="MainContainer-search">
            <div className="containerSearch">
                    <SearchInput />
                    <div className="contentSearch-icon"> <FontAwesomeIcon icon={faSearch} color="white" size="1.5x"/> </div> 
            </div>
        </div>
    )
}

export default Search
