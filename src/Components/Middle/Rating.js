import React from "react";

const Rating = () => {
  return (
    <div>
      <div className=" d-flex w-100 flex-direction-column card bg-white ">
        <a
          href="/"
          className=""
          style={{ fontSize: "14px", fontWeight: "bold", color: "black" }}
        >
          <span class="fa fa-star m-2 checked"></span>
          <span class="fa fa-star m-2 checked"></span>
          <span class="fa fa-star m-2 checked"></span>
          <span class="fa fa-star m-2 checked"></span>
          <span class="fa fa-star m-2"></span>
         
          
        </a>
        <a
          href="/"
          className=""
          style={{ fontSize: "12px", fontWeight: "normal", color: "red" }}
        >
         1000 Reviews | Write a Review
        </a>
      </div>
    </div>
  );
};

export default Rating;
