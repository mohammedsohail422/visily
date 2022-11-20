import React from "react";
import Navbar from "../Components/Navbar";
import Partner from "../Pages/comp/Partner";
import Footer from "../Components/Footer";

const Whyvisily = () => {
  return (
    <>
      <Navbar />
      <div className="heading mt-5 pt-5 px-2 animate">
        <h1 className="fw-bold fs-1 h1  text-center ">
          <span>What</span> <span>Visily</span> <span>is all about</span>
        </h1>
        <h2 className="fs-2 text-center" style={{ fontFamily: "Caveat" }}>
          <span style={{ fontFamily: "Caveat" }}></span> Why people are talking
          about Visily?
        </h2>
      </div>
      <Partner />
      <Footer />
    </>
  );
};

export default Whyvisily;
