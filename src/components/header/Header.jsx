import React from 'react';
import {Link, animateScroll as scroll} from "react-scroll";
import {Link as LinkRouter} from "react-router-dom";

import './Header.scss';
import logo from '../../resources/images/logo/logo.png';

const scrollMore = () => {
    scroll.scrollMore(150);
}

const Header = () => {
    return (
        <div className="container" id="header">
            <div className="menu-logo">
                <Link to="/">
                    <img src={logo}/>
                </Link>
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <LinkRouter to="/" className="menu-item">
                            TRANG CHỦ    
                        </LinkRouter>
                    </li>
                    <li>
                        <Link to="homepage-product" className="menu-item" spy={true} smooth={true} offset={-200}>
                            SẢN PHẨM
                        </Link>    
                    </li>
                    <li>
                        <Link to="about-us" className="menu-item" spy={true} smooth={true}>
                            VỀ CHÚNG TÔI
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
