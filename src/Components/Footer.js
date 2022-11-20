import React from "react";
import { Link } from "react-router-dom";
import b1 from "../images/Facebook-Original-1.png";
import b2 from "../images/LinkedIn-Original-2.png";
import b3 from "../images/Twitter-Original-2-1.png";
import b4 from "../images/YouTube-Original-2.png";

const Footer = () => {
  return (
    <>
      <div className="container d-flex flex-column flex-md-row justify-content-around align-items-md-start align-items-center border-top mt-5 pt-4 gap-4">
        <div className=" d-flex  flex-column justify-content-center align-items-center align-items-md-start gap-3 fs-6 fw-semibold ">
          <h4 className="fw-bolder">Company</h4>
          <Link to="/">Features</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/company">Company</Link>
          <Link to="/whyvisily" className="orange fs-5 fw-bold">
            Why Visily?
          </Link>
        </div>
        <div className="d-flex justify-content-center align-items-center align-items-md-start gap-3 flex-column">
          <h4 className="fw-bolder">Legal </h4>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms of services</Link>
        </div>
        <div className="w-25 d-flex gap-4 align-items-center justify-content-center">
          <img src={b1} alt="" style={{ width: "35px", cursor: "pointer" }} />
          <img src={b2} alt="" style={{ width: "35px", cursor: "pointer" }} />
          <img src={b3} alt="" style={{ width: "35px", cursor: "pointer" }} />
          <img src={b4} alt="" style={{ width: "35px", cursor: "pointer" }} />
        </div>
      </div>
      <p className="text-center py-4 m-0">
        Copyright © 2022 Visily, Inc. All rights reserved.
      </p>
    </>
  );
};

export default Footer;
