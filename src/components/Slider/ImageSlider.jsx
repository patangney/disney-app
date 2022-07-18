import React from 'react'
import Slider from 'react-slick'
// Import css files
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  }
  return (
    <div className='slider'>
      <Slider {...settings}>
        <div className='slider__wrapper'>
          <img src='/assets/images/slider-badging.jpg' alt='slider' />
        </div>
        <div className='slider__wrapper'>
          <img src='/assets/images/slider-badag.jpg' alt='slider' />
        </div>
      </Slider>
    </div>
  )
}

export default ImageSlider
