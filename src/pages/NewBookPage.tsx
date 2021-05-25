import React from 'react';
import { Button, Form, Input } from 'antd';
import 'antd/dist/antd.css';
import { Redirect, useHistory } from 'react-router-dom';

// todo: add type React.FC
const NewBookPage = ({ addNewBook }: any) => {
  const history = useHistory();

  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 4, span: 16 },
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);
    addNewBook(values);
    history.push('/books');
  };

  return (
    <div>
      <h1>Add new book</h1>
      <Form {...layout} onFinish={onFinish}>
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please input the book's title" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Author"
          name="author"
          rules={[
            { required: true, message: "Please input the book's author" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Category" name="category">
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NewBookPage;
