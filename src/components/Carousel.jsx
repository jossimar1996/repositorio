import React from "react";

const Carousel = () => {
  return (
    <div
      id="carouselExample"
      className="carousel slide"
      style={{ width: "100vw", margin: "0 auto" }}
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="./src/img/1.png"
            className="d-block w-100"
            alt="34"
            style={{ maxHeight: "700px", objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src="./src/img/2.png"
            className="d-block w-100"
            alt="2."
            style={{ maxHeight: "700px", objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src="./src/img/3.png"
            className="d-block w-100"
            alt="2"
            style={{ maxHeight: "700px", objectFit: "cover" }}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
