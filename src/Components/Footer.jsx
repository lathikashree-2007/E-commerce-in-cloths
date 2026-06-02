import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>FashionHub</h3>
          <p>Your ultimate destination for curated modern fashion collections.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>About Us</li>
            <li>Contact Support</li>
            <li>Shipping & Returns</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 FashionHub. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;