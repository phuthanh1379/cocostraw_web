import React, {Component} from 'react';
import {IoMdArrowDropdown, IoMdArrowDropright} from "react-icons/all";

import './Product.scss';
import Ong3 from '../../resources/images/ong_3.jpg';
import Ong4 from '../../resources/images/ong_4.jpg';
import Ong5 from '../../resources/images/ong_5.jpg';
import OutlineButton from "../../components/button/OutlineButton";
import Testimonial from "../../components/testimonial/Testimonial";
import MultipleSlider from "../../components/slider/MultipleSlider";



const product = {
    category: "DRINKING",
    name: "COCOSTRAWS",
    price: 60,
    description: "Lorem ipsum dolor sit amet, " +
        "consectetur adipisicing elit." +
        " Amet aspernatur delectus distinctio porro" +
        " quas quibusdam recusandae rem, tempore vero. Delectus.",
    detail: [
        "Phù hợp với mọi loại đồ uống",
        "22 x 0.7 cm x 20 ống",
        "Làm từ nước dừa tự nhiên",
        "Phù hợp với đối tượng ngại ngùng chạm môi nhau"
    ],
    shippingPolicy: [
        "Nội thành - 50.000",
        "Ngoại thành - 100.000",
        "Quốc nội - inbox thương lượng",
        "Ngoại quốc - email trao đổi",
    ],
    shippingNote: "LƯU Ý CÁC ĐƠN HÀNG ĐI NGOẠI QUỐC, " +
        "NGOẠI TỆ QUY ĐỔI SẼ TÙY THEO THỜI TIẾT CỦA QUỐC GIA ĐÓ. XIA XỊA"
};

const testimonial = {
    title1 : "BỀN BỈ TẬN 6 GIỜ ĐỒNG HỒ",
    text1 : "Để tìm ra ma thuật thực tế này, " +
        "một tiến sĩ gốc Việt đã dành 12 giờ mỗi ngày, 6 ngày một tuần, liên tục trong 2 năm " +
        "để nghiên cứu ra phương pháp điều chế đặc biệt này và hoàn toàn thuận theo tự nhiên.",
    title2: "PHÂN HUỶ SAU 6 THÁNG",
    text2: "Để tìm ra ma thuật thực tế này, một tiến sĩ gốc Việt đã dành 12 giờ mỗi ngày, 6 ngày một tuần, liên tục trong 2 năm để nghiên " +
        "cứu ra phương pháp điều chế đặc biệt " +
        "này và hoàn toàn thuận theo tự nhiên."
}

class Product extends Component {

    state = {
        productDetailClicked: false,
        shippingPolicyClicked: false,
        orderClicked: false
    }

    handleProductDetailClick = () => {

        this.setState({
            productDetailClicked: !this.state.productDetailClicked
        });
        if(this.state.shippingPolicyClicked) {
            this.setState({
                shippingPolicyClicked: !this.state.shippingPolicyClicked
            })
        }
    }

    handleShippingPolicyClick = () => {
        this.setState({
            shippingPolicyClicked: !this.state.shippingPolicyClicked
        });
        if(this.state.productDetailClicked) {
            this.setState({
                productDetailClicked: !this.state.productDetailClicked
            })
        }
    }

    showProductDetail = (productDetails) => {
        return <ul style={{
            marginLeft: "16px", transition: "all 1s ease",
            opacity: !this.state.productDetailClicked ? 1 : 0.8
        }}>
            {productDetails.map(productDetail => (
                <li style={{marginBottom: "8px"}}>{productDetail}</li>
            ))}
        </ul>;
    }

    showShippingPolicy = (shippingPolicies) => {
        return (shippingPolicies.map(shippingPolicy => (
            <div style={{marginBottom: "8px"}}>
                {shippingPolicy.toUpperCase()}
            </div>
        )));
    }

    showShippingPolicyNote = (shippingNote) => {
        return (
            <div style={{marginTop: "32px", lineHeight: 2}}>
                {shippingNote}
            </div>
        );
    }

    render() {

        return (
            <React.Fragment>
                <div className="product">
                    <div className="product-detail-container">
                        <div className="product-detail-description">
                            <div className="product-category">
                                {product.category}
                            </div>
                            <div className="product-name">
                                {product.name}
                            </div>
                            <div className="product-price">
                                {product.price}.000đ
                            </div>
                            <div className="product-description">
                                {product.description}
                            </div>
                            <div className="product-detail-title">
                                <div onClick={this.handleProductDetailClick}>
                                    CHI TIẾT SẢN PHẨM
                                    {this.state.productDetailClicked ?
                                        <IoMdArrowDropdown/> : <IoMdArrowDropright/>
                                    }
                                </div>
                            </div>
                            {
                                this.state.productDetailClicked ? this.showProductDetail(product.detail) : ""
                            }
                            <div className="product-detail-title">
                                <div onClick={this.handleShippingPolicyClick}>
                                    CHÍNH SÁCH VẬN CHUYỂN VÀ ĐỔI TRẢ
                                    {this.state.shippingPolicyClicked ?
                                        <IoMdArrowDropdown/> : <IoMdArrowDropright/>
                                    }
                                </div>
                            </div>
                            {
                                this.state.shippingPolicyClicked ? this.showShippingPolicy(product.shippingPolicy) : ""
                            }
                            {
                                this.state.shippingPolicyClicked ? this.showShippingPolicyNote(product.shippingNote) : ""
                            }
                        </div>
                    </div>
                    <div className="product-purchase">
                        <OutlineButton>ĐẶT HÀNG</OutlineButton>
                    </div>
                    <div>
                        <Testimonial img={Ong3} title={testimonial.title1} text={testimonial.text1}/>
                        <Testimonial backward={true} img={Ong4} title={testimonial.title2} text={testimonial.text2}/>
                    </div>
                    <div>
                        <img src={Ong5} alt="hình"/>
                    </div>
                    <div className="product-others">
                        XEM THỬ CÁC SẢN PHẨM KHÁC NHÉ
                    </div>
                    <div className="product-slider">
                        <MultipleSlider />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Product;