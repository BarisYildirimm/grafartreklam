import React from 'react'
import Product from '../Product'
import { productData } from './ProductData'
import "../product.css"

function products() {
    const products = productData.map((data)=>(
        <Product
        id={data.id}
        image={data.image}
        title={data.title}
        />
    ))
  return (
    <div className='productContainer'>
    <div className='innerContainer'>
        <div className='productHeader'>
            <a className="productSlogan">Girişimler</a>
             <div className="text">Yetenekli Ekibimizle Tanışın!</div>
        </div>
        <div className='items'>
        {products}
        </div>
    </div>
</div>
  )
}

export default products