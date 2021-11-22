import React from 'react'

const RecentArticles = () => {
    return (
        <>
        <div className="card bg-white">
        <div
        className="d-flex flex-direction-column bg-white p-4"
        style={{ borderBottom: "1px solid black", borderWidth: "1" }}
      >
        <a
          href="/"
          className="text-left "
          style={{ fontSize: "15px", fontWeight: "bold", color: "black" }}
        >
          Company - Recent Articles
        </a>
        <a
          href="/"
          className="ml-auto"
          style={{ fontSize: "12px", fontWeight: "bold", color: "red" }}
        >
          View All Products
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
           OGENERAL Recents Articles
          </p>

          <p className="p-2 mt-5"
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              alignItems: "left",
              color: "Black",
            }}
          >
            We care for you! Kindly maintain social distancing and adhere to
            other safety guidelines at the stores,
            We care for you! Kindly maintain social distancing and adhere to
            other safety guidelines at the stores,
            We care for you! Kindly maintain social distancing and adhere to
            other safety guidelines at the stores
          </p>
        </div>
            </div>
        </>
        
    )
}

export default RecentArticles
