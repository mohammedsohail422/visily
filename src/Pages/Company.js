import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import company from "../images/company/hero.jpg";

const Company = () => {
  return (
    <>
      <Navbar />
      <div className="heading mt-5 pt-5 px-2 animate">
        <h1 className="fw-bold fs-1 h1  text-center ">
          <span>Proudly made in</span> <span>India</span> at{" "}
          <span>light speed</span>
        </h1>
        <h2 className="fs-2 text-center" style={{ fontFamily: "Caveat" }}>
          <span style={{ fontFamily: "Caveat" }}>Built for non-designers</span>{" "}
          • Powered by AI
        </h2>
      </div>
      <div className="container d-flex align-items-center justify-content-center gap-3 my-5 flex-column flex-md-row">
        <div className="w-50">
          <img src={company} alt="" className="img-fluid" />
        </div>
        <p className="fs-5 w-50">
          We are software makers who have always wanted to create beautiful
          software UI by ourselves but struggled.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Company;
