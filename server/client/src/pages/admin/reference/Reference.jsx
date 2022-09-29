import Navbar from '../../../components/admin/navbar/Navbar';
import Sidebar from '../../../components/admin/sidebar/Sidebar';
import ReferenceDataTable from '../../../components/admin/referenceTable/ReferenceDataTable';
import "./reference.scss"
import React,{useEffect} from 'react'
import { useDispatch } from "react-redux";
import {getReference} from "../../../actions/references"
function Reference({setReferenceId}) {
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getReference());
    },[dispatch])
  return (
    <div className='adminReference'>
        <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <ReferenceDataTable setReferenceId={setReferenceId}  pageName="list"/>
      </div>
    </div>
  )
}

export default Reference