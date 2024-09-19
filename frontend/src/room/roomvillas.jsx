import React, { useEffect } from 'react';
// import villas1 from '../assets/villas1.png';
import { useNavigate } from 'react-router-dom';
import { IoBedOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { itemFetch } from '../features/itemSlice';
import { FaUsers } from "react-icons/fa";
import './roomvillas.css';

const Roomvillas = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(itemFetch());
  }, [dispatch]);

  const { items: allitems, status } = useSelector((state) => state.items);
  const villaprivatepool = allitems.filter((item) => item.category === 'villa private pool');
  const singlecabin = allitems.filter((item) => item.category === 'singlecabbin');
  const fullcabin = allitems.filter((item) => item.category === 'fullcabbin');
  const villacommonpool = allitems.filter((item) => item.category === 'villa common pool');
  const onebhkvillacommonpool = allitems.filter((item) => item.category === '1bhk villa common pool');

  return (
    <>
    <div className='villas'>
      <div className="villas-image">
        {villaprivatepool.map((item) => (
          <div key={item.id}>
            <span className="price">Price: INR -{item.costs}</span>
            <button onClick={() => navigate('/villaprivate')} className='btn-view'>view</button>
            <img src={item.image} alt="Villa 1" />
            <div className="villas-main">
              <h1>{item.roomname}</h1>
              <div className="villas-text">
                <span>{item.roomspecification}</span>
              </div>
              <div className="villas-icon">
                <div className="villas-bed">
                  < IoBedOutline id='bed' />
                  <span>{item.maxbed}</span>
                </div>
                <div className="villas-bed">
                  < FaUsers id='bed' />
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
            <button onClick={() => navigate('/villacommon')} className='btn-view'>view</button>
            <img src={item.image} alt="Villa 1" />
            <div className="villas-main">
              <h1>{item.roomname}</h1>
              <div className="villas-text">
                <span>{item.roomspecification}</span>
              </div>
              <div className="villas-icon">
                <div className="villas-bed">
                  < IoBedOutline id='bed' />
                  <span>{item.maxbed}</span>
                </div>
                <div className="villas-bed">
                  < FaUsers id='bed' />
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
            <button onClick={() => navigate('/villa')} className='btn-view'>view</button>
            <img src={item.image} alt="Villa 1" />
            <div className="villas-main">
              <h1>{item.roomname}</h1>
              <div className="villas-text">
                <span>{item.roomspecification}</span>
              </div>
              <div className="villas-icon">
                <div className="villas-bed">
                  < IoBedOutline id='bed' />
                  <span>{item.maxbed}</span>
                </div>
                <div className="villas-bed">
                  < FaUsers id='bed' />
                  <span>{item.maxguest}</span>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
     <h1 style={{textAlign: 'center',marginTop: '20px'}}>CABBIN</h1>

     <div 
     className='cabin-con'
     style={{
       display: 'flex',
       margin: '20px'
     }}>
     <div className="villas-image">
        {singlecabin.map((item) => (
          <div key={item.id}>
            <span className="price">Price: INR - {item.costs}</span>
             <button onClick={() => navigate('/singlecabbin')}  className='btn-vi'>view more</button>
            <img src={item.image} alt="Villa 1" />
            <div className="villas-main">
              <h1>{item.roomname}</h1>
              <div className="villas-text">
                {/* <span>{item.roomspecification}</span> */}
                <h1>SINGLE CABBIN</h1>
              </div>
              <div className="villas-icon">
                
                <div className="villas-bed">
                  < IoBedOutline id='bed' />
                  <span>{item.maxbed}</span>
                </div>
                <div className="villas-bed">
                  < FaUsers id='bed' />
                  <span>{item.maxguest}</span>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>

      <div className="villas-image">
        {fullcabin.map((item) => (
          <div key={item.id}>
            <span className="price">Price: INR - {item.costs}</span>
            <button onClick={() => navigate('/fullcabbin')} className='btn-vi'>view more</button>
            <img src={item.image} alt="Villa 1" />
            <div className="villas-main">
              <h1>{item.roomname}</h1>
              <div className="villas-text">
                {/* <span>{item.roomspecification}</span> */}
                <h1>FULL CABBIN</h1>
              </div>
              <div className="villas-icon">
                <div className="villas-bed">
                  < IoBedOutline id='bed' />
                  <span>{item.maxbed}</span>
                </div>
                <div className="villas-bed">
                  < FaUsers id='bed' />
                  <span>{item.maxguest}</span>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
     </div>
    </>
  )
}

export default Roomvillas;
