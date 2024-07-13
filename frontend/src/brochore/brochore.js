import React, { useEffect } from 'react';
import './brocure.css';
import { useDispatch, useSelector } from 'react-redux';
import { itemFetch } from '../features/itemSlice';

const Brocure = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(itemFetch());
  }, [dispatch]);

  const { items: allitems, status } = useSelector((state) => state.items);
  const filteritems = allitems.filter((item) => item.category === 'brocurehome');
  const filteritemsa = allitems.filter((item) => item.category === 'brocurea');
  const filteritemsb = allitems.filter((item) => item.category === 'brocureb');
  const filteritemsc = allitems.filter((item) => item.category === 'brocurec');
  const filteritemsd = allitems.filter((item) => item.category === 'brocured');
  const filteritemse = allitems.filter((item) => item.category === 'brocuree');

  return (
    <div className='container'>
      <div className="hero">
        {filteritems.map((item) => (
          <img key={item.id} src={item.image} alt={item.description || 'Brochure Image'} />
        ))}
        <div className="hero-text">
          <h2>Brochure</h2>
          <p>Relaxing in pure comfort and tranquility</p>
        </div>
      </div>

      <div className="text">
        <h3>A. Infinity Swimming Pool</h3>
      </div>
      <div className="brochure1">
        <div className="poolimg">
          {filteritemsa.map((item) => (
            <img key={item.id} src={item.image} alt={item.description || 'Infinity Swimming Pool'} />
          ))}
        </div>
        <div className="pooldes">
          {filteritemsa.map((item) => (
            <div key={item.id}>
              <h2>Pricing: <br /> 1. For Party-Rs {item.party}/- <br />2. For Wedding-Rs {item.wedding}/-</h2>
             {/*<h3>Description</h3>
              <p>1. No smoking inside the pool.</p>
              <p>2. Drinking of alcohol in the pool is not allowed</p>*/}
            </div>
          ))}
        </div>
      </div>

      <div className="text">
        <h3>B. Swimming Pool Hall</h3>
      </div>
      <div className="brochure1">
        <div className="poolimg">
          {filteritemsb.map((item) => (
            <img key={item.id} src={item.image} alt={item.description || 'Swimming Pool Hall'} />
          ))}
        </div>
        <div className="pooldes">
          {filteritemsb.map((item) => (
            <div key={item.id}>
              <h2>Pricing: <br /> 1. For Party-Rs {item.party}/- <br />2. For Wedding-Rs {item.wedding}/-</h2>
              {/*<h3>Description</h3>
              <p>1. No smoking inside the pool.</p>
              <p>2. Drinking of alcohol in the pool is not allowed</p>*/}
            </div>
          ))}
        </div>
      </div>

      <div className="text">
        <h3>C. Sound Proofing Hall with Sound System</h3>
      </div>
      <div className="brochure1">
        <div className="poolimg">
          {filteritemsc.map((item) => (
            <img key={item.id} src={item.image} alt={item.description || 'Sound Proofing Hall'} />
          ))}
        </div>
        <div className="pooldes">
          {filteritemsc.map((item) => (
            <div key={item.id}>
              <h2>Pricing: <br /> 1. For Party-Rs {item.party}/- <br />2. For Wedding-Rs {item.wedding}/-</h2>
              {/*<h3>Description</h3>
              <p>1. No smoking inside the pool.</p>
              <p>2. Drinking of alcohol in the pool is not allowed</p>*/}
            </div>
          ))}
        </div>
      </div>

      <div className="text">
        <h3>D. Banquet Hall</h3>
      </div>
      <div className="brochure1">
        <div className="poolimg">
          {filteritemsd.map((item) => (
            <img key={item.id} src={item.image} alt={item.description || 'Banquet Hall'} />
          ))}
        </div>
        <div className="pooldes">
          {filteritemsd.map((item) => (
            <div key={item.id}>
              <h2>Pricing: <br /> Rs {item.costs}/-</h2>
             {/* <h3>Description</h3>
              <p>1. No smoking inside the pool.</p>
              <p>2. Drinking of alcohol in the pool is not allowed</p>*/}
            </div>
          ))}
        </div>
      </div>

      <div className="text">
        <h3>E. For Walk-In Swimmer</h3>
      </div>
      <div className="brochure1">
        <div className="poolimg">
          {filteritemse.map((item) => (
            <img key={item.id} src={item.image} alt={item.description || 'Walk-In Swimmer'} />
          ))}
        </div>
        <div className="pooldes">
          {filteritemse.map((item) => (
            <div key={item.id}>
              <h2>Pricing: <br /> a. Children-Rs {item.child} per head/hr. <br />b. Adult-Rs {item.adult} per head/hr</h2>
             {/*<h3>Description</h3>
              <p>1. No smoking inside the pool.</p>
              <p>2. Drinking of alcohol in the pool is not allowed</p>*/}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brocure;
