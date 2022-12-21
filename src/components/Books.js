import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const Books = (props) => {
  const {
    type, title, author, id,
  } = props;
  const dispatch = useDispatch();
  const removeBookHandler = () => {
    dispatch(removeBook(id));
  };
  return (
    <div>
      <p>{type}</p>
      <h3>{title}</h3>
      <p>{author}</p>
      <button type="button" onClick={removeBookHandler}>
        Remove Book
      </button>
    </div>
  );
};

Books.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Books;
