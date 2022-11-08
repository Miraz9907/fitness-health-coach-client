import React from 'react';

const SpecificReviews = ({review}) => {
    console.log(review);
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
              {/* <AiFillStar className="text-orange-400" /> <span>{rating}</span> */}
            </p>
          </div>
        </div>
      </div>
    );
};

export default SpecificReviews;