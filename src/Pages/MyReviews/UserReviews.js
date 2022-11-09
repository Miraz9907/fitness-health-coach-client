import React from "react";
import { FaEdit } from "react-icons/fa";
import { FcDeleteRow } from "react-icons/fc";

const UserReviews = ({ review, handleDelete }) => {
  console.log(review);
  const { _id, dateTime, img, msg, rating, serviceName, reviewer,status } = review;
  return (
    <tr>
      <td>
        <label>
          {/* <button onClick={()=> handleDelete(_id)} className='btn btn-ghost'>X</button> */}
          <button onClick={() => handleDelete(_id)} className="btn btn-ghost">
            <FcDeleteRow></FcDeleteRow>
          </button>
        </label>
      </td>
      <td>{serviceName}</td>
      <td>{reviewer}</td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              {<img src={img} alt="Avatar Tailwind CSS Component" />}
            </div>
          </div>
        </div>
      </td>
      <td>{msg}</td>

      <td>{rating}</td>
      <td>{dateTime}</td>
      <td>
        <button className="btn btn-ghost">
          {/* <FaEdit></FaEdit> */}
          {status ? status : "pending"}
        </button>
      </td>
    </tr>
  );
};

export default UserReviews;
