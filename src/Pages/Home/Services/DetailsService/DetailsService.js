import React from "react";
import { useLoaderData } from "react-router-dom";

const DetailsService = () => {
  const detailsService = useLoaderData();
  const { title, price, img, description, rating } = detailsService;

  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="" className="w-full h-fit" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-2xl font-semibold text-orange-300 ">
          Price: ${price}
        </p>
        <p className="text-2xl font-semibold text-orange-300 ">
          Rating: {rating}
        </p>
        <p className="text-2xl text-black">{description}</p>
        
      </div>
    </div>
  );
};

export default DetailsService;
