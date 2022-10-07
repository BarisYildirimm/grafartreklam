import React,{useState} from 'react'
import Navbar from '../../../components/admin/navbar/Navbar';
import Sidebar from '../../../components/admin/sidebar/Sidebar';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { CircularProgress } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createPrinciple } from '../../../actions/principle';
import TextareaAutosize from "@mui/material/TextareaAutosize"
import "./addPrinciple.scss"

function AddPrinciple({title}) {
    const [principleData,setPrincipleData] = useState({
        title:"",
        desc:"",
    });
    const [principleImage,setPrincipleImage] = useState("");
    const [clickButton,setClickButton] = useState(false);
    const [preview,setPreview] = useState("");

    const history = useNavigate();
    const dispatch = useDispatch();

    const uploadImage = async (e) => {
        const file = e.target.files[0];
        setPrincipleImage(file);
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
            formdata.append("principleImage",principleImage);
            formdata.append("title",principleData.title);
            formdata.append("desc",principleData.desc);
             dispatch(createPrinciple(formdata,history));
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
          <div className="leftImageUser" >
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
                  name="principleImage"
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
                   value={principleData.title}
                   onChange={(e)=> setPrincipleData({...principleData,title:e.target.value})}
                   placeholder="Başlık" 
                   />
                </div>
                <div className="formInput" >
                  <label>Açıklama</label>
                  <TextareaAutosize
                   maxRows={2}
                   aria-label="maximum height"
                   name="desc"
                   value={principleData.desc}
                   onChange={(e)=> setPrincipleData({...principleData,desc:e.target.value})}
                   style={{ width: "100%",height:"250px" }}
                   placeholder="Açıklama" 
                   />
                </div>
                <div style={{display:"flex"}}>
                {clickButton ? <CircularProgress/>
                   :(
                    <button type="submit" >İlkelerimiz Ekle</button>
                   )}
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPrinciple