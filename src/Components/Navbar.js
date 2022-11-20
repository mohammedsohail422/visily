import React from "react";
import logo from "../images/Visily-logo.svg";
import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="container d-flex align-items-center justify-content-between my-3">
        <div>
          <Link to="/">
            <img src={logo} alt="" className="w-75" />
          </Link>
        </div>
        <div className="d-flex align-items-center justify-content-center gap-4 fs-6 fw-semibold">
          <NavLink to="/" className="d-none d-md-block">
            Features
          </NavLink>
          <NavLink to="/resources" className="d-none d-md-block">
            Resources
          </NavLink>
          <NavLink to="/company" className="d-none d-md-block">
            Company
          </NavLink>

          <NavLink to="/whyvisily" className="orange fs-5 fw-bold">
            Why Visily?
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
