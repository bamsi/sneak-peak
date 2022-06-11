import { React, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { saveBook } from '../redux/books/books';
import './AddBook.css';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author.trim()) {
      const id = uuidv4();
      const newBook = {
        item_id: id,
        title,
        author,
        category: 'Action',
      };
      dispatch(saveBook({ newBook }));
    } else {
      alert('Please enter all required field');
    }
  };

  return (
    <section className="add-book-section">
      <h2 className="gray-color add-book-title">Add New Book</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="book-form">
          <input
            type="text"
            name="title"
            value={title}
            className="input-text"
            onChange={(e) => changeTitle(e)}
            placeholder="Book title"
          />
          <input
            type="text"
            name="author"
            value={author}
            className="input-text"
            onChange={(e) => changeAuthor(e)}
            placeholder="Author"
          />
          <select name="category" className="input-text">
            <option value="">Category</option>
          </select>
          <button type="submit" className="submit-button">Add book</button>
        </div>
      </form>
    </section>
  );
};

export default AddBook;
