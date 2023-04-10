import React from "react";
import Search from "./Search";

const Navbar = (props) => {
  return (
    <React.Fragment>
      <div>
        <nav className="navbar navbar-expand-lg bg-light w-100">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Movie App
            </a>
            <button
              className="navbar-toggler"
              type="button"
              //   data-bs-toggle="collapse"
              //   data-bs-target="#navbarNav"
              //   aria-controls="navbarNav"
              //   aria-expanded="false"
              //   aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <Search {...props} />
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
