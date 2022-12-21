import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Books from './Books';
import FormInput from './FormInput';
import { fetchBooks } from '../redux/books/books';

const Booklist = () => {
  const Booklist = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  });
  return (
    <div>
      {Booklist.map((book) => (
        <Books
          key={Math.random()}
          title={book.title}
          author={book.author}
          id={book.item_id}
          type={book.category}
        />
      ))}
      <FormInput />
    </div>
  );
};

export default Booklist;
