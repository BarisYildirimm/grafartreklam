import React from "react";
import {AiOutlineCheck} from "react-icons/ai"
import {FaCrown} from "react-icons/fa"
import "./packet.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

export default function Packet(){
    return(
        <div className="packetContainer" id="paketler">
            <div className="innerContainer">
                <div className="packetHeader">
                            <a href="#paketler" className="packetSlogan">Paketlerimiz</a>
                            <div className="text">Fiyatlandırma Listemiz </div>
                    </div>
                    <div className="list">
                        <Swiper 
                        breakpoints= {{
                                  320: {
                                   slidesPerView: 1,
                                   spaceBetween: 10
                                 },
                                 768: {
                                   slidesPerView:2,
                                   spaceBetween:10
                                   },
                                 992: {
                                   slidesPerView:3,
                                   spaceBetween:10
                                   },
                               }}
                          modules={[ Autoplay]}
                          slidesPerView={3}
                          
                          autoplay={{
                            delay: 1000,
                            disableOnInteraction: true,
                         }}>
                            <SwiperSlide>
                            <div className="itemContainer">
                            <div className="item">
                                <div className="title">Giriş Paketi</div>
                                    <div className="priceInfo">
                                    <div className="price">2.500₺</div>
                                    <div className="slogan">Giriş için en uygun</div>
                                    <div className="descPacket">Sosyal Medya Paketi</div>
                                </div>

                                <div className="spec"><AiOutlineCheck/> 7 Sosyal Medya Postu</div>
                                <div className="spec"><AiOutlineCheck /> 7 Sosyal Medya Story</div>
                                <div className="spec"><AiOutlineCheck/> 1 Reels Video</div>
                                <div className="spec"><AiOutlineCheck/> </div>
                                <div className="spec"><AiOutlineCheck /> </div>
                                <div className="spec"><AiOutlineCheck/> </div>
                                <div className="spec"><AiOutlineCheck/> </div>
                                <div className="spec"><AiOutlineCheck /> </div>
                                <div className="spec"><AiOutlineCheck/> </div>
                                <div className="spec"><AiOutlineCheck/> </div>
                                <div className="spec"><AiOutlineCheck /> </div>
                                <div className="spec"><AiOutlineCheck/> </div>
                                <div className="spec"><AiOutlineCheck/> </div>
                                <a href="https://wa.me/05415884922"><div className="link">Satın Al</div></a>
                            </div>
                        </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="itemContainer">
                            <div className="item">
                                <div className="title">Bronz Paket</div>
                                    <div className="priceInfo">
                                    <div className="price">4.000₺</div>
                                    <div className="slogan">Sosyal Medya Paketi</div>
                                    <div className="descPacket">Sosyal Medya Paketi </div>
                                </div>

                                <div className="spec"><AiOutlineCheck/>10 Post</div>
                                <div className="spec"><AiOutlineCheck/> 10 Story</div>
                                <div className="spec"><AiOutlineCheck/> 2 Reels Video</div>
                                <div className="spec"><AiOutlineCheck/> </div>
                                <div className="spec"><AiOutlineCheck /> </div>
                                <div className="spec"><AiOutlineCheck/> </div>
                                <div className="spec"><AiOutlineCheck/> </div>
                                <div className="spec"><AiOutlineCheck/> </div>
                                <div className="spec"><AiOutlineCheck/> </div>
                                <div className="spec"><AiOutlineCheck/> </div>
                                <div className="spec"><AiOutlineCheck/> </div>
                                <div className="spec"><AiOutlineCheck/> </div>
                                <div className="spec"><AiOutlineCheck/> </div>
                                <a href="https://wa.me/05415884922"><div className="link">Satın Al</div></a>
                            </div>
                        </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="itemContainer">
                            <div className="item">
                                <div className="title">
                                    <div className="titleCrown" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                        <FaCrown style={{color:"yellow",fontSize:"30px",marginRight:"15px"}}/>
                                        <p> Gümüş Paket</p>
                                    </div>
                                   </div>
                                    <div className="priceInfo">
                                    <div className="price">5.300₺</div>
                                    <div className="slogan">Sosyal Medya Paketi</div>
                                    <div className="descPacket">Sosyal Medya Paketi</div>
                                </div>

                                <div className="spec"><AiOutlineCheck/>14 Post</div>
                                <div className="spec"><AiOutlineCheck/> 14 Story</div>
                                <div className="spec"><AiOutlineCheck/> 3 Reels Video</div>
                                <div className="spec"><AiOutlineCheck/>1 Dronlu Tanıtım Filmi </div>
                                <div className="spec"><AiOutlineCheck/>Hastag Analizi</div>
                                <div className="spec"><AiOutlineCheck/>Sosyal Medya Planlaması</div>
                                <div className="spec"><AiOutlineCheck/>Rakip Analizi</div>
                                <div className="spec"><AiOutlineCheck/> </div>
                                <div className="spec"><AiOutlineCheck/> </div>
                                <div className="spec"><AiOutlineCheck/> </div>
                                <div className="spec"><AiOutlineCheck/> </div>
                                <div className="spec"><AiOutlineCheck/> </div>
                                <div className="spec"><AiOutlineCheck/> </div>
                                <a href="https://wa.me/05415884922"><div className="link">Satın Al</div></a>
                            </div>
                        </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="itemContainer">
                            <div className="item">
                                <div className="title">Altın Paket</div>
                                    <div className="priceInfo">
                                    <div className="price">7.500₺</div>
                                    <div className="slogan">Sosyal Medya Paketi</div>
                                    <div className="descPacket">Sosyal Medya Yönetimi</div>
                                </div>

                                <div className="spec"><AiOutlineCheck/>20 Post</div>
                                <div className="spec"><AiOutlineCheck/> 20 Story</div>
                                <div className="spec"><AiOutlineCheck/> 4 Reels Video</div>
                                <div className="spec"><AiOutlineCheck/>1 Dronlu Adres Videosu </div>
                                <div className="spec"><AiOutlineCheck/>1 Tanıtım Filmi</div>
                                <div className="spec"><AiOutlineCheck/>Hastag Analizi</div>
                                <div className="spec"><AiOutlineCheck/>Sosyal Medya Planlaması</div>
                                <div className="spec"><AiOutlineCheck/>Rakip Analizi</div>
                                <div className="spec"><AiOutlineCheck/> </div>
                                <div className="spec"><AiOutlineCheck/> </div>
                                <div className="spec"><AiOutlineCheck/> </div>
                                <div className="spec"><AiOutlineCheck/> </div>
                                <div className="spec"><AiOutlineCheck/> </div>
                                <a href="https://wa.me/05415884922"><div className="link">Satın Al</div></a>
                            </div>
                        </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="itemContainer">
                            <div className="item">
                                <div className="title">Elmas Paket</div>
                                    <div className="priceInfo">
                                    <div className="price">15.000₺</div>
                                    <div className="slogan">Sosyal Medya ve web Site Paketi</div>
                                    <div className="descPacket">Sosyal Medya Yönetimi</div>
                                </div>

                                <div className="spec"><AiOutlineCheck/>25 Post</div>
                                <div className="spec"><AiOutlineCheck/> 25 Story</div>
                                <div className="spec"><AiOutlineCheck/> 4 Reels Video</div>
                                <div className="spec"><AiOutlineCheck/>1 Dronlu Adres Videosu</div>
                                <div className="spec"><AiOutlineCheck/>1 Tanıtım Filmi</div>
                                <div className="spec"><AiOutlineCheck/>Hastag Analizi</div>
                                <div className="spec"><AiOutlineCheck/>Sosyal Medya planlaması</div>
                                <div className="spec"><AiOutlineCheck/>Rakip Analizi</div>
                                <div className="spec"><AiOutlineCheck/>Kurumsal web Site</div>
                                <div className="spec"><AiOutlineCheck/> </div>
                                <div className="spec"><AiOutlineCheck/> </div>
                                <div className="spec"><AiOutlineCheck/> </div>
                                <div className="spec"><AiOutlineCheck/> </div>
                                <a href="https://wa.me/05415884922"><div className="link">Satın Al</div></a>
                            </div>
                        </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="itemContainer">
                            <div className="item">
                                <div className="title">Platinyum Paket</div>
                                    <div className="priceInfo">
                                    <div className="price">25.000₺</div>
                                    <div className="slogan">Sosyal Medya ve Web Site Paketi</div>
                                    <div className="descPacket">Sosyal Medya Yönetimi</div>
                                </div>

                                <div className="spec"><AiOutlineCheck/>30 Post</div>
                                <div className="spec"><AiOutlineCheck/> 30 Story</div>
                                <div className="spec"><AiOutlineCheck/>8 Reels Video</div>
                                <div className="spec"><AiOutlineCheck/>1 Dronlu Adres Videosu</div>
                                <div className="spec"><AiOutlineCheck/> 1 Tanıtım Filmi</div>
                                <div className="spec"><AiOutlineCheck/>1 Skeç Video</div>
                                <div className="spec"><AiOutlineCheck/>Hastag Analizi</div>
                                <div className="spec"><AiOutlineCheck/> Sosyal Medya Planlaması</div>
                                <div className="spec"><AiOutlineCheck/>Rakip Analizi</div>
                                <div className="spec"><AiOutlineCheck/>Kurumsal Web Site</div>
                                <div className="spec"><AiOutlineCheck/> Hosting+Domain</div>
                                <div className="spec"><AiOutlineCheck/>CEO Hizmeti</div>
                                <div className="spec"><AiOutlineCheck/> Sponsorlu Reklam Takibi</div>
                                <a href="https://wa.me/05415884922"><div className="link">Satın Al</div></a>
                            </div>
                        </div>
                            </SwiperSlide>
                        </Swiper>
                        
                       

                    </div>
                </div>
         </div>
    )
}