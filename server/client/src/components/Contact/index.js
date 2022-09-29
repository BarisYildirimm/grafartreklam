import React from "react";
import "./style.css";
import { IoIosBusiness } from "react-icons/io";
import {  MdPhoneInTalk,MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
function index() {
  return (
    <div className="contactMapContainer">
      <div className="bottomSection">
        <div className="innerContainer">
          <div className="blocks">
            <div className="contactMapinfoBlock">
              <div className="item">
                <IoIosBusiness className="icon" />
                <div className="data">
                  <div className="first">Merkez Şube</div>
                  <p> Isparta / Merkez</p>
                </div>
              </div>
              <div className="item">
                <MdPhoneInTalk className="icon" />
                <div className="data">
                  <div className="first">Telefon Numaramız</div>
                  <p> 0534 080 79 15 / 0541 588 49 22</p>
                </div>
              </div>
              <div className="item">
                <MdEmail className="icon" />
                <div className="data">
                  <div className="first">E-Posta</div>
                  <p>medya@graftartreklam.com</p>
                </div>
              </div>
              <div className="item">
                <BsWhatsapp className="icon" />
                <div className="data">
                  <div className="first">Whatsapp</div>
                  <p>05415884922</p>
                </div>
              </div>
            </div>
            
            <iframe
              title="mapContact"
              className="map"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=%C4%B1sparta%20grafart&t=&z=17&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
