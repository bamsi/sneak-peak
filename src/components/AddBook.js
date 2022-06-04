import React from 'react';

const AddBook = () => (
  <section>
    <h2>Add New Book</h2>
    <form>
      <input type="text" name="title" placeholder="Book title" />
      <select name="category">
        <option value="">category</option>
      </select>
      <button type="button">Add book</button>
    </form>
  </section>
);

export default AddBook;
