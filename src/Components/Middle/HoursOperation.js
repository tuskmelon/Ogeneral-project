import React from "react";

const HouseOperation = () => {
  return (
    <>
      <div className="card mt-2">
        <div
          className="d-flex  bg-white p-4"
          style={{ borderBottom: "1px solid black", borderWidth: "1" }}
        >
          <a
            href="/"
            className="text-left "
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              alignItems: "left",
              color: "red",
            }}
          >
            Hours of Operation
          </a>
        </div>
        <div className="Hours mt-4">
          <p
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              alignItems: "left",
              color: "black",
            }}
          >
            Monday - Sunday &nbsp;&nbsp;&nbsp;&nbsp; 09:30 AM — 09:00 PM{" "}
          </p>

          <p className="p-2"
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              alignItems: "left",
              color: "red",
            }}
          >
            We care for you! Kindly maintain social distancing and adhere to
            other safety guidelines at the stores
          </p>
        </div>
      </div>
      <div className="card mt-2">
        <div
          className="d-flex  bg-white p-4"
          style={{ borderBottom: "1px solid black", borderWidth: "1" }}
        >
          <a
            href="/"
            className="text-left "
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              alignItems: "left",
              color: "red",
            }}
          >
            Nearby Locations
          </a>
        </div>
        <div className="Hours mt-2">
          <p
            className="text-uppercase p-3"
            style={{
              fontSize: "12px",
              fontWeight: "normal",
              alignItems: "center",
              color: "black",
            }}
          >
            Rama Kamath Puram, Thiriu Vi Ka Kudiyiruppu, Teynampet, Nandanam,
            CIT Nagar, Ramakrishna Puram, Ashok Nagar, KK Nagar, Kodambakkam,
            West Mambalam, Darmapuram, Alwarpet, Nandana, Indira Colony,
            Royapettah, Mylapore, Jaffarkhanpet, VadapalniNungabakkam,
            Choolaimedu, CIT Nagar West, Jafferkhanpet
          </p>
        </div>
      </div>
      <div className="card mt-2">
        <div
          className="d-flex  bg-white p-4"
          style={{ borderBottom: "1px solid black", borderWidth: "1" }}
        >
          <a
            href="/"
            className="text-left "
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              alignItems: "left",
              color: "red",
            }}
          >
           Other Links for Stores
          </a>
        </div>
        <div className="Hours mt-4 mb-5">
          <li
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              alignItems: "left",
              color: "red",
            }}
          >
            
            <a href="#"  style={{
              color: "red",
            }} >OGENERAL stores in chennai </a>
          </li>
          <li 
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              alignItems: "left",
              color: "red",
            }}
          >
           <a href="#"  style={{
              color: "red",
            }} >OGENERAL stores in chennai </a>
            
          </li>
        </div>
      </div>
    </>
  );
};

export default HouseOperation;
