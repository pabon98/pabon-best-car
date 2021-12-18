import React from 'react';
import Rating from 'react-rating';
import './ReviewCard.css'
const ReviewCard = ({review}) => {
    const { title,  comments, rating } = review;
    return (
        <div className="reviewCard pb-1 mb-5 text-center">
        
        <h5 className="text-center">Customer Name: {title}</h5>
        {/* <h5>Rating: {rating}</h5> */}
        {/* <Rating> </Rating> */}
        <Rating
        initialRating={rating}
        emptySymbol="far fa-star icon-color"
        fullSymbol="fas fa-star icon-color"
        readonly
        ></Rating>
        <p className="px-3 text-center ">Commetnts: <span className='title'>{comments}</span></p>
        {/* <Link to={`/placeOrder/${_id}`}>
          <button className="btn btn-outline-danger">Buy Now</button>
        </Link> */}
         
      </div>
    );
};

export default ReviewCard;