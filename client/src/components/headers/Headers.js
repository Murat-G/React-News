import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './Headers.css'
import PlusSozcu from "../../assets/plus_white.png"
import Logo from "../../assets/logo.png"
import PlusModal from './components/PlusModal'


function Headers() {
    const[hide, setHide] = useState(false)

    return (
        <div className="container-headers">
            <div>
                <Link to="/" style={{ textDecoration: "none", color: "white", paddingRight: "10px" }}>
                    <img src={Logo} alt="Atatürk" width="20px" />
                    <span className="containers-header-title"> GÖZCÜ </span>
                </Link>
            </div>
            <div>
                <Link to="/kategori/gündem" style={{ textDecoration: "none", color: "white", paddingRight: "10px", fontWeight: "bold" }}> GÜNDEM </Link>
                <Link to="/kategori/skor" style={{ textDecoration: "none", color: "white", paddingRight: "10px", fontWeight: "bold" }}> SKOR </Link>
                <Link to="/kategori/hayat" style={{ textDecoration: "none", color: "white", paddingRight: "10px", fontWeight: "bold" }}> HAYAT </Link>
                <Link to="/kategori/dunya" style={{ textDecoration: "none", color: "white", paddingRight: "10px", fontWeight: "bold" }}> DÜNYA </Link>
                <Link to="/kategori/ekonomi" style={{ textDecoration: "none", color: "white", paddingRight: "10px", fontWeight: "bold" }}> EKONOMİ </Link>
                <Link to="/kategori/sigorta" style={{ textDecoration: "none", color: "white", paddingRight: "10px", fontWeight: "bold" }}> SİGORTA </Link>
            </div>
            <div className="containerIcons-headers">
                <div className="elementIcons-headers"> <Link to="/search"><FontAwesomeIcon icon={faSearch} color="white" size="2x" /> </Link> </div>
                <div className="elementIcons-headers">
                    <FontAwesomeIcon icon={faQuestionCircle} color="white" size="2x" /> </div>
                <span className=".elementIcons-img">
                    <img src={PlusSozcu}
                        alt="sözcüplus"
                        width="85px"
                        style={{cursor: 'pointer'}}
                        onClick={() => setHide(true)}
                    />
                </span>

                <PlusModal theModal={hide}/>
            </div>
        </div>
    )
}

export default Headers