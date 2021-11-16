import React from 'react'
import CartIcon from "../../images/icon-cart.svg"
import "./index.scss"

const CartNotif = () => {
  return (
    <div className="cart-notif">
      <img className="cart-notif__icon" src={CartIcon} alt="Cart Icon" />
    </div>
  )
}

export default CartNotif
