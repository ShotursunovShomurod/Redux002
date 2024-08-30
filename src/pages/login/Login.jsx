import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";
import axios from "../../api/index";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (values) => {
    setLoading(true);
    try {
      const res = await axios.post("/auth/login", values);
      messageApi.success("Login successful!");
      dispatch({ type: "LOGIN", payload: res.data.token });
      navigate("/");
    } catch (err) {
      messageApi.error("Username or password is incorrect!");
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    messageApi.error("Please check your input and try again.");
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      {contextHolder}
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-center text-2xl font-bold mb-6 text-gray-800">Login</h3>
        <Form
          name="login"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={handleLogin}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Enter your username" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full"
              loading={loading}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
