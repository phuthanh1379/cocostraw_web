import React, { Component } from "react";

import './AboutUs.scss'
import companyName from "../../resources/images/homepage/company-name.png";

export default class AboutUs extends Component {
  render() {
    return(
        <div id="about-us">
            <div id="company-name">
                <img src={companyName}/>
            </div>
            <p>Email: cocostraw@ecolifebio.com</p>
            <p>Điện thoại: +84 972 702 927</p>
            <p>Chúng tôi làm việc từ thứ 2 đến thứ 6, 9:30am - 5:00pm</p>
        </div>
    );
  }
}

{/* <span className="au-content">
                <p className="au-title">Email</p><p>cocostraw@ecolifebio.com</p>
            </span>
            <div className="au-content">
                <p className="au-title">Điện thoại</p><p>+84 972 702 927</p>
            </div>
            <div className="au-content">
                <p>Chúng tôi làm việc từ </p>
                <p className="au-title">thứ 2</p>
                <p>đến </p>
                <p className="au-title">thứ 6, 9:30am - 5:00pm</p>
            </div> */}