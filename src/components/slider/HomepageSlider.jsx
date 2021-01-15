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
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoPlay: true
    };
    return (
        <div className="slider">
          <Slider {...settings}>
            <div className="slider-item" id="slider-item-1">
              <div className="slider-title">
                <h3>SMALL SOLUTIONS,</h3>
                <h3>BIG IMPACT</h3>
              </div>
              <div className="slider-description">
                <h5>Products that are 100% natural, plastic-free,</h5>
                <h5>chemical-free &amp; biodegradable and compostable in</h5>
                <h5>ANY environment</h5>
              </div>
            </div>
            <div className="slider-item" id="slider-item-2">
              <div className="slider-title">
                <h3>SIP AND SLURP</h3>
                <h3>SUSTAINABILITY</h3>
              </div>
              <div className="slider-description">
                <h5>Products that are 100% natural, plastic-free,</h5>
                <h5>chemical-free &amp; biodegradable and compostable in</h5>
                <h5>ANY environment</h5>
              </div>
            </div>
            <div className="slider-item" id="slider-item-3">
              <div className="slider-title">
                <h3>COMMONPLACE</h3>
                <h3>SUSTAINABLE</h3>
                <h3>LIVING</h3>
              </div>
              <div className="slider-description">
                <h5>Products that are 100% natural, plastic-free,</h5>
                <h5>chemical-free &amp; biodegradable and compostable in</h5>
                <h5>ANY environment</h5>
              </div>
            </div>
          </Slider>
        </div>
    );
  }
}