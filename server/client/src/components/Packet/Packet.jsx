import React from "react";
import {AiOutlineCheck,AiOutlineClose,AiFillPlusCircle} from "react-icons/ai"
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
                                <div className="title">Ekonomik Paket</div>
                                    <div className="priceInfo">
                                    <div className="price">499₺</div>
                                    <div className="slogan">Başlangıç için en uygun</div>
                                    <div className="descPacket">1 Aylık Sosyal Medya Paketi</div>
                                </div>

                                <div className="spec"><AiOutlineCheck/> 10 Sosyal Medya Postu</div>
                                <div className="spec"><AiOutlineCheck /> 10 Sosyal Medya Story</div>
                                <div className="spec"><AiOutlineCheck/> 2 Reels Video</div>
                                <div className="spec"><AiOutlineCheck/> </div>
                                <div className="spec"><AiOutlineCheck /> </div>
                                <div className="spec"><AiOutlineCheck/> </div>
                                <div className="spec"><AiOutlineClose style={{color:"red",fontSize:"20px"}}/>1 Tanıtım Videosu </div>
                                <a href="https://wa.me/05445235059"><div className="link">Satın Al</div></a>
                            </div>
                        </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="itemContainer">
                            <div className="item">
                                <div className="title">Giriş Paketi</div>
                                    <div className="priceInfo">
                                    <div className="price">499$</div>
                                    <div className="slogan">Başlangıç için en uygun</div>
                                    <div className="descPacket">Buraya paketle ilgili kısa bir açıklama </div>
                                </div>

                                <div className="spec"><AiOutlineCheck/> Bu alanda paketle ilgili</div>
                                <div className="spec"><AiOutlineCheck/> Bir takım bilgileri</div>
                                <div className="spec"><AiOutlineCheck/> Tik işareti ile</div>
                                <div className="spec"><AiOutlineClose/>Ya da çarpı işareti ile </div>
                                <div className="spec"><AiFillPlusCircle/>Ya da tema ikonları ile</div>
                                <div className="spec"> Ya da simgesiz gösterebilirsiniz.</div>
                                <div className="spec"><a href="!#"> HTML</a> etiketleri de kullanılabilir.</div>
                                <a href="https://wa.me/05445235059"><div className="link">Satın Al</div></a>
                            </div>
                        </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="itemContainer">
                            <div className="item">
                                <div className="title">Giriş Paketi</div>
                                    <div className="priceInfo">
                                    <div className="price">499$</div>
                                    <div className="slogan">Başlangıç için en uygun</div>
                                    <div className="descPacket">Buraya paketle ilgili kısa bir açıklama metni ekleyebilirsiniz.</div>
                                </div>

                                <div className="spec"><AiOutlineCheck/> Bu alanda paketle ilgili</div>
                                <div className="spec"><AiOutlineCheck/> Bir takım bilgileri</div>
                                <div className="spec"><AiOutlineCheck/> Tik işareti ile</div>
                                <div className="spec"><AiOutlineClose/>Ya da çarpı işareti ile </div>
                                <div className="spec"><AiFillPlusCircle/>Ya da tema ikonları ile</div>
                                <div className="spec"> Ya da simgesiz gösterebilirsiniz.</div>
                                <div className="spec"><a href="!#"> HTML</a> etiketleri de kullanılabilir.</div>
                                <a href="https://wa.me/05445235059"><div className="link">Satın Al</div></a>
                            </div>
                        </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="itemContainer">
                            <div className="item">
                                <div className="title">Giriş Paketi</div>
                                    <div className="priceInfo">
                                    <div className="price">499$</div>
                                    <div className="slogan">Başlangıç için en uygun</div>
                                    <div className="descPacket">Buraya paketle ilgili kısa bir açıklama metni ekleyebilirsiniz.</div>
                                </div>

                                <div className="spec"><AiOutlineCheck/> Bu alanda paketle ilgili</div>
                                <div className="spec"><AiOutlineCheck/> Bir takım bilgileri</div>
                                <div className="spec"><AiOutlineCheck/> Tik işareti ile</div>
                                <div className="spec"><AiOutlineClose/>Ya da çarpı işareti ile </div>
                                <div className="spec"><AiFillPlusCircle/>Ya da tema ikonları ile</div>
                                <div className="spec"> Ya da simgesiz gösterebilirsiniz.</div>
                                <div className="spec"><a href="!#"> HTML</a> etiketleri de kullanılabilir.</div>
                                <a href="https://wa.me/05445235059"><div className="link">Satın Al</div></a>
                            </div>
                        </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="itemContainer">
                            <div className="item">
                                <div className="title">Giriş Paketi</div>
                                    <div className="priceInfo">
                                    <div className="price">499$</div>
                                    <div className="slogan">Başlangıç için en uygun</div>
                                    <div className="descPacket">Buraya paketle ilgili kısa bir açıklama metni ekleyebilirsiniz.</div>
                                </div>

                                <div className="spec"><AiOutlineCheck/> Bu alanda paketle ilgili</div>
                                <div className="spec"><AiOutlineCheck/> Bir takım bilgileri</div>
                                <div className="spec"><AiOutlineCheck/> Tik işareti ile</div>
                                <div className="spec"><AiOutlineClose/>Ya da çarpı işareti ile </div>
                                <div className="spec"><AiFillPlusCircle/>Ya da tema ikonları ile</div>
                                <div className="spec"> Ya da simgesiz gösterebilirsiniz.</div>
                                <div className="spec"><a href="!#"> HTML</a> etiketleri de kullanılabilir.</div>
                                <a href="https://wa.me/05445235059"><div className="link">Satın Al</div></a>
                            </div>
                        </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="itemContainer">
                            <div className="item">
                                <div className="title">Giriş Paketi</div>
                                    <div className="priceInfo">
                                    <div className="price">499$</div>
                                    <div className="slogan">Başlangıç için en uygun</div>
                                    <div className="descPacket">Buraya paketle ilgili kısa bir açıklama metni ekleyebilirsiniz.</div>
                                </div>

                                <div className="spec"><AiOutlineCheck/> Bu alanda paketle ilgili</div>
                                <div className="spec"><AiOutlineCheck/> Bir takım bilgileri</div>
                                <div className="spec"><AiOutlineCheck/> Tik işareti ile</div>
                                <div className="spec"><AiOutlineClose/>Ya da çarpı işareti ile </div>
                                <div className="spec"><AiFillPlusCircle/>Ya da tema ikonları ile</div>
                                <div className="spec"> Ya da simgesiz gösterebilirsiniz.</div>
                                <div className="spec"><a href="!#"> HTML</a> etiketleri de kullanılabilir.</div>
                                <a href="https://wa.me/05445235059"><div className="link">Satın Al</div></a>
                            </div>
                        </div>
                            </SwiperSlide>
                        </Swiper>
                        
                       

                    </div>
                </div>
         </div>
    )
}