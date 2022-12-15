import React from 'react';
import PropTypes from 'prop-types';

const Books = (props) => {
  const { author, title } = props;
  return (
    <div>
      <h4>{title}</h4>
      <p>{author}</p>
      <button type="button">Remove Book</button>
    </div>
  );
};

Books.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Books;
