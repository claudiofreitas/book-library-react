import React, { useState } from 'react';
import BookListPage from './pages/BookListPage';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import NewBookPage from './pages/NewBookPage';

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

  const checkIn = (book: any) => {
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

  const checkOut = (book: any) => {
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

  const getNextId = () => {
    const lastId = booklist.reduce((accumulated, current) => {
      return current.id > accumulated ? current.id : accumulated;
    }, 0);
    return lastId + 1;
  };

  const addNewBook = (book: any) => {
    console.log('add new book:', book);
    const newBook = {
      ...book,
      status: 'ON_SHELF',
      id: getNextId(),
    };
    setBooklist([...booklist, newBook]);
  };

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect from="/" to="/books" />
          </Route>
          <Route exact path="/books">
            <BookListPage
              booklist={booklist}
              checkIn={checkIn}
              checkOut={checkOut}
            />
          </Route>
          <Route exact path="/books/add">
            <NewBookPage addNewBook={addNewBook} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
