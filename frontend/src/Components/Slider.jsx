import React, { useState, useEffect } from 'react';
import './Slider.css';
import { useDispatch, useSelector } from 'react-redux';
import { itemFetch } from '../features/itemSlice';

const Slider = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(itemFetch());
  }, [dispatch]);

  const { items: allitems} = useSelector((state) => state.items);
  const filteritems = allitems.filter((item) => item.category === 'sliders');

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = filteritems.length;
  const visibleSlides = 4; // Number of slides visible at a time

  useEffect(() => {
    const interval = setInterval(() => {
      // Update slide every 3 seconds
      setCurrentSlide((prevSlide) => (prevSlide === totalSlides - visibleSlides ? 0 : prevSlide + 1));
    }, 3000); // Adjust interval timing as needed (e.g., every 3 seconds)

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className='slider'>
      <ul
        className='img-slider'
        style={{ transform: `translateX(-${(100 / visibleSlides) * currentSlide}%)` }}
      >
        {filteritems.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={`Slide ${index + 1}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Slider;
