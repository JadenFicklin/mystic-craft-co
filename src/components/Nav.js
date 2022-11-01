import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

function Nav() {
  const [dropdown, setDropdown] = useState(false);

  const navDropDown = () => {
    setDropdown(!dropdown);
  };

  return (
    <>
      <div className="nav-bars">
        <div className="inner-nav-bars" onClick={() => navDropDown()}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      {dropdown && (
        <nav>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/shop" className="nav-link">
            shop
          </Link>
          <Link to="/forum" className="nav-link">
            forum
          </Link>
          <Link to="/contact" className="nav-link">
            contact
          </Link>
        </nav>
      )}
    </>
  );
}

export default Nav;
