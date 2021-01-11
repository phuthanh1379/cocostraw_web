import React from 'react';

import './Header.scss';

const Header = () => {
    return (
        <nav class="menu">
            <ul>
                <li id="menu-logo">
                    <a href="/">
                        <img 
                            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" 
                            alt="logo"/>
                    </a>
                </li>

                <li id="menu-items">
                    <li id="menu-home"><a href="/">TRANG CHỦ</a></li>
                    <li id="menu-product"><a href="/">SẢN PHẨM</a></li>
                    <li id="menu-about"><a href="/">VỀ CHÚNG TÔI</a></li>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
