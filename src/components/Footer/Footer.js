import React from 'react';
import './Footer.css'; // Import the CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis urna et eros interdum dapibus.</p>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Email: example@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <p>Twitter</p>
          <p>Facebook</p>
          <p>Instagram</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
