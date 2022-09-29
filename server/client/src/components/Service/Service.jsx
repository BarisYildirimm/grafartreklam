import React from "react";
import "./service.css"

export default function Service(props){
    return(
            <div className="serviceItem">
                <a href="#">
                <img src={props.image} alt={props.title}/>
                </a>
                <div className="detail"><a href="">{props.title}</a></div>
            </div>
 )
}