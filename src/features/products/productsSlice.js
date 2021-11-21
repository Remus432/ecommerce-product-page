import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  name: "Fall Limited Edition Sneakers",
  quantity: 0,
  price: 125.00,
  cartQuantity: 0,
  isModalOpen: false
}

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state) => {
      state.cartQuantity += state.quantity
    },
    increaseQuantity: (state) => {
      state.quantity++
    },
    decreaseQuantity: (state) => {
      if (state.quantity > 0) state.quantity--
    },
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen
    },
    delProduct: (state) => {
      state.quantity = 0
      state.cartQuantity = 0
    }
  }
})

export const { addToCart, increaseQuantity, decreaseQuantity, toggleModal, delProduct } = productsSlice.actions

export const selectProductName = (state) => state.products.name
export const selectProductQuantity = (state) => state.products.quantity
export const selectIsAddedToCart = (state) => state.products.isAddedToCart
export const selectCartQuantity = (state) => state.products.cartQuantity
export const selectIsModalOpen = (state) => state.products.isModalOpen
export const selectProductPrice = (state) => state.products.price

export default productsSlice.reducer