import React from "react";
import './navbar.css';

const Navbar = ({ onNavigate }) => {
  const handleClick = (event, section) => {
    event.preventDefault();
    onNavigate(section);
  };

  return (
    <nav id="top-navbar">
      <a href="#" onClick={(event) => handleClick(event, 'home')}>Home</a>
      <a href="#" onClick={(event) => handleClick(event, 'edit')}>Edit</a>
      <a href="#" onClick={(event) => handleClick(event, 'New')}>New</a>
      <a href="#" onClick={(event) => handleClick(event, 'groceryList')}>Grocery List</a>
      <a href="#" onClick={(event) => handleClick(event, 'howWeStarted')}>How We Started</a>
      <a href="#" onClick={(event) => handleClick(event, 'contactUs')}>Contact Us</a>
    </nav>
  );
};

export default Navbar;
