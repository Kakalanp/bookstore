import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

export default function Book({
  title, author, category, id,
}) {
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <p>{category}</p>
        <h2>{title}</h2>
        <h3>{author}</h3>
      </div>
      <button
        type="button"
        label="remove"
        onClick={(e) => { e.preventDefault(); dispatch(removeBook({ id })); }}
      />
    </div>
  );
}

Book.defaultProps = {
  category: null,
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string,
  id: PropTypes.number.isRequired,
};
