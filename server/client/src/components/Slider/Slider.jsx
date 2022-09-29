import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import "./styles.css";

export default function Slider({data}){
    return(
        <div className="slider">
          <div className="scroll-down">

          </div>
          <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 15000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((item)=>(
                <SwiperSlide key={item._id}>
                    <img src={item.selectedFile} alt={item.title}/>
                </SwiperSlide>
            ))}
      </Swiper>
    </div>
    )
}