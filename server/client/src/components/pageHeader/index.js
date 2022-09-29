import React from "react";
import "./style.css";

function index(props) {
  return (
    <div className="pageHeaderContainer">
      <div className="pageHeader">
        <h1 className="pageHeaderSlogan">{props.title}</h1>
        <div className="text">
          <a href="/">Anasayfa</a> » {props.title}
        </div>
      </div>
    </div>
  );
}

export default index;
