import React, { useState } from "react";
import "./Header.css";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(true);
  };
  const closeMenu = () => {
    setToggle(false);
  };
  return (
    <div className="header">
        <div className="header__logo">
          <img src="./images/logo.png" alt="logo" />
        </div>
        <div>
          <ul
            className={`header__menu_navbar ${toggle ? "active" : "unactive"}`}
          >
            <li className="nav-item">
              <a
                aria-current="page"
                className="nav-link active"
                href="./#Ground-Truth-Data"
              >
                Ground-Truth Data
              </a>
            </li>
            <li className="nav-item">
              <a
                aria-current="page"
                className="nav-link active"
                href="/#How-It-Works"
              >
                How It Works
              </a>
            </li>
            <li className="nav-item">
              <a
                aria-current="page"
                className="nav-link active"
                href="/#Fee-Structure"
              >
                Fee Structure
              </a>
            </li>
            <li className="nav-item">
              <a
                aria-current="page"
                className="nav-link active"
                href="/#Example-Deliverables"
              >
                Example Deliverables
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/order">
                Submission Portal
              </a>
            </li>
            <li className="nav-item">
              <a
                aria-current="page"
                className="nav-link active"
                href="/#Contact-US"
              >
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a href="/login">
                <button className="login_btn">Sign In</button>
              </a>
            </li>
          </ul>
        </div>
      <div className="toggle">
        {toggle ? (
          <img
            className="toggle__btn"
            src="./images/menu.png"
            alt="toggle"
            onClick={closeMenu}
          />
        ) : (
          <img
            className="toggle__btn"
            src="./images/menu.png"
            alt="toggle"
            onClick={toggleMenu}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
