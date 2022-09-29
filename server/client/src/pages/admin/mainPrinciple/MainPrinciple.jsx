import React,{useEffect} from 'react'
import "./mainPrinciple.scss"
import Navbar from '../../../components/admin/navbar/Navbar';
import Sidebar from '../../../components/admin/sidebar/Sidebar';
import PrincipleDataTable from  "../../../components/admin/principleDataTable/PrincipleDataTable"
import { useDispatch } from 'react-redux';
import { getPrinciple } from '../../../actions/principle';
function MainPrinciple({setPrincipleId}) {
  const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getPrinciple());
    },[dispatch])
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <PrincipleDataTable setPrincipleId={setPrincipleId} />
      </div>
    </div>
  )
}
export default MainPrinciple