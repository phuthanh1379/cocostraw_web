import React from "react";
import { RiArrowUpSFill } from "react-icons/ri";
import { animateScroll as scroll } from "react-scroll";

import "./BackToTop.scss";

const BackToTop = ({ iconSize }) => {
  return (
    <div className="back-to-top" onClick={() => scroll.scrollToTop()}>
      <RiArrowUpSFill size={iconSize} color="white" />
      <span class="back-to-top__text">BACK TO TOP</span>
    </div>
  );
};

export default BackToTop;
