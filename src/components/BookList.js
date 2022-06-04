import React from 'react';
import ListItem from './ListItem';
import './BookList.css';

const BookList = () => (
  <section className="book-section">
    <ul className="book-list">
      <ListItem />
    </ul>
  </section>
);

export default BookList;
