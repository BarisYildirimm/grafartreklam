import React,{useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {useDispatch} from "react-redux";
import {signin} from "../../../actions/auth"
import { useNavigate } from 'react-router-dom';

function LogIn (){
  const [formData,setFormData] = useState({name:"",email:"",password:""});

  const dispatch = useDispatch();
    const history = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signin(formData,history));
    }

  return (
    <Container sx={{display: 'flex',
      justifyContent:"center",
      alignItems: 'center',
      padding:"250px",
      }}>
        <Box
          sx={{
            marginTop: "auto auto" ,
            display: 'flex',
            justifyContent:"center",
            flexDirection: 'column',
            alignItems: 'center',
            border:"1px solid black",
            padding:"25px",
            borderRadius:"25px"
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
           Giriş Yap
          </Typography>
          <form  onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Adres"
              name="email"
              autoComplete="email"
              autoFocus
               onChange={(e)=> setFormData({...formData,email:e.target.value})}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Şifre"
              type="password"
              id="password"
              autoComplete="current-password"
               onChange={(e)=> setFormData({...formData,password:e.target.value})}
            /> 
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Giriş Yap
            </Button>
          </form>
        </Box>
    </Container>
    
  );
}
export default LogIn;