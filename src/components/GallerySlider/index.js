import React, { useState } from 'react'
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
  const [sliderPos, setSliderPos] = useState(0)

  const slidePrevImg = () => {
    setSliderPos(sliderPos+25)
    if (sliderPos === 0) setSliderPos(-75)
  }

  const slideNextImg = () => {
    setSliderPos(sliderPos-25)
    if (sliderPos <= -75) setSliderPos(0)
  }

  return (
    <div className="gallery-slider-wrapper">
      <div className="gallery-slider__controls">
        <img onClick={() => slidePrevImg()} className="gallery-slider__prev-btn" src={PrevIcon} alt="Previous" />
        <img onClick={() => slideNextImg()} className="gallery-slider__next-btn" src={NextIcon} alt="Next" />
      </div>
      <div className="gallery-slider" style={{ transform: `translateX(${sliderPos}%)` }}>
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
    </div>
  )
}

export default GallerySlider
