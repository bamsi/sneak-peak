import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook } from '../redux/books/books';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();

  const removeBook = () => {
    dispatch(deleteBook({ id }));
  };

  return (
    <div>
      <span className="gray-color">Action</span>
      <h2 className="book-title">{title}</h2>
      <span className="blue-color author">{author}</span>
      <ul className="action">
        <li><button type="button" className="action-button blue-color">Comments</button></li>
        <li><button type="button" className="action-button blue-color" onClick={() => { removeBook(); }}>Remove</button></li>
        <li><button type="button" className="action-button blue-color">Edit</button></li>
      </ul>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Book;
