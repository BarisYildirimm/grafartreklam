import React, { useEffect,useState } from "react";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/Header.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import PageHeader from "../../components/pageHeader/index";
import Blogs from "../../components/Blog/Blogs.jsx";
import Aside from "../../components/Aside/Aside.jsx";
import "./blog.css";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";
import Loading from "../Loading/Loading";
import { useSelector } from "react-redux";
import Pagination from "../../components/Pagination/Pagination";
function Blog() {
  const [currentPage,setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = post.slice(indexOfFirstPost,indexOfLastPost);

  const paginate = (pageNumber)=> setCurrentPage(pageNumber);

  return (
    <div>
      {!currentPosts.length ? (
        <Loading />
      ) : (
        <div>
          <Header>
            <Navbar />
          </Header>
          <PageHeader title="Blog" />
          <div className="blog">
            <div className="mainBlog">
              <div className="pagenationContainer">
              <Blogs post={currentPosts}  />
              <Pagination
               postsPerPage={postsPerPage} 
               totalPosts={post.length}
               paginate={paginate}

              />
              </div>
              <Aside />
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Blog;
