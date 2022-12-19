const ADD_BOOK = 'books/books/ADD_BOOK';
const REMOVE_BOOK = 'books/books/REMOVE_BOOK';

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  payload: book,
});

const books = [];

const booksReducer = (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default booksReducer;
