import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faUnlock } from "@fortawesome/free-solid-svg-icons";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { coso } from "../utils/coso";
const Navbar = () => {
  const total = 25000;
  const token = false;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark text-white bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          Pizzería Mamma Mía!
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav">
            <button
              type="button"
              className="btn btn-dark border border-light m-1"
            >
              <FontAwesomeIcon icon={faPizzaSlice} /> Home
              <span className="sr-only"></span>
            </button>
            {token ? (
              <>
                <button
                  type="button"
                  className="btn btn-dark border border-light m-1"
                >
                  <FontAwesomeIcon icon={faUnlock} /> Profile
                </button>
                <button
                  type="button"
                  className="btn btn-dark border border-light m-1"
                >
                  <FontAwesomeIcon icon={faLock} /> Logout
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  className="btn btn-dark border border-light m-1"
                >
                  <FontAwesomeIcon icon={faKey} /> Login
                </button>
                <button
                  type="button"
                  className="btn btn-dark border border-light m-1"
                >
                  <FontAwesomeIcon icon={faKey} /> Register
                </button>
              </>
            )}
          </div>
          <div className="ms-auto">
            <button
              type="button"
              className="btn btn-dark border border-info text-info"
            >
              <FontAwesomeIcon icon={faCartShopping} /> Total:${coso(total)}{" "}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
