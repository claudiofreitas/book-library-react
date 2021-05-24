import React from 'react';
import BookListPage from './pages/BookListPage';

const App = () => {
  const fakeBookList = [
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
      status: 'ON_SHELF'
    },
    {
      id: 3,
      title: 'The 4-Hour Chef',
      author: 'Tim Ferriss',
      category: 'Learning',
      status: 'ON_SHELF'
    },
  ];
  return (
    <div>
      <BookListPage booklist={fakeBookList} />
    </div>
  );
};

export default App;
