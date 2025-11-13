import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">Codigo</h3>
            <p className="footer-tagline">
              We're a team of passionate developers creating modern mobile apps, 
              professional websites, and AI-driven solutions for businesses and individuals.
            </p>
          </div>
          <div className="footer-links">
            <div className="footer-section">
              <h4 className="footer-title">Services</h4>
              <ul className="footer-list">
                <li><a href="#services">Mobile Apps</a></li>
                <li><a href="#services">Websites</a></li>
                <li><a href="#services">AI-Driven Apps</a></li>
                <li><a href="#services">System Installation</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Company</h4>
              <ul className="footer-list">
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Contact</h4>
              <ul className="footer-list">
                <li>Fast Delivery ✓</li>
                <li>Affordable Prices ✓</li>
                <li>Reliable Support ✓</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Codigo. All rights reserved.</p>
          <p className="footer-message">Ready to grow your business online? We're here to help! 🚀</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

