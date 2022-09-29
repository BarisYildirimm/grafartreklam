import React from "react";
import { serviceData } from "./serviceData";
import Service from "./service";
import "./service.css"

export default function Services() {
    const services = serviceData.map(data => (
      <Service
        key={data._id}
        image = {data.image}
        title={data.title}
      />  
    ));
    return <div className="serviceContainer">
                <div className="serviceHeader">
                    <p className="serviceSlogan">Girişimler</p>
                    <div className="text">Girişimlerimiz</div>
                </div>
                <div className="innerContainer">{services}</div>
            </div>
  }
  