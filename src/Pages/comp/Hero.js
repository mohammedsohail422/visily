import React from "react";
import video1 from "../../images/visily-home-hero-loop_2.webm";

const Hero = () => {
  return (
    <>
      <div className="heading mt-5 pt-5 px-2 animate">
        <h1 className="fw-bold fs-1 h1  text-center ">
          <span>Design stunning</span> <span>app wireframes</span> at{" "}
          <span>light speed</span>
        </h1>
        <h2 className="fs-2 text-center" style={{ fontFamily: "Caveat" }}>
          <span style={{ fontFamily: "Caveat" }}>Built for non-designers</span>{" "}
          • Powered by AI
        </h2>
      </div>
      <div className="container">
        <video src={video1} loop muted autoPlay></video>
      </div>
      <div className=" text-center">
        <button className=" btn btn-primary px-md-5 py-md-3 fw-md-bolder fs-md-5">
          SignUp for Free
        </button>
      </div>
    </>
  );
};

export default Hero;
