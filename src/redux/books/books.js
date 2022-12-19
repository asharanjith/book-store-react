const ADD_BOOK = 'books/books/ADD_BOOK';
const REMOVE_BOOK = 'books/books/REMOVE_BOOK';

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (state) => ({
  type: REMOVE_BOOK,
  books: state.books.filter((book) => book.id !== state.book.id),
});

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state, action.books];
    default:
      return state;
  }
};

export default booksReducer;
