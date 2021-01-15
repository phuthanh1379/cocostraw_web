import React from 'react';
import {Link} from "react-scroll";
import {Link as LinkRouter} from "react-router-dom";

import './Header.scss';
import logo from '../../resources/images/logo/logo.png';

const Header = () => {
    return (
        <div id="header">
            <div className="container">
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
                            <Link to="homepage-product" className="menu-item">
                                SẢN PHẨM
                            </Link>    
                        </li>
                        <li>
                            <Link to="about-us" className="menu-item">
                                VỀ CHÚNG TÔI
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
