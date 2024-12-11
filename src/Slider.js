import React, { useState } from 'react';
import './Slider.css';
import dataSlider from './dataSlider';
import BtnSlider from './BtnSlider';

export default function Slider() {
  const [index, setIndex] = useState(1);

  const nextSlide = () => {
    if (index !== dataSlider.length) {
      setIndex(index + 1);
    } else {
      setIndex(1);
    }
  };

  const prevSlide = () => {
    if (index !== 1) {
      setIndex(index - 1);
    } else {
      setIndex(dataSlider.length); 
    }
  };

  return (
    <div className="container-slider">
      <h1 align='center' className='title'>Images Slider</h1>
      <div className="slide">
        <img
          src={require(`./Imgs/img${index}.jpg`)} alt={`Slide ${index}`}
        />
      </div>

      <BtnSlider moveSlide={nextSlide} direction="next" />
      <BtnSlider moveSlide={prevSlide} direction="prev" />
    </div>
  );
}
