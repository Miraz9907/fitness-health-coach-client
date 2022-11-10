import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import UserReviews from "./UserReviews";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTitle from "../../hooks/useTitle";

const MyReviews = () => {
  useTitle('My Reviews');
    
  const { user, } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    if(!user?.email){
      return 
    }
    fetch(`http://localhost:5000/review?email=${user?.email}`)
    
      .then((res) => {
        
        return res.json()
    })
      .then((data) => {
        setReviews(data)
        
    })
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm("are you sure to delete");
    if (proceed) {
      fetch(`http://localhost:5000/review/${id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data);
        if(data.deletedCount > 0){
            toast.success("Your review deleted successfully", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            const remaining = reviews.filter(review => review._id !== id);
            setReviews(remaining);
        }
      })
    }
  };

  return (
    <div>
      {reviews.length === 0 ? (
        <>
          <h2 className="text-center text-4xl text-red-400 font-bold">No reviews were added</h2>
        </>
      ) : (
        <>
          <h2 className='text-orange-600 text-3xl font-bold text-center'>Your Total Reviews: {reviews.length}</h2>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Delete</th>
                  <th>Service Name</th>
                  <th>Reviewer Name</th>
                  <th>Image</th>
                  <th>Review</th>
                  <th>Rating</th>
                  <th>Date & Time</th>
                  <th>Update</th>
                </tr>
              </thead>
              <tbody>
              {
                  
                  reviews.map((review) => 
                    <UserReviews
                      key={review._id}
                      review={review}
                      handleDelete={handleDelete}
                    ></UserReviews>
                  )}
              </tbody>
            </table>
          </div>
        </>
      )}
      <ToastContainer />
    </div>
  );
};

export default MyReviews;
