import React from 'react';
import { BsPersonFill } from 'react-icons/bs';
import Navbar from './Navbar';
import './Header.css';

const Header = () => (
  <header className="header-section">
    <Navbar />
    <span className="user-profile">
      <BsPersonFill className="profile-icon" />
    </span>
  </header>
);

export default Header;
