import React, { useEffect } from "react";
import Header from "../../components/Header/Header.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Slider from "../../components/Slider/Slider.jsx";
import Services from "../../components/Service/Service.jsx";
import Principles from "../../components/Principle/Principles.jsx";
import Reference from "../../components/Reference/Reference.jsx";
import Statistic from "../../components/Statistic/Statistic.jsx";
import Packet from "../../components/Packet/Packet.jsx";
import ContactMap from "../../components/Contact/index";
import Footer from "../../components/Footer/footer";
import { BsCheck2Circle, BsFillPlayCircleFill } from "react-icons/bs";
import aboutLogo from "../../Assests/Image/About/aboutLogo.jpg";
import { MdPhoneInTalk } from "react-icons/md";
import { useDispatch } from "react-redux";
import Loading from "../../pages/Loading/Loading";
import "./home.css";
import { useSelector } from "react-redux";
import { getReference } from "../../actions/references.js";
import { getStatistic } from "../../actions/statistic.js";
import {getSlogan} from "../../actions/slogan.js"
import { getPrinciple } from "../../actions/principle.js";
function Home() {
  const dispatch = useDispatch();
  const referencesData = useSelector((state)=>state.references);
  const statisticsData = useSelector((state)=>state.statistic);
  const sloganData = useSelector((state)=>state.slogan);
  const principleData = useSelector((state)=>state.principle);

  useEffect(() => {
    dispatch(getReference());
    dispatch(getStatistic());
    dispatch(getSlogan());
    dispatch(getPrinciple());
  }, [dispatch]);
  return (
    <div className="Home">
      {!sloganData.length ? (
        <Loading />
      ) : (
        <div >

          <Header>
            <Navbar />
            <Slider data={sloganData} />
          </Header>
          <div className="aboutContainer">
            <div className="innerContainer">
              <div className="aboutInfoBlock">
                <div className="slogan">Hakkımızda</div>
                <div className="text">
                 GRAFART REKLAM
                </div>
                <p>
                Grafart Reklam olarak Isparta,Antalya,İzmir bölgeleri başta olmak üzere tüm Türkiye’de yerel ve kurumsal firmalara internet reklamcılığı,sosyal medya yönetimi,web site tasarımı,tanıtım filmleri,reklam filmleri,fotoğraf çekimleri hizmetlerini sunuyoruz.
Misyonumuz iş birliği yaptığımız işletmeler ve kurumları dijital dünyada ön plana çıkartacak profesyonel ve akıllıca tasarlanmış görsel materyaller kullanılarak müşteri potansiyelini ve etkisini arttırmaktır.
Vizyonumuz dijital medya sektöründe geleneksel anlayıştan uzaklaşıp çağın getirdiği teknoloji ve yenilikçi fikirleri harmanlayarak akılda kalıcı, fark yaratan içerikler sunmak.
                </p>
                <ul>
                  <li>
                    <BsCheck2Circle className="infoBlock-icon" />
                    Müşteri memnuniyeti
                  </li>
                  <li>
                    <BsCheck2Circle className="infoBlock-icon" />
                    Sektörün Lideri
                  </li>
                  <li>
                    <BsCheck2Circle className="infoBlock-icon" />
                    7x24 Whatsapp Desteği
                  </li>
                  <li>
                    <BsCheck2Circle className="infoBlock-icon" />
                    Güvenilir Hizmet
                  </li>
                  <li>
                    <BsCheck2Circle className="infoBlock-icon" />
                    Genç kadro
                  </li>
                  <li>
                    <BsCheck2Circle className="infoBlock-icon" />
                    Öncü Hizmet
                  </li>
                </ul>
              </div>

              <div className="aboutImageBlock">
                <img src={aboutLogo} className="aboutImageBlock-image" alt="Logo"/>
                <a
                  href="https://www.youtube.com/watch?v=9W4jed2Z5Pg"
                  className="aboutVideo"
                >
                  <BsFillPlayCircleFill className="aboutVideo-icon" />
                </a>
              </div>
            </div>
          </div>
          <Services />
          <Principles principleData={principleData}/>
          <Statistic statisticsData={statisticsData} />
          <div className="contactContainer">
            <div className="innerContainer">
              <div className="widgetContent">
                <div className="text">
                  Aklınızda Bir Projeniz Varsa Hemen Bizimle İletişime Geçin.
                </div>
                <div className="button">
                  <a href="tel:544-523-5059">
                    <MdPhoneInTalk
                      style={{
                        width: "25px",
                        height: "25px",
                        marginRight: "10px",
                      }}
                    />{" "}
                    iletişime Geç
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Reference referencesData={referencesData}/>
          <Packet />
          <div className="topSeciton">
            <div className="contactMapHeader">
              <p className="contactMapSlogan">İLETİŞİM</p>
              <div className="text">İşletmeniz Kanatlarımız Altında!</div>
              <p style={{ marginTop: "20px", color: "rgba(255,255,255,0.65)" }}>
                İletişim bilgilerimizden bize gün içi her saat ulaşabilirsiniz.
                İlgili tüm konularda sizlere her konuda destek vermekten büyük
                mutluluk duyarız.
              </p>
            </div>
          </div>
          <ContactMap />
          <Footer />
         
      
        </div>

      )}
    </div>
  );
}
export default Home;
