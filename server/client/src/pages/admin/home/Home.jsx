import React,{useEffect} from 'react'
import "./home.scss";
import Navbar from '../../../components/admin/navbar/Navbar';
import Sidebar from '../../../components/admin/sidebar/Sidebar';
import Datatable from "../../../components/admin/datatable/Datatable"
import ReferenceDataTable from '../../../components/admin/referenceTable/ReferenceDataTable';
import UserDataTable from '../../../components/admin/userDataTable/UserDataTable';
import { useDispatch } from "react-redux";
import {getPosts} from "../../../actions/posts"
import Statistic from '../statistic/Statistic';
import { useSelector } from "react-redux";
import { getReference } from '../../../actions/references';
import { getUsers } from '../../../actions/auth';
import { getStatistic } from '../../../actions/statistic';
function Home() {
  const dispatch = useDispatch();
  const posts = useSelector((state)=>state.posts)
  const references = useSelector((state)=>state.references);
  const users = useSelector((state)=>state.auth);
  
  useEffect(()=>{
    dispatch(getPosts());
    dispatch(getReference());
    dispatch(getUsers())
    dispatch(getStatistic())
  },[dispatch])
  
  return (
    <div className="home">
    <Sidebar />
    <div className="homeContainer">
      <Navbar />
      <Statistic length={posts.length} reference={references.length} user={users.length}/>
      <div className="listContainer">
        <Datatable  pageName="home"/>
        <ReferenceDataTable  pageName="home" />
        <UserDataTable  pageName="home"/>
      </div>
    </div>
  </div>
  )
}

export default Home