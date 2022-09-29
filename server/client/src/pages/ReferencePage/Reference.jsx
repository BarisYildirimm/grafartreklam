import React,{useEffect} from 'react'
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/Header.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import PageHeader from "../../components/pageHeader/index";
import { getReference } from "../../actions/references.js";
import { useSelector,useDispatch } from 'react-redux';
import "./referencePage.scss"
function Reference() {

  const dispatch = useDispatch();
  const referencesData = useSelector((state)=>state.references);

  useEffect(() => {
    dispatch(getReference());
  }, [dispatch]);
  return (
    <div>
    <Header>
      <Navbar />
    </Header>
    <PageHeader title="Referanslar" />
    <div className="blog">
      <div className="mainBlog">
        <div className="referencePage-container">
          <div className='referencePage-inner'>
          {referencesData.map((item)=>(
                    <img src={item.selectedFile} alt={item.title}/>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default Reference