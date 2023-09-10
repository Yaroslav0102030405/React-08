import React from 'react';
import './BookPrepage.css'

const BookPrepages = ({ imgUrl, title, descr, genre }) => (
  <div className='BookPrepage-thumb'>
    <img src={imgUrl} alt={title} />
    <div>
      <h5>{title}</h5>
    </div>
  </div>
);

export default BookPrepages;
