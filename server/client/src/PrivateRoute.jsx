import {useState,useEffect} from 'react'
import { Navigate } from 'react-router-dom';

function PrivateRoute({children}) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("profile")));
      },[]);
    
  return ( user ? children : <Navigate to="/giris"/>)
}

export default PrivateRoute;