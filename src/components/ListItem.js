import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import BookStatus from './BookStatus';
import CurrentChapter from './CurrentChapter';

const ListItem = () => {
  const bookList = useSelector((state) => state.books.list);
  const list = bookList.map((item, index) => (
    <li className="list-item" key={item.title}>
      <Book title={item.title} author={item.author} index={index} />
      <div className="book-status">
        <BookStatus />
        <CurrentChapter />
      </div>
    </li>
  ));
  return list;
};

export default ListItem;
