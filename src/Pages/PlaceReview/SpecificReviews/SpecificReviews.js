import React from 'react';
import { FaStar } from 'react-icons/fa';

const SpecificReviews = ({review}) => {
    // console.log(review);
    const {msg, rating, reviewer, serviceName, img} = review

    return (
        <div>
        <div className="card w-96 bg-base-100 shadow-xl ">
          <div className="card-body">
            <h2 className="card-title">{reviewer}</h2>
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={img} alt='' />
              </div>
            </div>
            <p>Item:{serviceName}</p>
            <p>Feedback:{msg}</p>
            <p className="flex items-center">
                <FaStar className='text-orange-400 mr-1'></FaStar>{rating}
            </p>
          </div>
        </div>
      </div>
    );
};

export default SpecificReviews;