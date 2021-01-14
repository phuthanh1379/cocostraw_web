import React, { Component } from "react";
import Slider from "react-slick";

import "./SimpleSlider.scss";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="simple-slider">
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div className="slider-item">
            <img src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg"/>
          </div>
          <div className="slider-item">
            <img src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg"/>
          </div>
          <div className="slider-item">
            <img src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg"/>
          </div>
        </Slider>
      </div>
    );
  }
}