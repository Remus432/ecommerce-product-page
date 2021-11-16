import React from 'react'
// Icons
import MinusIcon from "../../images/icon-minus.svg"
import PlusIcon from "../../images/icon-plus.svg"
// Styling
import "./index.scss"

const ProductAmountCounter = () => {
  return (
    <div className="product-amount-counter">
      <img className="product-amount-counter__operation product-amount-counter__operation--subtract" src={MinusIcon} alt="Minus Icon" />
      <span className="product-amount-counter__count">0</span>
      <img className="product-amount-counter__operation product-amount-counter__operation--subtract" src={PlusIcon} alt="Plus Icon" />
    </div>
  )
}

export default ProductAmountCounter
