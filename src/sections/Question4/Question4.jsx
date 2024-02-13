import React, { useState } from 'react';
import './Question4.css'; // CSS dosyasını içe aktar
import { Link } from 'react-router-dom';


const Question2 = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="question2-container">
      <div className="question2-card">
        <button className="question2-button"><h1>Q4</h1></button>
        <h2 className="question2-text">4. Select the budget you want to allocate.</h2>
        <div className="options">
          <label>
            <input
              type="radio"
              name="hairBudget"
              value="300-500 TL"
              checked={selectedOption === '300-500 TL'}
              onChange={handleOptionChange}
            />
            <h2>300-500 TL</h2>
          </label>
          <label>
            <input
              type="radio"
              name="hairBudget"
              value="500-800 TL"
              checked={selectedOption === '500-800 TL'}
              onChange={handleOptionChange}
            />
            <h2>500-800 TL</h2>
          </label>
          <label>
            <input
              type="radio"
              name="hairBudget"
              value="800-1500 TL"
              checked={selectedOption === '800-1500 TL'}
              onChange={handleOptionChange}
            />
            <h2>800-1500 TL</h2>
          </label>
          <label>
            <input
              type="radio"
              name="hairBudget"
              value="1500+ TL"
              checked={selectedOption === '1500+ TL'}
              onChange={handleOptionChange}
            />
            <h2>1500+ TL</h2>
          </label>
        </div>
      </div>
      <Link to="/question5" className='continue-button'>CONTINUE</Link> 

      
    </div>
  );
};

export default Question2;


