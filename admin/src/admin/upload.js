import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { itemCreate } from '../features/itemSlice';
import { logout } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';
import './upload.css';

const Update = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [roomname, setRoomname] = useState('');
    const [costs, setCosts] = useState('');
    const [category, setCategory] = useState('');
    const [roomspecification, setRoomspecification] = useState('');
    const [productImg, setProductImg] = useState('');
    const [maxbed, setMaxbed] = useState('');
    const [maxguest, setMaxguest] = useState('');
    const [child, setChild] = useState('');
    const [adult, setAdult] = useState('');
    const [wedding, setWedding] = useState('');
    const [party, setParty] = useState('');
    const [loading, setLoading] = useState(false);

    const handlersubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        dispatch(itemCreate({
            roomname,
            costs,
            category,
            roomspecification,
            maxguest,
            maxbed,
            child,
            adult,
            wedding,
            party,
            image: productImg
        })).then(() => {
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        });
    };

    const handleProductImageUpload = (e) => {
        const file = e.target.files[0];
        transformFile(file);
    };

    const transformFile = (file) => {
        const reader = new FileReader();

        if (file) {
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setProductImg(reader.result);
            };
        } else {
            setProductImg("");
        }
    };

    const { isAuthenticated } = useSelector((state) => state.auth);
    const handleLogout = () => {
        localStorage.removeItem('token');
        dispatch(logout());
        window.location.href = 'http://localhost:3000';
    };

    return (
        <div className="update-container">
            {isAuthenticated ? (
  <form onSubmit={handlersubmit} className="update-form">
  <div className="form-group">
      <div className="image-preview-container">
          {productImg && (
              <img src={productImg} alt="Preview" className="image-preview" />
          )}
      </div>
      <label htmlFor="file">Upload Image</label>
      <input type="file" id="file" accept="image/*" onChange={handleProductImageUpload} />
  </div>
  <div className="form-group">
      <label htmlFor="category">Category</label>
      <select id="category" onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="">Select room category</option>
          <option value="room">Background room image</option>
          <option value="category-a">Category-A</option>
          <option value="category-b">Category-B</option>
          <option value="category-c">Category-C</option>
          <option value="category-d">Category-D</option>
          <option value="villa private pool">3Bhk villa with private pool</option>
          <option value="villa common pool">3Bhk villa with common pool</option>
          <option value="1bhk villa common pool">1Bhk villa with common pool</option>
          <option value="mainhomepage">Main home page Background</option>
          <option value="sliders">Home sliders</option>
          <option value="facilitiesfoodup">Essential Food upside</option>
          <option value="facilitiesfoodright">Essential Food rightside</option>
          <option value="facilitiesfoodleft">Essential Food leftside</option>
          <option value="exploreroom">Explore Room</option>
          <option value="explorevillas">Explore Villas</option>
          <option value="explorewedding">Explore Wedding</option>
          <option value="exploreclub">Explore Club</option>
          <option value="explorelounge">Explore Lounge</option>
          <option value="explorerestaurant">Explore restaurant</option>
          <option value="swimming">Swimming Pool</option>
          <option value="lounge">Lounge Main image</option>
          <option value="loungefirst">Lounge first image</option>
          <option value="loungesecond">Lounge second image</option>
          <option value="restaurantbg">Restaurant background</option>
          <option value="weddingbg">Wedding background</option>
          <option value="weddingone">Wedding image one</option>
          <option value="weddingtwo">Wedding image two</option>
          <option value="brocurehome">Brocure background</option>
          <option value="brocurea">Brocure-A</option>
          <option value="brocureb">Brocure-B</option>
          <option value="brocurec">Brocure-C</option>
          <option value="brocured">Brocure-D</option>
          <option value="brocuree">Brocure-E</option>
          <option value="restaurantitems">restaurant Items</option>
          <option value="gallery">Gallery home</option>
          <option value="galleryitems">Gallery items</option>
          <option value="soundproofbackgroundimage">soundproof background image</option>
          <option value="soundproofleft">soundproof left</option>
          <option value="soundproofright">soundproof right</option>
      </select>
  </div>
  <div className="form-group">
      <label htmlFor="roomname">Room Name</label>
      <input type="text" id="roomname" value={roomname} onChange={(e) => setRoomname(e.target.value)} required />
  </div>
  <div className="form-group">
      <label htmlFor="maxbed">Max Beds</label>
      <input type="text" id='maxbed' value={maxbed} onChange={(e) => setMaxbed(e.target.value)} required />
  </div>
  <div className="form-group">
      <label htmlFor="maxguest">Max Guests</label>
      <input type="text" id='maxguest' value={maxguest} onChange={(e) => setMaxguest(e.target.value)} required />
  </div>
  <div className="form-group">
      <label htmlFor="costs">Costs</label>
      <input type="number" id="costs" value={costs} onChange={(e) => setCosts(e.target.value)} required />
  </div>

  <div className="form-group">
      <label htmlFor="child">Child Walk (brochore)</label>
      <input type="number" id="child" value={child} onChange={(e) => setChild(e.target.value)} required />
  </div>

  <div className="form-group">
      <label htmlFor="adult">Adult Walk (brochore)</label>
      <input type="number" id="adult" value={adult} onChange={(e) => setAdult(e.target.value)} required />
  </div>

  <div className="form-group">
      <label htmlFor="wedding">Wedding price (brochore)</label>
      <input type="number" id="wedding" value={wedding} onChange={(e) => setWedding(e.target.value)} required />
  </div>

  <div className="form-group">
      <label htmlFor="party">Party price (brochore)</label>
      <input type="number" id="party" value={party} onChange={(e) => setParty(e.target.value)} required />
  </div>

  <div className="form-group">
      <label htmlFor="roomspecification">Room Specification</label>
      <input type="text" id="roomspecification" value={roomspecification} onChange={(e) => setRoomspecification(e.target.value)} />
  </div>
  <button type="submit" className="submit-button">
      {loading ? <div className="loading-spinner"></div> : "Submit"}
  </button>
  <button onClick={() => navigate('/edit')} className="submit-button">Edit</button>
  <button onClick={() => navigate('/register')}>Add new admin</button>
  <button onClick={handleLogout}>Logout</button>
  
</form>
            ):(null)}
        </div>
    );
};

export default Update;
