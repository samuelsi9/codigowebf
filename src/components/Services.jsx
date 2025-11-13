import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Mobile Apps',
      description: 'Modern, user-friendly mobile applications for iOS and Android platforms.'
    },
    {
      title: 'Professional Websites',
      description: 'Stunning, responsive websites that represent your brand perfectly.'
    },
    {
      title: 'AI-Driven Apps',
      description: 'Cutting-edge AI-powered applications that transform your business.'
    },
    {
      title: 'System Installation',
      description: 'Expert installation and setup of Windows, macOS, Linux, and Android systems.'
    }
  ];

  return (
    <section className="services">
      <div className="services-container">
        <h2 className="section-title">Our Services</h2>
        <p className="services-intro">
          We're Codigo, a team of passionate developers creating modern solutions for businesses and individuals.
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="service-glow"></div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-number">{String(index + 1).padStart(2, '0')}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

