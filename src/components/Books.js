import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const Books = (props) => {
  const {
    type, title, author, id, currentChapter, progress, percentage,
  } = props;
  const dispatch = useDispatch();
  const removeBookHandler = () => {
    dispatch(removeBook(id));
  };
  return (
    <li>
      <div className="book">
        <div className="book-content">
          <div>
            <h4 className="book-category">{type}</h4>
            <h2 className="book-title">{title}</h2>
            <h6 className="book-author">{author}</h6>
            <div className="action-buttons">
              <button type="button" className="button-outline">
                Comments
              </button>
              <div className="vertical-divider" />
              <button type="button" onClick={removeBookHandler} className="button-outline">
                Remove
              </button>
              <div className="vertical-divider" />
              <button type="button" className="button-outline">
                Edit
              </button>
            </div>
          </div>
          <div className="progress-container">
            <div className="circular-progress-container">
              <div className="circular-progress" />
            </div>
            <div className="progress-stat">
              <p className="percent-complete">
                {percentage}
                %
              </p>
              <p className="completed">Completed</p>
            </div>
            <div className="progress-divider" />
            <div className="current-chapter-container">
              <div>
                <p className="current-chapter-label">{currentChapter}</p>
                <p className="current-chapter">{progress}</p>
              </div>
              <div>
                <button type="button" className="primary-button">Update Progress</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

Books.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  currentChapter: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Books;
