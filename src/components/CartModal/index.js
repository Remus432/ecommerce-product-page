import React from 'react'
// Images
import MainProductImg from "../../images/image-product-1-thumbnail.jpg"
import TrashbinIcon from "../../images/icon-delete.svg"
// Styling
import "./index.scss"
// Children Components
import Button from "../Button"
// Redux
import { useSelector, useDispatch } from "react-redux"
import { selectCartQuantity, selectIsModalOpen, selectProductName, selectProductPrice, delProduct } from '../../features/products/productsSlice'

const CartModal = () => {
  const dispatch = useDispatch()

  const isModalOpen = useSelector(selectIsModalOpen)
  const cartQuantity = useSelector(selectCartQuantity)
  const productName = useSelector(selectProductName)
  const productPrice = useSelector(selectProductPrice)

  const delProductClick = () => {
    console.log("clicked")
    dispatch(delProduct())
  }

  return (
    <>
      {
        isModalOpen && (
          <div className="cart-modal">
            <span className="cart-modal__label">Cart</span>
            <div className="cart-modal__products">
              { cartQuantity === 0 && <p className="cart-modal__empty">Your cart is empty.</p> } 
              { cartQuantity > 0 && (
                <div className="cart-modal__checkout">
                  <div className="cart-modal__product">
                    <img className="cart-modal__product-img" src={MainProductImg} alt="Fall Limited Edition Sneakers Pic" />
                    <div className="cart-modal__product-info">
                      <p className="cart-modal__product-name">{productName}</p>
                      <p className="cart-modal__product-price">
                        ${productPrice.toFixed(2)} x {cartQuantity} 
                        <span className="cart-modal__product-price-total">${(productPrice * cartQuantity).toFixed(2)}</span>
                      </p>
                    </div>
                    <img onClick={() => delProductClick()} className="cart-modal__product-del" src={TrashbinIcon} alt="Trash Icon" />
                  </div>
                  <Button />
                </div>
              )}           
            </div>
          </div>
        )
      }
    </>
  )
}

export default CartModal
