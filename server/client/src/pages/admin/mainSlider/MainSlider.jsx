import React,{useState} from 'react'
import Navbar from '../../../components/admin/navbar/Navbar'
import Sidebar from '../../../components/admin/sidebar/Sidebar'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { CircularProgress } from "@material-ui/core";
import { createSlogan } from "../../../actions/slogan"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./mainSlider.scss"

function MainSlider() {
    const dispatch = useDispatch();
    const history = useNavigate();
    const [sloganData,setSloganData] = useState({
        title:"",
      })

    const [preview,setPreview] = useState("");
    const [clickButton,setClickButton] = useState(false);
    const [sloganImage,setSloganImage] = useState("");

    const uploadImage = async (e) => {
        const file = e.target.files[0];
        setSloganImage(file);
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
        formdata.append("sloganImage", sloganImage);
        formdata.append("title", sloganData.title);
        dispatch(createSlogan(formdata,history))
      }

  return (
    <div className='new'>
        <Sidebar/>
        <div className='newContainer'>
            <Navbar/>
            <div className='top'>
            <h1>Slider</h1>
        </div>
        <div className='bottomSlider'>
        <img
            
              src={
                preview
                  ? preview
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
            
            <form onSubmit={handleSubmit} method="POST" encType="multipart/form-date">
                <div className='formInput'>
                <label htmlFor="file">
                  Resim: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  name="sloganImage"
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
                   value={sloganData.title}
                   onChange={(e)=> setSloganData({...sloganData,title:e.target.value})}
                   placeholder="Başlık" 
                   />
                </div>
                <div style={{display:"flex"}}>
                {clickButton ? <CircularProgress/>
                   :(
                    <button type="submit" >Resim Ekle</button>
                   )}
                </div>
            </form>
           
        </div>
        </div>
       
    </div>
  )
}

export default MainSlider