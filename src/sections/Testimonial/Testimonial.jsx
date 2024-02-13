// Testimonial.js

import React from 'react';

const Testimonial = ({ name, position, comment }) => {
  return (
    <div className="testimonial">
      <h3>{name}</h3>
      <p className="position">{position}</p>
      <p className="comment">{comment}</p>
    </div>
  );
};

export default Testimonial;
