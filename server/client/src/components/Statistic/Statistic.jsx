import React, { useState } from "react";
import "./statistic.css"
import {DiReact} from "react-icons/di"
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import {MdOutlineMiscellaneousServices} from "react-icons/md"
import {RiCustomerService2Fill,RiTeamFill} from "react-icons/ri"
import {FiMapPin} from "react-icons/fi"
export default function Statistic({statisticsData}){
    const [counterOn,setCounterOn] = useState(false);

    return(
       
            <div className="statisticContainer">
            <div className="innerContainer">
                <div className="statisticHeader">
                    <a href="/" className="statisticSlogan">SAYILARLA BİZ</a>
                    <div className="text">Bugüne Kadar Neler Yaptık? </div>
                </div>
                <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=>setCounterOn(false)}>
                    <div className="iconList">
                        <div className="item-container">
                            <div className="item">
                                <div className="icon"><DiReact style={{width: "30px",height: "30px"}}/></div>
                                <div className="number">
                                    {counterOn && <CountUp start={0} end={statisticsData.project} duration={1} delay={0}/>}
                                    +</div>
                                <div className="text">Proje</div>
                            </div>
                        </div>
                        <div className="item-container">
                            <div className="item">
                                <div className="icon"><FiMapPin style={{width: "30px",height: "30px"}}/></div>
                                <div className="number">{counterOn && <CountUp start={0} end={statisticsData.product} duration={1} delay={0}/>}</div>
                                <div className="text">Şehir</div>
                            </div>
                        </div>
                        <div className="item-container">
                            <div className="item">
                                <div className="icon"><MdOutlineMiscellaneousServices style={{width: "30px",height: "30px"}}/></div>
                                <div className="number">{counterOn && <CountUp start={0} end={statisticsData.service} duration={1} delay={0}/>}+</div>
                                <div className="text">Hizmet Çeşidi</div>
                            </div>
                        </div>
                        <div className="item-container">
                            <div className="item">
                                <div className="icon"><RiCustomerService2Fill style={{width: "30px",height: "30px"}}/></div>
                                <div className="number">{counterOn &&<CountUp start={0} end={statisticsData.help} duration={1} delay={0}/>}+</div>
                                <div className="text">Tecrübe Yılı</div>
                            </div>
                        </div>
                        <div className="item-container">
                            <div className="item">
                                <div className="icon"><RiTeamFill style={{width: "30px",height: "30px"}}/></div>
                                <div className="number">{counterOn &&<CountUp start={0} end={statisticsData.team} duration={1} delay={0}/>}</div>
                                <div className="text">Firma Çalışanı</div>
                            </div>
                        </div>
                    </div>
                </ScrollTrigger>
            </div>
        </div>
        
        
    )

}