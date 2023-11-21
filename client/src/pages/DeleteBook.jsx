import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "../axios/config";
import { useNavigate, useParams } from "react-router-dom";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDelete = () => {
    setLoading(true);
    axios
      .delete(`/delete-book/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        alert("Error occurred check the console");
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {
        loading?(<Spinner/>):('')
      }
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are you sure you want to delete this Book</h3>
        <button className="p-4 bg-red-600 text-white m-8 w-full" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
};

export default DeleteBook;
