import React from 'react';
import Book from './Book';
import BookStatus from './BookStatus';
import CurrentChapter from './CurrentChapter';

const ListItem = () => (
  <li className="list-item">
    <Book />
    <div className="book-status">
      <BookStatus />
      <CurrentChapter />
    </div>
  </li>
);

export default ListItem;
