import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvider/AuthProvider";
import Review from "../../../Review/Review";


const DetailsService = () => {
    const {user} = useContext(AuthContext);
  const detailsService = useLoaderData();
  const { _id,title, price, img, description, rating } = detailsService;

  return (
    <div>
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
    <div className="">
        <h3 className="text-2xl font-semibold text-red-300 text-center">Reviews</h3>
        <Review serviceId ={_id}></Review>
         
        <div className="text-center mt-4">
        {
            user?.email?
            <div>
                <Link to={`/review/${_id}`}> <button className="btn btn-primary">Place A Review</button> </Link>
            </div>
            : 
            <div>
                <Link to='/login'> <button className="btn btn-primary">Login to place a Review</button> </Link>
            </div>

        }
        </div>
       
    </div>
    </div>
  );
};

export default DetailsService;
