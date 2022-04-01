import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const links = [
    {
      path: '',
      name: 'Books',
      id: 1,
    },
    {
      path: 'Categories',
      name: 'Categories',
      id: 2,
    },
  ];

  return (
    <nav>
      <h1 className={styles.title}>Bookstore CMS</h1>
      <ul className={styles.linksList}>
        {links.map((link) => (
          <li key={link.id}>
            <Link to={`/${link.path}`}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
