import React,{useState,useEffect} from "react"
import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import {  Avatar, Button, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
 
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  useEffect(() => {
      setUser(JSON.parse(localStorage.getItem("profile")));
     
    },[]);
  const dispatch = useDispatch();
  const history = useNavigate();
  

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history("/");

     setUser(null);
  };

  

  return (
    <div className="adminNavbar">
      <div className="wrapper">
        
        <div className="items"> 
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
            />
          </div>
   
      <div className="item">
              <Avatar
                className="avatar"
                alt=""
                src={user.result.selectedFile}
              >
              {user.result.name.charAt(0)}
              </Avatar>
              <Typography className="itemUserName" variant="h6">
              {user.result.name}
              </Typography>

              <Button
                variant="contained"
                color="primary"
                size="small"
                padding="5"
                onClick={logout}
              >
                Çıkış
              </Button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
