import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BookPrepages from '../BookPrepage/BookPrepage';
import './BookList.css'

const BookList = ({ books, location }) => {
  return (
    <ul className='BookList'>
      {books.map(({id, imgUrl, title})=> (
        <li key={id}>
          <Link to={{
            pathname: `/books/${id}`,
            state: {from: location}
          }}>
              <BookPrepages imgUrl={imgUrl} title={title}/>
            </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(BookList);
// функция высшего порядка
