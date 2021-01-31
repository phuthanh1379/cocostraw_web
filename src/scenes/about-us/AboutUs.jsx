import React, { Component } from "react";

import './AboutUs.scss'
import companyName from "../../resources/images/homepage/company-name.png";

export default class AboutUs extends Component {
  render() {
    return(
        <div id="about-us">
            <div id="company-name">
                <img src={companyName} alt="companyName"/>
            </div>
            <p>Email: cocostraw@ecolifebio.com</p>
            <p>Điện thoại: +84 972 702 927</p>
            <p>Chúng tôi làm việc từ thứ 2 đến thứ 6, 9:30am - 5:00pm</p>
        </div>
    );
  }
}   