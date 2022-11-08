import React from "react";
import { FaBeer } from 'react-icons/fa';

const MyServices = ({service}) => {
    const {service_id, title,price, img,description } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} className= "h-72" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h3>{service_id}</h3>
        <h2 className="card-title">{title}</h2>
        <p>{price}</p>
        <p>{description.slice(0,100)+"..."}</p>
        <div className="card-actions justify-center">
          <button className="btn ">View Details
          <FaBeer className="ml-2"></FaBeer>
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default MyServices;
