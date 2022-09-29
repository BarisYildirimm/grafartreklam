import "./new.scss";
import Navbar from '../../../components/admin/navbar/Navbar';
import Sidebar from '../../../components/admin/sidebar/Sidebar';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize"
import { useDispatch } from "react-redux";
import {createPost} from "../../../actions/posts"
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from "@material-ui/core";

const New = ({ title }) => {
  const [postData,setPostData] = useState({
    title:"",
    desc:"",
    videoFile:"",
  })
  const [blogImage,setBlogImage] = useState("");
  const [preview,setPreview] = useState("");
  const [clickButton,setClickButton] = useState(false);

  const history = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    setBlogImage(file);

     const reader = new FileReader();
     reader.readAsDataURL(file);
     reader.addEventListener("load", () => {
         setPreview(reader.result);
     });
     
   };
  

  const handleSubmit = (e) => {
    setClickButton(true);
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("blogImage", blogImage);
    formdata.append("title", postData.title);
    formdata.append("desc", postData.desc);
    formdata.append("videoFile", postData.videoFile);
    formdata.append("name",user.result.name)
    formdata.append("creatorImage",user.result.selectedFile)
    dispatch(createPost(formdata,history))
  }

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar/>
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
            <form onSubmit={handleSubmit} method="POST" encType="multipart/form-date">     
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
                   value={postData.title}
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
                   placeholder="video Link" 
                   />
                </div>
                
                <div className="formInput"  >
                <label>Açıklama</label>
                <TextareaAutosize
                    maxRows={2}
                    aria-label="maximum height"
                    name="desc"
                    value={postData.desc}
                    onChange={(e)=> setPostData({...postData,desc:e.target.value})}
                    placeholder="Haberin Detaylarını giriniz..."
                    style={{ width: "100%",height:"250px" }}
                />
                 
                </div> 
               
                <div style={{display:"flex"}}>
                {clickButton ? <CircularProgress/>
                   :(
                    <button type="submit" >Haber Ekle</button>
                   )}
                </div>
                
                
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
