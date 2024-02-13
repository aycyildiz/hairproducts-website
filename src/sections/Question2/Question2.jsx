import React, { useState, useEffect } from 'react';
import './Question2.css'; // CSS dosyasını içe aktar
import { Link } from 'react-router-dom';


const Question2 = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [nextQuestion, setNextQuestion] = useState(false); // Sonucun "Every day" olması durumunu saklar

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    // Seçenek "Every day" ise, sonraki soruya git
    if (selectedOption === 'Every day' && nextQuestion) {
      // Burada yönlendirmeyi yapıyorum, lütfen kendi routing yapınıza uygun bir şekilde güncelleyin.
      window.location.href = '/question3';
    }
  }, [selectedOption, nextQuestion]);

  return (
    <div className="question2-container">
      <div className="question2-card">
        <button className="question2-button"><h1>Q2</h1></button>
        <h2 className="question2-text">2. How often do you wash your hair?</h2>
        <div className="options">
          <label>
            <input
              type="radio"
              name="hairWash"
              value="Every day"
              checked={selectedOption === 'Every day'}
              onChange={(e) => {
                handleOptionChange(e);
                setNextQuestion(false); // Her değişiklikte, bir sonraki soruya geçmeyi iptal et
              }}
            />
            <h2>Every day</h2>
          </label>
          <label>
            <input
              type="radio"
              name="hairWash"
              value="Every other day"
              checked={selectedOption === 'Every other day'}
              onChange={(e) => {
                handleOptionChange(e);
                setNextQuestion(false);
              }}
            />
            <h2>Every other day</h2>
          </label>
          <label>
            <input
              type="radio"
              name="hairWash"
              value="3 times a week"
              checked={selectedOption === '3 times a week'}
              onChange={(e) => {
                handleOptionChange(e);
                setNextQuestion(false);
              }}
            />
            <h2>3 times a week</h2>
          </label>
          <label>
            <input
              type="radio"
              name="hairWash"
              value="Longer"
              checked={selectedOption === 'Longer'}
              onChange={(e) => {
                handleOptionChange(e);
                setNextQuestion(false);
              }}
            />
            <h2>Longer</h2>
          </label>
        </div>
      </div>
      <Link to="/question3" className='continue-button' onClick={() => setNextQuestion(true)}>CONTINUE</Link>
    </div>
  );
};

export default Question2;
