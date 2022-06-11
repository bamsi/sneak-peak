import axios from 'axios';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const FETCH_BOOK = 'bookstore/books/FETCH_BOOK';
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/sHlHVhUrYculpxBSdyiZ/books';

const initialState = {
  list: [],
};

const addBook = ({ newBook }) => ({
  type: ADD_BOOK,
  newBook,
});

const removeBook = ({ id }) => ({
  type: REMOVE_BOOK,
  id,
});

const fetchBooksSuccess = (books) => ({
  type: FETCH_BOOK,
  books,
});

const books = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        list: [...state.list, action.newBook],
      };
    case REMOVE_BOOK:
      return {
        list: state.list.filter((book) => book.item_id !== action.id),
      };
    case FETCH_BOOK:
      return {
        list: [...state.list, ...action.books],
      };
    default:
      return state;
  }
};

const handleError = (error) => {
  const errorMsg = error.message;
  alert(errorMsg);
};

const fetchBooks = () => (dispatch) => {
  axios
    .get(baseUrl)
    .then((response) => {
      const res = response.data;
      const items = Object.keys(res).map((key) => {
        const item = res[key][0];
        item.item_id = key;
        return item;
      });
      dispatch(fetchBooksSuccess(items));
    })
    .catch((error) => {
      handleError(error);
    });
};

const saveBook = (data) => (dispatch) => {
  const payload = data.newBook;
  axios
    .post(baseUrl, payload)
    .then(() => {
      dispatch(addBook(data));
    })
    .catch((error) => {
      handleError(error);
    });
};

const deleteBook = (payload) => (dispatch) => {
  const { id } = payload;
  axios.delete(`${baseUrl}/${id}`).then(() => {
    dispatch(removeBook(payload));
  }).catch((error) => {
    handleError(error);
  });
};

export { deleteBook, fetchBooks, saveBook };

export default books;
