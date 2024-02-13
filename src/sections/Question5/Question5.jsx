import React, { useState } from 'react';
import './Question5.css'; // CSS dosyasını içe aktar


const Question5 = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="question5-container">
      <div className="question5-card">
        <button className="question5-button"><h1>Q5</h1></button>
        <h2 className="question5-text">5. Can you describe your hair structure?</h2>
        <div className="options">
          <label>
            <input
              type="radio"
              name="hairStructure"
              value="Curly and electric"
              checked={selectedOption === 'Curly and electric'}
              onChange={handleOptionChange}
            />
            <h2>Curly and electric</h2>
          </label>
          <label>
            <input
              type="radio"
              name="hairStructure"
              value="Straight"
              checked={selectedOption === 'Straight'}
              onChange={handleOptionChange}
            />
            <h2>Straight</h2>
          </label>
          <label>
            <input
              type="radio"
              name="hairStructure"
              value="Wavy"
              checked={selectedOption === 'Wavy'}
              onChange={handleOptionChange}
            />
            <h2>Wavy</h2>
          </label>
          <label>
            <input
              type="radio"
              name="hairStructure"
              value="I don't know"
              checked={selectedOption === "I don't know"}
              onChange={handleOptionChange}
            />
            <h2>I don't know</h2>
          </label>
        </div>
      </div>
      <button className='continue-button'>FINISH TEST</button>       
    </div>
  );
};

export default Question5;


