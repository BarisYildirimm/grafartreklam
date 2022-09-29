import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import "./principle.css"

export default function Principles({principleData}) {
    return  <div className="principleContainer">
    <div className="innerContainer">
        <div className="principleHeader">
            <a href="/" className="principleSlogan">HİZMETLERİMİZ</a>
            <div className="text">Sizlere Neler Sunuyoruz? </div>
        </div>
        <div className="principleCard">
          <Swiper
             breakpoints= {{
              0: {
               slidesPerView: 1,
               
             },
             768: {
               slidesPerView:2,
               
               },
             992: {
               slidesPerView:3,
               
               },
           }}
            modules={[ Autoplay]}
            slidesPerView={3}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
          }}
        >
      {principleData.map((item)=>(
                  <SwiperSlide key={item._id}>
                    <div className="Card">
                          <div className="icon"><img alt="icon" src={item.selectedFile}/></div>
                          <div className="title">{item.title}</div>
                          <div className="cardDesc">{item.desc}</div>
                      </div>
                  </SwiperSlide>
                  
              ))}
      </Swiper>
           
        </div>
    </div>
</div>
  }
  