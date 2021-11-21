import React, { useState, useEffect } from 'react'
import GallerySlider from "../GallerySlider"
import GalleryThumbnails from "../GalleryThumbnails"
import "./index.scss"

const ProductGallery = () => {
  const [ windowSize, setWindowSize ] = useState(window.innerWidth)
  
  useEffect(() => {
    window.addEventListener("resize", e => {
      setWindowSize(e.target.innerWidth)
    })
  }, [windowSize])
  return (
    <div className="gallery">
      {
        windowSize < 1360 ? <GallerySlider /> : <GalleryThumbnails />
      }
    </div>
  )
}

export default ProductGallery
