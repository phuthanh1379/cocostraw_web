import React from 'react';
import {Link} from "react-router-dom";

import './Header.scss';
import logo from '../../resources/images/logo/logo.png';

const Header1 = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="menu-logo">
                    <Link to="/">
                        <img src={logo}/>
                    </Link>
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <Link to="/" className="menu-item">
                                TRANG CHỦ    
                            </Link>    
                        </li>
                        <li>
                            <Link to="/products" className="menu-item">
                                SẢN PHẨM
                            </Link>    
                        </li>
                        <li>
                            <Link to="/aboutus" className="menu-item">
                                VỀ CHÚNG TÔI
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header1;
