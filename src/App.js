import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './styles/App.css';

import Books from './components/Books';
import Categories from './components/Categories';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/Categories" element={<Categories />} />
    </Routes>
  );
}
