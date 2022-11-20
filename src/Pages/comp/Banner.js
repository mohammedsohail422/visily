import React from "react";
import "../Home.css";
import banner from "../../images/home-1.png";

const Banner = () => {
  return (
    <div className="container  p-md-5 py-2 mx-md-auto  banner d-flex flex-column flex-md-row align-items-center justify-content-center gap-0 gap-md-4">
      <div
        className="w-md-50 w-75  text-white d-flex justify-content-center align-items-start gap-3 flex-column"
        style={{ backgroundColor: "#7572e8" }}
      >
        <h2
          style={{ backgroundColor: "#7572e8" }}
          className="m-0 fs-2 fw-bold d-lg-block d-none"
        >
          Fastest way for teams to ideate and design wireframes
        </h2>
        <h4
          style={{
            backgroundColor: "#7572e8",
            fontFamily: "Caveat",
            color: "#f6c478",
          }}
          className="fs-2"
        >
          No design skills needed!
        </h4>
        <button
          style={{ backgroundColor: "#E6723A" }}
          className="btn btn-warning m-0 text-white fw-bolder  px-md-5 py-md-3 border-0"
        >
          Design Now
        </button>
        <p className="m-0" style={{ backgroundColor: "#7572e8" }}>
          No credit card required
        </p>
      </div>
      <div className="w-md-50 w-75  rounded my-3">
        <img src={banner} alt="" className="img-fluid rounded w-75" />
      </div>
    </div>
  );
};

export default Banner;
