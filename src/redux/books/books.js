const ADD_BOOK = 'books/books/ADD_BOOK';
const REMOVE_BOOK = 'books/books/REMOVE_BOOK';

export const addBook = (data) => (dispatch) => {
  dispatch({ type: ADD_BOOK, payload: data });
};

export const removeBook = (id) => (dispatch) => {
  dispatch({ type: REMOVE_BOOK, payload: id });
};

const books = [
  { title: 'The Hunger Games', author: 'Suzanne', id: 1 },
  { title: 'Dune', author: 'Frank Herbert', id: 2 },
];

const booksReducer = (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
