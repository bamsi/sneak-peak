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
      <span>Action</span>
      <h2>{title}</h2>
      <span>{author}</span>
      <ul className="action">
        <li><button type="button">Comments</button></li>
        <li><button type="button" onClick={() => { removeBook(); }}>Remove</button></li>
        <li><button type="button">Edit</button></li>
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
