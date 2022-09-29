import React from "react";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/Header.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import PageHeader from "../../components/pageHeader/index";
import ekip from "../../Assests/Image/About/ekip.jpg";
import Aside from "../../components/Aside/Aside";
import "./about.scss";
function About() {
  return (
    <div>
    <Header>
      <Navbar />
    </Header>
    <PageHeader title="Hakkımızda" />
    <div className="blog">
      <div className="mainBlog">
        <div className="about-container">
          <div className="innerAbout-container">
            <img className="aboutImage" src={ekip} alt="resim"/>
            <p>Grafart Reklam olarak Isparta,Antalya,İzmir bölgeleri başta olmak üzere tüm Türkiye’de yerel ve kurumsal firmalara internet reklamcılığı,sosyal medya yönetimi,web site tasarımı,tanıtım filmleri,reklam filmleri,fotoğraf çekimleri hizmetlerini sunuyoruz.
Misyonumuz iş birliği yaptığımız işletmeler ve kurumları dijital dünyada ön plana çıkartacak profesyonel ve akıllıca tasarlanmış görsel materyaller kullanılarak müşteri potansiyelini ve etkisini arttırmaktır.
Vizyonumuz dijital medya sektöründe geleneksel anlayıştan uzaklaşıp çağın getirdiği teknoloji ve yenilikçi fikirleri harmanlayarak akılda kalıcı, fark yaratan içerikler sunmak.</p>
          </div>
        </div>
        <Aside />
      </div>
    </div>
    <Footer />
    
  </div>
  );
}

export default About;
