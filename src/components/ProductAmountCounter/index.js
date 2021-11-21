import React from 'react'
import { useDispatch, useSelector } from "react-redux"
// Icons
import MinusIcon from "../../images/icon-minus.svg"
import PlusIcon from "../../images/icon-plus.svg"
// Styling
import "./index.scss"
// Redux Actions
import { increaseQuantity, decreaseQuantity, selectProductQuantity } from "../../features/products/productsSlice"

const ProductAmountCounter = () => {
  const dispatch = useDispatch()
  const quantity = useSelector(selectProductQuantity)

  return (
    <div className="product-amount-counter">
      <img onClick={() => dispatch(decreaseQuantity())}  className="product-amount-counter__operation product-amount-counter__operation--subtract" src={MinusIcon} alt="Minus Icon" />
      <span className="product-amount-counter__count">{quantity}</span>
      <img onClick={() => dispatch(increaseQuantity())} className="product-amount-counter__operation product-amount-counter__operation--subtract" src={PlusIcon} alt="Plus Icon" />
    </div>
  )
}

export default ProductAmountCounter
