// src/pages/Search.js
import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';
import './Search.css';


const Search = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (query) {
      fetch(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
        .then((response) => response.json())
        .then((data) => setBooks(data.docs))
        .catch((error) => console.error('Error fetching books:', error));
    }
  }, [query]);

  const addToBookshelf = (book) => {
    const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    localStorage.setItem('bookshelf', JSON.stringify([...bookshelf, book]));
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Personal Bookshelf</h1>
        <p>Search for books and add them to your personal bookshelf.</p>
      </div>
      <SearchBar query={query} setQuery={setQuery} />
      <BookList books={books} addToBookshelf={addToBookshelf} />
      <div className="navigation-buttons">
        <button onClick={() => window.location.href = '/bookshelf'}>Go to My Bookshelf</button>
      </div>
    </div>
  );
};

export default Search;
