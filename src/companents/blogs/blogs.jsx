import { Button, Card } from "antd";
import React, { useState } from "react";
import { Close } from "../close/close";
import axios from "../../api/index";

const Blogs = ({ data }) => {
  const [show, setShow] = useState(false);

  const handleCreate = (values) => {
    const blog = {
      title: values.title,
      desc: values.desc,
      phone: values.phone,
    };
    axios.post("/blogs", blog)
      .then((res) => {
        console.log(res);
        setShow(false); 
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const items = data?.map((blog) => (
    <Card
      key={blog._id}
      className="w-full"
      hoverable
      cover={<img alt="blog cover" src="https://via.placeholder.com/200" />}
    >
      <Card.Meta
        title={blog.title}
        description={blog.desc}
      />
    </Card>
  ));

  return (
    <div className="container mx-auto mt-8 mb-10">
      <div className="flex justify-end mb-6">
        <Button
          type="primary"
          size="large"
          onClick={() => setShow(true)}
        >
          Add Blog
        </Button>
      </div>
      <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {items}
      </div>
      <Close show={show} setShow={setShow} handleCreate={handleCreate} />
    </div>
  );
};

export default Blogs;
