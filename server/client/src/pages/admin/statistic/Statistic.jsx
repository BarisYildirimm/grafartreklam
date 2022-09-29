import React from 'react'
import "./statistic.scss"

function Statistic({length,reference,user}) {
  return (
    <div className="adminStatistic">
      <div className="statisticItem">
        <span className="statisticTitle">Haber Sayısı</span>
        <div className="adminStatisticContainer">
        {!length ? 0 : (
          <span className="statisticLength">{length}</span>
          )}
        </div>
        
       </div>
       <div className="statisticItem">
        <span className="statisticTitle">Referans Sayısı</span>
        <div className="adminStatisticContainer">
        {!reference ? 0 : (
          <span className="statisticLength">{reference}</span>
          )}
        </div>
        
       </div>
       <div className="statisticItem">
        <span className="statisticTitle">Admin Sayısı</span>
        <div className="adminStatisticContainer">
        {!user ? 0 : (
          <span className="statisticLength">{user}</span>
          )}
        </div>
        
       </div>
    </div>
  )
}

export default Statistic