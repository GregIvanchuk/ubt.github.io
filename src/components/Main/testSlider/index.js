import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
       <img src="/images/slide1.jpg" alt="" />
      </div>
      <div>
      <img src="/images/slide1.jpg" alt="" />
      </div>
      <div>
      <img src="/images/slide1.jpg" alt="" />
      </div>
    </Slider>
  );
};

export default testSlider;