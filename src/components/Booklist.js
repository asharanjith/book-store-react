import React from 'react';
import Books from './Books';
import FormInput from './FormInput';

const Booklist = () => (
  <div>
    <h2>My Book List</h2>
    <Books author="Mahatma Gandi" title="My experiments with truth" />
    <Books author="J.K. Rowling" title="Harry Potter and the Philosopher's Stone" />
    <FormInput />
  </div>
);

export default Booklist;
