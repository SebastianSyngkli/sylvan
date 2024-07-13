import React,{ useEffect }  from 'react';
import './Hero.css';
import hero_bg1 from '../assets/logo/hero_bg1.png';
import { useDispatch, useSelector } from 'react-redux';
import { itemFetch } from '../features/itemSlice';

const Hero = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(itemFetch());
  }, [dispatch]);

  const { items: allitems, status } = useSelector((state) => state.items);
  const filteritems = allitems.filter((item) => item.category === 'mainhomepage');
  return (
    <div className='hero'>
      {filteritems.map((item) => (
          <img src={item.image} alt="Hero Background" /> 
      ))}
       
            <div className="hero-text">
                <h2>Sylvan Horizon Resort</h2>
                <p>“A place where the surface of the Earth’s and the sky appear to meet”</p>
        </div>
       
    </div>
  );
};

export default Hero;