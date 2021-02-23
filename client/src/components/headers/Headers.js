import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Headers.css';
import PlusSozcu from "../../assets/plus_white.png";
import Logo from "../../assets/logo.png";
import Modal from 'react-modal';
import { faFacebook, faGoogle, faApple, faTwitter,} from "@fortawesome/free-brands-svg-icons";



function Headers() {
    const [hide, setHide] = useState(false);
    const [questionMark, setQuestionMark] = useState(false);

    const closeModal = () => setHide(false);
    const closeQuestion = () => setQuestionMark(false);


    Modal.setAppElement(document.getElementById('root'));


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
                    <FontAwesomeIcon
                        icon={faQuestionCircle}
                        color="white"
                        size="2x"
                        onClick={() => setQuestionMark(true)}
                    />

                </div>

                    <span className=".elementIcons-img">
                        <img src={PlusSozcu}
                            alt="sözcüplus"
                            width="85px"
                            style={{ cursor: 'pointer' }}
                            onClick={() => setHide(true)}
                        />
                    </span>

            </div>

            <Modal
                isOpen={hide}
                style={customStyles}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <div className="container-plus-modal">

                    <span> Plus Abone Girişi </span>

                    <div className="container-plus-modal-top">
                        <a href="https://uyelik.gozcu.com.tr/giris" className="container-plus-modal-login"> Giriş Yap</a>
                        <a href="https://uyelik.gozcu.com.tr/signup" className="container-plus-modal-signup"> Abone Ol</a>
                    </div>

                    <div className="container-plus-modal-bottom">
                        <a href="https://uyelik.gozcu.com.tr/panel/sss"> Sıkça Sorulan Sorular </a>
                        <a href="https://www.gozcu.com.tr/kvkk/"> Kişisel Verileri Koruma Kanunu </a>

                    </div>

                </div>
            </Modal>

            <Modal
                isOpen={questionMark}
                style={customQuestionStyles}
                onRequestClose={closeQuestion}
                contentLabel="Question Modal"
            >
                <div className="container-question-modal">

                    <div className="container-question-modal-top">
                        <span className="btn"> <FontAwesomeIcon icon={faGoogle} size="2x" style={{ position: 'relative', left: '-12px', color: '#1565c0' }} /></span>
                        <span className="btn"> <FontAwesomeIcon icon={faFacebook} size="2x" style={{ position: 'relative', left: '-5px', color: '#1976d2' }} /></span>
                        <span className="btn"> <FontAwesomeIcon icon={faApple} size="2x" style={{ position: 'relative', left: '-15px' }} /></span>
                        <span className="btn"> <FontAwesomeIcon icon={faTwitter} size="2x" style={{ position: 'relative', left: '-15px' }} /></span>
                    </div>

                    <div className="container-plus-modal-bottom">
                        <p> Reklam Ver </p>
                        <p> Künye </p>
                        <p> İletişim Bilgileri </p>
                        <p> Kişisel Verileri Koruma Kanunu </p>
                    </div>
                    
                    <div className="container-plus-modal-footer">
                        © 2016 - Tüm hakları Clarusway Yayıncılık A.Ş'ye aittir.
                    </div>
                </div>
            </Modal>

        </div>
    )
}

export default Headers;


const customStyles = {
    content: {
        top: '19%',
        left: 'auto',
        right: '0%',
        width: 'auto',
        height: '12em',
        transform: 'translate(-50%, -50%)',
    }
};
const customQuestionStyles = {
    content: {
        top: '28%',
        left: 'auto',
        right: '0%',
        width: '20em',
        height: '21.5em',
        padding: '0px',
        transform: 'translate(-50%, -50%)',
    }
}