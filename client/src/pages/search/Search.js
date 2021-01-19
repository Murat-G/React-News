import React from 'react'
import Input from './components/searchInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Search() {
    return (
        <div style={{backgroundColor:"purple", width: "500px", height: "500px"}}>
            <div>
                <Input />
                <div className="elementIcons-search"> <FontAwesomeIcon icon={faSearch} color="white" size="2x"/></div>
            </div>
        </div>
    )
}

export default Search
