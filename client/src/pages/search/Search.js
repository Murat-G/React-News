import React from 'react'
import Input from './components/SearchInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "./Search.css"

function Search() {
    return (
        <div className="containerSearch-input">
            <div style={{display:"flex", flexDirection:"row", backgroundColor:"black", justifyContent:"center",width:"400px"}}>
                <Input />
                <div className="elementIcons-search"> <FontAwesomeIcon icon={faSearch} color="white" size="2x"/></div>
            </div>
        </div>
    )
}

export default Search
