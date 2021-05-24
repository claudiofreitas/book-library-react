import React, { useState } from 'react';
import BookListPage from './pages/BookListPage';

const App = () => {
  const defaultBooklist = [
    {
      id: 1,
      title: 'Refactoring',
      author: 'Martin Fowler, Kent Beck',
      category: 'Programming',
      status: 'ON_SHELF',
    },
    {
      id: 2,
      title: 'Clean Code',
      author: 'Robert C Martin',
      category: 'Programming',
      status: 'ON_SHELF',
    },
    {
      id: 3,
      title: 'The 4-Hour Chef',
      author: 'Tim Ferriss',
      category: 'Learning',
      status: 'TAKEN',
    },
  ];

  const [booklist, setBooklist] = useState(defaultBooklist);

  const checkIn = (book) => {
    const newBooklist = booklist.map((currentListBook) => {
      if (currentListBook.id === book.id) {
        return {
          ...book,
          status: 'ON_SHELF',
        };
      } else {
        return currentListBook;
      }
    });
    setBooklist(newBooklist);
  };

  const checkOut = (book) => {
    const newBooklist = booklist.map((currentListBook) => {
      if (currentListBook.id === book.id) {
        return {
          ...book,
          status: 'TAKEN',
        };
      } else {
        return currentListBook;
      }
    });
    setBooklist(newBooklist);
  };

  return (
    <div>
      <BookListPage booklist={booklist} checkIn={checkIn} checkOut={checkOut} />
    </div>
  );
};

export default App;
