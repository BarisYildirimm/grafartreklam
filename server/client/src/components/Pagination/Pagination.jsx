import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Blogs from "../../components/Blog/Blogs.jsx";
import "./pagination.scss"
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";
import { useSelector } from "react-redux";
function Pagination() {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const [currentItems, setCurrentItems] = useState();
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(Object.values(items).slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset,itemsPerPage,items]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };
  return (
    <div>
      <Blogs post={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="devam >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< geri"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName='page-num'
        previousLinkClassName='page-num'
        nextLinkClassName='page-num'
        activeLinkClassName='active'
      />
    </div>
  );
}

export default Pagination