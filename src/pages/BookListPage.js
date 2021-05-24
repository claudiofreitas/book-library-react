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
          </tr>
        </thead>
        <tbody>
          {booklist.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookListPage;
