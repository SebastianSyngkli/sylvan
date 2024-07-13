import React, {useEffect} from 'react';
import './Swimming.css';
import pool from '../assets/crop_image/pool.png';
import { useDispatch, useSelector } from 'react-redux';
import { itemFetch } from '../features/itemSlice';


const Swimming = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(itemFetch());
  }, [dispatch]);

  const { items: allitems} = useSelector((state) => state.items);
  const filteritems = allitems.filter((item) => item.category === 'swimming');
  return (
    <div className='swimming'>
        <div className="text-pool">
            <h2>Experience ultimate relaxation and fun at our resort's stunning swimming pool.</h2>
          <p>Perfect for a refreshing dip or leisurely sunbathing, it offers an ideal escape for guests of all ages.
             Whether enjoying a morning swim or unwinding by the poolside in the afternoon, this tranquil spot enhances
             the resort experience.</p>
        </div>
      <div className="img-pool">
        {filteritems.map((item) => (
           <img src={item.image} alt="Swimming pool"/>
        ))}
      </div>
    </div>
  );
}

export default Swimming;
