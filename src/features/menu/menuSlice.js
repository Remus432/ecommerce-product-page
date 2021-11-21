import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isMenuOpen: false
}

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen
    }
  }
})


export const { toggleMenu } = menuSlice.actions
export const selectIsMenuOpen = (state) => state.menu.isMenuOpen

export default menuSlice.reducer