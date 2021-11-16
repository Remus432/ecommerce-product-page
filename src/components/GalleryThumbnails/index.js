import React from 'react'
import MainImg from "../../images/image-product-1.jpg"
import ThumbnailOne from "../../images/image-product-1-thumbnail.jpg"
import ThumbnailTwo from "../../images/image-product-2-thumbnail.jpg"
import ThumbnailThree from "../../images/image-product-3-thumbnail.jpg"
import ThumbnailFour from "../../images/image-product-4-thumbnail.jpg"

const GalleryThumbnails = () => {
  return (
    <div>
      <div className="gallery__main">
        <img src={MainImg} alt="Product Image" />
      </div>
      <div className="gallery__thumbnails">
        <img src={ThumbnailOne} alt="Product Thumbnail" />
        <img src={ThumbnailTwo} alt="Product Thumbnail" />
        <img src={ThumbnailThree} alt="Product Thumbnail" />
        <img src={ThumbnailFour} alt="Product Thumbnail" />
      </div>
    </div>
  )
}

export default GalleryThumbnails
