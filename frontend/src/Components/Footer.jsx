import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Footer = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  return (
    <footer className='footer'>
      <div className="text1">
        <h2>Thank you for visiting Sylvan Horizon Resort</h2>
      </div>
      <div className="footer-menu">
        <ul>
          <li><Link style={{ textDecoration: 'none' }} to="/roomvilla">Room</Link></li> 
          <li><Link style={{ textDecoration: 'none' }} to="/brochure">Brochure</Link></li> 
          <li><Link style={{ textDecoration: 'none' }} to="/gallery">Gallery</Link></li> 
          <li><Link style={{ textDecoration: 'none' }} to="/contact">Contact</Link></li> 
          <li><Link style={{ textDecoration: 'none' }} to="/about us">About us</Link></li> 
        </ul>
      </div>
      
      <div className="footer-details">
        <h3>Nongsder Ri-bhoi</h3>
        <h3>Meghalaya, India</h3>
      </div> 
      <h4>Design & Developed by Byrchem Solutions</h4> 
    </footer>
  );
};

export default Footer;
