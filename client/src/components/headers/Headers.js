import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './Headers.css'
import PlusSozcu from "../../assets/plus_white.png"
function Headers() {
    return (
        <div className="container-headers">
            <div>   
                 <Link to="/" style={{ textDecoration:"none", color:"white",paddingRight: "10px"}}> <h2> Gözcü </h2> </Link>
            </div>
            <div> 
                <Link to="/kategori/gündem" style={{ textDecoration:"none", color:"white",paddingRight: "10px"}}>GÜNDEM</Link>
                <Link to="/kategori/skor" style={{ textDecoration:"none", color:"white",paddingRight: "10px"}}> SKOR </Link>
                <Link to="/kategori/hayat" style={{ textDecoration:"none", color:"white",paddingRight: "10px"}}> HAYAT </Link>
                <Link to="/kategori/dünya" style={{ textDecoration:"none", color:"white",paddingRight: "10px"}}> DÜNYA </Link>
                <Link to="/kategori/ekonomi" style={{ textDecoration:"none", color:"white",paddingRight: "10px"}}> EKONOMİ </Link>
                <Link to="/kategori/sigorta" style={{ textDecoration:"none", color:"white",paddingRight: "10px"}}> SİGORTA </Link>
            </div>
            <div className="containerIcons-headers">
               <div className="elementIcons-headers"> <Link to="/search"><FontAwesomeIcon icon={faSearch} color="white" size="2x"/> </Link> </div>
               <div className="elementIcons-headers"> <FontAwesomeIcon icon={faQuestionCircle} color="white" size="2x"/> </div>
               <span className=".elementIcons-img"> 
                    <img src= {PlusSozcu}
                        alt="sözcüplus" 
                        width="85px"
                    /> 
               </span> 
            </div>
        </div>
    )
}

export default Headers