import React from 'react';

const BookListPage = ({ booklist, checkIn, checkOut }) => {
  return (
    <div>
      <h1>Books</h1>
      <table>
        <thead>
          <tr>
            <td>Title</td>
            <td>Author</td>
            <td>Category</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {booklist.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.category}</td>
              <td>{book.status}</td>
              <td>
                {book.status === 'TAKEN' ? (
                  <button onClick={(e) => checkIn(book)}>Check-In</button>
                ) : (
                  <button onClick={(e) => checkOut(book)}>Check-Out</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookListPage;
