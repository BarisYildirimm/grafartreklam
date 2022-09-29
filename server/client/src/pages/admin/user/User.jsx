import React,{useEffect} from 'react';
import Navbar from "../../../components/admin/navbar/Navbar"
import Sidebar from '../../../components/admin/sidebar/Sidebar';
import UserDataTable from '../../../components/admin/userDataTable/UserDataTable';
import { useDispatch } from 'react-redux';
import "./user.scss"
import { getUsers } from '../../../actions/auth';

function User ({setUserId}){
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getUsers());
  },[dispatch])
  
    
 

  // return (
  //   <div className='signUp'>
  //     <Sidebar/>
  //     <div className='signUpContainer'>
  //     <Navbar/>
  //       <Container sx={{display: 'flex',
  //       justifyContent:"center",
  //       alignItems: 'center',
  //       padding:"25px",
  //       }}>
  //         <Box
  //           sx={{
  //             marginTop: "auto auto" ,
  //             display: 'flex',
  //             justifyContent:"center",
  //             flexDirection: 'column',
  //             alignItems: 'center',
  //             border:"1px solid black",
  //             padding:"25px",
  //             borderRadius:"25px"
  //           }}
  //         >
  //           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
  //             <LockOutlinedIcon />
  //           </Avatar>
  //           <Typography component="h1" variant="h5">
  //           Yeni Admin Ekle
  //           </Typography>
  //           <form onSubmit={handleSubmit} method="POST" >
  //           <TextField
  //               margin="normal"
  //               required
  //               fullWidth
  //               id="name"
  //               label="Kullanıcı Adı"
  //               name="name"
  //               autoComplete="name"
  //               autoFocus
  //               onChange={(e)=> setFormData({...formData,name:e.target.value})}
  //             />
  //             <TextField
  //               margin="normal"
  //               required
  //               fullWidth
  //               id="email"
  //               label="Email Adres"
  //               name="email"
  //               autoComplete="email"
  //               autoFocus
  //               onChange={(e)=> setFormData({...formData,email:e.target.value})}
  //             />
  //             <TextField
  //               margin="normal"
  //               required
  //               fullWidth
  //               name="password"
  //               label="Şifre"
  //               type="password"
  //               id="password"
  //               autoComplete="current-password"
  //               onChange={(e)=> setFormData({...formData,password:e.target.value})}
  //             />
            
  //             <Button
  //               type="submit"
  //               fullWidth
  //               variant="contained"
  //               sx={{ mt: 3, mb: 2 }}
  //             >
  //               Yeni Admin Ekle
  //             </Button>
  //           </form>
  //         </Box>
  //     </Container>
  //     </div>
  //   </div>
  // );
  return(
    <div>
      <div className='adminUser'>
        <Sidebar/>
      <div className="listContainer">
        <Navbar/>
         <UserDataTable setUserId={setUserId}/>
      </div>
    </div>
     
    </div>
  )
}
export default User;