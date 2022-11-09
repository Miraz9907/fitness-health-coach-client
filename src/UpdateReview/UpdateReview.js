import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const UpdateReview = () => {
  const updatedUser = useLoaderData();
  const [user, setUser] = useState(updatedUser);
  const { msg, rating, reviewer,serviceName,_id } = updatedUser;

  const handleUpdateUser = (event) => {
    event.preventDefault();
    console.log(user);
    fetch(`http://localhost:5000/review/${_id}`,{
        method : 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body:JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount > 0){
            alert('user updated')
            console.log(data);
        }
       
    })
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
        <h2>Please Update Your Review <strong>{reviewer}</strong></h2>
        <form onSubmit={handleUpdateUser} className="m-10 mx-auto w-4/2">
            <input onChange={handleInputChange} name="serviceName" type="text" placeholder="Service Name" defaultValue={serviceName} className="input input-ghost w-full  input-bordered" readOnly/>
            <input onChange={handleInputChange} name="rating" type="text" placeholder="Rating" defaultValue={rating} className="input input-ghost w-full  input-bordered"/>
            <textarea onChange={handleInputChange} name="msg" placeholder="review" className="textarea textarea-bordered mt-5 h-24 w-full"  defaultValue={msg}></textarea>
            <div className="text-center mt-4">
                <button type="submit" className="btn btn-primary ">Update Review</button>
            </div>
        </form>
    </div>
  );
};

export default UpdateReview;
