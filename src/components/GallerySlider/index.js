import React from 'react'
// Images
import ProductImgOne from "../../images/image-product-1.jpg";
import ProductImgTwo from "../../images/image-product-2.jpg";
import ProductImgThree from "../../images/image-product-3.jpg";
import ProductImgFour from "../../images/image-product-4.jpg";
// Icons
import PrevIcon from "../../images/icon-previous.svg";
import NextIcon from "../../images/icon-next.svg";
// Stylings
import "./index.scss"

const GallerySlider = () => {
  return (
    <div className="gallery-slider">
      <div className="gallery-slider__controls">
        <img className="gallery-slider__prev-btn" src={PrevIcon} alt="Previous" />
        <img className="gallery-slider__next-btn" src={NextIcon} alt="Next" />
      </div>
      <div className="gallery-slider__img-wrapper">
        <img src={ProductImgOne} alt="Product" className="gallery-slider__img-el" />
      </div>
      <div className="gallery-slider__img-wrapper">
        <img src={ProductImgTwo} alt="Product" className="gallery-slider__img-el" />
      </div>
      <div className="gallery-slider__img-wrapper">
        <img src={ProductImgThree} alt="Product" className="gallery-slider__img-el" />
      </div>
      <div className="gallery-slider__img-wrapper">
        <img src={ProductImgFour} alt="Product" className="gallery-slider__img-el" />
      </div>
    </div>
  )
}

export default GallerySlider
