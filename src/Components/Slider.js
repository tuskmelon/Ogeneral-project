import React from "react";

const Slider = () => {
  return (
    <>
      <div id="carouselId" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner CookiesCarousel" role="listbox">
          <div className="carousel-item active">
            <img
              src="https://jssors8.azureedge.net/demos/image-slider/img/px-fun-man-person-2361598-image.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://wowslider.com/sliders/demo-5/data/images/sweden.jpg"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselId"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon "
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselId"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default Slider;
