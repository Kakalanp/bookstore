import React from 'react';
import PropTypes from 'prop-types';

export default function Book({ title, author, category }) {
  return (
    <div>
      <p>{category}</p>
      <h2>{title}</h2>
      <h3>{author}</h3>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
