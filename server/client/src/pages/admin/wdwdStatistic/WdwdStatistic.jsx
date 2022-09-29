import React, { useState,useEffect } from 'react'
import Sidebar from '../../../components/admin/sidebar/Sidebar'
import Navbar from '../../../components/admin/navbar/Navbar'
import "./wdwd.scss"
import Statistic from '../../../components/Statistic/Statistic'
import Button from '@mui/material/Button';
import  {useDispatch, useSelector}  from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateStatistic } from '../../../actions/statistic'
import { getStatistic } from '../../../actions/statistic'

function WdwdStatistic() {
    const dispatch = useDispatch();
    const history = useNavigate();

    useEffect(()=>{
        dispatch(getStatistic());
      },[dispatch])
      
    const statistics = useSelector((state)=>state.statistic);
    const [statisticData,setStatisticData] = useState({
        project:statistics.project,
        product:statistics.product,
        service:statistics.service,
        help:statistics.help,
        team:statistics.team,
    })
    
   

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(updateStatistic(statistics._id,{...statisticData},history));
    }

  return (
    <div className='new'>
        <Sidebar/>
        <div className='newContainer'>
            <Navbar/>
            <div className="top">
             <h1>İstatistik</h1>
             </div>
            <div className='bottom'>
                <div className='bottomContainerwdwd'>
                    <Statistic statisticsData={statistics}/>
                    <form onSubmit={handleSubmit} method="PATCH" className='wdwdForm'>
                        <div className='inputs'>
                            <input
                            name="project"
                            type="text" 
                            value={statisticData.project}
                            onChange={(e)=> setStatisticData({...statisticData,project:e.target.value})}
                            placeholder="Proje" 
                            />
                            <input
                            name="product"
                            type="text" 
                            value={statisticData.product}
                            onChange={(e)=> setStatisticData({...statisticData,product:e.target.value})}
                            placeholder="Ürünler" 
                            />
                            <input
                            name="service"
                            type="text" 
                            value={statisticData.service}
                            onChange={(e)=> setStatisticData({...statisticData,service:e.target.value})}
                            placeholder="Hizmet" 
                            />
                            <input
                            name="help"
                            type="text" 
                            value={statisticData.help}
                            onChange={(e)=> setStatisticData({...statisticData,help:e.target.value})}
                            placeholder="Yardım" 
                            />
                            <input
                            name="team"
                            type="text" 
                            value={statisticData.team}
                            onChange={(e)=> setStatisticData({...statisticData,team:e.target.value})}
                            placeholder="Ekip" 
                            />
                        </div>
                    <div className='submitButton'>
                         <Button type='submit' size="medium" variant="contained" color="success">İstatistik Güncelle</Button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WdwdStatistic