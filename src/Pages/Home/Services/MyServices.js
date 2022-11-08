import React from "react";

const MyServices = ({service}) => {
    const {service_id, title,price, img, } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} className= "h-72" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h3>{service_id}</h3>
        <h2 className="card-title">{title}</h2>
        <p>{price}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
