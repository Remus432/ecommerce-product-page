import React, { useState, useEffect } from 'react'
import GallerySlider from "../GallerySlider"
import GalleryThumbnails from "../GalleryThumbnails"
import "./index.scss"

const ProductGallery = () => {
  const [ windowSize, setWindowSize ] = useState(0)
  
  useEffect(() => {
    window.addEventListener("resize", e => {
      setWindowSize(e.target.innerWidth)
    })
  }, [windowSize])
  return (
    <div className="gallery">
      {
        windowSize < 1440 ? <GallerySlider /> : <GalleryThumbnails />
      }
    </div>
  )
}

export default ProductGallery
