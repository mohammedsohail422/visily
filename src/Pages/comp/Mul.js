import React from "react";
import { Link } from "react-router-dom";

const Mul = ({ dynamic }) => {
  return (
    <div className=" container my-lg-5 py-lg-5 d-flex align-items-center justify-content-center gap-5 flex-column flex-lg-row">
      <div className="">
        <h2 className={dynamic.coloring}>{dynamic.heading}</h2>
        <p className="fs-5">{dynamic.sub}</p>
        <div className="d-flex align-items-center justify-content-start gap-3">
          <Link to="/company">
            <button className="btn btn-outline-dark fw-bold px-3 py-2">
              Desingn now!
            </button>
          </Link>
          <Link to="/resources" className=" text-decoration-none">
            Learn More...
          </Link>
        </div>
      </div>
      <div className="">
        <video
          src={dynamic.vid}
          loop
          muted
          autoPlay
          style={{ borderRadius: "10px" }}
        ></video>
      </div>
    </div>
  );
};

export default Mul;
