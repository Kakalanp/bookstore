import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

export default function Form() {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const dispatch = useDispatch();

  return (
    <form>
      <input type="text" value={title || ''} placeholder="Book title" onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" value={author || ''} placeholder="Author" onChange={(e) => setAuthor(e.target.value)} required />
      <button type="submit" label="submit" onClick={(e) => { e.preventDefault(); if (title && author) { dispatch(addBook({ title, author })); setAuthor(); setTitle(); } }} />
    </form>
  );
}
