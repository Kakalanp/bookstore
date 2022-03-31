import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Form from './Form';
import { fetchBooks } from '../redux/books/books';

export default function Books() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => { dispatch(fetchBooks()); }, []);
  return (
    <section>

      <div>
        {books.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
            id={book.id}
            category={book.category}
          />
        ))}
      </div>
      <Form />
    </section>
  );
}
