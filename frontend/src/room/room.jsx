import React, { useEffect } from 'react';
import Roomfirst from './roomfirst';
import { useDispatch, useSelector } from 'react-redux';
import Roomtext from './roomtext';
import Roomimage from './roomimage';
import Roomvillas from './roomvillas';
import { itemFetch } from '../features/itemSlice';
// import Edit from './edit';

// import Test from './test';
// import Bhk from './bhk';
import './room.css';

const Room = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(itemFetch());
  }, [dispatch]);

  const { items: allitems, status } = useSelector((state) => state.items);
  const filteritems = allitems.filter((item) => item.category === 'room');

  return (
    <>
      <div className="hero">
       
        {filteritems.map((item) => (
          <img  src={item.image}/>
        ))}
       
        <div className="hero-text">
          <h1>Room & Villas</h1>
        </div>
        </div>
      
      <Roomtext />
      <Roomfirst />
      <Roomimage />
      <Roomvillas />
      {/* <Test/>
      <Edit/> */}
      {/* <Bhk/> */}
      
    </>
  );
}

export default Room;
