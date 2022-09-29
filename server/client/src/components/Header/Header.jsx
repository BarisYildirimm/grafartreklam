// eslint-disable-next-line no-unused-vars
import react from "react";
import {  MdPhoneInTalk, MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import en from "../../Assests/Image/Header/en.svg" 
import tr from "../../Assests/Image/Header/tr.svg" 
import "./style.css";
import "../Navbar/style.css"

export default function Header(props) {
  return (
    <header className="header">
      <div className="topbar">
        <div className="innerContainer">
          <div className="infoBlock">
            
            <div className="item">
              <MdPhoneInTalk className="item-icon" />
              <div style={{display:"flex",alignItems:"center"}}>
                <p style={{color:"#fff"}}>Telefon :  </p>
                <a href="tel:05340807915" style={{marginRight:"5px",marginLeft:"5px"}}>0534 080 79 15</a>
                <span style={{color:"#fff", marginRight:"5px",marginLeft:"5px"}}>/</span>
                <a href="tel:05415884922"> 0541 588 49 22</a>
              </div>
            </div>
            <div className="item">
              <BsWhatsapp className="item-icon" />
              <a href=" https://wa.me/05415884922">WhatsApp</a>
            </div>
            <div className="item">
              <MdEmail className="item-icon" />
              <a href="mailto:medya@graftartreklam.com">Mail</a>
            </div>
          </div>
          <div className="rightGroup">
            <ul className="safirSocial">
              <li className="social-icon">
                <a href="https://m.facebook.com/graf.art.56" target={'_blank'} title="Sitemizi Facebook üzerinden takip edin" rel="noopener noreferrer">
                  <FaFacebookF className="icon-style" />
                </a>
              </li>
              <li className="social-icon">
                <a href="https://twitter.com/grafart_reklam"  target={'_blank'}  title="Sitemizi Twitter üzerinden takip edin" rel="noopener noreferrer">
                  <FaTwitter className="icon-style" />
                </a>
              </li>
              <li className="social-icon">
                <a href="https://www.instagram.com/grafartreklam/" target={"_blank"} title="Sitemizi Instagram üzerinden takip edin" rel="noopener noreferrer">
                  <FaInstagram className="icon-style" />
                </a>
              </li>
              <li className="social-icon">
                <a href="/" title="Sitemizi Linkedin üzerinden takip edin">
                  <FaLinkedinIn className="icon-style" />
                </a>
              </li>
              <li className="social-icon">
                <a href="https://www.youtube.com/channel/UCTT2RKBjjcpsvpfRBq3avhg" target={'_blank'} title="Sitemizi Youtube üzerinden takip edin" rel="noopener noreferrer">
                  <FaYoutube className="icon-style" />
                </a>
              </li>
              
              <li className="social-icon">
                <a href="tel:05415884922" title="Sitemizi Whatsapp üzerinden takip edin">
                  
                  <FaWhatsapp className="icon-style" />
                </a>
              </li>
              
            </ul>
            <div className="topsearch">
              <form method="get">
                <input type={"text"} placeholder="Arama yap..." />
                <button className="search-button">
                  <AiOutlineSearch className="search-icon" />
                </button>
              </form>
            </div>
            <div className="languageSelector">
                <a href="/" >
                    <img alt="türkçe" src={tr}/>
                </a>
                <a href="/">
                    <img alt="english" src={en}/>
                </a>
            </div>
          </div>
        </div>
      </div>
      {props.children}
    </header>
  );
}
