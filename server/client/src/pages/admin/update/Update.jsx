import "./update.scss";
import Navbar from '../../../components/admin/navbar/Navbar';
import Sidebar from '../../../components/admin/sidebar/Sidebar';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import React,{ useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize"
import { useDispatch,useSelector } from "react-redux";
import {updatePost} from "../../../actions/posts"
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from "@material-ui/core";

const Update = ({ title,currentId,setCurrentId }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  

  const post = useSelector((state)=> currentId ? state.posts.find((p) => p._id === currentId):0);
  const [postData,setPostData] = useState({
    title:post.title,
    desc:post.desc,
    videoFile:post.videoFile,
    name:post.name,
  });
  const [blogImage,setBlogImage] = useState("");
  const [preview,setPreview] = useState(post.selectedFile);
  const [clickButton,setClickButton] = useState(false);
  
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    setBlogImage(file);

     const reader = new FileReader();
     reader.readAsDataURL(file);
     reader.addEventListener("load", () => {
         setPreview(reader.result);
     });
     
  };

  const dispatch = useDispatch();
  const history = useNavigate();

  const handleSubmit = (e)=>{
    setClickButton(true);
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("blogImage", blogImage);
    formdata.append("title", postData.title);
    formdata.append("desc", postData.desc);
    formdata.append("videoFile", postData.videoFile);
    formdata.append("name",user.result.name)
    formdata.append("creatorImage",user.result.selectedFile);
    dispatch(updatePost(currentId,formdata,history));
  }
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                preview
                  ? preview
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
            
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}  method="PATCH" encType="multipart/form-date">
              <div className="formInput">
                <label htmlFor="file">
                  Resim: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  name="blogImage"
                  accept="image/*"
                  onChange={(e) => {
                    uploadImage(e);
                  }}
                  style={{ display: "none" }}
                />
              </div>
             
              <div className="formInput" >
                  <label>Başlık</label>
                  <input
                   name="title"
                   type="text" 
                   defaultValue ={post.title}
                   onChange={(e)=> setPostData({...postData,title:e.target.value})}
                   placeholder="Başlık" 
                   />
                </div>
                <div className="formInput" >
                  <label>Video Link</label>
                  <input
                   name="videoFile"
                   type="text" 
                   value={postData.videoFile}
                   onChange={(e)=> setPostData({...postData,videoFile:e.target.value})}
                   placeholder="Video Link" 
                   />
                </div>
                <div className="formInput"  >
                <label>Açıklama</label>
                <TextareaAutosize
                    maxRows={2}
                    aria-label="maximum height"
                    name="desc"
                    defaultValue ={post.desc}
                    onChange={(e)=> setPostData({...postData,desc:e.target.value})}
                    placeholder="Haberin Detaylarını giriniz..."
                    style={{ width: "100%",height:"250px" }}
                />
                 
                </div>      
                <div style={{display:"flex"}}>
                {clickButton ? <CircularProgress/>
                   :(
                    <button type="submit" >Haber Güncelle</button>
                   )}
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
