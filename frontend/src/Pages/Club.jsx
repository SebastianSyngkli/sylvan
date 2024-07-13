import React,{useEffect} from 'react'
import './Club.css'
import { itemFetch } from '../features/itemSlice';
import { useDispatch, useSelector } from 'react-redux';

const Club = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(itemFetch());
  }, [dispatch]);
  const { items: allItems } = useSelector((state) => state.items);
  const filteredItems = allItems.filter((item) => item.category === 'soundproofbackgroundimage');
  const soundproofleft = allItems.filter((item) => item.category === 'soundproofleft');
  const soundproofright = allItems.filter((item) => item.category === 'soundproofright');
  return (
    <div className='club'>
        <div className="club-bg-img">
         {filteredItems.map((item) => (
           <img src={item.image} alt="club background" />
         ))}
        <div className="wedding-bg-img-text">
        <h2>Soundproof Hall</h2>
        <p>Relaxing in pure comfort and tranquility</p>
    </div>
    </div>
    <div className="soundproof">
        <div className="soundproof-intro">
             <h3>An electrifying music hall</h3>
        </div>
        <div className="soundproof-img">
           {soundproofleft.map((item) => (
             <img src={item.image} alt="" />
           ))}
          {soundproofright.map((item) => (
              <img src={item.image} alt="" />
          ))}
        </div>
        
    </div>
    </div>
  )
}

export default Club