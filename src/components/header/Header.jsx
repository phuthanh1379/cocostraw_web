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
                <LinkRouter to="/" onClick={() => scroll.scrollToTop()}>
                    {/* <img src={logo} alt="logo"/> */}
                    <Logo className="menu-logo-logo" />
                </LinkRouter>
            </div>
            <div className="menu-container">
                <ul className="menu">
                    <li className="menu-item">
                        <LinkRouter to="/" onClick={() => scroll.scrollToTop()} id="link-router">
                            TRANG CHỦ    
                        </LinkRouter>
                    </li>
                    <li className="menu-item">
                        <Link to="homepage-product" spy={true} smooth={true} offset={-200}>
                            SẢN PHẨM
                        </Link>    
                    </li>
                    <li className="menu-item">
                        <Link to="homepage-content-title-3" spy={true} smooth={true} offset={-180}>
                            VỀ CHÚNG TÔI
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Header;