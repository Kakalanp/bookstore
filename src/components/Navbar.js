import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const links = [
    {
      path: '',
      name: 'Books',
    },
    {
      path: 'Categories',
      name: 'Categories',
    },
  ];

  return (
    <nav>
      <div>
        <h1>BookstoreCMS</h1>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <Link to={`/${link.path}`} exact>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
