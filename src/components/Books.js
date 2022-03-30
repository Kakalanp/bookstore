import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

export default function Books() {
  const books = useSelector((state) => state.books);
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
