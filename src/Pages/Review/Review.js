import React, { useEffect, useState } from "react";
import SpecificReviews from "../PlaceReview/SpecificReviews/SpecificReviews";

const Review = ({ serviceId }) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(
      `https://health-coach-server-eta.vercel.app/review?service=${serviceId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [serviceId]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {reviews?.map((review) => (
        <SpecificReviews key={review._id} review={review}></SpecificReviews>
      ))}
    </div>
  );
};

export default Review;
