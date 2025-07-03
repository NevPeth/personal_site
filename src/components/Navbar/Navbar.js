import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="Navbar">
      <ul>
        <li><a href="#about-me">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#socials">Socials</a></li>
        <li><a href="#blog">Blog</a></li>
      </ul>
    </div>
  );
}

export default Navbar;