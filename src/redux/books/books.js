const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export function addBook(){
    return {
        type: 'ADD_BOOK'
    }
}

export function removeBook(){
    return {
        type: 'REMOVE_BOOK'
    }
}