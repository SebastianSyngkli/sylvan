// import React, { useState, useEffect } from 'react';
// import './Navbar.css';
// import Sylvan_logo from '../assets/logo/logo.png';

// import { FaBars } from "react-icons/fa6";

// import { IoMdClose } from "react-icons/io";

// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [hasScrolled, setHasScrolled] = useState(false);

//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPosition = window.scrollY;
//       setScrollPosition(currentScrollPosition);
//       if (currentScrollPosition > 0) {
//         setHasScrolled(true);
//       } else {
//         setHasScrolled(false);
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const handleDocumentClick = (event) => {
//       if (!event.target.closest('.nav-menu') && !event.target.closest('.nav-toggle') && !event.target.closest('.sidebar-toggle')) {
//         setMenuOpen(false);
//       }
//     };
//     document.addEventListener('click', handleDocumentClick);
//     return () => {
//       document.removeEventListener('click', handleDocumentClick);
//     };
//   }, [menuOpen]);

//   return (
//     <div className={`navbar ${hasScrolled ? 'scrolled' : 'transparent'}`}>
//       <div className="nav-logo">
//         <Link style={{ textDecoration: 'none' }} to="/">
//           <img src={Sylvan_logo} alt="" style={{ height: '66px', width: '66px' }} />
//         </Link>
        
//       </div>
//       <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
//         <li>
//           <Link style={{ textDecoration: 'none' }} to="/roomvilla">
//             Room
//           </Link>
//         </li>
//         <li>
//           <Link style={{ textDecoration: 'none' }} to="/brochure">
//             Brochure
//           </Link>
//         </li>
//         <li>
//           <Link style={{ textDecoration: 'none' }} to="/gallery">
//             Gallery
//           </Link>
//         </li>
//         <li>
//           <Link style={{ textDecoration: 'none' }} to="/about">
//             About us
//           </Link>
//         </li>
//         <li>
//           <Link style={{ textDecoration: 'none' }} to="/contact">
//             Contact us
//           </Link>
//         </li>
//       </ul>
//       <button className=" sidebar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
//              <FaBars />
             
//        </button>
//     </div>
//   );
// };

// export default Navbar;


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // React Router's Link
import Logo from '../assets/logo/logo.png';
import './Navbar.css'; // Assuming you have a CSS file for styles

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex justify-between items-center fixed z-40 w-screen p-3 px-8 transition-colors duration-500 ${
        scrolled || menuOpen ? 'bg-black text-white' : 'bg-transparent text-white'
      }`}
    >
      <div className="flex items-center z-50">
        <div className="rounded-full">
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-auto h-16" />
          </Link>
        </div>
      </div>
      <div style={{fontFamily: 'aclonica' }} className="hidden md:flex text-sm pr-10 space-x-20">
        <Link to="/roomvilla">
          <span className="hover:text-gray-300 text-xl">ROOM</span>
        </Link>
        <Link to="/brochure">
          <span className="hover:text-gray-300 text-xl">BROCHURE</span>
        </Link>
        <Link to="/gallery">
          <span className="hover:text-gray-300 text-xl">GALLERY</span>
        </Link>
        <Link to="/contact">
          <span className="hover:text-gray-300 text-xl">CONTACT</span>
        </Link>
        <Link to="/about">
          <span className="hover:text-gray-300 text-xl">ABOUT US</span>
        </Link>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
          <svg
            className={`w-6 h-6 ${scrolled || menuOpen ? 'text-white' : 'text-white'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div
        className={`md:hidden absolute ${
          menuOpen ? 'translate-y-44 bg-black' : '-translate-y-full bg-none'
        } left-0 transition-transform duration-300 ease-in-out w-full mt-4 py-10 flex flex-col items-center text-white space-y-4 gap-5 pt-10 z-40`}
      >
        <Link to="/about">
          <span className="hover:text-gray-300 text-xl" onClick={() => setMenuOpen(false)}>
           ROOM
          </span>
        </Link>
        <Link to="/gallery">
          <span className="hover:text-gray-300 text-xl" onClick={() => setMenuOpen(false)}>
            BROCHURE
          </span>
        </Link>
        <Link to="/gallery">
          <span className="hover:text-gray-300 text-xl" onClick={() => setMenuOpen(false)}>
            GALLERY
          </span>
        </Link>
        <Link to="/contact">
          <span className="hover:text-gray-300 text-xl" onClick={() => setMenuOpen(false)}>
            CONTACT
          </span>
        </Link>
        <Link to="/about">
          <span className="hover:text-gray-300 text-xl" onClick={() => setMenuOpen(false)}>
            ABOUT US
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

