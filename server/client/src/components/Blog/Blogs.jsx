import React from "react";
import Blog from "./Blog";
import "./blog.css";

export default function Blogs({post}) {

    const services = post.map(data => (
      <Blog
        key={data._id}
        id={data._id}
        image={data.selectedFile}
        date={data.createdAt}
        title={data.title}
        desc={data.desc}
      />  
    ));  
    return(
        <div className="blogContainer">
                <div className="BloginnerContainer">
                    <div className="blogItems">
                         {services}
                    </div>
                </div>
            </div>
    )
  }
  