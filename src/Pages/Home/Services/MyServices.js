import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { ImageViewer } from "react-image-viewer-dv";
import { Link } from "react-router-dom";

const MyServices = ({ service }) => {
  const { _id,title, price, img, description, rating } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <ImageViewer>
          <img src={img} className="h-72" alt="" />
        </ImageViewer>
      </figure>
      <div className="card-body ">
        <h2 className="card-title font-bold text-amber-500">{title}</h2>
        <div className="flex items-center w-full content-between ">
          <p className="text-2xl font-semibold text-orange-300 ">
            Price: ${price}
          </p>
          <p className="text-2xl font-semibold text-orange-300 ">
            Rating: {rating}
          </p>
        </div>

        <p className="mb-5">{description.slice(0, 100) + "..."}</p>
        <div className="card-actions justify-center">
          <Link to={`/services/${_id}`}>
            <button className="btn btn-primary">
              View Details
              <FaArrowRight className="ml-2"></FaArrowRight>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
