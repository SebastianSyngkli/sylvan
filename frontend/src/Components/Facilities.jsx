import React, {useEffect} from 'react'
import './Facilities.css'

import wifi from '../assets/icon/wifi.png'
import parking from '../assets/icon/parking.png'
import home from '../assets/icon/home.png'
import balcony from '../assets/icon/balcony.png'
import fork from '../assets/icon/fork.png'
import customer from '../assets/icon/customer.png'
import { useDispatch, useSelector } from 'react-redux';
import { itemFetch } from '../features/itemSlice';
import food1 from '../assets/food/food1.jpeg'
import drink1 from '../assets/food/drink1.jpeg'
import food2 from '../assets/food/food2.webp'

const Facilities = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(itemFetch());
  }, [dispatch]);

  const { items: allitems, status } = useSelector((state) => state.items);
  const filteritems = allitems.filter((item) => item.category === 'facilitiesfoodup');
  const filteritemsright = allitems.filter((item) => item.category === 'facilitiesfoodright');
  const filteritemsleft = allitems.filter((item) => item.category === 'facilitiesfoodleft');
  return (
    <div className='con-ess'>
        <div className="essentials">
            <div className="ess-text">
                <span>Discoverd the services we offered</span>
                <h2>Our Essentials</h2>
            </div>
              <div className="ess-icon">
                <ul>
                    <li><img src={wifi} alt="" /><span>Wi-fi</span></li>
                    <li><img src={parking} alt="" /><span>Spacious parking</span></li>
                    <li><img src={home} alt="" /><span>Daiky house cleaning</span></li>
                    <li><img src={balcony} alt="" /><span>Amazing balcony</span></li>
                    <li><img src={fork} alt="" /><span>Restaurant</span></li>
                    <li><img src={customer} alt="" /><span>Customer Service</span></li>
                    
                </ul>
            </div>
        </div>
        <div className="menu">
            <div className="menu-img">
              {filteritems.map((item) => (
               <img src={item.image} alt="Food" className='menu-item'/>
              ))}
              {filteritemsright.map((item) => (
               <img src={item.image} alt="Drink" className='menu-item'/>
              ))}
              {filteritemsleft.map((item) => (
               <img src={item.image} alt="Drink" className='menu-item'/>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Facilities