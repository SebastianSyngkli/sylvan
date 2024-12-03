import React, { useEffect } from 'react';
import './roomfirst.css';
import { useNavigate } from 'react-router-dom';
// import room2 from '../assets/room2.png';
// import room1 from '../assets/room1.png';
import { IoBedOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { FaUsers } from "react-icons/fa";
import { itemFetch } from '../features/itemSlice';
const RoomFirst = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(itemFetch());
  }, [dispatch]);

  const { items: allitems, status } = useSelector((state) => state.items);
  const categorya = allitems.filter((item) => item.category === 'category-a');
  const categoryb = allitems.filter((item) => item.category === 'category-b');
  const categoryc = allitems.filter((item) => item.category === 'category-c');
  const categoryd = allitems.filter((item) => item.category === 'category-d');
  return (
    <>
      <div className="room-heading">
        <span>Rooms</span>
      </div>
      <div className='roomfirst'>
        <div className="roomfirst-1">
          {categorya.map((itema) => (
            <div key={itema.id}> {/* Added key to identify each item */}
              <img src={itema.image} alt={itema.name} /> {/* Added alt attribute for accessibility */}
              <span className='price-tag'>Price: INR - {itema.costs}</span>
              <button className='view-button ' onClick={() => navigate('/imageroom')}>view</button>
              <h1>{itema.roomname}</h1>
              <div className="roomicon">
                <div className="roomicon-1">
                  <IoBedOutline id='bed' />
                  <span>{itema.maxbed}</span>
                </div>
                <div className="roomicon-1">
                  <FaUsers id='bed' />
                  <span>{itema.maxguest}</span>
                </div>
              </div>
              <div className="roomicon-1-text">
                <span>{itema.roomspecification}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="roomfirst-1">
          {categoryb.map((itema) => (
            <div key={itema.id}> {/* Added key to identify each item */}
              <img src={itema.image} alt={itema.name} /> {/* Added alt attribute for accessibility */}
              <span className='price-tag'>Price: INR - {itema.costs}</span>
              <button onClick={() => navigate('/imageroomb')} className='view-button '>view</button>
              <h1>{itema.roomname}</h1>
              <div className="roomicon">
                <div className="roomicon-1">
                  <IoBedOutline id='bed' />
                  <span>{itema.maxbed}</span>
                </div>
                <div className="roomicon-1">
                  <FaUsers id='bed' />
                  <span>{itema.maxguest}</span>
                </div>
              </div>
              <div className="roomicon-1-text">
                <span>{itema.roomspecification}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* part-2 */}

      <div className='roomfirst'>
        <div className="roomfirst-1">
          {categoryc.map((itema) => (
            <div key={itema.id}> {/* Added key to identify each item */}
              <img src={itema.image} alt={itema.name} /> {/* Added alt attribute for accessibility */}
              <span className='price-tag'>Price: INR - {itema.costs}</span>
              <button onClick={() => navigate('/imageroomc')} className='view-button '>view</button>
              <h1>{itema.roomname}</h1>
              <div className="roomicon">
                <div className="roomicon-1">
                  <IoBedOutline id='bed' />
                  <span>{itema.maxbed}</span>
                </div>
                <div className="roomicon-1">
                  <FaUsers id='bed' />
                  <span>{itema.maxguest}</span>
                </div>
              </div>
              <div className="roomicon-1-text">
                <span>{itema.roomspecification}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="roomfirst-1">
          {categoryd.map((itema) => (
            <div key={itema.id}> {/* Added key to identify each item */}
              <img src={itema.image} alt={itema.name} /> {/* Added alt attribute for accessibility */}
              <span className='price-tag'>Price: INR - {itema.costs}</span>
              <button onClick={() => navigate('/imageroomd')} className='view-button '>view</button>
              <h1>{itema.roomname}</h1>
              <div className="roomicon">
                <div className="roomicon-1">
                  <IoBedOutline id='bed' />
                  <span>{itema.maxbed}</span>
                </div>
                <div className="roomicon-1">
                  <FaUsers id='bed' />
                  <span>{itema.maxguest}</span>
                </div>
              </div>
              <div className="roomicon-1-text">
                <span>{itema.roomspecification}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>

  )
}

export default RoomFirst;
