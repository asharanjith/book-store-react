import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const FormInput = () => {
  const [data, setData] = useState({
    title: '',
    author: '',
    category: 'Fiction',
  });
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      ...data,
    };
    dispatch(addBook(newBook));
  };
  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          value={data.title}
          onChange={changeHandler}
          placeholder="Book Title"
        />
        <input
          type="text"
          name="author"
          value={data.author}
          onChange={changeHandler}
          placeholder="Author"
        />
        <button type="submit" onClick={submitHandler}>Add Book</button>
      </form>
    </div>
  );
};

export default FormInput;
