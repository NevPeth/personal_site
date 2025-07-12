import React, {useState, useEffect} from 'react';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      
      if (window.scrollY > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className={`Navbar ${scrolled ? 'Navbar-scrolled' : ''}`}>
      <ul>
        <li><a href="#about-me">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#socials">Socials</a></li>
      </ul>
    </div>
  );
}

export default Navbar;