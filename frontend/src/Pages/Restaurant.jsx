import React,{useEffect} from 'react'
import './Restaurant.css'
import restaurant_bg from '../assets/logo/restaurant_bg.png'
import pizza from '../assets/food/pizza.jpeg'
import chicken from '../assets/food/chicken.webp'
import chow from '../assets/food/burger.webp'
import burger from '../assets/food/chow.webp'
import fries from '../assets/food/fries.jpeg';
import { useDispatch, useSelector } from 'react-redux';
import { itemFetch } from '../features/itemSlice';

const Restaurant = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(itemFetch());
  }, [dispatch]);

  const { items: allitems} = useSelector((state) => state.items);
  const filteritems = allitems.filter((item) => item.category === 'restaurantbg');
  const filteritemsitems = allitems.filter((item) => item.category === 'restaurantitems');
  return (
    <div className='restaurant'>
        <div className="restaurant-bg-img">
        {filteritems.map((item) => (
               <img src={item.image} alt="Lounge background" />
          ))}  
   
    
    <div className="restaurant-bg-img-text">
        <h2>Restaurant</h2>
        <p>Nestled amidst breathtaking natural surroundings, our eatery offers a serene escape from the hustle and bustle of everyday life.</p>
    </div>
    </div>
       <div className="res-intro">
        <span>At<h3>Sylvan Horizon</h3>we pride ourselves on offering an unforgettable dining experience.</span>
       </div>
       <div className="menu-res">
        <h2>Menu</h2>
       </div>
       <div className="menu-food-items">
        <div className="menu-food-img">
        {filteritemsitems.map((item) => (
               <img src={item.image} alt="Lounge background" />
          ))} 
        </div>
       </div>
    </div>
  )
}

export default Restaurant