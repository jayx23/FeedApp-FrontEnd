import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./loginform.css";

const FormItem = Form.Item;

const LoginForm = () => {
  const onFinish = (values) => {
    console.log(values);
    // Code to link with login api
  };

  return (
    <Form onFinish={onFinish} className="login-form">
      <FormItem
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input
          className="input"
          prefix={<UserOutlined />}
          size="large"
          name="username"
          placeholder="Username"
        />
      </FormItem>
      <FormItem
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input
          className="input"
          prefix={<LockOutlined />}
          size="large"
          name="password"
          type="password"
          placeholder="Password"
        />
      </FormItem>
      <FormItem>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          className="login-form-button"
        >
          Login
        </Button>
      </FormItem>
      <FormItem>
        <Button className="signup-link-container">
          Don't have an account? <Link to="/signup">Signup</Link>
        </Button>
      </FormItem>
    </Form>
  );
};

export default LoginForm;
