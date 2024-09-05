import { Button } from "antd";

import React, { memo, useEffect, useState } from "react";
import { Close } from "../close/close";
import axios from "../../api/index";
import { useDispatch, useSelector } from "react-redux";
import { useFetch } from "../hooks/useFetch";

const Blogs = ({ data }) => {
  const [blogs, setBlogs] = useState(null);
  const [reload, setReload] = useState(false);
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  useEffect(() => {
    axios.get("/admin/profile").then((res) => {
      dispatch({ type: "SET_PROFILE", payload: res.data.payload });
    });
  }, []);
  useEffect(() => {
    setBlogs(data);
  }, [data, reload]);

  console.log(data);

  const [show, setShow] = useState(false);
  const handlDelete = (id) => {
    setReload((p) => !p);
    axios.delete(`/blogs/${id}`).then((res) => {
      axios.get("/blogs").then((res) => {
        setBlogs(res.data.payload);
      });
    });
  };
  let items = blogs?.map((blog) => (
    <div
      key={blog._id}
      className="w-[250px] bg-[#1e1e1e] hover:bg-[#292929] rounded-lg shadow-lg p-6 relative transition duration-300 ease-in-out cursor-pointer transform hover:-translate-y-1 hover:shadow-xl"
    >
      <h3 className="text-lg flex gap-2 font-semibold text-[#1e90ff] mb-2">
        <span className="text-[#f0f0f0]">Title:</span> {blog.title}
      </h3>
      <p className="text-sm text-[#1e90ff] mb-3 flex gap-2">
        <span className="text-[#f0f0f0]">Description:</span> {blog.desc}
      </p>
      <p className="text-sm flex gap-2 py-2 text-[#d3d3d3] mb-3">
        <span className="text-[#1e90ff]">User Name:</span> {blog.userId.fname}
      </p>
      {profile?._id === blog.userId._id && (
        <Button
          className="text-xs bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200 ease-in-out"
          type="primary"
          onClick={() => handlDelete(blog._id)}
        >
          Delete
        </Button>
      )}
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
        axios.get("/blogs").then((res) => {
          setBlogs(res.data.payload);
        });
        setShow(false);
      });
  };
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto pt-8 py-10">
        <div className="w-full flex justify-end">
          <Button onClick={() => setShow(true)} className="mb-6">
            Create card
          </Button>
        </div>

        <div className="grid gap-4 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {items}
        </div>
        <Close show={show} setShow={setShow} handleCreate={handleCreate} />
      </div>
    </div>
  );
};

export default memo(Blogs);
