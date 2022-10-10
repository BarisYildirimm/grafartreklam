import React from "react";
import "./blog.css";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
export default function Blogs({post}) {
    const history = useNavigate();
    return(
        <div className="blogContainer">
                <div className="BloginnerContainer">
                    <div className="blogItems">
                    {post &&
                        post.map((data) => (
                          <div className="item" key={data._id}>
                              <div className="thumbnail">
                                  <img  alt={data.title} src={data.selectedFile} className="thumbnail-img"/>
                              </div>
                                <div className="detail">
                                    <div className="date">{new Date(data.createdAt).toLocaleDateString()}</div>
                                    <div><p href="#" className="title">{data.title}</p></div>
                                    <p className="descBlog">{data.desc}</p>
                                    <Button  className="more" onClick={()=>history(`/post/${data._id}`)}>DEVAMINI OKU →</Button>
                                </div>
                           </div>
                    ))}
                    </div>
                </div>
            </div>
    )
  }
  