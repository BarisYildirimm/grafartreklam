import React from 'react'
import "./product.css"

function Product(props) {
  return (
    <div className='itemContainer'>
    <div className='item'>
    <img className='itemImage' src={props.image} alt={props.title} />
    <div className='itemTitle'>
    <a href='!#' >{props.title}</a>
    </div>
    <a className='itemButton' href='!#'>Ürünleri İncele →	</a>
</div>
</div>
  )
}

export default Product;