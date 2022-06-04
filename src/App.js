import React from 'react';
import Header from './components/Header';
import BookList from './components/BookList';
import AddBook from './components/AddBook';

const App = () => (
  <div>
    <Header />
    <BookList />
    <AddBook />
  </div>
);

export default App;
