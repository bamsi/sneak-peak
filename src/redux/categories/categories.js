const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';
const initialState = {
  list: [],
};

const checkStatus = () => ({
  type: CHECK_STATUS,
});

const categories = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export { checkStatus };

export default categories;
