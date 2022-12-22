import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ADD_BOOK = 'books/books/ADD_BOOK';
const REMOVE_BOOK = 'books/books/REMOVE_BOOK';
const SHOW_BOOKS = 'books/books/SHOW_BOOKS';
const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/C6d01TDYTG44NnpUlkMZ/books';

const initialbooks = [
  {
    item_id: 'mock-1',
    category: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    percentage: '64',
    progress: {
      currentChapter: 'Chapter 17',
      completed: '64',
    },
  },
  {
    item_id: 'mock-2',
    category: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
    percentage: '8',
    progress: {
      currentChapter: 'Chapter 3: "A Lesson Learned"',
      completed: '8',
    },
  },
  {
    item_id: 'mock-3',
    category: 'Economy',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    percentage: '0',
    progress: {
      currentChapter: 'Introduction',
      completed: '0',
    },
  },
];
export const fetchBooks = createAsyncThunk(
  SHOW_BOOKS,
  async (args, { dispatch }) => {
    const { data } = await axios.get(baseURL);
    const newbooks = Object.keys(data).map((key) => {
      const books = data[key][0];
      return {
        item_id: key,
        ...books,
        percentage: '0',
        progress: {
          currentChapter: 'Introduction',
          completed: '0',
        },
      };
    });
    dispatch({ type: SHOW_BOOKS, payload: newbooks.concat(initialbooks) });
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

const booksReducer = (state = initialbooks, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, {
        ...action.payload,
        percentage: 0,
        progress: {
          currentChapter: 'Introduction',
          completed: '0',
        },
      }];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    case SHOW_BOOKS:
      return [...action.payload];
    default:
      return state;
  }
};

export default booksReducer;
