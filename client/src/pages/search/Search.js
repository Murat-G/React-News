import React from 'react'
import SearchInput from './components/SearchInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "./Search.css"

function Search() {

    const GoogleSearch = () => {
        console.log("hello google")
                
    }

    return (
        <div className="MainContainer-search">
            <div className="containerSearch">
                    <SearchInput />
                    <div className="contentSearch-icon" onClick={GoogleSearch}> <FontAwesomeIcon icon={faSearch} color="white" size="sm" /> </div> 
            </div>   
        </div>    
    )
}

export default Search
