import React from "react";
import logo from "../../Assests/Image/Header/grafartLogo.png";
import {FaHome,FaUserTie} from  "react-icons/fa"
import {BiPackage,BiWorld} from "react-icons/bi"
import {MdLocalPostOffice} from "react-icons/md"
import {FaUserAlt} from "react-icons/fa"
import {RiTeamFill} from "react-icons/ri"
import { useState } from "react";
import "./style.css";

export default function Navbar() {
  const [fix,setFix] = useState(false);
  function setFixed(){
    if(window.scrollY >=40){
      setFix(true);
    }
    else{
      setFix(false);
    }
  }
  window.addEventListener("scroll",setFixed)

  return (
    <nav className={fix ? 'navbar fixed': 'navbar'}>
      <div className="header-menu">
        <div className="logo">
          <a href="/">
            <img alt="logo" src={logo} className="logo-icon" />
          </a>
        </div>
        

        <div className="menuGroup">
        <label htmlFor="drop" className="toggle">Menu</label>
        <input type="checkbox" id="drop" />
          <ul className="menu">
            <li className="menu-item">
              <a href="/">
               <FaHome className="menu-icon"/>
                <div className="text">Anasayfa</div>
              </a>
            </li>
            <li className="menu-item" id="dropdown">
           
              <a href="#!" className="selected">
              
                <FaUserTie className="menu-icon"/>
                <div className="text">Kurumsal</div>
                <div className="caret"></div>

               

                <ul className="dropdown-menu">
                <li>
                  <a href="/hakkimizda"><FaUserAlt className="dropdown-icon"/>Hakkımızda</a></li>
                <li><a href="/ekibimiz"><RiTeamFill className="dropdown-icon"/>Ekibimiz</a></li>
                <li><a href="/referanslar"><RiTeamFill className="dropdown-icon"/>Referanslar</a></li>
              </ul>
              </a>
            </li>
           
            <li className="menu-item">
              <a href="/paketler">
              <BiPackage className="menu-icon"/>
                <div className="text">Paketlerimiz</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="/blog">
              <BiWorld className="menu-icon"/>
                <div className="text">Blog</div>
              </a>
            </li>
            
            <li className="menu-item">
              <a href="/iletisim">
              <MdLocalPostOffice className="menu-icon"/>
                <div className="text">İletişim</div>
              </a>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
}
