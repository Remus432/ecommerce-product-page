import React from 'react'
// Icons
import WhiteCartIcon from "../../images/icon-cart-white.svg"
// Styling
import "./index.scss"

const Button = ({ type }) => {
  return (
    <>
      <button class="btn">{ type === "cart" ? (
        <>
          <img src={WhiteCartIcon} /> 
          <span>Add to cart</span>
        </> 
        ) : "Checkout"}</button>
    </>
  )
}

export default Button
