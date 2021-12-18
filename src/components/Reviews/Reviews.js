import React, { useEffect, useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";

import "./Reviews.css";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`https://murmuring-castle-14767.herokuapp.com/review`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div >
      <h4 className=" text-center ">Our Customers Reviews</h4>
      <div className="review-details mt-3">
        {reviews.map((review) => (
          // <TourCard drone={drone} key={drone._id}></TourCard>
          //   <DroneCard drone={drone} key={drone._id}></DroneCard>
          <ReviewCard review={review} key={review._id}>
            {" "}
          </ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default Reviews;