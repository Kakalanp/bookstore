import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

export default function Form() {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [category, setCategory] = useState();
  const dispatch = useDispatch();

  return (
    <form>
      <input type="text" value={title || ''} placeholder="Book title" onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" value={author || ''} placeholder="Author" onChange={(e) => setAuthor(e.target.value)} required />
      <input type="text" value={category || ''} placeholder="Category" onChange={(e) => setCategory(e.target.value)} required />
      <button type="submit" label="submit" onClick={(e) => { e.preventDefault(); if (title && author && category) { dispatch(addBook({ title, author, category })); setAuthor(); setTitle(); } }} />
    </form>
  );
}
