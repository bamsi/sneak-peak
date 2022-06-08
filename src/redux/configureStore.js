import { combineReducers} from 'redux';
import { reducer as book } from './books/books';
import { reducer as category } from './categories/categories';

export default combineReducers({
    book,
    category
})