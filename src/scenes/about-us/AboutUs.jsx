import React, { Component } from "react";

import './AboutUs.scss'
import companyName from "../../resources/images/homepage/company-name.png";

export default class AboutUs extends Component {
  render() {
    return(
        <div id="about-us">
            <div id="thank-you">
              <h5>
                Cảm ơn bạn đã lựa chọn chúng tôi trong rất nhiều sản phẩm chất lượng cùng mục đích bảo vệ Mẹ Thiên Nhiên. Nếu bạn có ý tưởng xây dựng nào để cải thiện môi trường thì cho Ecolife một cuộc hẹn nhé ;)
              </h5>
              <h4>ĐỪNG NGẠI NGẦN KẾT NỐI VỚI CHÚNG TÔI.</h4>
            </div>

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