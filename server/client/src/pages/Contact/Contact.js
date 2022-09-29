import React from "react";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/Header.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import MapContact from "../../components/Contact/index";
import PageHeader from "../../components/pageHeader/index";

function Contact() {
  return (
    <div>
      <Header>
        <Navbar />
      </Header>
      <PageHeader title="İletişim" />
      <MapContact />
      <Footer />
    </div>
  );
}

export default Contact;
