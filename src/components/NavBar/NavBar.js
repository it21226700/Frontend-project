import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css'; // Import the CSS file for styling
import Courses  from '../Courses/Courses';
import Contact from '../ContactUs/ContactUs';
import bookLogo from "../../images/book.png";


function NavBar() {
  return (
   
    <div className="navbar">
      <div className="navbar-logo">
        <img src={bookLogo} alt="Logo" /> <br/>
        <span className='Uniname'>Edureka</span>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link> {/* Use Link instead of anchor tag */}
        <Link to="/Courses">Courses</Link> {/* Use Link instead of anchor tag */}
        {/* Add more links with Link components */}
        <Link to="/pages">Pages</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/Contact">Contact Us</Link>
      </div>
      <div className="navbar-buttons">
        <button className='SignInBtn'>Sign In</button>
        <button className='SignUpBtn'>Sign Up</button>
        <button className="search-button">🔍</button>
      </div>
    </div>
  );
}

export default NavBar;
