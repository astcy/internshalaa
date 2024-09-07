import React, { useState } from 'react';
import './styles.css';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('about');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <p>Hello! I'm Dave, your sales rep from Salesforce...</p>;
      case 'experiences':
        return <p>I've worked in different capacities over the last 3 years...</p>;
      case 'recommended':
        return <p>Recommended by many happy clients and colleagues...</p>;
      default:
        return null;
    }
  };

  return (
    <div className="about-container">
      <div className="tabs">
        <button className={`tab ${activeTab === 'about' ? 'active' : ''}`} onClick={() => setActiveTab('about')}>
          About Me
        </button>
        <button className={`tab ${activeTab === 'experiences' ? 'active' : ''}`} onClick={() => setActiveTab('experiences')}>
          Experiences
        </button>
        <button className={`tab ${activeTab === 'recommended' ? 'active' : ''}`} onClick={() => setActiveTab('recommended')}>
          Recommended
        </button>
      </div>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default AboutSection;
