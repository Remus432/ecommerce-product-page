import React from 'react'
// Icons
import CloseModalIcon from "../../images/icon-close.svg"
// Children Component
import GalleryThumbnails from "../GalleryThumbnails"
// Styling
import "./index.scss"
// Redux
import { useSelector, useDispatch } from "react-redux"
import { selectIsGalleryModalOpen, toggleGalleryModal } from '../../features/gallery/gallerySlice'

const GalleryModal = () => {
  const dispatch = useDispatch()
  const isGalleryModalOpen = useSelector(selectIsGalleryModalOpen)

  const toggleGalleryModalClick = () => {
    dispatch(toggleGalleryModal())
  }

  return (
    <>
      {
        isGalleryModalOpen && (
          <div className="gallery-modal">
            <img onClick={() => toggleGalleryModalClick()} className="gallery-modal__close" src={CloseModalIcon} alt="Close Modal Icon" />
            <GalleryThumbnails />
          </div>
        )
      }
    </>
  )
}

export default GalleryModal
