import "../new/new.scss";
import Navbar from '../../../components/admin/navbar/Navbar';
import Sidebar from '../../../components/admin/sidebar/Sidebar';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  updateReference } from "../../../actions/references";
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from "@material-ui/core";

const UpdateReference = ({ title,referenceId,setReferenceId }) => {
    const reference = useSelector((state) => referenceId ? state.references.find((r)=> r._id === referenceId):0);
  
    const [referenceData,setReferenceData] = useState({
    title:reference.title,
  })

  const [referenceImage,setReferenceImage] = useState("");
  const [preview,setPreview] = useState(reference.selectedFile);
  const [clickButton,setClickButton] = useState(false);

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    setReferenceImage(file);

     const reader = new FileReader();
     reader.readAsDataURL(file);
     reader.addEventListener("load", () => {
         setPreview(reader.result);
     });
  };

 
  const history = useNavigate();
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    setClickButton(true);
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("referenceImage", referenceImage);
    formdata.append("title", referenceData.title);
    dispatch(updateReference(referenceId,formdata,history))
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
            <form onSubmit={handleSubmit} method="PATCH" encType="multipart/form-date">     
              <div className="formInput">
                <label htmlFor="file">
                  Resim: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  name="referenceImage"
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
                   value={referenceData.title}
                   onChange={(e)=> setReferenceData({...referenceData,title:e.target.value})}
                   placeholder="Başlık" 
                   />
                </div>
                <div style={{display:"flex"}}>
                {clickButton ? <CircularProgress/>
                   :(
                    <button type="submit" >Referans Güncelle</button>
                   )}
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateReference;
