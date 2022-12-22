import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ADD_BOOK = 'books/books/ADD_BOOK';
const REMOVE_BOOK = 'books/books/REMOVE_BOOK';
const SHOW_BOOKS = 'books/books/SHOW_BOOKS';
const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/C6d01TDYTG44NnpUlkMZ/books';

export const fetchBooks = createAsyncThunk(
  SHOW_BOOKS,
  async (args, { dispatch }) => {
    const { data } = await axios.get(baseURL);
    const newbooks = Object.keys(data).map((key) => {
      const books = data[key][0];
      return {
        item_id: key,
        ...books,
      };
    });
    dispatch({ type: SHOW_BOOKS, payload: newbooks });
  },
);

export const addBook = (data) => async (dispatch) => {
  await axios.post(baseURL, data);
  dispatch({ type: ADD_BOOK });
  dispatch(fetchBooks());
};

export const removeBook = (id) => async (dispatch) => {
  await axios.delete(`${baseURL}/${id}`);
  dispatch({ type: REMOVE_BOOK, payload: id });
  dispatch(fetchBooks());
};

const books = [];

const booksReducer = (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    case SHOW_BOOKS:
      return [...action.payload];
    default:
      return state;
  }
};

export default booksReducer;
