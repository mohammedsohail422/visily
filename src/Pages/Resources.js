import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Pages/comp/Banner";
import "./Resources.css";
import Footer from "../Components/Footer";

const Resources = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div className="heading mt-5 pt-5 px-2 animate">
          <h1 className="fw-bold fs-1 h1  text-center ">
            <span>Design</span> <span>ready-to-code mockups </span>{" "}
            <span>effortlessly</span>
          </h1>
          <h2 className="fs-2 text-center" style={{ fontFamily: "Caveat" }}>
            <span style={{ fontFamily: "Caveat" }}>
              Design stunning app without
            </span>{" "}
            designers
          </h2>
        </div>
        <div className="animate-resources my-5"></div>
        <Banner />
        <Footer />
      </div>
    </div>
  );
};

export default Resources;
