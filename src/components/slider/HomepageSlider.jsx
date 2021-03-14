import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import './HomepageSlider.scss'

export default class HomepageSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1500,
      // cssEase: "linear"
    };

    return (
      <div className="homepage-slider">
        <Slider {...settings}>
          <div className="slider-item" id="slider-item-1">
            <div className="slider-title">
              <h3>VÌ CUỘC SỐNG</h3>
              <h3>BỀN VỮNG</h3>
            </div>
            <div className="slider-description">
              <h5>Sản phẩm được làm từ các nguyên liệu tự nhiên,</h5>
              <h5>hoàn toàn thân thiện với môi trường và tự phân hủy</h5>
              <h5>dưới BẤT KỂ điều kiện môi trường.</h5>
            </div>
          </div>
          <div className="slider-item" id="slider-item-2">
            <div className="slider-title">
              <h3>HÀNH ĐỘNG NHỎ</h3>
              <h3>HIỆU QUẢ CAO</h3>
            </div>
            <div className="slider-description">
              <h5>Tuy cùng một mục đích sử dụng, nhưng hệ quả để lại</h5>
              <h5>có cùng mức độ tác động ngang nhau.</h5>
            </div>
          </div>
          <div className="slider-item" id="slider-item-3">
            <div className="slider-title">
              <h3>YÊU THIÊN NHIÊN</h3>
              <h3>CŨNG LÀ YÊU LẤY</h3>
              <h3>CHÍNH MÌNH</h3>
            </div>
            <div className="slider-description">
              <h5>Cùng với tất cả những lợi ích về mặt tinh thần của việc</h5>
              <h5>dành thời gian hòa mình vào thiên nhiên, cũng là một</h5>
              <h5>cách tuyệt vời để duy trì sức khỏe thể chất.</h5>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}