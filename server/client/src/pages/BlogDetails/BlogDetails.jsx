import React,{useEffect} from 'react'
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/Header.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import PageHeader from "../../components/pageHeader/index";
import Aside from "../../components/Aside/Aside.jsx";
import "./blogDetails.scss"
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {getPost} from "../../actions/posts"
import {  Avatar } from "@material-ui/core";
import ReactPlayer from 'react-player'
import { useState } from 'react';
function BlogDetails() {
    const [view,setView] = useState(0);
    const post = useSelector((state)=>state.posts);
    const dispatch = useDispatch();
    const {id} = useParams();
    
    useEffect(()=>{
      dispatch(getPost(id));
    },[dispatch])
    const date = new Date(post.createdAt).toLocaleDateString()
  return (
    <div>
     
        <div>
          <Header>
            <Navbar />
          </Header>
          <PageHeader title={post.title} />
          <div className="blog">
            <div className="mainBlog">
            <div className='detailsPostContainer'>
             
                <div className='detailsPost'>
                  <div className='creatorContainer'>
                  <div  className={post.name === "" ? "creator creatorChange"  : "creator"}> 
                      <Avatar src={post.creatorImage}/>
                      <p> {post.name}</p>
                </div>
                <div>
                {date}
              </div>
              </div>
                    <img className='blogImage' src={post.selectedFile} alt={post.title}/>
                    <p>{post.desc}</p>
                    {post.videoFile ? (
                              <ReactPlayer controls width={"100%"} url={post.videoFile} />
                    ):null}
                  
                </div>
             </div>
              <Aside />
            </div>
          </div>
          <Footer />
          
        </div>
        
    </div>
  )
}

export default BlogDetails