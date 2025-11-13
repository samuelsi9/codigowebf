import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {isMenuOpen && (
        <div className="menu-overlay" onClick={closeMenu}></div>
      )}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo">
            <span className="logo-text">Codigo</span>
          </div>
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <a href="#features" className="nav-link" onClick={closeMenu}>FEATURES</a>
            <span className="nav-separator">—</span>
            <a href="#pricing" className="nav-link" onClick={closeMenu}>PRICING</a>
            <button className="mobile-get-app-btn" onClick={closeMenu}>GET APP</button>
          </nav>
          <button className="get-app-btn desktop-btn">GET APP</button>
          <button 
            className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;

