import React from "react";
import "./footer.css";
import Logo from "../../Assests/Image/Header/grafartLogo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import FloatingWhatsApp from 'react-floating-whatsapp'
import LogoWp from "../../Assests/Image/Header/logo.jpg"
function Footer() {
  return (
    <div>
    <div className="footer">
      <div className="innerContainer">
        <div className="footerAbout">
          <div className="logoBlock">
            <a href="/">
              {" "}
              <img src={Logo} alt="Logo" />
            </a>
          </div>
          <div className="columnContent">
            Türkiye ve Dünya'nın pek çok yerinde dijital alanda hizmetler
            vererek markalarımızı büyütüyoruz!{" "}
          </div>
          <div className="titleFooterAbout">Sosyal Medya</div>
          <ul className="safirSocial">
            <li className="social-icon">
              <a href="#!" title="Sitemizi Facebook üzerinden takip edin">
                <FaFacebookF className="icon-style" />
              </a>
            </li>
            <li className="social-icon">
              <a href="#!" title="Sitemizi Twitter üzerinden takip edin">
                <FaTwitter className="icon-style" />
              </a>
            </li>
            <li className="social-icon">
              <a href="#!" title="Sitemizi Instagram üzerinden takip edin">
                <FaInstagram className="icon-style" />
              </a>
            </li>
            <li className="social-icon">
              <a href="#!" title="Sitemizi Linkedin üzerinden takip edin">
                <FaLinkedinIn className="icon-style" />
              </a>
            </li>
            <li className="social-icon">
              <a href="#!" title="Sitemizi Youtube üzerinden takip edin">
                <FaYoutube className="icon-style" />
              </a>
            </li>
            
            <li className="social-icon">
              <a href="#!" title="Sitemizi Whatsapp üzerinden takip edin">
                <FaWhatsapp className="icon-style" />
              </a>
            </li>
            
          </ul>
        </div>
        <div className="footerMenu">
          <div className="text">
            <p>Kurumsal</p>
          </div>
          <ul className="kurumsalMenu">
            <li>
              <a href="/hakkimizda">Hakkımızda</a>
            </li>
            <li>
              <a href="/ekibimiz">Ekibimiz</a>
            </li>
            <li>
              <a href="/referanslar">Referanslar</a>
            </li>
            <li>
              <a href="/iletisim">İletişim</a>
            </li>
          </ul>
        </div>
      </div>
     
    </div>
     <div className="footerCopyright">
     Copyright © 2020, Tüm Hakları Saklıdır.{" "}
   </div>

   <FloatingWhatsApp 
            allowClickAway
            notification
            notificationDelay={30000} 
            notificationSound
            className="whatsapp"
            phoneNumber="05415884922"
            accountName="grafArtReklam"
            statusMessage="çevrimiçi"
            chatMessage="Merhaba,Size nasıl yardımcı olabiliriz ? "
            placeholder="cevap yazınız..."
            avatar={LogoWp} />
   </div>
  );
}

export default Footer;
