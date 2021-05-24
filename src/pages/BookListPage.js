import React from 'react';
import { Button, Table, Tooltip } from 'antd';
import 'antd/dist/antd.css';
import Icon, { LoginOutlined, LogoutOutlined } from '@ant-design/icons';

const BookListPage = ({ booklist, checkIn, checkOut }) => {
  const tableData = booklist.map((book) => {
    return {
      ...book,
      key: book.id,
    };
  });
  const columns = [
    {
      title: 'Title',
      key: 'title',
      dataIndex: 'title',
    },
    {
      title: 'Author',
      key: 'author',
      dataIndex: 'author',
    },
    {
      title: 'Category',
      key: 'category',
      dataIndex: 'category',
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (status, record) => {
        const BookSvg = () => (
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="book"
            className="svg-inline--fa fa-book fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="1.2em"
            height="1.2em"
          >
            <path
              fill="currentColor"
              d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"
            />
          </svg>
        );
        const BookIcon = (props) => <Icon component={BookSvg} {...props} />;
        return (
          <Tooltip title={record.status === 'ON_SHELF' ? 'Available' : 'Taken'}>
            <BookIcon style={{ color: record.status === 'ON_SHELF' ? 'green' : 'gray' }} />
          </Tooltip>
        );
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, book) => {
        console.log('text', text);
        console.log('book', book);
        if (book.status === 'TAKEN') {
          return (
            <Tooltip title="Check In">
              <Button icon={<LoginOutlined />} type="primary" onClick={(e) => checkIn(book)}>Check In</Button>
            </Tooltip>
          );
        } else {
          return (
            <Tooltip title="Check Out">
              <Button icon={<LogoutOutlined />} type="primary" onClick={(e) => checkOut(book)} >Check Out</Button>
            </Tooltip>
          );
        }
      },
    },
  ];
  return (
    <div>
      <h1>Books</h1>
      <Table dataSource={tableData} columns={columns} size="small"/>
    </div>
  );
};

export default BookListPage;
