import React from "react";
import "./blog.css"

export default function Blog(props){
    
    const date = new Date(props.date).toLocaleDateString()
    return(
                <div className="item">
                    <div className="thumbnail">
                        <img alt={props.title} src={props.image} className="thumbnail-img"/>
                    </div>
                    <div className="detail">
                        <div className="date">{date}</div>
                        <div><p href="#" className="title">{props.title}</p></div>
                        <p className="descBlog">{props.desc}</p>
                        <a href={`/posts/${props.id}`} className="more">DEVAMINI OKU →</a>
                    </div>
                </div>
     )
}