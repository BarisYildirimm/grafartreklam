import React from 'react'
import "./style.css"
import gifLoading from "../../Assests/Image/loading/Başlıksız-2.gif"
function Loading() {
  return (
    <div className='loadingContainer'>
    <img  src={gifLoading} alt="yükleniyor...">
    </img>
</div>
  )
}

export default Loading