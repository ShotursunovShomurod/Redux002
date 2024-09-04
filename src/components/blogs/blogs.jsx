import { Button } from "antd";

import React, { useEffect, useState } from "react";
import { Close } from "../close/close";
import { useFetch } from "../hooks/useFetch";
import axios from "../../api/index";

const Blogs = ({ data }) => {
  const [blogs, setBlogs] = useState(null);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    setBlogs(data);
  }, [data, reload]);
  const [show, setShow] = useState(false);
  const handlDelete = (id) => {
    axios.delete(`/blogs/${id}`).then((res) => {
      setReload((p) => !p);
    });
  };
  let items = blogs?.map((blog) => (
    <div key={blog._id} className="w-[240px] bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
    <img
      src={blog.imageUrl}
      alt={blog.title}
      className="w-full h-40 object-cover"
    />
    <div className="p-4">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{blog.title}</h3>
      <p className="text-sm text-gray-600 mb-5 leading-relaxed">{blog.desc}</p>
      <Button
        onClick={() => handleDelete(blog._id)}
        className="bg-red-500 text-white w-full py-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
      >
        Delete
      </Button>
    </div>
  </div>
  
  ));
  const handleCreate = (values) => {
    let blog = {
      title: values.title,
      desc: values.desc,
    };
    axios
      .post("/blogs", blog)

      .then((res) => {
        setBlogs([...blogs, res.data.payload]);
      });
  };
  return (
<div className="container mx-auto mt-8 mb-10 px-4">
  <Button
    onClick={() => setShow(true)}
    className="mb-6 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
  >
    Create Card
  </Button>
  <div className="grid gap-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
    {items}
  </div>
  <Close show={show} setShow={setShow} handleCreate={handleCreate} />
</div>

  );
};

export default Blogs;
