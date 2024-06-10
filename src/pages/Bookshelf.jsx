// src/pages/Bookshelf.js
import React, { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';
import './Bookshelf.css';

const Bookshelf = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBookshelf);
  }, []);

  const removeFromBookshelf = (bookKey) => {
    const updatedBookshelf = bookshelf.filter(book => book.key !== bookKey);
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <div className="container">
      <div className="header">
        <h2>My Bookshelf</h2>
        <p>View and manage your personal collection of books.</p>
      </div>
      <div className="book-list">
        {bookshelf.map((book) => (
          <BookCard key={book.key} book={book} removeFromBookshelf={removeFromBookshelf} />
        ))}
      </div>
      <div className="navigation-buttons">
        <button onClick={() => window.location.href = '/'}>Back to Search</button>
      </div>
    </div>
  );
};

export default Bookshelf;
