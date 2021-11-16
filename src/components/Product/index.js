import React from 'react'
// Children Components
import ProductGallery from "../ProductGallery"
import ProductDescription from "../ProductDescription"
import ProductPricing from "../ProductPricing"
import AddProduct from "../AddProduct"
// Stylings
import "./index.scss"

const Product = () => {
  return (
    <div className="product">
      <ProductGallery />
      <div className="product__presentation">
        <ProductDescription />
        <ProductPricing />
        <AddProduct />
      </div>
    </div>
  )
}

export default Product
