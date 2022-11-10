import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTitle from "../hooks/useTitle";

const UpdateReview = () => {
  useTitle("Update Review");

  const updatedUser = useLoaderData();
  const [user, setUser] = useState(updatedUser);
  const { msg, rating, reviewer, serviceName, _id } = updatedUser;

  const handleUpdateUser = (event) => {
    event.preventDefault();
    console.log(user);
    fetch(`https://health-coach-server-eta.vercel.app/review/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          //   alert("user updated");
          toast.success("Updated review successfully", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          console.log(data);
        }
      });
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    const field = event.target.name;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };
  return (
    <div>
      <h2 className="text-center text-3xl">
        Please Update Your Review <strong>{reviewer}</strong>
      </h2>
      <form onSubmit={handleUpdateUser} className="m-10 lg:w-2/4 mx-auto px-4">
        <label
          className="block text-gray-700 text-sm font-bold "
          htmlFor="username"
        >
          Service Name
        </label>
        <input
          onChange={handleInputChange}
          name="serviceName"
          type="text"
          placeholder="Service Name"
          defaultValue={serviceName}
          className="input input-ghost w-full input-bordered"
          readOnly
        />
        <label
          className="block text-gray-700 text-sm font-bold mt-5"
          htmlFor="username"
        >
          Ratings
        </label>
        <input
          onChange={handleInputChange}
          name="rating"
          type="text"
          placeholder="Rating"
          defaultValue={rating}
          className="input input-ghost w-full  input-bordered"
        />
        <label
          className="block text-gray-700 text-sm font-bold mt-6"
          htmlFor="username"
        >
          Your Review
        </label>
        <textarea
          onChange={handleInputChange}
          name="msg"
          placeholder="review"
          className="textarea textarea-bordered  h-24 w-full"
          defaultValue={msg}
        ></textarea>
        <div className="text-center mt-4">
          <button type="submit" className="btn btn-primary ">
            Update Review
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UpdateReview;
