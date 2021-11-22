import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import ImageComponent from "./ImageComponent";
const Offer = () => {
  return (
      <>
    <div className="card mt-2 mb-2">
      <div
        className="d-flex flex-direction-column bg-white p-4"
        style={{ borderBottom: "1px solid black", borderWidth: "1" }}
      >
        <a
          href="/"
          className="text-left "
          style={{ fontSize: "15px", fontWeight: "bold", color: "black" }}
        >
          Company - feautured Section
        </a>
        <a
          href="/"
          className="ml-auto"
          style={{ fontSize: "12px", fontWeight: "bold", color: "red" }}
        >
          View All Products
        </a>
      </div>
      <div className="image-columns" style={{ backgroundColor: "lightgray" }}>
        <div class="card p-3">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2021/8/AQ/BD/PC/26041408/o-general-tropical-inverter-split-ac-asgg18cgta-r32--500x500.jpg"
            alt=""
          />
          <div class="card-body w-10 text-left">
            <p class="card-text text-left ">
              {" "}
              <a
                href="/"
                className="bg-danger p-2"
                style={{ fontSize: "12px", color: "white" }}
              >
                {" "}
                <FaPhoneAlt /> &nbsp;&nbsp;044-60005729
              </a>
            </p>
            <p
              class="text-capitalize text-left"
              style={{ fontSize: "12px", color: "black" }}
            >
              lorem Ipsum lorem ipsum dolor sit amet, consectetur adipis
            </p>
            <a
              href="/"
              class="text-capitalize text-left"
              style={{ fontSize: "12px", color: "red" }}
            >
              All details
            </a>
          </div>
          </div>
          </div>
       
        </div>
        <ImageComponent className="mt-2" style={{ backgroundColor: 'white' }}/>
        </>
  );
};

export default Offer;
