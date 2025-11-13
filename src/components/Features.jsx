import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Fast Delivery',
      description: 'We deliver quality solutions quickly without compromising on excellence.'
    },
    {
      icon: '💰',
      title: 'Affordable Prices',
      description: 'Competitive pricing that fits your budget without hidden costs.'
    },
    {
      icon: '🛠️',
      title: 'Reliable Support',
      description: 'Dedicated technical support to help you every step of the way.'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="features-container">
        <h2 className="section-title">Why Choose Codigo</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

