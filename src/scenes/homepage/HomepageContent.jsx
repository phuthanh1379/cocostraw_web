import React, { Component } from "react";

import "./HomepageContent.scss";
import ProductShowcase from "../product/ProductShowcase";
import AboutUs from "../about-us/AboutUs";
import BackToTop from "../../components/back-to-top/BackToTop";

export default class HomepageContent extends Component {
  render() {
    return (
      <div className="homepage-content">
        <div id="homepage-content-title-1">
          <h3>VÌ LÝ TƯỞNG SỐNG LÀNH MẠNH</h3>
        </div>
        <div id="homepage-content-description-1">
          <p>
            Sau khi trải nghiệm những món đồ uống bạn yêu thích với chiếc ống
            hút nước dừa bé xinh này, có thể bạn sẽ cảm thấy mình gần với thiên
            nhiên hơn bao giờ hết.{" "}
          </p>
        </div>
        <div className="homepage-content-image" />
        <ProductShowcase />
        <div className="homepage-content-image-lifestyle" />
        <div id="homepage-content-title-2">
          <h3 id="hc-title-2-1">Với lý tưởng</h3>
          <div id="hc-title-2-2">
            <h3>CUỘC SỐNG BỀN VỮNG</h3>
            <div id="homepage-content-description-2">
              <p>
                Môi trường rất quan trọng với chúng ta. Hãy bảo vệ chúng, đồng
                thời cải thiện hệ sinh thái bằng sản phẩm đột phá tuyệt vời này!
              </p>
            </div>
          </div>
        </div>
        <div className="web-logo" />
        <div id="homepage-content-title-3">
          <h3>SẢN PHẨM CỦA ECOLIFE <br /> CÓ GÌ ĐỘC ĐÁO</h3>
        </div>
        <div id="homepage-content-description-3">
          <p className="first-paragraph" id="homepage-grid-content-1">
            Hẳn bạn đang rất ngạc nhiên, làm sao nguyên liệu ở thể lỏng lại có
            thể thành hình cứng cáp, bền bỉ trong ly cà phê đá ở các cuộc họp
            kéo dài 4-5 giờ đồng hồ liên tục như vậy. Để tìm ra ma thuật thực tế
            này, một tiến sĩ Việt Nam đã dành 12 giờ mỗi ngày, 6 ngày một tuần,
            liên tục trong 2 năm để nghiên cứu ra phương pháp điều chế đặc biệt
            này và hoàn toàn thuận theo tự nhiên. Nếu có cơ hội bạn hãy nên tự
            trải nghiệm thử chiếc ống hút từ nước dừa này với nhiều loại đồ uống
            khác nhau như các món đá xay, ca cao nóng hoặc cháy rừng rực như
            B52, bạn sẽ đập tan nghi ngờ về chất lượng của chiếc ống hút nhỏ mà
            có võ này.
          </p>

          <p id="homepage-grid-content-2">
            Nhưng điều thật sự khiến chúng tôi lo lắng là những sản phẩm từ
            thiên nhiên sẽ có giá thành cao hơn sản phẩm nhân tạo. Điều này hoàn
            toàn đúng. Ecolife tin rằng Cocostraws có chất lượng trải nghiệm
            tương xứng với trị giá gấp 1,5 lần hiện kim và đặc biệt an toàn cho
            sức khoẻ và hoàn toàn phù hợp với cả gia đ ình có trẻ nhỏ. Môi
            trường rất quan trọng với chúng ta. Hãy bảo vệ chúng, đồng thời cải
            thiện hệ sinh thái bằng sản phẩm đột phá tuyệt vời này! Sau khi trải
            nghiệm rất nhiều đồ uống với sản phẩm này này, bạn sẽ dần nhận ra
            thế giới đang chuyển mình hòa nhập với cuộc sống bền vững.
          </p>

          <p id="homepage-grid-content-3">
            Môi trường rất quan trọng với chúng ta, hãy bảo vệ nó, đồng thời cải
            thiện hệ sinh thái bằng sản phẩm đột phá tuyệt vời này! Sau khi trải
            nghiệm những món đồ uống bạn yêu thích với chiếc ống hút nước dừa bé
            xinh này, có thể bạn sẽ cảm thấy mình gần với thiên nhiên hơn bao
            giờ hết.{" "}
          </p>
        </div>
        {/* <div id="homepage-content-signature">
              <img src={signature}/>
            </div> */}
        <div className="homepage-content-image-concept" />
        <AboutUs />
        <BackToTop iconSize={32} />
      </div>
    );
  }
}
