import React, { useState, useEffect } from 'react';
import './Question1.css'; // CSS dosyasını içe aktar
import { Link } from 'react-router-dom';

const Question1 = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [nextQuestion, setNextQuestion] = useState(false); // Sonucun "Oily" ve "Every day" olması durumunu saklar

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    // Seçenekler "Oily" ve "Every day" ise, sonraki soruya git
    if (selectedOption === 'Oily' && nextQuestion) {
      // Burada yönlendirmeyi yapıyorum, lütfen kendi routing yapınıza uygun bir şekilde güncelleyin.
      window.location.href = '/question2';
    }
  }, [selectedOption, nextQuestion]);

  return (
    <div className="question1-container">
      <div className="question1-card">
        <button className="question1-button"><h1>Q1</h1></button>
        <h2 className="question1-text">1. How can you define your hair type?</h2>
        <div className="options">
          <label>
            <input
              type="radio"
              name="hairType"
              value="Oily"
              checked={selectedOption === 'Oily'}
              onChange={(e) => {
                handleOptionChange(e);
                setNextQuestion(false); // Her değişiklikte, bir sonraki soruya geçmeyi iptal et
              }}
            />
            <h2>Oily</h2>
          </label>
          <label>
            <input
              type="radio"
              name="hairType"
              value="Dry"
              checked={selectedOption === 'Dry'}
              onChange={(e) => {
                handleOptionChange(e);
                setNextQuestion(false);
              }}
            />
            <h2>Dry</h2>
          </label>
          <label>
            <input
              type="radio"
              name="hairType"
              value="Freezy"
              checked={selectedOption === 'Freezy'}
              onChange={(e) => {
                handleOptionChange(e);
                setNextQuestion(false);
              }}
            />
            <h2>Freezy</h2>
          </label>
          <label>
            <input
              type="radio"
              name="hairType"
              value="Dyed"
              checked={selectedOption === 'Dyed'}
              onChange={(e) => {
                handleOptionChange(e);
                setNextQuestion(false);
              }}
            />
            <h2>Dyed</h2>
          </label>
        </div>
      </div>
      {selectedOption === 'Oily' && <ProductImage imageType="oilyhair" />} 
      <Link to="/question2" className='continue-button' onClick={() => setNextQuestion(true)}>CONTINUE</Link>
    </div>
  );
};

const ProductImage = ({ imageType }) => {
  let imagePath;
  if (imageType === 'oilyhair') {
    imagePath = 'public/oilyhair.webp';
  } else if (imageType === 'dryhair') {
    imagePath = 'public/dryhair.webp';
  } else if (imageType === 'freezyhair') {
    imagePath = 'public/freezyhair.webp';
  } else if (imageType === 'dyedhair') {
    imagePath = 'public/dyedhair.webp';
  }
  return (
    <div className="product-image">
      <img src={imagePath} alt="hair-type" />
    </div>
  );
};

export default Question1;
