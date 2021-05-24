import React from 'react';

const BookListPage = (props) => {
  const { booklist } = props;
  return (
    <div>
      Books:
      <table>
        <thead>
          <tr>
            <td>Title</td>
            <td>Author</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {booklist.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookListPage;
