import React from 'react'
// Icons
import WhiteCartIcon from "../../images/icon-cart-white.svg"
// Styling
import "./index.scss"

const Button = ({ addToCartClick, type }) => {
  return (
    <>
      <button onClick={() => addToCartClick()} className="btn">{ type === "cart" ? (
        <>
          <img src={WhiteCartIcon} alt="White Cart Icon" /> 
          <span>Add to cart</span>
        </> 
        ) : "Checkout"}</button>
    </>
  )
}

export default Button
