import React, { Component } from "react";

import HomepageSlider from "../../components/slider/HomepageSlider";
import HomepageContent from "./HomepageContent";
import BackToTop from "../../components/back-to-top/BackToTop";

class HomePage extends Component {
  render() {
    return (
      <div className="homepage top">
        <HomepageSlider />
        <HomepageContent />
      </div>
    );
  }
}

export default HomePage;
