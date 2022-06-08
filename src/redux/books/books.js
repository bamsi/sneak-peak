const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const initialState = {
    list: []
}

const addBook = () => {
    return {
        type: 'ADD_BOOK',
        newBook
    }
}

const removeBook = () => {
    return {
        type: 'REMOVE_BOOK',
        index
    }
}

const reducer = (state = initialState, action) => {
   switch (action.type){
       case ADD_BOOK:
           return {
               list: [...state.list, action.newBook]
           }
       case REMOVE_BOOK: 
           return {
               list : [...state.list.slice(0, action.index), ...state.list.slice(action.index) ]
           }
       default : 
           return state
   }
}

export {addBook, removeBook};

export default reducer;