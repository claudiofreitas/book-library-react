import React from 'react';
import BookListPage from './pages/BookListPage';

const App = () => {
  const bookList = [
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

  const checkIn = (book) => {
    const bookIndex = bookList.findIndex(
      (listElement) => listElement.id === book.id
    );
    bookList[bookIndex].status = 'ON_SHELF';
  };

  const checkOut = (book) => {
    const bookIndex = bookList.findIndex(
      (listElement) => listElement.id === book.id
    );
    bookList[bookIndex].status = 'TAKEN';
  };

  return (
    <div>
      <BookListPage booklist={bookList} checkIn={checkIn} checkOut={checkOut} />
    </div>
  );
};

export default App;
