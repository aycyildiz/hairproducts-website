import React from 'react';
import "./Blog.css"

function ShampooSelectionPopup({ onClose }) {
  return (
    <section id='blog'>
      <div className="popup">
        <div className="popup-inner">
          <h2>How Should You Choose a Shampoo Suitable for Your Hair Type?</h2>
          <p>
          Every hair type has different needs, so choosing the right shampoo is important. Determine your hair type and find the shampoo that suits it.
          </p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </section>
  );
}

export default ShampooSelectionPopup;
