import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const Book = ({ title, author, index }) => {
  const dispatch = useDispatch();

  const deleteBook = () => {
    dispatch(removeBook({ index }));
  };

  return (
    <div>
      <span>Action</span>
      <h2>{title}</h2>
      <span>{author}</span>
      <ul className="action">
        <li><button type="button">Comments</button></li>
        <li><button type="button" onClick={() => { deleteBook(); }}>Remove</button></li>
        <li><button type="button">Edit</button></li>
      </ul>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
export default Book;
