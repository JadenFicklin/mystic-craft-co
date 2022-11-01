import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";
import { AiFillHome, AiOutlineShop } from "react-icons/ai";
import { MdForum } from "react-icons/md";
import { GrContact } from "react-icons/gr";

function Nav() {
  const [dropdown, setDropdown] = useState(false);

  const navDropDown = () => {
    setDropdown(!dropdown);
  };

  return (
    <>
      <div className="nav-bars" onClick={() => navDropDown()}>
        <div className="inner-nav-bars">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <div className={dropdown ? "nav-outer" : "nav-outer opacity"}>
        <div className={dropdown ? "nav false" : "nav"}>
          <div className="nav-inner">
            <div className="nav-section-one">
              <Link to="/" className="nav-link">
                <div className="link-left">
                  <AiFillHome className="icon" />
                </div>
                <div className="link-right">Home</div>
              </Link>
              <Link to="/shop" className="nav-link">
                <div className="link-left">
                  <AiOutlineShop className="icon" />
                </div>
                <div className="link-right">Shop</div>
              </Link>
              <Link to="/forum" className="nav-link">
                <div className="link-left">
                  <MdForum className="icon" />
                </div>
                <div className="link-right">Forum</div>
              </Link>
              <Link to="/contact" className="nav-link">
                <div className="link-left">
                  <GrContact className="icon" />
                </div>
                <div className="link-right">Contact</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
