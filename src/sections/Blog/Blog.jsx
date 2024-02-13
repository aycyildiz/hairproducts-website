import React, { useState } from 'react';
import ShampooSelectionPopup from './ShampooSelectionPopup'; 
import './Blog.css'; 

function Blog() {
  const [popupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  };

  return (
    
    <div className="blog">
      <h2>Blog Page</h2>
      <div className="shampoo-card">
        <img src="./shampoo2.jpg" alt="Shampoo Image" className='shampoo-image'/>
        <p>
          Blog contents will come here.
        </p>
        <button className="info-button" onClick={togglePopup}>Get Information About Shampoo Selection</button>
        {popupVisible && <ShampooSelectionPopup onClose={togglePopup} />}
      </div>
    </div>
  );
}

export default Blog;





