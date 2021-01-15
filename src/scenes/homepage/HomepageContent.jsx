import React, { Component } from "react";
import {Link} from "react-scroll";

import './HomepageContent.scss'
import Product from "../product/Product";
import AboutUs from "../about-us/AboutUs";
//Image
import signature from "../../resources/images/homepage/5-01-01.png";

export default class HomepageContent extends Component {
  render() {
    return (
        <div className="homepage-content">
            <div id="homepage-content-title-1">
                <p>COMMONPLACE SUSTAINABLE LIVING</p>
            </div>
            <div id="homepage-content-description-1">
                <p>Môi trường rất quan trọng với chúng ta. Hãy bảo vệ chúng, đồng thời cải thiện hệ sinh thái</p>
                <p>bằng các sản phẩm đột phá tuyệt vời này, bắt đầu từ việc thay đổi thói quen hằng ngày</p>
                <p>từng chút một.</p>
            </div>
            <div className="homepage-content-image"/>
            <Product/>
            <div className="homepage-content-image-lifestyle"/>
            <div id="homepage-content-title-2">
                <h3 id="hc-title-2-1">Với lý tưởng</h3>
                <h3 id="hc-title-2-2">CUỘC SỐNG BỀN VỮNG</h3>
            </div>
            <div id="homepage-content-description-2">
              <p>Cùng với lý tưởng bền giá trị, vững tương lai và nhiều tình yêu với môi trường hơn người yêu cũ đã tác động lên nội tâm của chúng tôi ngày một lớn và cuối cùng dự án ECOLIFE ấp ủ từ lâu đã ra đời.</p>

              <p>Hẳn bạn đang rất ngạc nhiên, làm sao nguyên liệu ở thể lỏng lại có thể thành hình cứng cáp, bền bỉ trong ly cà phê đá ở các cuộc họp kéo dài 4-5 giờ đồng hồ liên tục như vậy. Để tìm ra ma thuật thực tế này, một tiến sĩ Việt Nam đã dành 12 giờ mỗi ngày, 6 ngày một tuần, liên tục trong 2 năm để nghiên cứu ra phương pháp điều chế đặc biệt này và hoàn toàn thuận theo tự nhiên. Nếu có cơ hội bạn hãy nên tự trải nghiệm thử chiếc ống hút từ nước dừa này với nhiều loại đồ uống khác nhau như các món đá xay, ca cao nóng hoặc cháy rừng rực như B52, bạn sẽ đập tan nghi ngờ về chất lượng của chiếc ống hút nhỏ mà có võ này.</p>

              <p>Nhưng điều thật sự khiến chúng tôi lo lắng là những sản phẩm từ thiên nhiên sẽ có giá thành cao hơn sản phẩm nhân tạo. Điều này hoàn toàn đúng. Ecolife tin rằng Cocostraws có chất lượng trải nghiệm tương xứng với trị giá gấp 1,5 lần hiện kim và đặc biệt an toàn cho sức khoẻ và hoàn toàn phù hợp với cả gia đ ình có trẻ nhỏ.</p>

              <p>Môi trường rất quan trọng với chúng ta. Hãy bảo vệ chúng, đồng thời cải thiện hệ sinh thái bằng sản phẩm đột phá tuyệt vời này!</p>

              <p>Sau khi trải nghiệm rất nhiều đồ uống với sản phẩm này này, bạn sẽ dần nhận ra thế giới đang chuyển mình hòa nhập với cuộc sống bền vững.</p>
            </div>
            <div id="homepage-content-signature">
              <img src={signature}/>
            </div>
            <div className="homepage-content-image-concept"/>
            <div id="homepage-content-thankyou">
              <p>Cảm ơn bạn đã lựa chọn chúng tôi trong rất nhiều sản phẩm chất lượng cùng mục đích bảo vệ Mẹ Thiên Nhiên. Nếu bạn có ý tưởng xây dựng nào để cải thiện môi trường thì cho Ecolife một cuộc hẹn nhé ;)</p>
              <h4>ĐỪNG NGẠI NGẦN KẾT NỐI VỚI CHÚNG TÔI.</h4>
            </div>
            <AboutUs/>
            <div id="back-to-top-btn">
              <Link to="header">
                <label>BACK TO TOP &uarr;</label>
              </Link>
            </div>
        </div>
    );
  }
}