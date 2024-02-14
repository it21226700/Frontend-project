import React from 'react';
import './Header.css'; // Import the CSS file for styling
import uniGirl from "../../images/girl-uni.jpg"

function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-left">
          <h1>A better learning future starts here</h1>
          <div className="buttons">
            <button className='Btn1'>Get a quote</button>
            <button className='Btn2'>Read more</button>
          </div>
        </div>
        <div className="header-right">
          <img src={uniGirl} alt="uni girl" />
        </div>
      </div>
    </div>
  );
}

export default Header;
