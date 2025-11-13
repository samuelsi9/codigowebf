import React, { useState } from 'react';
import './App.css';
import Loading from './components/Loading';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
    
      <div className="App">
        <Header />
        <Hero />
        <Features />
        <Services />
        <Pricing />
        <Footer />
        <Chatbot />
      </div>
    </>
  );
}

export default App;

