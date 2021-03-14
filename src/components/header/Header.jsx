import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

import "./Header.scss";
// import logo from "../../resources/images/logo/logo_mini.png";
import { ReactComponent as Logo } from "../../resources/images/logo/logo_12.svg";

const Header = () => {
  return (
    <div className="container" id="header">
      <div className="menu-logo">
        <Link to="/">
          {/* <img src={logo} alt="logo" />
           */}
          <Logo className="menu-logo-logo" />
        </Link>
      </div>
      <div className="menu">
        <ul>
          <li>
            <LinkRouter
              to="/"
              onClick={() => scroll.scrollToTop()}
              className="menu-item"
            >
              TRANG CHỦ
            </LinkRouter>
          </li>
          <li>
            <Link
              to="homepage-product"
              className="menu-item"
              spy={true}
              smooth={true}
              offset={-200}
            >
              SẢN PHẨM
            </Link>
          </li>
          <li>
            <Link
              to="homepage-content-title-3"
              className="menu-item"
              spy={true}
              smooth={true}
              offset={-180}
            >
              VỀ CHÚNG TÔI
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
