import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">FashionHub</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/category/men">Men</Link></li>
        <li><Link to="/category/women">Women</Link></li>
        <li><Link to="/category/kids">Kids</Link></li>
        <li><Link to="/category/accessories">Accessories</Link></li>
      </ul>
      <div className="nav-actions">
        <Link to="/login" className="login-btn">Login</Link>
        <Link to="/dashboard" className="cart-icon">🛒 Dashboard</Link>
      </div>
    </nav>
  );
}

export default Navbar;