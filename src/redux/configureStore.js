import {
  combineReducers, createStore, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import books from './books/books';
import categories from './categories/categories';

const rootReducer = combineReducers({
  books,
  categories,
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;
