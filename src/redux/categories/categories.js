const CHECK_STATUS = 'CHECK_STATUS';
const initialState = {
  list: [],
};

const checkStatus = () => ({
  type: CHECK_STATUS,
});

const category = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export { checkStatus };

export default category;
