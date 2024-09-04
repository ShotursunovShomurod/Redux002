import axios from "../../api/index";
import { AiOutlineClose } from "react-icons/ai";
import { Button, Form, Input } from "antd";
import Model from "../../pages/model/model";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
export const Close = ({ show, setShow, handleCreate }) => {
  const [reload, setReload] = useState(false);
  const {} = useFetch("/blogs", { limit: 8 }, [reload]);
  const handleLogin = (values) => {
    axios
      .post("/sign-up", values)
      .then((res) => {
        setShow(false);
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
<div>
  {show && (
    <Model close={() => setShow(false)}>
      <Form
        className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto"
        name="register"
        layout="vertical"
        initialValues={{
          remember: true,
        }}
        onFinish={handleCreate}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h2 className="text-2xl font-semibold text-zinc-800 text-center mb-4">
          Ma'lumot qo'shish!
        </h2>
        <Button
          onClick={() => setShow(false)}
          className="border-none absolute top-2 right-2 text-zinc-500 hover:text-zinc-700 transition-colors"
        >
          <AiOutlineClose size={20} />
        </Button>
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Ism kiriting!",
            },
          ]}
        >
          <Input className="border-zinc-300 focus:border-zinc-500 focus:ring-zinc-500 rounded-md"/>
        </Form.Item>
        <Form.Item
          label="Desc"
          name="desc"
          rules={[
            {
              required: true,
              message: "Ism kiriting!",
            },
          ]}
        >
          <Input className="border-zinc-300 focus:border-zinc-500 focus:ring-zinc-500 rounded-md"/>
        </Form.Item>

        <Form.Item>
          <Button
            className="w-full bg-zinc-700 text-white py-2 rounded-md hover:bg-zinc-800 transition-colors"
            type="primary"
            htmlType="submit"
          >
            Sign up
          </Button>
        </Form.Item>
      </Form>
    </Model>
  )}
</div>

  );
};
