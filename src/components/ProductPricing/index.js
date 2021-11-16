import React from 'react'
// Styling
import "./index.scss"

const ProductPricing = () => {
  return (
    <div className="product-pricing">
      <div className="product-pricing__new">
        <span className="product-pricing__price">$125.00</span>
        <span className="product-pricing__discount">50%</span>
      </div>
      <div className="product-pricing__old">
        <span className="product-pricing__old-price">$250.00</span>
      </div>
    </div>
  )
}

export default ProductPricing
