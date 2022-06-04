import React from 'react';

const Book = () => (
  <div>
    <span>Action</span>
    <h2>The Hunger Games</h2>
    <span>Suzanne Collins</span>
    <ul className="action">
      <li><button type="button">Comments</button></li>
      <li><button type="button">Remove</button></li>
      <li><button type="button">Edit</button></li>
    </ul>
  </div>
);

export default Book;
