import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

function Nav() {
  return (
    <>
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
    </>
  );
}

export default Nav;
