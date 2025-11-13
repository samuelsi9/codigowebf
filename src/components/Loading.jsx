import React, { useEffect } from 'react';
import './Loading.css';

const Loading = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000); // Show loading for 2 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="loading-screen">
      <div className="loading-container">
        <div className="spinner"></div>
        <p className="loading-text">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;

