import React from "react";
import p1 from "../../images/capterra.png";
import p2 from "../../images/g2com.png";
import p3 from "../../images/get-app.png";
import p4 from "../../images/sass-worthy.png";
import p5 from "../../images/software-advice.png";

const Partner = () => {
  return (
    <div className="bg-white py-md-4 py-2 m-md-5 m-3 rounded partner">
      <p className="text-center bg-white pb-3 m-0 fs-6 fw-bold">Partners</p>
      <div className="container d-flex justify-content-center align-items-center gap-md-5 gap-1 w-50 ">
        <img src={p1} alt="" className="img-fluid w-25" />
        <img src={p2} alt="" className="img-fluid w-25" />
        <img src={p3} alt="" className="img-fluid w-25" />
        <img src={p4} alt="" className="img-fluid w-25" />
        <img src={p5} alt="" className="img-fluid w-25" />
      </div>
    </div>
  );
};

export default Partner;
