import { createSlice } from "@reduxjs/toolkit"
// Images
import LgImgOne from "../../images/image-product-1.jpg"
import LgImgTwo from "../../images/image-product-2.jpg"
import LgImgThree from "../../images/image-product-3.jpg"
import LgImgFour from "../../images/image-product-4.jpg"

const initialState = {
  type: "lightbox",
  currentImg: 0,
  imgsArr : [LgImgOne, LgImgTwo, LgImgThree, LgImgFour],
  isGalleryModalOpen: false
}

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    toggleGalleryModal: (state) => {
      state.isGalleryModalOpen = !state.isGalleryModalOpen
    },
    changeCurrImg: (state, action) => {
      state.currentImg = action.payload.id-1
      console.log(action.payload.id-1)
    }
  }
})

export const { toggleGalleryModal, changeCurrImg } = gallerySlice.actions

export const selectCurrentImg = (state) => state.gallery.imgsArr[state.gallery.currentImg]
export const selectIsGalleryModalOpen = (state) => state.gallery.isGalleryModalOpen

export default gallerySlice.reducer