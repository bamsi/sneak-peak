import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <a href="/" className="brand-name" alt="Website logo">
      Bookstore CMS
    </a>
    <Link to="/" className="link-items">Books</Link>
    <Link to="/category" className="link-items">Categories</Link>
  </nav>
);

export default Navbar;
