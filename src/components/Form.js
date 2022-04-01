import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

import styles from '../styles/Form.module.css';

export default function Form() {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [category, setCategory] = useState();
  const dispatch = useDispatch();

  return (
    <form>
      <h2 className={styles.formTitle}>ADD NEW BOOK</h2>
      <div className={styles.formInputs}>
        <input type="text" value={title || ''} placeholder="Book title" onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" value={author || ''} placeholder="Author" onChange={(e) => setAuthor(e.target.value)} required />
        <input type="text" value={category || ''} placeholder="Category" onChange={(e) => setCategory(e.target.value)} required />
        <button className={styles.btnAdd} type="submit" onClick={(e) => { e.preventDefault(); if (title && author && category) { dispatch(addBook({ title, author, category })); setAuthor(); setTitle(); } }}> Add Book</button>
      </div>
    </form>
  );
}
