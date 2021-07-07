import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Header.css";
const Header = () => {
  const menuItems = [
    {
      path: "Ground-Truth-Data",
      label: "Ground-Truth Data",
    },
    {
      path: "How-It-Works",
      label: "How It Works",
    },
    {
      path: "Fee-Structure",
      label: " Fee Structure",
    },
    {
      path: "Example-Deliverables",
      label: "Example Deliverables",
    },
    {
      path: "order",
      label: "Submission Portal",
    },
    {
      path: "Contact-US",
      label: "Contact-US",
    },
  ];

  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(true);
  };
  const closeMenu = () => {
    setToggle(false);
  };
  return (
    <div className="header" id="home">
      <div className="header__logo">
        <img src="./images/logo.png" alt="logo" />
      </div>
      <div>
        {/* toggle the menu bar */}
        <ul className={`header__menu_navbar ${toggle ? "active" : "unactive"}`}>
          {menuItems.map((item, index) => (
            <li className="nav-item" key={index}>
              <Link
                activeClass="active"
                className="nav-link active"
                to={item.path}
                spy={true}
                offset={-70}
                duration={800}
                smooth={true}
                key={index}
              >
                {item.label}
              </Link>
            </li>
          ))}

          <li className="nav-item">
            <Link to="/login">
              <button className="login_btn">Sign In</button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="toggle">
        {/* toggle handler */}
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
