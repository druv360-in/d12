import React from "react";
import '../index.css';
import RatingSummaryCard from "./23.RatingSummaryCard";
import IndividualReviewCard from "./24.IndividualReviewCard";

function CustomerReviewCard({rating = 4.9, totalReviews = 342, breakdown = {5:80,4:15,3:5,2:5,1:5}}){
  return (
    <div className="w-150 m-6 p-6 rounded-2xl bg-[rgb(31,41,55)]">
      <h1 className="text-white p-6 text-xl font-bold">Customer reviews</h1>
      <RatingSummaryCard/>
      <IndividualReviewCard/>
    </div>
  )
}

export default CustomerReviewCard;