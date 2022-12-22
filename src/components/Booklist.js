import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Books from './Books';
import FormInput from './FormInput';
import { fetchBooks } from '../redux/books/books';

const Booklist = () => {
  const books = useSelector((state) => state.book);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <div>
      {books.map((book) => (
        <Books
          key={Math.random()}
          type={book.category}
          title={book.title}
          author={book.author}
          id={book.item_id}
        />
      ))}
      <FormInput />
    </div>
  );
};

export default Booklist;
