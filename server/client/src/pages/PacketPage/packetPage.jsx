import React from 'react'
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/Header.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import PageHeader from "../../components/pageHeader/index";
import Packet from '../../components/Packet/Packet';
import "./packetPage.scss"
function packetPage() {
  return (
    <div>
    <Header>
      <Navbar />
    </Header>
    <PageHeader title="Paketler" />
    <div className="blog">
      <div className="mainBlog">
        <div className="packetPageContainer">
          <div className='packetPageInner'>
            <Packet/>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default packetPage