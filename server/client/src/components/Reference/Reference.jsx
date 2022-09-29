import React from 'react'
import "./reference.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

function reference({referencesData}) {
  return (
    <div className="referenceContainer" id='referans'>
    <div className="referenceInnerContainer">
          <div className="referenceHeader">
            <p className="referenceSlogan">Referanslar</p>
            <div className="text">Referanslar</div>
          </div>
        <div  className="referenceItems">
        <Swiper
         breakpoints= {{
          0:{
            slidesPerView: 1,
           
          },
          320: {
            slidesPerView: 2,
           
          },
          768: {
            slidesPerView:3,

            },
          992: {
            slidesPerView:6,
            },
       }}
          modules={[ Autoplay]}
          slidesPerView={6}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
         }}
    >
     {referencesData.map((item)=>(
                <SwiperSlide key={item._id}>
                    <img src={item.selectedFile} alt={item.title}/>
                </SwiperSlide>
                
            ))}
    </Swiper>
                
         
        </div>
    </div>
</div>
  )
}

export default reference