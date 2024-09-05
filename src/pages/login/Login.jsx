import React, { memo, useState } from "react";
import { Button, Form, Input, message } from "antd";
import axios from "../../api/index";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Regester from "../../companents/regester/regester";
const Login = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const navigete = useNavigate();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleLogin = (values) => {
    setLoading(true);
    axios
      .post("/admins/sign-in", values)
      .then((res) => {
        navigete("/");
        messageApi.success("Log in!");
        dispatch({ type: "LOGIN", payload: res.data.payload.token });
        console.log(res);
      })
      .catch((err) => {
        messageApi.error("username or password in incorrect!");
        console.log(err);
      })
      .finally(() => setLoading(false));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
<div className="flex h-screen items-center justify-center bg-gray-900">
  {contextHolder}
  <div className="w-[400px] bg-gray-800 p-8 rounded-lg shadow-lg">
    <h3 className="text-center text-3xl font-semibold text-white mb-6">
      Login
    </h3>
    <Form
      name="basic"
      layout="vertical"
      initialValues={{
        remember: true,
      }}
      onFinish={handleLogin}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label={<span className="text-white">Username</span>}
        name="username"
        rules={[
          {
            required: true,
            message: "Ism kiriting!",
          },
        ]}
      >
        <Input className="bg-gray-700 text-black border-none focus:ring-2 focus:ring-blue-500 rounded-md" />
      </Form.Item>

      <Form.Item
        label={<span className="text-white">Password</span>}
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password className="bg-gray-700 text-black border-none focus:ring-2 focus:ring-blue-500 rounded-md" />
      </Form.Item>

      <Form.Item>
        <Button
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-black py-2 rounded-md transition duration-300"
          type="primary"
          htmlType="submit"
        >
          Submit
        </Button>
      </Form.Item>

      <div className="text-center mt-5">
        <span className="text-white">Don't have an account? </span>
        <button
          className="text-blue-400 hover:underline"
          onClick={() => setShow(true)}
        >
          Register
        </button>
      </div>
    </Form>
  </div>
  <Regester show={show} setShow={setShow} />
</div>

  );
};
export default memo(Login);
