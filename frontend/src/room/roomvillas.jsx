import React, { useEffect }  from 'react';
// import villas1 from '../assets/villas1.png';
import { IoBedOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { itemFetch } from '../features/itemSlice';
import { FaUsers } from "react-icons/fa";
import './roomvillas.css';

const Roomvillas = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(itemFetch());
  }, [dispatch]);

  const { items: allitems, status } = useSelector((state) => state.items);
  const villaprivatepool = allitems.filter((item) => item.category === 'villa private pool');
  const villacommonpool = allitems.filter((item) => item.category === 'villa common pool');
  const onebhkvillacommonpool = allitems.filter((item) => item.category === '1bhk villa common pool');

  return (
    <div className='villas'>
      <div className="villas-image">
        {villaprivatepool.map((item) => (
          <div key={item.id}>
              <span className="price">Price: INR -{item.costs}</span>
        <img src={item.image} alt="Villa 1" />
        <div className="villas-main">
        <h1>{item.roomname}</h1>
        <div className="villas-text">
           <span>{item.roomspecification}</span>
        </div>
        <div className="villas-icon">
          <div className="villas-bed">
          < IoBedOutline id='bed'/>
           <span>{item.maxbed}</span>
          </div>
          <div className="villas-bed">
          < FaUsers id='bed'/>
          <span>{item.maxguest}</span>
          </div> 
        </div>
        </div>
          </div>
        ))}
      </div>
      <div className="villas-image">
        {villacommonpool.map((item) => (
           <div key={item.id}>
           <span className="price">Price: INR - {item.costs}</span>
        <img src={item.image} alt="Villa 1" />
        <div className="villas-main">
        <h1>{item.roomname}</h1>
        <div className="villas-text">
           <span>{item.roomspecification}</span>
        </div>
        <div className="villas-icon">
          <div className="villas-bed">
          < IoBedOutline id='bed'/>
           <span>{item.maxbed}</span>
          </div>
          <div className="villas-bed">
          < FaUsers id='bed'/>
          <span>{item.maxguest}</span>
          </div> 
        </div>
        </div>
           </div>
        ))}
    
      </div>
      <div className="villas-image">
        {onebhkvillacommonpool.map((item) => (
          <div key={item.id}>

          <span className="price">Price: INR - {item.costs}</span>
        <img src={item.image} alt="Villa 1" />
        <div className="villas-main">
        <h1>{item.roomname}</h1>
        <div className="villas-text">
           <span>{item.roomspecification}</span>
        </div>
        <div className="villas-icon">
          <div className="villas-bed">
          < IoBedOutline id='bed'/>
           <span>{item.maxbed}</span>
          </div>
          <div className="villas-bed">
          < FaUsers id='bed'/>
          <span>{item.maxguest}</span>
          </div> 
        </div>
        </div>
          </div>
        ))}
     
      </div>
    </div>
  )
}

export default Roomvillas;
