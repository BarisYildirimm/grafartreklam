import React,{useState} from 'react'
import Navbar from '../../../components/admin/navbar/Navbar';
import Sidebar from '../../../components/admin/sidebar/Sidebar';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./addUser.scss"
import { signup } from '../../../actions/auth';
import { CircularProgress } from "@material-ui/core";
function AddUser({ title }) {
    const [userData,setUserData] = useState({
        name:"",
        desc:"",
        ig:"",
        email:"",
        password:"",
    });
    const [authorImage,setAuthorImage]=useState("");
    const [preview,setPreview] = useState("");
    const [clickButton,setClickButton] = useState(false);

    const uploadImage = async (e) => {
      const file = e.target.files[0];
      setAuthorImage(file);
  
       const reader = new FileReader();
       reader.readAsDataURL(file);
       reader.addEventListener("load", () => {
           setPreview(reader.result);
       });
      };

    const dispatch = useDispatch();
    const history = useNavigate();

    const handleSubmit = (e) => {
      setClickButton(true);
      e.preventDefault();
      const formdata = new FormData();
      formdata.append("authorImage",authorImage);
      formdata.append("name",userData.name);
      formdata.append("email",userData.email);
      formdata.append("password",userData.password)
      formdata.append("desc",userData.desc)
      formdata.append("ig",userData.ig)
        dispatch(signup(formdata,history));

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
                  name="authorImage"
                  accept="image/*"
                  onChange={(e) => {
                    uploadImage(e);
                  }}
                  style={{ display: "none" }}
                />
              </div>
             
              <div className="formInput" >
                  <label>Kullanıcı Ad</label>
                  <input
                   name="name"
                   type="text" 
                   value={userData.title}
                   onChange={(e)=> setUserData({...userData,name:e.target.value})}
                   placeholder="Kullanıcı AD" 
                   />
                </div>
                <div className="formInput" >
                  <label>Meslek</label>
                  <input
                   name="desc"
                   type="text" 
                   value={userData.desc}
                   onChange={(e)=> setUserData({...userData,desc:e.target.value})}
                   placeholder="Meslek" 
                   />
                </div>
                <div className="formInput" >
                  <label>İnstagram Linki</label>
                  <input
                   name="ig"
                   type="text" 
                   value={userData.ig}
                   onChange={(e)=> setUserData({...userData,ig:e.target.value})}
                   placeholder="İnstagram Linki" 
                   />
                </div>
                <div className="formInput" >
                  <label>E-posta</label>
                  <input
                   name="email"
                   type="text" 
                   value={userData.email}
                   onChange={(e)=> setUserData({...userData,email:e.target.value})}
                   placeholder="E-Posta" 
                   />
                   
                </div>
                <div className="formInput" >
                  <label>Şifre</label>
                  <input
                   name="password"
                   type="text" 
                   value={userData.password}
                   onChange={(e)=> setUserData({...userData,password:e.target.value})}
                   placeholder="Şifre" 
                   />
                   
                </div>
                <div style={{display:"flex"}}>
                {clickButton ? <CircularProgress/>
                   :(
                    <button type="submit" >Admin Ekle</button>
                   )}
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddUser