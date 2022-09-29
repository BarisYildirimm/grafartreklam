import React,{useState} from 'react'
import Navbar from '../../../components/admin/navbar/Navbar';
import Sidebar from '../../../components/admin/sidebar/Sidebar';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import "./updateUser.scss"
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CircularProgress } from "@material-ui/core";
import { updateUser } from '../../../actions/auth';

function UpdateUser({title,userId,setUserId}) {
  const user = useSelector((state) => userId ? state.auth.find((r)=> r._id === userId):0);
  
    const [userData,setUserData] = useState({
    name:user.name,
    desc:user.desc,
    ig:user.ig,
    email:user.email,
    newPassword:"",
  })
  const [authorImage,setAuthorImage]=useState("");
  const [preview,setPreview] = useState(user.selectedFile);
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

  const history = useNavigate();
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    setClickButton(true);
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("authorImage",authorImage);
    formdata.append("name",userData.name);
    formdata.append("email",userData.email);
    formdata.append("desc",userData.desc);
    formdata.append("ig",userData.ig);
    formdata.append("newPassword",userData.newPassword);
     dispatch(updateUser(userId,formdata,history))
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
 <form onSubmit={handleSubmit} method="PATCH"  encType="multipart/form-date">     
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
      value={userData.name}
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
     <label>instagram Link</label>
     <input
      name="ig"
      type="text" 
      value={userData.ig}
      onChange={(e)=> setUserData({...userData,ig:e.target.value})}
      placeholder="İnstagram Link" 
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
                  <label>Yeni Şifre</label>
                  <input
                    name="newPassword"
                    type="text" 
                    value={userData.newPassword}
                    onChange={(e)=> setUserData({...userData,newPassword:e.target.value})}
                    placeholder="Yeni Şifre" 
                    />
    </div>
   <div className='updateUserButtons'>
      { clickButton ? <CircularProgress/> : <button type="submit" >Admin Güncelle </button>}
   </div>
</form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UpdateUser