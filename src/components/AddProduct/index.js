import React from 'react'
// Children Components
import ProductAmountCounter from "../ProductAmountCounter"
import Button from "../Button"
// Styling
import "./index.scss"
// Redux
import { useDispatch } from "react-redux"
import { addToCart } from "../../features/products/productsSlice"

const AddProduct = () => {
  const dispatch = useDispatch()

  const addToCartClick = () => {
    dispatch(addToCart())
  }

  return (
    <div className="add-product">
      <ProductAmountCounter />
      <Button addToCartClick={addToCartClick} type="cart" />
    </div>
  )
}

export default AddProduct
