"use client";

import ReactStars from "react-rating-stars-component";

const StarRating = ({ rating, totalRatings, edit }) => {
  return (
    <div className="flex items-center gap-2 my-2">
      <ReactStars
        value={rating}
        count={5}
        size={24}
        activeColor="#16a34a"
        edit={edit}
        isHalf={true}
      />
      <span className="text-gray-600 text-sm">({totalRatings})</span>
    </div>
  );
};

export default StarRating;
