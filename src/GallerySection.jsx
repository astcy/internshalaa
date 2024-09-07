import React, { useState } from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faPlus, faQuestionCircle, faTh } from '@fortawesome/free-solid-svg-icons';

const GallerySection = () => {
  const [images, setImages] = useState([1, 2, 3]);

  const addImage = () => {
    setImages([...images, images.length + 1]);
  };

  const slideLeft = () => {
    // Functionality for sliding left
  };

  const slideRight = () => {
    // Functionality for sliding right
  };

  return (
    <div className="gallery-container">
      <div className="icon-section">
        <FontAwesomeIcon icon={faTh} className="grid-icon" />
      </div>
      <div className="gallery-header">
        <FontAwesomeIcon icon={faQuestionCircle} className="question-icon" />
        <h3 className="gallery-title">Gallery</h3>
        <div className="controls">
          <button className="add-image-btn" onClick={addImage}>
            <FontAwesomeIcon icon={faPlus} /> ADD IMAGE
          </button>
          <button className="arrow-btn" onClick={slideLeft}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button className="arrow-btn" onClick={slideRight}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
      <div className="gallery-images">
        {images.map((img, index) => (
          <div className="image-card" key={index}>
            <img
              src={`https://via.placeholder.com/150?text=Image+${img}`}
              alt={`Gallery ${img}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
