import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav
        id="navbar"
        className="navbar navbar-expand-lg fixed-top navbar-dark"
        aria-label="Main navigation"
      >
        <div className="container">
          <a className="navbar-brand logo-text" href="index.html">
            Saqib
          </a>

          <button
            className="navbar-toggler p-0 border-0"
            type="button"
            id="navbarSideCollapse"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="navbar-collapse offcanvas-collapse"
            id="navbarsExampleDefault"
          >
            <ul className="navbar-nav ms-auto navbar-nav-scroll">
              <li className="nav-item">
                <Link to={"/"}>
                  <a className="nav-link active" aria-current="page">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#plans">
                  Plans
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="dropdown01"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  href="#header"
                >
                  Drop
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdown01">
                  {/* <li>
                    <a className="dropdown-item" href="article.html">
                      Article Details
                    </a>
                  </li> */}
                  {/* <li>
                    <div className="dropdown-divider"></div>
                  </li> */}
                  <li>
                    <Link to="/terms">
                      <a className="dropdown-item">Terms & Conditions</a>
                    </Link>
                  </li>
                  <li>
                    <div className="dropdown-divider"></div>
                  </li>
                  <li>
                    <Link to="/privacy">
                      <a className="dropdown-item">Privacy Policy</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <span className="nav-item social-icons">
              <span className="fa-stack">
                <a href="https://www.facebook.com/saqibansari.official">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-facebook-f fa-stack-1x"></i>
                </a>
              </span>
              <span className="fa-stack">
                <a href="https://github.com/Saqib-Ansari786">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-github fa-stack-1x"></i>
                </a>
              </span>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}
