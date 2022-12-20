import React from 'react';
import { useSelector } from 'react-redux';
import Books from './Books';
import FormInput from './FormInput';

const Booklist = () => {
  const Booklist = useSelector((state) => state.books);
  return (
    <div>
      {Booklist.map((book) => (
        <Books key={book.id} title={book.title} author={book.author} id={book.id} type="Fiction" />
      ))}
      <FormInput />
    </div>
  );
};

export default Booklist;
