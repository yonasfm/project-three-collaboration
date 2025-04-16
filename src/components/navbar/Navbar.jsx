// src/components/navbar/navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.png";
import './navbar.css';

const Navbar = () => {
  return (
    <nav id="top-navbar">
      <img
        src={Logo}
        alt="Logo"
        style={{
          height: '50px',
          marginRight: '20px'
        }}
      />
      <Link to="/">Home</Link>
      <Link to="/groceries/123/edit">Edit</Link> {/* Replace 123 with actual ID */}
      <Link to="/groceries/new">New</Link>
      <Link to="/groceries">Grocery List</Link>
      <Link to="/how-we-started">How We Started</Link>
      <Link to="/contact-us">Contact Us</Link>
    </nav>
  );
};

export default Navbar;
