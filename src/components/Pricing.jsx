import React from 'react';
import './Pricing.css';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: 'Custom',
      description: 'Perfect for small projects',
      features: [
        'Mobile App Development',
        'Basic Website',
        'Email Support',
        '3 Revisions'
      ]
    },
    {
      name: 'Professional',
      price: 'Custom',
      description: 'Ideal for growing businesses',
      features: [
        'Full-Stack Development',
        'AI Integration',
        'Priority Support',
        'Unlimited Revisions',
        'System Installation'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large-scale solutions',
      features: [
        'Complete Solutions',
        'Dedicated Team',
        '24/7 Support',
        'Custom Development',
        'Full OS Setup & Migration'
      ]
    }
  ];

  return (
    <section id="pricing" className="pricing">
      <div className="pricing-container">
        <h2 className="section-title">Pricing Plans</h2>
        <p className="pricing-intro">
          Affordable pricing tailored to your needs. Contact us for a custom quote.
        </p>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price">{plan.price}</div>
              <p className="plan-description">{plan.description}</p>
              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="feature-item">
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="plan-btn">Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

