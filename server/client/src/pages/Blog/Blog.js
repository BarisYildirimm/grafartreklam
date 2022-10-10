import React from "react";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/Header.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import PageHeader from "../../components/pageHeader/index";
import Aside from "../../components/Aside/Aside.jsx";
import "./blog.css";

import Pagination from "../../components/Pagination/Pagination";
function Blog() {

  
  return (
    <div>
        <div>
          <Header>
            <Navbar />
          </Header>
          <PageHeader title="Blog" />
          <div className="blog">
            <div className="mainBlog">
              <div className="pagenationContainer">
                <Pagination />
              </div>
              <Aside />
            </div>
          </div>
          <Footer />
        </div>
    </div>
  );
}

export default Blog;
