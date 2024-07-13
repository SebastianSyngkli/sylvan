import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Sylvan_logo from '../assets/logo/sylvan_logo.png';

import { FaBars } from "react-icons/fa6";

import { IoMdClose } from "react-icons/io";

import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      setScrollPosition(currentScrollPosition);
      if (currentScrollPosition > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (!event.target.closest('.nav-menu') && !event.target.closest('.nav-toggle') && !event.target.closest('.sidebar-toggle')) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [menuOpen]);

  return (
    <div className={`navbar ${hasScrolled ? 'scrolled' : 'transparent'}`}>
      <div className="nav-logo">
        <Link style={{ textDecoration: 'none' }} to="/">
          <img src={Sylvan_logo} alt="" style={{ height: '66px', width: '66px' }} />
        </Link>
        
      </div>
      <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <li>
          <Link style={{ textDecoration: 'none' }} to="/roomvilla">
            Room
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: 'none' }} to="/brochure">
            Brochure
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: 'none' }} to="/gallery">
            Gallery
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: 'none' }} to="/about us">
            About us
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: 'none' }} to="/contact">
            Contact us
          </Link>
        </li>
      </ul>
      <button className=" sidebar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
             <FaBars />
             
       </button>
    </div>
  );
};

export default Navbar;