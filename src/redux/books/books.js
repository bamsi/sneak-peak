const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const initialState = {
  list: [{title: 'The Hunger Games', author: 'Suzanne Collins', category: 'Action'}],
};

const addBook = () => ({
  type: 'ADD_BOOK',
  newBook: {},
});

const removeBook = () => ({
  type: 'REMOVE_BOOK',
  index: 0,
});

const books = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        list: [...state.list, action.newBook],
      };
    case REMOVE_BOOK:
      return {
        list: state.list.filter((book, index) => index !== action.index),
      };
    default:
      return state;
  }
};

export { addBook, removeBook };

export default books;
