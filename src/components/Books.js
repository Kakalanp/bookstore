import React from 'react';
import Book from './Book';
import Form from './Form';

export default function Books() {
  const books = [
    {
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      category: 'Action',
      length: 27,
      chapter: '17',
    },
    {
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Science Fiction',
      length: 38,
      chapter: 'Chapter 3: "A Lesson Learned"',
    },
    {
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      category: 'Economy',
      length: 27,
      chapter: 'Introduction',
    },
  ];
  return (
    <section>

      <div>
        {books.map((book) => (
          <Book key={book.id} title={book.title} author={book.author} category={book.category} />
        ))}
      </div>
      <Form />
    </section>
  );
}
