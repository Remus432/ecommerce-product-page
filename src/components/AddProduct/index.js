import React from 'react'
// Children Components
import ProductAmountCounter from "../ProductAmountCounter"
import Button from "../Button"
// Styling
import "./index.scss"

const AddProduct = () => {
  return (
    <div className="add-product">
      <ProductAmountCounter />
      <Button type="cart" />
    </div>
  )
}

export default AddProduct
