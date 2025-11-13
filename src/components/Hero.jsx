import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line">Design Your</span>
            <span className="title-line">Own Journey</span>
          </h1>
          <p className="hero-subtitle">
            <span className="subtitle-line">Begin Turning</span>
            <span className="subtitle-line">Dreams into</span>
            <span className="subtitle-line">Reality</span>
          </p>
          <button className="download-btn">
            <span>Download</span>
            <div className="arrow-circle">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
        </div>
        <div className="hero-graphics">
          <div className="abstract-shape"></div>
          <div className="floating-elements">
            <div className="floating-element element-1"></div>
            <div className="floating-element element-2"></div>
            <div className="floating-element element-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

