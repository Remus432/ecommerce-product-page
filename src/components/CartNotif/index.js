import React from 'react'
// Icons
import CartIcon from "../../images/icon-cart.svg"
// Styling
import "./index.scss"
// Redux
import { useSelector, useDispatch } from "react-redux"
import { selectCartQuantity, toggleModal } from '../../features/products/productsSlice'

const CartNotif = () => {
  const dispatch = useDispatch()
  const cartQuantity = useSelector(selectCartQuantity)

  const toggleModalClick = () => {
    dispatch(toggleModal())
  }

  return (
    <div onClick={() => toggleModalClick()} className="cart-notif">
      <img className="cart-notif__icon" src={CartIcon} alt="Cart Icon" />
      { 
        cartQuantity > 0 && <span className="cart-notif__amount">{cartQuantity}</span> 
      }
    </div>
  )
}

export default CartNotif
