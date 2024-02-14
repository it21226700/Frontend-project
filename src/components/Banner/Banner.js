import React from 'react';
import './Banner.css'; // Import the CSS file for styling
import graduate from "../../images/graduation.png"
import engineering from "../../images/car-engine.png"
import accounting from "../../images/budgeting.png"
import profit from "../../images/profit.png"

function Banner() {
  return (
    <div className="banner">
      <div className="left-section">
        <img src={profit} alt="Left" />
        <h2>Vivamus maximus</h2>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><br></br>
        <h5>√ Nulem est</h5>
        <h5>√ Nulem est</h5>

      </div>
      <div className="right-section">
        <div className="sub-section">
          <img src={graduate} alt="Right 1" />
          <h2>Postgraduate</h2>
        </div>
        <div className="sub-section">
          <img src={engineering} alt="Right 2" />
          <h2>Engineering</h2>
        </div>
        <div className="sub-section">
          <img src={accounting} alt="Right 3" />
          <h2>Accounting</h2>
        </div>
      </div>
    </div>
  );
}

export default Banner;
