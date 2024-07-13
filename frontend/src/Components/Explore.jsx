import React, { useEffect }  from 'react';
import './Explore.css';
import rooms1 from '../assets/crop_image/rooms1.png';
import villas1 from '../assets/crop_image/villas1.png';
import lounge from '../assets/crop_image/lounge.png';
import Restaurant from '../assets/crop_image/Restaurant.png';
import wedding from '../assets/crop_image/wedding.png';
import club from '../assets/crop_image/club.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { itemFetch } from '../features/itemSlice';


const Explore = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(itemFetch());
  }, [dispatch]);

  const { items: allitems, status } = useSelector((state) => state.items);
  const filteritemsroom = allitems.filter((item) => item.category === 'exploreroom');
  const filteritemsvillas = allitems.filter((item) => item.category === 'explorevillas');
  const filteritemswedding = allitems.filter((item) => item.category === 'explorewedding');
  const filteritemsclub = allitems.filter((item) => item.category === 'exploreclub');
  const filteritemslounge = allitems.filter((item) => item.category === 'explorelounge');
  const filteritemsrestaurant = allitems.filter((item) => item.category === 'explorerestaurant');
  return (
    <div className='explore'>
      <div className="explore-text">
        <h2>Explore our resort and immerse yourself in unparalleled comfort and elegance.</h2>
      </div>
      <div className="explore-menu">
        <li>
          <div className="image-container">
            <Link to='/roomvilla'>
            {filteritemsroom.map((item) => (
                <img src={item.image} alt="Rooms" />
            ))}
            <h3>Rooms</h3>
            </Link>
          </div>
        </li>
        <li>
          <div className="image-container">
            <Link to='/roomvilla'>
            {filteritemsvillas.map((item) => (
                <img src={item.image} alt="Villas" />
            ))}
            <h3>Villas</h3>
            </Link>
          </div>
        </li>
        <li>
          <div className="image-container">
           <Link to='/lounge'>
           {filteritemslounge.map((item) => (
               <img src={item.image} alt="Lounge" />
           ))}
                <h3>Lounge</h3>
           </Link> 
          </div>
        </li>
        <li>
          <div className="image-container">
            <Link to='/restaurant'>
            {filteritemsrestaurant.map((item) => (
                <img src={item.image} alt="Restaurant" />
            ))}
                   <h3>Restaurant</h3>
            </Link>
          </div>
        </li>
        <li>
          <div className="image-container">
            <Link to='/wedding'>
            {filteritemswedding.map((item) => (
             <img src={item.image} alt="Wedding" />
            ))}
            <h3>Wedding</h3>
            </Link>
          </div>
        </li>
        <li>
          <div className="image-container">
            <Link to='/soundproof'>
            {filteritemsclub.map((item) => (
              <img src={item.image} alt="Club" />
            ))}
            <h3>Soundproof hall</h3>
            </Link>
          </div>
        </li>
      </div>
    </div>
  );
};

export default Explore;
