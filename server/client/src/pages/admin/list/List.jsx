import "./list.scss"
import Navbar from '../../../components/admin/navbar/Navbar';
import Sidebar from '../../../components/admin/sidebar/Sidebar';
import Datatable from "../../../components/admin/datatable/Datatable"
import React,{useEffect} from 'react'
import { useDispatch } from "react-redux";
import {getPosts} from "../../../actions/posts"

const List = ({setCurrentId}) => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getPosts());
  },[dispatch])
  
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable setCurrentId={setCurrentId} pageName="list" />
      </div>
    </div>
  )
}

export default List