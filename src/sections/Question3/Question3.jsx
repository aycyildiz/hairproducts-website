import React, { useState } from 'react';
import './Question3.css'; // CSS dosyasını içe aktar
import { Link } from 'react-router-dom';


const Question2 = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="question2-container">
      <div className="question2-card">
        <button className="question2-button"><h1>Q3</h1></button>
        <h2 className="question2-text">3. Is there any dye or chemical treatment in your hair?</h2>
        <div className="options">
          <label>
            <input
              type="radio"
              name="hairChem"
              value="Hair Dye"
              checked={selectedOption === 'Hair Dye'}
              onChange={handleOptionChange}
            />
            <h2>Hair Dye</h2>
          </label>
          <label>
            <input
              type="radio"
              name="hairChem"
              value="Perm"
              checked={selectedOption === 'Perm'}
              onChange={handleOptionChange}
            />
            <h2>Perm</h2>
          </label>
          <label>
            <input
              type="radio"
              name="hairChem"
              value="Brazilian keratin"
              checked={selectedOption === 'Brazilian keratin'}
              onChange={handleOptionChange}
            />
            <h2>Brazilian keratin</h2>
          </label>
          <label>
            <input
              type="radio"
              name="hairChem"
              value="Other"
              checked={selectedOption === 'Other'}
              onChange={handleOptionChange}
            />
            <h2>Other</h2>
          </label>
        </div>
      </div>
      <Link to="/question4" className='continue-button'>CONTINUE</Link> 

      
    </div>
  );
};

export default Question2;


