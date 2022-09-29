import React, { useEffect } from 'react'
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/Header.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import PageHeader from "../../components/pageHeader/index";
// import Aside from "../../components/Aside/Aside";
import { useSelector,useDispatch } from 'react-redux';
import { getUsersDetails } from '../../actions/auth';
import "./team.scss"
import {AiOutlineInstagram} from "react-icons/ai"
function Team() {
  const users = useSelector((state)=>state.auth);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getUsersDetails())
  },[dispatch])
  return (
    <div>
    <Header>
      <Navbar />
    </Header>
    <PageHeader title="Ekibimiz" />
    <div className="blog">
      <div className="mainBlog">
        <div className="teamContainer">
          <div className='innerTeam'>
              <div className='teamCardContainer'>
              {users.map((item)=>(
                    <div className='teamCard' key={item._id}>
                    <div className='teamContent'>
                        <div className='imgBx'>
                          <img src={item.selectedFile} alt={item.name}/>
                        </div>
                        <div className='contentBx'>
                            <h4>{item.name}</h4>
                            <h5>{item.desc}</h5>
                        </div>
                        <div className='sci'>
                          <a href={item.ig}><AiOutlineInstagram/></a>
                        </div>
                    </div>
                </div>
            ))}
                
              </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default Team