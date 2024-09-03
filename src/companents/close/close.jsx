import React from "react";
import axios from "../../api/index";
import { AiOutlineClose } from "react-icons/ai";
import { Button, Form, Input, Card } from "antd";
import Model from "../../pages/model/model";

export const Close = ({ show, setShow, addBlog }) => {
  const [form] = Form.useForm();

  const handleLogin = (values) => {
    axios
      .post("/sign-up", values)
      .then((res) => {
        setShow(false);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCreate = () => {
    const values = form.getFieldsValue();
    const blog = {
      _id: Date.now().toString(), // Assign a unique ID
      title: values.title,
      desc: values.desc,
      phone: values.phone,
    };

    axios
      .post("/blogs", blog)
      .then((res) => {
        addBlog(blog); // Add the new blog to the list
        setShow(false); // Close the modal after creation
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      {show && (
        <Model close={() => setShow(false)}>
          <Card
            title="Ma'lumot qo'shish!"
            extra={
              <Button
                icon={<AiOutlineClose />}
                onClick={() => setShow(false)}
                type="text"
              />
            }
            bordered={false}
            style={{ width: 400, margin: "0 auto" }}
          >
            <Form
              form={form}
              name="register"
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={handleLogin}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Title"
                name="title"
                rules={[{ required: true, message: "Ism kiriting!" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Desc"
                name="desc"
                rules={[{ required: true, message: "Ism kiriting!" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Phone"
                name="phone"
                rules={[{ required: true, message: "Ism kiriting!" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full"
                  onClick={handleCreate}
                >
                  Sign Up
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Model>
      )}
    </div>
  );
};



// import React, { useState } from "react";
// import axios from "../../api/index";
// import { AiOutlineClose } from "react-icons/ai";
// import { Button, Form, Input, Card, Space } from "antd";
// import Model from "../../pages/model/model";

// export const Close = ({ show, setShow }) => {
//   const [form] = Form.useForm();

//   const handleLogin = (values) => {
//     axios
//       .post("/sign-up", values)
//       .then((res) => {
//         setShow(false);
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const handleCreate = () => {
//     const values = form.getFieldsValue();
//     const blog = {
//       title: values.title,
//       desc: values.desc,
//       phone: values.phone,
//     };
//     axios.post("/blogs", blog)
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
//   };

//   return (
//     <div>
//       {show && (
//         <Model close={() => setShow(false)}>
//           <Card
//             title="Ma'lumot qo'shish!"
//             extra={
//               <Button 
//                 icon={<AiOutlineClose />} 
//                 onClick={() => setShow(false)} 
//                 type="text"
//               />
//             }
//             bordered={false}
//             style={{ width: 400, margin: '0 auto' }}
//           >
//             <Form
//               form={form}
//               name="register"
//               layout="vertical"
//               initialValues={{ remember: true }}
//               onFinish={handleLogin}
//               onFinishFailed={onFinishFailed}
//               autoComplete="off"
//             >
//               <Form.Item
//                 label="Title"
//                 name="title"
//                 rules={[{ required: true, message: "Ism kiriting!" }]}
//               >
//                 <Input />
//               </Form.Item>
//               <Form.Item
//                 label="Desc"
//                 name="desc"
//                 rules={[{ required: true, message: "Ism kiriting!" }]}
//               >
//                 <Input />
//               </Form.Item>
//               <Form.Item
//                 label="Phone"
//                 name="phone"
//                 rules={[{ required: true, message: "Ism kiriting!" }]}
//               >
//                 <Input />
//               </Form.Item>
//               <Form.Item>
//                 <Button
//                   type="primary"
//                   htmlType="submit"
//                   className="w-full"
//                   onClick={handleCreate}
//                 >
//                   Sign Up
//                 </Button>
//               </Form.Item>
//             </Form>
//           </Card>
//         </Model>
//       )}
//     </div>
//   );
// };