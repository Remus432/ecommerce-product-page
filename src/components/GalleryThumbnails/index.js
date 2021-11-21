import React from 'react'
// Images
import ThumbnailOne from "../../images/image-product-1-thumbnail.jpg"
import ThumbnailTwo from "../../images/image-product-2-thumbnail.jpg"
import ThumbnailThree from "../../images/image-product-3-thumbnail.jpg"
import ThumbnailFour from "../../images/image-product-4-thumbnail.jpg"
// Styling
import "./index.scss"
// Redux
import { useDispatch, useSelector } from "react-redux"
import { changeCurrImg, selectCurrentImg } from "../../features/gallery/gallerySlice"

const GalleryThumbnails = () => {
  const dispatch = useDispatch()
  const currentImg = useSelector(selectCurrentImg)

  const selectImg = (e) => {
    if (e.target.classList.contains("gallery__thumbnail-img")) {
      const parentEl = e.target.parentElement
      document.querySelectorAll(".gallery__thumbnail").forEach(item => item.classList.remove("selected"))
      parentEl.classList.add("selected")
      // Change state
      dispatch(changeCurrImg({ id: parentEl.id }))
    }
  }

  return (
    <div>
      <div className="gallery__main">
        <img src={currentImg} alt="Main Product" />
      </div>
      <div onClick={e => selectImg(e)} className="gallery__thumbnails">
        <div id="1" className="gallery__thumbnail selected">
          <img className="gallery__thumbnail-img" src={ThumbnailOne} alt="Product Thumbnail" />
        </div>
        <div id="2" className="gallery__thumbnail">
          <img className="gallery__thumbnail-img" src={ThumbnailTwo} alt="Product Thumbnail" />
        </div>
        <div id="3" className="gallery__thumbnail">
          <img className="gallery__thumbnail-img" src={ThumbnailThree} alt="Product Thumbnail" />
        </div>
        <div id="4" className="gallery__thumbnail">
          <img className="gallery__thumbnail-img" src={ThumbnailFour} alt="Product Thumbnail" />
        </div>
      </div>
    </div>
  )
}

export default GalleryThumbnails
