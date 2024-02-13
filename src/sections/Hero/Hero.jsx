import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleStartNowClick = () => {
    // START NOW butonuna tıklandığında '/result' sayfasına yönlendir
    navigate('/question1');
  };
  

  return (
    <section id='hero'>
      <div className='hero-left' style={{ marginLeft: '80px' }}>
        <h1>Find your hair routine!</h1>
        <p>According to your test result, get good products for your hair type.</p>
        <button className='btn' onClick={handleStartNowClick}>Start Now</button>
        <div className='hero-stats'></div>
      </div>    
      <div className='hero-right'>
        <img src='./hairproducts.jpg' alt='' style={{ width: '50%', float: 'right', marginTop: '-200px', marginRight: "100px" }} />
        <div className='hero-right-container'></div>
      </div>
    </section>
  );
};

export default Hero;
