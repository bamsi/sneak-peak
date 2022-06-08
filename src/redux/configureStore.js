import { combineReducers } from 'redux';
import book from './books/books';
import category from './categories/categories';

export default combineReducers({
  book,
  category,
});
