import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checksStatus } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(checksStatus());
  };
  return (
    <div>
      <h2>{categories}</h2>
      <button type="submit" onClick={clickHandler}>
        Check Status
      </button>
    </div>
  );
};

export default Categories;
