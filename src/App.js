import React from 'react';
import './styles.css';
import AboutSection from './AboutSection';
import GallerySection from './GallerySection';



function App() {
  return (
    <div className="app">
      <div className="empty-left-side"></div>
      <div className="right-side">
        <AboutSection />
        <GallerySection />
      </div>
    </div>
  );
}

export default App;
