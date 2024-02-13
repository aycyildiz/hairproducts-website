import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section id='hero'>
      <div className='hero-left' style={{ marginLeft: '80px' }}>
        <h1>Find your hair routine!</h1>
        <p>According to your test result, get good products for your hair type.</p>
        <Routes>
          <Route path="/new-page" element={<NewPage />} /> {/* Define your routes */}
        </Routes>
        <button className='btn' onClick={() => navigateTo('/new-page')}>Start Now</button> {/* Attach onClick event */}
        <div className='hero-stats'></div>
      </div>
      <div className='hero-right'>
        <img src='./hairproducts.jpg' alt='' style={{ width: '50%', float: 'right', marginTop: '-200px', marginRight: '100px' }} />
        <div className='hero-right-container'></div>
      </div>
    </section>
  );
};

const NewPage = () => {
  return <h1>New Page</h1>; // Example of the content of the new page
};

const App = () => {
  return (
    <Router> {/* Wrap your component hierarchy with Router */}
      <Hero />
    </Router>
  );
};

export default App;
