import { React, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { saveBook } from '../redux/books/books';

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
        item_id: id, title, author, category: 'Action',
      };
      dispatch(saveBook({ newBook }));
    } else {
      alert('Please enter all required field');
    }
  };

  return (
    <section>
      <h2>Add New Book</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name="title" value={title} onChange={(e) => changeTitle(e)} placeholder="Book title" />
        <input type="text" name="author" value={author} onChange={(e) => changeAuthor(e)} placeholder="Author" />
        <select name="category">
          <option value="">category</option>
        </select>
        <button type="submit">Add book</button>
      </form>
    </section>
  );
};

export default AddBook;
